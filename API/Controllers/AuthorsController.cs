using Domain;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AuthorsController : BaseApiController
    {
        private readonly DataContext _context;
        public AuthorsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] // GET /api/authors/GetAuthors
        public async Task<ActionResult<List<Author>>> GetAuthors()
        {
            return await _context.Authors.ToListAsync();
        }

        [HttpGet] // GET /api/authors/GetAuthor/{id}
        public async Task<ActionResult<Author>> GetAuthor(long id)
        {
            return await _context.Authors.FindAsync(id);
        }


        [HttpPost]  // POST: api/authors/PostAuthor
        public async Task<ActionResult<Author>> PostAuthor(Author author)
        {
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuthor", new { id = author.AuthorId }, author);
        }

    }
}