import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  @Input() public tableData = [];
  @Input() public tableheader=['Sr. No.', 'Company Name', 'User Name', 'Collaboration Date', 'Mobile', 'Email', 'No. of Events', 'No. of Tickets Sold', 'Area'];
  @Input() public actualData;
  // tabledata = [];
  
  pageno: any;
  

  constructor() {
    // this.allNews();
    
  }
  ngOnInit() {
    this.allNews();
    this.pageno = 1;

  }



  allNews() {
    console.log(this.tableheader)
    // this.tableheader=this.tableheader
  //   this.tabledata = [
  //     {
  //         name: "AiA",
  //         code: "AI101",
  //         limit: 25000,
  //         account: "Life Insurance"
  //     },
  //     {
  //         name: "Cargills",
  //         code: "CF001",
  //         limit: 30000,
  //         account: "Food City"
  //     }
  // ]

    // return this.searchService.getAllNews(this.pageno).subscribe(
    //     (res) => {
    //       let posts = res.data;
    //       for (let post of posts) {
    //         console.log(post);
    //         this.allNewsVar.push(post);
    //       }
    //     },
    //     (err) => {
    //       console.log(err);
    //     },
    //     () => console.log('done!')
    // );
  }


  doInfinite(infiniteScroll) {
    console.log('done!');
    let nextPageUrl = this.pageno++;
    console.log("next page:" + nextPageUrl);
    // this.searchService.getAllNews(nextPageUrl).subscribe(
    //         data => {
    //       let posts=data.data;
    //       for(let post of posts){
    //          console.log(post);
    //         this.allNewsVar.push(post);
    //       }
    //     },
    //     err => {
    //   console.log(err);
    // },
    //     () => console.log('Next Page Loading completed')
    // );
    // infiniteScroll.complete();
  }
}
