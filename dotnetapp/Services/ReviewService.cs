using dotnetapp.Data;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services{
    public class ReviewService{
        private readonly ApplicationDbContext _context;
        public ReviewService (ApplicationDbContext context)
        {
            _context=context;
        }
        public async Task<List<Review>> GetAllReviewsAsync()
        {
            return await _context.Reviews.Include(r=>r.User).ToListAsync();
        }
        public async Task<Review>AddReviewAsync(Review review)
        {
            _context.Reviews.Add(review);
            _context.SaveChangesAsync();
            return review;
        }
   
        public async Task<IEnumerable<Review>> GetReviewByUserIdAsync(long userId)
        {
            return await _context.Reviews.Include(r=>r.User).Where(u=>u.UserId==userId).ToListAsync();
        }

        internal async Task GetReviewsByUserIdAsync(long userId)
        {
            throw new NotImplementedException();
        }
    }
}

