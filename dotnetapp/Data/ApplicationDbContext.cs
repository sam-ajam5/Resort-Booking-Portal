using System;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        // Define DbSets for each entity
        public DbSet<User>? Users { get; set; }
        public DbSet<Resort>? Resorts { get; set; }
        public DbSet<Booking>? Bookings { get; set; }
        public DbSet<Review>? Reviews { get; set; }
    }
}