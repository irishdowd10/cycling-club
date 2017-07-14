import { Component, OnInit } from '@angular/core';
import { Profile }  from '../profile.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  profiles: Profile[] = [
    new Profile("Eddy Merckx", "Road","eddy@gmail.com",1),
    new Profile("Hans Rey", "Mountain","hans@gmail.com",2),
    new Profile("Eric De Vlaeminck", "Cyclocross","eddy@gmail.com",3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
