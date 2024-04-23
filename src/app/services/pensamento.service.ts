import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly apiUrl = 'http://localhost:5161/api/v1/pensamento';

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    console.log(this.http.get<Pensamento[]>(this.apiUrl))
    return this.http.get<Pensamento[]>(this.apiUrl)
  }


  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.apiUrl, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.apiUrl}/${pensamento.id}`, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.apiUrl}/${id}`);
  }


}