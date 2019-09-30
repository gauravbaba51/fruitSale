import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sharetable',
  templateUrl: './sharetable.component.html',
  styleUrls: ['./sharetable.component.scss'],
})
export class SharetableComponent implements OnInit {

  @Input() public tableData = [];
  @Input() public tableheader=[];
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
    console.log(this.tableData)
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
