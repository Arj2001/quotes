import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putQuotesData()
   }

  putQuotesData = () =>{
    this.myApi.getQuotesData().subscribe(
      (data) => {
        this.quotesData = data
      }
    )
  }

  quotesData:any = []

  ngOnInit(): void {
  }

}
