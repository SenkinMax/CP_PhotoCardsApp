import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(
      'https://fakerapi.it/api/v1/custom?_quantity=8' +
      '&firstName=firstName' +
      '&lastName=lastName' +
      '&date=date' +
      '&liveState=state' +
      '&phoneNumber=phone' +
      '&card_type=card_type' +
      '&card_number=card_number' +
      '&imagePhoto=image'
    )
  }
}
