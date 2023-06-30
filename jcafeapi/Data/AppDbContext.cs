using jangidcafeapi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace jangidcafeapi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Contact> contacts { get; set; }
    }
}
