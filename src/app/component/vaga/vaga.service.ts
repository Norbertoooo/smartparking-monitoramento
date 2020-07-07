import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VagaModel} from './vaga.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private http: HttpClient) { }

  listarVagas(): Observable<VagaModel[]> {
    const url = `${environment.url}/vagas`;
    return this.http.get<VagaModel[]>(url);
  }

  listarStatus(): Observable<VagaModel[]> {
    const url = `${environment.url}/vagas/status`;
    return this.http.get<VagaModel[]>(url);
  }
}
