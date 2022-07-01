import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Response_IndexData } from 'src/app/share/struc';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getIndexData();
  }
  public response_getIndexData = new Response_IndexData();
  getIndexData() {
    let url = "assets/json/getWin88.json";
    // let url = 'https://news.owin.info/getWin88.json';
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      })
    }
    this.http.get<Response_IndexData>(url, httpOption).subscribe({
      next: (res) => {
        this.response_getIndexData = res;
        console.log(this.response_getIndexData.marquee[0])
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}

