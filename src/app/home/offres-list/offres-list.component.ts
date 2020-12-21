import {Component, Input, OnInit} from '@angular/core';
import {OffresService} from '../../_services/offres.service';
import {Offre} from '../../_models/Offre';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.css']
})
export class OffreListComponent implements OnInit {

  @Input() offres: Offre [] = [];
  no_image : string = "./assets/no_image.png";

  constructor(private offresService: OffresService) { }

  ngOnInit(): void {
    this.offresService.getOffresList().subscribe(offres =>{
      this.offres = offres;
    });
  }



}
