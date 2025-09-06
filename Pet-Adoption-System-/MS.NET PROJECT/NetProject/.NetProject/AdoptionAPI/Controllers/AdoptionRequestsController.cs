using AdoptionAPI.Data;
using AdoptionAPI.DTOs;
using AdoptionAPI.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace AdoptionAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdoptionRequestsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        public AdoptionRequestsController(AppDbContext context, IMapper mapper) { _context = context; _mapper = mapper; }

        [Authorize(Roles = "user")]
        [HttpPost]
        public async Task<IActionResult> RequestAdoption(CreateAdoptionRequestDto dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var pet = await _context.Pets.FindAsync(dto.PetId);
            if (pet == null || pet.OwnerId == userId) return BadRequest("Invalid pet or owner");
            var request = new AdoptionRequest { PetId = dto.PetId, AdopterId = userId, Status = "Pending" };
            _context.AdoptionRequests.Add(request);
            await _context.SaveChangesAsync();
            return Ok(_mapper.Map<AdoptionRequestDto>(request));
        }

        [Authorize(Roles = "user")]
        [HttpPut("{id}/status")]
        public async Task<IActionResult> UpdateStatus(int id, UpdateAdoptionRequestDto dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var request = await _context.AdoptionRequests.Include(a => a.Pet).FirstOrDefaultAsync(a => a.Id == id);
            if (request == null || request.Pet.OwnerId != userId) return Forbid();
            request.Status = dto.Status;
            await _context.SaveChangesAsync();
            return Ok(_mapper.Map<AdoptionRequestDto>(request));
        }

        [Authorize]
        [HttpGet("pet/{petId}")]
        public async Task<IActionResult> GetRequestsForPet(int petId)
        {
            var requests = await _context.AdoptionRequests.Where(a => a.PetId == petId).ToListAsync();
            return Ok(_mapper.Map<IEnumerable<AdoptionRequestDto>>(requests));
        }
    }
} 