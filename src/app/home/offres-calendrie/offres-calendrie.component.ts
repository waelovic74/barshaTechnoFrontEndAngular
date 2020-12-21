import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offre} from '../../_models/Offre';
import {OffresService} from '../../_services/offres.service';
import * as moment from 'moment';
@Component({
  selector: 'app-offres-calendrie',
  templateUrl: './offres-calendrie.component.html',
  styleUrls: ['./offres-calendrie.component.css']
})
export class OffresCalendrieComponent implements OnInit {

  @Input() offres: Offre [];
  @Output() offresChange: EventEmitter<Offre []> = new EventEmitter();
  dateDeb: string;
  dateFin: string;

  constructor(private offresService: OffresService) { }

  ngOnInit(): void {
  }

  filterListOffer(){
    let dateDeb = moment(this.dateDeb, "yyyy-MM-D HH:mm:sZ").toISOString();
    let dateFin = moment(this.dateFin, "yyyy-MM-D HH:mm:sZ").toISOString();
    console.log(dateDeb)
    this.offresService.getOffresListByDate(dateDeb, dateFin).subscribe(offres =>{
      this.offres = offres;
      this.offresChange.emit(this.offres);
    });
  }

  filterListOfferreset() {
    this.offresService.getOffresList().subscribe(offres =>{
      this.offres = offres;
      this.offresChange.emit(this.offres);
    });
  }
}
