import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CreditCardDashboard';
  sidebarOpen = true
  togglesidebar(){
    this.sidebarOpen = this.sidebarOpen? false : true;
  }
  

}
