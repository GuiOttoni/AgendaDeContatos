using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaDeContatos.Models
{
    public class Contato
    {
        [Key]
        public int ContatoId { get; set; }
        public string Name { get; set; }
        public List<Email> Emails { get; set; }
        public List<Telefone> Telefones { get; set; }
    }
}
