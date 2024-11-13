using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using dotnetapp.Services;
using dotnetapp.Models;
using Microsoft.AspNetCore.Authorization;

namespace dotnetapp.Controllers
{
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly BookingService _bookingService;
        private readonly UserService _userService;
 
        public BookingController(BookingService bookingService, UserService userService)
        {
            _bookingService = bookingService;
            _userService = userService;
        }
 
        //1. Retrieves a booking by its ID
        [Authorize(Roles ="Admin,Customer")]
        [HttpGet("api/booking/{bookingId}")]
        public async Task<IActionResult> GetBooking(long bookingId)
        {
            var booking = await _bookingService.GetBookingByIdAsync(bookingId);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }
 
        //2. Retrieves all bookings for a specific user.
        [Authorize(Roles ="Admin")]
        [HttpGet("/api/user/{UserId}")]
        public async Task<IActionResult> GetBookingsByUserId(long UserId)
        {
            try
            {
                var bookings = await _bookingService.GetBookingsByUserIdAsync(UserId);
                return Ok(bookings);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
 
        //3. Retrieves all bookings
        [Authorize(Roles ="Admin,Customer")]
        [HttpGet("/api/booking")]
        public async Task<IActionResult> GetAllBookings()
        {
            try
            {
                var bookings = await _bookingService.GetAllBookingsAsync();
                return Ok(bookings);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
 
        //4. Adds a new booking
        [Authorize(Roles ="Customer")]
        [HttpPost("/api/booking")]
        public async Task<IActionResult> AddBooking([FromBody] Booking booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking data is null");
            }
           
            var user = await _userService.GetUserByIdAsync((long)booking.UserId);

            if (user == null)
            {
                return BadRequest("User not found");
            }
 
            try
            {
                var addedBooking = await _bookingService.AddBookingAsync(booking);
                //var user = await _userService.GetUserByIdAsync(booking.UserId);
                return Ok(new { Booking = addedBooking, User = user });
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
 
        //5. Deletes a booking by its ID
        [Authorize(Roles ="Customer,Admin")]
        [HttpDelete("/api/booking/{bookingId}")]
        public async Task<IActionResult> DeleteBooking(long bookingId)
        {
            try
            {
                await _bookingService.DeleteBookingAsync(bookingId);
                return Ok("Booking deleted successfully");
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
 
         //6. Updates a booking by its ID
         [Authorize(Roles ="Admin")]
        [HttpPut("/api/booking/{bookingId}")]
        public async Task<IActionResult> UpdateBooking(long bookingId, [FromBody] Booking updatedBooking)
        {
            if (bookingId != updatedBooking.BookingId)
            {
                return BadRequest("Booking ID mismatch");
            }
 
            var existingBooking = await _bookingService.GetBookingByIdAsync(bookingId);
            if (existingBooking == null)
            {
                return NotFound();
            }
 
            try
            {
                await _bookingService.UpdateBookingStatusAsync(bookingId, updatedBooking.Status);
                var updated = await _bookingService.GetBookingByIdAsync(bookingId);
                return Ok(updated);
            }
            catch
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}

