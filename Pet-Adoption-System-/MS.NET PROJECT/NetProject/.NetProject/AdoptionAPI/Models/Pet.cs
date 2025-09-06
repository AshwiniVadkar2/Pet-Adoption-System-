namespace AdoptionAPI.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string HealthInfo { get; set; }
        public string Location { get; set; }
        public string Image { get; set; } // Stores Cloudinary URL
        public int OwnerId { get; set; }
        public User Owner { get; set; }
        public ICollection<AdoptionRequest> AdoptionRequests { get; set; }
    }
} 