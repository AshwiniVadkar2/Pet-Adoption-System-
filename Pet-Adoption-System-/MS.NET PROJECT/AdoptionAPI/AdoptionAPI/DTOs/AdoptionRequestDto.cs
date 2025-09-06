namespace AdoptionAPI.DTOs
{
    public class AdoptionRequestDto
    {
        public int Id { get; set; }
        public int PetId { get; set; }
        public int AdopterId { get; set; }
        public string Status { get; set; }
    }

    public class CreateAdoptionRequestDto
    {
        public int PetId { get; set; }
    }

    public class UpdateAdoptionRequestDto
    {
        public int Id { get; set; }
        public string Status { get; set; }
    }
}
