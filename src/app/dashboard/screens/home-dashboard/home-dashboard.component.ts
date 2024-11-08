import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent {

  showNavBar:boolean = true
  showVoiceBotChat:boolean = false


  enableVoiceBotChat(){
    this.showVoiceBotChat = true
  }

  closeVoiceBotchat(){
    this.showVoiceBotChat = false
  }

}
