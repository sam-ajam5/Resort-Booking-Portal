using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetapp.Services;
using dotnetapp.Exceptions;
using Microsoft.AspNetCore.Authorization;


namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResortController : ControllerBase
    {
        private readonly ResortService _resortService;
        private readonly BookingService _bookingService;

        public ResortController(ResortService resortService, BookingService bookingService)
        {
            _resortService = resortService;
            _bookingService = bookingService;

        }

        [HttpGet]
        [Authorize(Roles = "Admin,Customer")]
        public async Task<ActionResult<IEnumerable<Resort>>> GetAllResortsAsync()
        {
            return Ok(await _resortService.GetAllResortsAsync());
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin,Customer")]
        public async Task<ActionResult<Resort>> GetResortByIdAsync(long id)
        {
            var resort = await _resortService.GetResortByIdAsync(id);
            if (resort == null)
            {
                return NotFound();
            }
            return Ok(resort);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Resort>> AddResortAsync(Resort resort)
        {
            try
            {
                var createdResort = await _resortService.AddResortAsync(resort);
                //return CreatedAtAction(nameof(GetResortByIdAsync), new { id = createdResort.ResortId });
                return CreatedAtAction("AddResortAsync", createdResort);
                // return Ok("Hi");
            }
            catch (ResortException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateResortAsync(long id, Resort resort)
        {
            var updatedResort = await _resortService.UpdateResortAsync(id, resort);
            if (updatedResort == null)
            {
                return NotFound();
            }
            return Ok(updatedResort);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteResortAsync(long id)
        {
            var resort = await _resortService.DeleteResortAsync(id);
            if (resort == null)
            {
                return NotFound();
            }
            return Ok(resort);
        }

    }
}