using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using jangidcafeapi.Data;
using jangidcafeapi.Models;
using Microsoft.AspNetCore.Cors;

namespace jangidcafeapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class ContactsController : Controller
    {
        private readonly AppDbContext _context;

        public ContactsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/contacts
        [HttpGet]
        [EnableCors("_myAllowSpecificOrigins")]
        [Produces("application/json")]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            if (_context.contacts == null)
            {
                return NotFound();
            }
            return await _context.contacts.ToListAsync();
        }

        // GET: api/contacts/5
        [HttpGet("{id}")]
        [EnableCors("_myAllowSpecificOrigins")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            if (_context.contacts == null)
            {
                return NotFound();
            }
            var contact = await _context.contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contacts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [EnableCors("_myAllowSpecificOrigins")]
        public async Task<IActionResult> PutCustomer(int id, Contact contact)
        {
            if (id != contact.Id)
            {
                return BadRequest();
            }

            _context.Entry(contact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contacts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [EnableCors("_myAllowSpecificOrigins")]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            if (_context.contacts == null)
            {       
                return Problem("Entity set 'AppDbContext.Contacts'  is null.");
            }
            _context.contacts.Add(contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        [EnableCors("_myAllowSpecificOrigins")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            if (_context.contacts == null)
            {
                return NotFound();
            }
            var contact= await _context.contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _context.contacts.Remove(contact);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactExists(int id)
        {
            return (_context.contacts?.Any(e => e.Id == id)).GetValueOrDefault();
        }







    }
}
