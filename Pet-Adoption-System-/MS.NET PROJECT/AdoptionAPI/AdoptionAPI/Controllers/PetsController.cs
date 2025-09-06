using AdoptionAPI.Data;
using AdoptionAPI.DTOs;
using AdoptionAPI.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace AdoptionAPI.Controllers
{
    [Authorize(Roles = "user,admin")]
   // [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class PetsController : ControllerBase
    {
        private readonly Cloudinary _cloudinary;
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public PetsController(Cloudinary cloudinary, AppDbContext context, IMapper mapper)
        {
            _cloudinary = cloudinary;
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PetDto>>> GetPets() =>
            Ok(_mapper.Map<IEnumerable<PetDto>>(await _context.Pets.ToListAsync()));

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> AddPet([FromForm] CreatePetDto1 dto)
        {
            try
            {
                var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
                string imageUrl = null;

                if (dto.Image != null && dto.Image.Length > 0)
                {
                    var uploadParams = new ImageUploadParams
                    {
                        File = new FileDescription(dto.Image.FileName, dto.Image.OpenReadStream()),
                        Transformation = new Transformation().Crop("limit").Width(800).Height(800)
                    };

                    var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                    if (uploadResult.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        imageUrl = uploadResult.SecureUrl.ToString();
                    }
                    else
                    {
                        return BadRequest("Image upload failed.");
                    }
                }

                var pet = new Pet
                {
                    Name = dto.Name,
                    Breed = dto.Breed,
                    Age = dto.Age,
                    Gender = dto.Gender,
                    HealthInfo = dto.HealthInfo,
                    Location = dto.Location,
                    Image = imageUrl,
                    OwnerId = userId
                };

                _context.Pets.Add(pet);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Pet added successfully", pet });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Unhandled Exception: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPet(int id, CreatePetDto1 dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var pet = await _context.Pets.FindAsync(id);
            if (pet == null || pet.OwnerId != userId) return Forbid();
            _mapper.Map(dto, pet);
            await _context.SaveChangesAsync();
            return Ok(_mapper.Map<PetDto>(pet));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PetDto>> GetPetById(int id)
        {
            var pet = await _context.Pets.FindAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            var petDto = _mapper.Map<PetDto>(pet);
            return Ok(petDto);
        }

       

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePet(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var pet = await _context.Pets.FindAsync(id);
            if (pet == null || pet.OwnerId != userId) return Forbid();
            _context.Pets.Remove(pet);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
} 