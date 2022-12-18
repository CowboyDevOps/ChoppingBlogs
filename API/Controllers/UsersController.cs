using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] // GET /api/users/GetUsers
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet] // GET /api/users/GetUser/{id}
        public async Task<ActionResult<User>> GetUser(long id)
        {
            return await _context.Users.FindAsync(id);
        }

        [HttpGet]  // POST: api/users/PostSampleUser
        public List<User> PostSampleUser(User user)
        {
            List<User> usersList = new List<User>();
            User sampUser = new User();
            sampUser.Name = "John Doe";
            sampUser.UserName = "jdoe";
            sampUser.Email = "jdoe@gmail.com";
            sampUser.Password = "asldkfjlsaf0w93ur502423";
            usersList.Add(sampUser);


            return usersList;
        }
        [HttpPost]  // POST: api/users/PostUser
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

    }
}