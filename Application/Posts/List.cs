using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Posts
{
    public class List
    {
        public class Query : IRequest<List<Post>> {}

        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Posts.ToListAsync();
            }
        }
    }
}