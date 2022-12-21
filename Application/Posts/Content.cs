using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Posts
{
    public class Content
    {
        public class Query : IRequest<Post>
        {
            public Guid Id { get; set; }
        }    

        public class Handler : IRequestHandler<Query, Post>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Post> Handle(Query request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.Id);

                return post;
            }
        }
    }
}