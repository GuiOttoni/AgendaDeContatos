using AgendaDeContatos.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaDeContatos.Entity
{
    public class ContatoContext : DbContext
    {
        public ContatoContext(DbContextOptions<ContatoContext> options)
        : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Telefone>().HasOne<Contato>().WithMany().HasForeignKey(p => p.ContatoId);
            modelBuilder.Entity<Email>().HasOne<Contato>().WithMany().HasForeignKey(p => p.ContatoId);

            modelBuilder.Entity<Contato>(e => { e.HasKey(x => x.ContatoId); });
            modelBuilder.Entity<Email>(e => { e.HasKey(x => x.EmailId); });
            modelBuilder.Entity<Telefone>(e => { e.HasKey(x => x.TelefoneId); });
        }

        public DbSet<Contato> Contatos {get;set;}
        public DbSet<Email> Emails {get;set;}
        public DbSet<Telefone> Telefones {get;set;}
    }
}
