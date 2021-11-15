import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImage() {
    return this.http.get(
      "https://fakerapi.it/api/v1/images?_quantity=8" +
      "&_type=kittens"
    )
  }
}
