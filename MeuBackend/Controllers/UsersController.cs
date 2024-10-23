using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeuBackend.Models; // Importação correta do namespace
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MeuBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync(); // Obtendo a lista de usuários
            return Ok(users); // Retornando a lista como resultado
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUser([FromBody] Usuario usuario) // Usando a classe Usuario
        {
            if (usuario == null) // Verifique se o usuário não é nulo
            {
                return BadRequest("Usuário não pode ser nulo.");
            }

            _context.Users.Add(usuario); // Adicionando o usuário ao contexto
            await _context.SaveChangesAsync(); // Salvando as alterações

            return CreatedAtAction(nameof(GetUsers), new { id = usuario.Id }, usuario); // Retornando o usuário criado
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CursosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/cursos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso>>> GetCursos()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/cursos/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Curso>> GetCurso(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);

            if (curso == null)
            {
                return NotFound();
            }

            return curso;
        }
    }
}
