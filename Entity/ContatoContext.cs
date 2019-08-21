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
            modelBuilder.Entity<Email>()
                .HasOne(p => p.Contato)
                .WithMany(b => b.Emails);
            modelBuilder.Entity<Telefone>()
                .HasOne(p => p.Contato)
                .WithMany(b => b.Telefones);
        }

        public DbSet<Contato> Contatos {get;set;}
        public DbSet<Email> Emails {get;set;}
        public DbSet<Telefone> Telefones {get;set;}
    }
}
