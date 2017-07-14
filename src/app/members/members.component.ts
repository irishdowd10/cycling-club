import { Component, OnInit } from '@angular/core';
import { Profile }  from '../profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  constructor(private router: Router){}

  profiles: Profile[] = [
    new Profile("Eddy Merckx", "Road","eddy@gmail.com",1),
    new Profile("Hans Rey", "Mountain","hans@gmail.com",2),
    new Profile("Eric De Vlaeminck", "Cyclocross","eddy@gmail.com",3)
  ];

  ngOnInit() {
  }

  goToDetailPage(clickedProfile: Profile) {
    this.router.navigate(['profiles', clickedProfile.id]);
};

}
