using System.ComponentModel.DataAnnotations;

namespace loginpageapi.Models
{
    public class Login
    {
        public string Username { get; set; }
        public string Password { get; set; }

    }
    public class SignUp
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
    }
}
