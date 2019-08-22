using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaDeContatos.Models
{
    public class Email
    {
        [Key]
        public int EmailId { get; set; }

        public string Endereco { get; set; }
        public int ContatoId { get; set; }
    }
}
