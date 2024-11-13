using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using dotnetapp.Services;

namespace dotnetapp.Controllers
{
    [ApiController]
    //[Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
 
        public UserController(UserService userService)
        {
            _userService = userService;
        }
 
        // POST: api/User/Register
        [HttpPost("api/register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data");
            }
 
            var existingUser = await _userService.GetUserByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return Conflict("User already exists");
            }
 
            var registeredUser = await _userService.RegisterUserAsync(user);
            return Ok(new { Message = "Registration successful", UserId = registeredUser.UserId });
        }
 
        // POST: api/User/Login
        [HttpPost("api/login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid login request");
            }
 
            var user = await _userService.GetUserByEmailAsync(model.Email);
            if (user == null || user.Password != model.Password)
            {
                return Unauthorized("Invalid email or password");
            }
 
            try
            {
                var token = await _userService.GenerateJwtTokenAsync(user);
                return Ok(new {token});
            }
            catch (System.Exception)
            {
                return StatusCode(500, "Internal Server Error while generating token");
            }
        }
        // GET: api/User/{userId}
        [HttpGet("api/{userId}")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var user = await _userService.GetUserByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        } 

    }
}

