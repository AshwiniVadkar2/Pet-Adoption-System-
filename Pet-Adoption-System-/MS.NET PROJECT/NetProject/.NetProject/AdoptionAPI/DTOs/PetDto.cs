using Microsoft.AspNetCore.Http;

namespace AdoptionAPI.DTOs
{
    public class PetDto
    {
        public int Id;
        public string Name;
        public string Type;
        public string Description;
        public string Image;
        public int OwnerId;
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
