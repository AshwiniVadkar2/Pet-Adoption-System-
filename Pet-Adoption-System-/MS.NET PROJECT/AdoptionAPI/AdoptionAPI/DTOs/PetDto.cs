using Microsoft.AspNetCore.Http;

namespace AdoptionAPI.DTOs
{
    public class PetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int OwnerId { get; set; }
        public string Location { get; set; }
    }


    public class CreatePetDto
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }

        // IMPORTANT: use IFormFile instead of string
        public IFormFile Image { get; set; }
    }
}
