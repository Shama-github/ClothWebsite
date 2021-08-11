using clothwebapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace clothwebapi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ClothController : ControllerBase
    {
        private readonly ClothDbContext context;
        public ClothController(ClothDbContext context)
        {
            this.context = context;
        }
        // GET: api/<ClothController>
        [HttpGet]
        public IEnumerable<Cloth> Get()
        {
            return context.Cloths.ToList();
        }
        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public Cloth Get(int id)
        {
            return context.Cloths.Find(id);
        }
        [HttpPost]
        public Cloth Post([FromBody] Cloth cloth)
        {

            context.Cloths.Add(cloth);
            context.SaveChanges();
            return cloth;
        }
        [HttpPut("{id}")]
        public Cloth Put(int id, [FromBody] Cloth cloth)
        {
            if (id == cloth.CID)
            
             context.Cloths.Update(cloth);

            context.SaveChanges();

            return cloth;
        }
        [HttpDelete("{id}")]
        public Cloth Delete(int id)
        {
            Cloth data = context.Cloths.Find(id);
            context.Cloths.Remove(data);
            context.SaveChanges();
            return data;
            
        }

    }
}
