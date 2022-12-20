using Application.Posts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PostsController : BaseApiController
    {
        
        [HttpGet] // GET /api/posts
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            return await Mediator.Send(new List.Query());
        }
        [Authorize]
        [HttpGet("{id}")] // GET /api/posts/{id}
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            return await Mediator.Send(new Content.Query { Id = id });
        }

        [HttpPost] // POST /api/posts
        public async Task<IActionResult> CreatePost(Post post)
        {
            return Ok(await Mediator.Send(new Create.Command { Post = post }));
        }

        [HttpPut("{id}")] // PUT /api/posts/{id}
        public async Task<IActionResult> EditPost(Guid id, Post post)
        {
            post.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Post = post }));
        }
    }
}