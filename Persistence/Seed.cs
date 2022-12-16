using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    Title = "10 Reasons Why You Should Start Blogging Today",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Content = "Blogging is a great way to express yourself, share your ideas, and reach out to a larger audience.",
                    Category = "Blogging",
                },
                new Post
                {
                    Title = "How to Use Instagram to Promote Your Blog",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Content = "A guide to using Instagram to grow your blog following and increase engagement.",
                    Category = "SocialMedia",
                },
                new Post
                {
                    Title = "5 Reasons Why Blogging Is Good For Your Career",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Content = "Blogging can help you build your personal brand, gain industry knowledge, and more.",
                    Category = "Career",
                },
                new Post
                {
                    Title = "A Beginner’s Guide to Domain Name Registration",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Content = "A step-by-step guide to registering a domain name for your blog.",
                    Category = "Blogging",
                },
                new Post
                {
                    Title = "How to Create a Professional Blogging Schedule",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Content = "Tips for creating a consistent and achievable blogging schedule.",
                    Category = "Blogging",
                },
                new Post
                {
                    Title = "10 Must-Read Books for Aspiring Writers",
                    Date = DateTime.UtcNow.AddMonths(4),
                    Content = "A list of recommended books on writing, storytelling, and creativity, including classics and contemporary works.",
                    Category = "Career",
                },
                new Post
                {
                    Title = "The Benefits of Meditation for Mental Health",
                    Date = DateTime.UtcNow.AddMonths(5),
                    Content = "A discussion of the mental health benefits of meditation, including reduced stress, improved focus, and increased self-awareness.",
                    Category = "Health",
                },
                new Post
                {
                    Title = "How to Create a Beautiful and Sustainable Garden",
                    Date = DateTime.UtcNow.AddMonths(6),
                    Content = "Tips for designing and maintaining a healthy and eco-friendly garden, including plant selection, composting, and water conservation.",
                    Category = "Lifestyle",
                },
                new Post
                {
                    Title = "The Benefits of Learning a Foreign Language",
                    Date = DateTime.UtcNow.AddMonths(7),
                    Content = "The cognitive and social benefits of learning a new language, including increased brain function and improved communication skills.",
                    Category = "Lifestyle",
                },
                new Post
                {
                    Title = "The Importance of Self-Care for Mental Health",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Content = "The role of self-care in maintaining good mental health, including techniques for managing stress, practicing mindfulness, and seeking support.",
                    Category = "Health",
                }
            };

            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();
        }
    }
}