import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-model',
  templateUrl: './iframe-model.component.html',
  styleUrls: ['./iframe-model.component.scss'],
})
export class IframeModelComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @ViewChild('iframeElement', { static: true }) iframe!: ElementRef; // Reference to iframe

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  private hasLoaded: boolean = false;
  private titles: string[] = [];

  constructor(private http: HttpClient) {
    console.log('IframeModelComponent constructor');
  }

  ngOnInit() {
    console.log('IframeModelComponent initialized');
  }

  ngOnChanges(): void {
    if (this.isVisible && !this.hasLoaded) {
      this.fetchtitles();
    } else if (this.isVisible) {
      this.displaytitles();
    }
  }

  private fetchtitles(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.titles = data.map((item) => item.title);
        this.displaytitles();
        this.hasLoaded = true;
      },
      (error) => console.error('Error fetching data:', error)
    );
  }

  private displaytitles(): void {
    const iframeDoc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 10px; }
            h1 { color: #333; }
            ul { padding-left: 20px; }
            li { margin: 5px 0; }
          </style>
        </head>
        <body>
          <h1>Fruit List</h1>
          <ul>
            ${this.titles.map((name) => `<li>${name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
    iframeDoc.close();
  }

  onClose(): void {
    this.closeModal.emit(); // Notify parent to close modal
  }
}
