using Application.Posts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PostsController : BaseApiController
    {
        private readonly IMediator _mediator;
        public PostsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet] // GET /api/posts
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] // GET /api/posts/{id}
        public async Task<ActionResult<Post>> GetPost(Guid id)
        {
            return Ok();
        }
    }
}