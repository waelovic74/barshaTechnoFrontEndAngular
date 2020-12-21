import { Component, OnInit } from '@angular/core';
import {OffresService} from '../../_services/offres.service';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  constructor(private offresService: OffresService, private router: Router) { }

  ngOnInit(): void {
  }



  createOffre(myform: any) {
    myform.value.offreDateV= moment(myform.value.offreDateV, "yyyy-MM-D HH:mm:sZ").toISOString();
   this.offresService.createOffre(myform).subscribe(
      response => {
        console.log(response);
      }
    );
    this.router.navigate(['home']);
  }
}
