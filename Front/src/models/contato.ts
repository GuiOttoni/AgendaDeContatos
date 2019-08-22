import { Email } from './email';
import { Telefone } from './telefone';

export class Contato
{
   contatoId: number;
   name: string;
   emails: Email[];
   telefones: Telefone[];
}