namespace AdoptionAPI.Models
{
    public class RegisterRequest
    {
        public string Name { get; set; }      // First + Last name combined
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
