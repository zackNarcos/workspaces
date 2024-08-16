import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http:HttpClient
  ) { }

  private URL_API:string = environment.api

  postProject(project: any){
    return this.http.post(`${this.URL_API}/admin/projects`,project)
  }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.URL_API}/admin/projects`);
  }

  getProjectsAnonyme():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.URL_API}/projects`);
  }

  getProject(id: number):Observable<Project>{
    return this.http.get<Project>(`${this.URL_API}/admin/projects/${id}`);
  }

  putProject(project: any, id: number) {
    console.log('project', project)
    return this.http.put(`${this.URL_API}/admin/projects/${id}`,project)
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.URL_API}/admin/projects/${id}`)
  }

}
