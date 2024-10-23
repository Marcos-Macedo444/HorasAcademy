using Microsoft.EntityFrameworkCore;

namespace MeuBackend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSet para a tabela de usuários
        public DbSet<Usuario> Users { get; set; }
        public DbSet<Curso> Cursos { get; set; }
    }

    // Modelo Usuario
    public class Usuario
    {
        public int Id { get; set; }
        
        // Tornando as propriedades anuláveis
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Senha { get; set; }
    }

    public class Curso
    {
        public int id_curso { get; set; }
        public string nome_curso { get; set; }
        public int horas { get; set; }
    }
}
