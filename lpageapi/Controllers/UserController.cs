using loginpageapi.Context;
using loginpageapi.Models;
using System.Text.RegularExpressions;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace loginpageapi.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _authContext;
        public UserController(AppDbContext appDbContext)
        {
            _authContext = appDbContext;
        }
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] Login loginobj)
        {
            if (loginobj == null)
            {
                return BadRequest();
            }
            else
            {
                var user = await _authContext.Users.FirstOrDefaultAsync(x => x.Username == loginobj.Username && x.Password == loginobj.Password);
                if (user == null)
                {
                    return NotFound(new { Message = "User Not Found!" });
                }
                else
                {
                    return Ok(new { Message = "Login Success!" });
                }
            }
            
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] SignUp userobj)
        {
            if (userobj == null)
                return BadRequest();

            await _authContext.Users.AddAsync(userobj);
            await _authContext.SaveChangesAsync();
            return Ok(new { Message = "user registered!" });
                                            

        }
    }
}
