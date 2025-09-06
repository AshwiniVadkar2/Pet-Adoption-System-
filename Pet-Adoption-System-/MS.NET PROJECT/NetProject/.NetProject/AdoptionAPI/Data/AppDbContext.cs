using Microsoft.EntityFrameworkCore;
using AdoptionAPI.Models;

namespace AdoptionAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<AdoptionRequest> AdoptionRequests { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();
            modelBuilder.Entity<User>().HasMany(u => u.Pets).WithOne(p => p.Owner).HasForeignKey(p => p.OwnerId);
            modelBuilder.Entity<Pet>().HasMany(p => p.AdoptionRequests).WithOne(a => a.Pet).HasForeignKey(a => a.PetId).OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<AdoptionRequest>().HasOne(a => a.Adopter).WithMany().HasForeignKey(a => a.AdopterId).OnDelete(DeleteBehavior.Restrict);
        }
    }
} 