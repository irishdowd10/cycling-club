import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProfileService]
})
export class AdminComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() { }

  submitForm(name: string, speciality: string, email: string) {
    var newProfile = new Profile(name, speciality, email);
    this.profileService.addProfile(newProfile);
  }
}
