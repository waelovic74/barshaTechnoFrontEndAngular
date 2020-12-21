import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, share} from 'rxjs/operators';
import {Offre} from '../_models/Offre';

const API_URL = 'https://barshaspringboot123.herokuapp.com/api/offres/';

@Injectable({
  providedIn: 'root'
})
export class OffresService {
  offre: any;
  constructor(private http: HttpClient) { }
/*

  getOffresList(): Observable<Offre | > {
    return this.http.get(API_URL + 'list', { responseType: 'text' });
  }
*/


  getOffresList(): Observable<Offre[]> {
    const url = API_URL + 'list';
    // API call
    return this.http.get(url)
      .pipe(
        map((response: Offre[]) => {
          return response;
        }),
        share(),
        /*catchError(error => {console.log(error)})*/
      );
  }

  getOffresListByDate(dateDb: string, dateFin: string): Observable<Offre[]> {
    const url = API_URL + `list/${dateDb}/${dateFin}`;
    // API call
    return this.http.get(url)
      .pipe(
        map((response: Offre[]) => {
          return response;
        }),
        share(),
        /*catchError(error => {console.log(error)})*/
      );
  }

  createOffre(myform:any) {
    const url = API_URL ;
    this.offre = {
      'titre': myform.value.offreTitre,
      'prix': myform.value.offrePrix,
      'image': myform.value.offreImage,
      'dateValidite': myform.value.offreDateV
    }
    return this.http.post(url + 'add', this.offre);
  }

}
