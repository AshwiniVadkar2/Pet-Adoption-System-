using AdoptionAPI.Data;
using AdoptionAPI.DTOs;
using AdoptionAPI.Models;
using AdoptionAPI.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdoptionAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TokenService _tokenService;
        private readonly IMapper _mapper;
        public AuthController(AppDbContext context, TokenService tokenService, IMapper mapper)
        {
            _context = context; _tokenService = tokenService; _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("Email already exists");

            if (string.IsNullOrEmpty(dto.Password))
                return BadRequest("Password is required.");

            var user = _mapper.Map<User>(dto);
            user.PasswordHash = PasswordHelper.HashPassword(dto.Password);
            user.Role = "user";
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(_mapper.Map<UserDto>(user));
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null || !PasswordHelper.VerifyPassword(dto.Password, user.PasswordHash))
                return Unauthorized("Invalid credentials");
            var token = _tokenService.CreateToken(user);
            return Ok(new { token, user = _mapper.Map<UserDto>(user) });
        }
    }
} 