import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  myapi: any;
  constructor(private myhttp: HttpClient) {
  }

  ngOnInit(): void {

    this.myhttp.get('https://reqres.in/api/users/2').subscribe(
      (data) => { this.myapi = data }
    )
  };
}


