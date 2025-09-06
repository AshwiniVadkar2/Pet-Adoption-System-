namespace AdoptionAPI.DTOs
{
    public class AdoptionRequestDto { public int Id; public int PetId; public int AdopterId; public string Status; }
    public class CreateAdoptionRequestDto { public int PetId; }
    public class UpdateAdoptionRequestDto { public int Id; public string Status; }
} 