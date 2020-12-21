import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Offre} from '../_models/Offre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  offres: Offre [] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  offresChangeEvt($event: Offre[]) {
    this.offres = $event;
  }
}
