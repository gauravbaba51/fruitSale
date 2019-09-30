import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 tab: any= ['Sr. No.', 'Company Name', 'User Name', 'Collaboration Date', 'Mobile', 'Email', 'No. of Events', 'No. of Tickets Sold', 'Area'];
 
  // public tabledata: Array<any>= [
  //       {
  //           name: "AiA",
  //           code: "AI101",
  //           limit: 25000,
  //           account: "Life Insurance"
  //       },
  //       {
  //           name: "Cargills",
  //           code: "CF001",
  //           limit: 30000,
  //           account: "Food City"
  //       }
  //   ]
  
  constructor() {
    this.tab=['Sr. No.', 'Company Name', 'User Name', 'Collaboration Date', 'Mobile', 'Email', 'No. of Events', 'No. of Tickets Sold', 'Area']
  }

}
