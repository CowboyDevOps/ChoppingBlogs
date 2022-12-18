using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Author
    {
        [Key]
        public long AuthorId { get; set; }

        public string Name { get; set; }
        public string UserName { get; set; }
        public long UserId { get; set; }
    }
}
