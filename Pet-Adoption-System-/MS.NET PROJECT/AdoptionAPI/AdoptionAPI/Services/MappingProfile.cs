using AutoMapper;
using AdoptionAPI.Models;
using AdoptionAPI.DTOs;

namespace AdoptionAPI.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<Pet, PetDto>();
            CreateMap<AdoptionRequest, AdoptionRequestDto>();
            CreateMap<CreatePetDto, Pet>();
            CreateMap<RegisterDto, User>();
        }
    }
} 