import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voicebot',
  templateUrl: './voicebot.component.html',
  styleUrls: ['./voicebot.component.scss'],
})
export class VoicebotComponent {
  @Output() closeVoiceBot = new EventEmitter<void>();
  message: string = '';
  showMicIcon: boolean = false;
  recognition: any;
  isListening: boolean = false;
  transcript: string = '';

  constructor(private zone: NgZone, private router: Router) {
    // Step 2.1: Check for browser support
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      // Step 2.2: Initialize SpeechRecognition
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US'; // Set language
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      // Step 2.3: Handle speech recognition results
      this.recognition.onresult = (event: any) => {
        this.zone.run(() => {
          this.transcript = event.results[0][0].transcript;
          console.log('Recognized text:', this.transcript);
          // Process the recognized text (e.g., trigger commands)
          this.processCommand(this.transcript);
        });
      };

      // Step 2.4: Handle errors
      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event);
      };

      // Reset listening state on end
      this.recognition.onend = () => {
        this.isListening = false;
      };
    } else {
      console.error('SpeechRecognition not supported in this browser.');
    }
  }

  startListening() {
    if (!this.isListening) {
      this.isListening = true;
      this.recognition.start();
      this.showMicIcon = true;
    }
  }
  stopListening() {
    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      this.showMicIcon = false;
    }
    this.showMicIcon = false;
  }

  processCommand(transcript: string) {
    transcript = transcript.toLowerCase();
    this.message = transcript;
    switch (true) {
      case transcript.includes('dpe'):
        this.speak('Navigating to DPE...');
        this.router.navigate(['/dashboard/dpe']);
        this.message = 'Navigating to DPE';
        break;
      case transcript.includes('pgt'):
        this.speak('Navigating to PGT...');
        this.router.navigate(['/dashboard/pgt']);
        this.message = 'Navigating to PGT';
        break;
      case transcript.includes('stack enable'):
        this.speak('Navigating to stack enable...');
        this.router.navigate(['/dashboard/stack-enable']);
        this.message = 'Navigating to stack enable';
        break;
      case transcript.includes('seamless assist'):
        this.speak('Navigating to seamless assist...');
        this.router.navigate(['/dashboard/seamless-assist']);
        this.message = 'Navigating to stack semless assist';
        break;
      default:
        this.speak('Unrecognized command Moving to default page...');
        this.router.navigate(['/dashboard/dpe']);
        this.message = 'Unrecognized command Moving to default page';
    }
    this.showMicIcon = false;
  }

  speak(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  }

  closeVoiceBotChat() {
    this.closeVoiceBot.emit();
  }
}
