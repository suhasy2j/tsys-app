import { Component, OnInit } from '@angular/core';
import { BaseConfigService } from '../base-config.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private base: BaseConfigService) {
    let myaddress = this.base.getAddress();
    console.log(myaddress);
    let myname = this.base.getName();
    console.log(myname);
  }

  ngOnInit(): void {
  }

}
