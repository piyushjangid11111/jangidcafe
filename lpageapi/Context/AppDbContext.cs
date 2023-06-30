using loginpageapi.Models;
using Microsoft.EntityFrameworkCore;

namespace loginpageapi.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<SignUp> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<SignUp>().ToTable("users");
        }
    }
}
