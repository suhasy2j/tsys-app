import { Component, OnInit } from '@angular/core';
import { ElementConfigService } from 'src/app/element-config.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private user:ElementConfigService) { 
    
  }

  ngOnInit(): void {
  }

}
