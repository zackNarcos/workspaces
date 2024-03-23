import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http:HttpClient
  ) { }

  private URL_API:string = environment.api

  sendMail(mail: any){
    return this.http.post(`${this.URL_API}/mail`,mail)
  }
  subscribe(mail: any){
    return this.http.post(`${this.URL_API}/newsletter/subscribe`,mail)
  }
  unSubscribe(mail: any){
    return this.http.post(`${this.URL_API}/newsletter/unsubscribe`,mail)
  }

}
