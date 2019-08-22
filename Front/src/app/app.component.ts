import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service'
import { Contato } from 'src/models/contato';
import { Email } from 'src/models/email';
import { Telefone } from 'src/models/telefone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contatoService: ContatoService;
  contatos: Contato[];

  contato: Contato;
  email: Email;
  telefone: Telefone;

  telefoneAdicional: string;
  emailAdicional:string;

  contatoSelecionado: Contato;

  constructor(_contatoService: ContatoService){
    this.contatoService = _contatoService;
  }

  ngOnInit(){
    this.contatos = new Array<Contato>();
    this.limpaModels();
    this.contatoService.setContatos();
  }

  limpaModels(){
    this.contato = new Contato();
    this.contato.emails = new Array<Email>();
    this.contato.telefones = new Array<Telefone>();
    this.contatoSelecionado = new Contato();
    this.email = new Email();
    this.telefone = new Telefone();
    this.telefoneAdicional = "";
    this.emailAdicional = "";
  }

  cadastrar(){
    this.contato.emails.push(this.email);
    this.contato.telefones.push(this.telefone);
    this.contatoService.postContato(this.contato);
    this.limpaModels();
  }

  removerContato(){
    this.contatoService.deleteContato(this.contatoSelecionado);
    this.limpaModels();
  }

  removerTelefone(id:number){
    this.contatoSelecionado.telefones.splice(this.contatoSelecionado.telefones.findIndex(x => x.telefoneId == id),1);
    this.contatoService.putContato(this.contatoSelecionado);
    this.limpaModels();
  }

  removerEmail(id:number){
    this.contatoSelecionado.emails.splice(this.contatoSelecionado.emails.findIndex(x => x.emailId == id), 1);
    this.contatoService.putContato(this.contatoSelecionado);
    this.limpaModels();
  }

  addTelefone(){
    var x = new Telefone();
    x.numero = this.telefoneAdicional;
    this.contatoSelecionado.telefones.push(x);
    this.contatoService.putContato(this.contatoSelecionado);
    this.limpaModels();
  }

  addEmail(){
    var x = new Email();
    x.endereco = this.emailAdicional;
    this.contatoSelecionado.emails.push(x);
    this.contatoService.putContato(this.contatoSelecionado);
    this.limpaModels();
  }
}
