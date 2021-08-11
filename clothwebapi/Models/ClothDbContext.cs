using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace clothwebapi.Models
{
    public class ClothDbContext:DbContext
    {
        public ClothDbContext(DbContextOptions<ClothDbContext> options) : base(options)
        {

        }
        public DbSet<Cloth> Cloths { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
           
        }
    }

}

