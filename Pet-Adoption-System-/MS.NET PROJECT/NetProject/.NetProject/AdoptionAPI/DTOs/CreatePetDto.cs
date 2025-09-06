using Microsoft.AspNetCore.Http;

namespace AdoptionAPI.DTOs
{
    public class CreatePetDto1
    {
        public string Name { get; set; }
        public string Breed { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string HealthInfo { get; set; }
        public string Location { get; set; }
        public IFormFile? Image { get; set; } // For file upload
    }
} 