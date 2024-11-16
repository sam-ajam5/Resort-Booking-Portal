using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
 
namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        private readonly ReviewService _reviewService;
 
        public ReviewController(ReviewService reviewService)
        {
            _reviewService = reviewService;
        }
 
   
        [HttpGet]
        [Authorize(Roles ="Admin,Customer")]
        public async Task<IActionResult> GetAllReviews()
        {
            try
            {
                // Retrieve all reviews using the service method
                var reviews = await _reviewService.GetAllReviewsAsync();
 
                // Return a 200 OK response with the list of reviews
                return Ok(reviews);
            }
            catch (Exception ex)
            {
               
                // Return a 500 Internal Server Error response with the exception message
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
 
        [HttpPost]
        [Authorize(Roles ="Customer")]
        public async Task<ActionResult<Review>> AddReview(Review review)
        {
            try
            {
                var createdReview = await _reviewService.AddReviewAsync(review);
                return CreatedAtAction(nameof(GetAllReviews), new { id = createdReview.ReviewId }, createdReview);
            }
            catch (Exception ex)
            {
                // Log the exception (logging code can be added here if needed)
 
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
 
        [HttpGet("user/{userId}")]
        [Authorize(Roles ="Admin,Customer")]
        public async Task<ActionResult<IEnumerable<Review>>> GetReviewsByUserId(long userId)
        {
            try
            {
                var reviews = await _reviewService.GetReviewByUserIdAsync(userId);
                return Ok(reviews);
            }
            catch (Exception ex)
            {
                // Log the exception (logging code can be added here if needed)
 
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}

