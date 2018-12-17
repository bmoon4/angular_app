import { Position } from './position';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  url:string = "https://web422bmoon4.herokuapp.com/positions";

  constructor(private http:HttpClient) { }

  getPosition():Observable<Position[]>{
    return this.http.get<Position[]>(this.url);
  }
}
