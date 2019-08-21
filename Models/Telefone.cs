﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaDeContatos.Models
{
    public class Telefone
    {
        [Key]
        public int TelefoneId { get; set; }
        public string Numero { get; set; }
        public Contato Contato { get; set; }
    }
}
