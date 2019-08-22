import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, interval } from 'rxjs';
import { Contato } from 'src/models/contato';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, switchMap, tap, take } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos = new BehaviorSubject<Contato[]>(Array<Contato>());
  contatos$ = this.contatos.asObservable();

  private url = 'https://localhost:44328/api/';

  constructor(private http: HttpClient) { }

  private requestContatos() : Observable<Contato[]>
  {
    return this.http.get<Contato[]>(this.url + 'Contatos',httpOptions);
  }
  
  getContatos() : Contato[] {
    return this.contatos.getValue();
  }

  setContatos(){
    interval(5000).pipe(switchMap(() => this.requestContatos()), map(res => {this.contatos.next(res);})).subscribe();
  }

  postContato(contato: Contato) {
    this.http.post(this.url + 'Contatos',contato, httpOptions).subscribe();
  }

  putContato(contatoSelecionado: Contato) {
    this.http.put(this.url + `Contatos/${contatoSelecionado.contatoId}`,contatoSelecionado, httpOptions).subscribe();
  }

  deleteContato(contatoSelecionado: Contato) {
    this.http.delete(this.url + `Contatos/${contatoSelecionado.contatoId}`).subscribe();
  }

}
