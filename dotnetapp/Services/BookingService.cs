using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Data;
 
namespace dotnetapp.Services
{
    public class BookingService
    {
        private readonly ApplicationDbContext _context;
        public BookingService(ApplicationDbContext context)
        {
            _context=context;
        }
 
        //1. Retrieves booking records based on the specified BookingId.
         public async Task<Booking> GetBookingByIdAsync(long id)
        {
            return await _context.Bookings.FirstOrDefaultAsync(b =>b.BookingId==id);
        }
 
        //2. Retrieves all booking records based on specified UserId.
        public async Task<IEnumerable<Booking>> GetBookingsByUserIdAsync(long userId)
        {
            return await _context.Bookings.Include(b =>b.Resort).Include(b=>b.User).Where(b=>b.UserId==userId).ToListAsync();
        }
 
        //3. Retrieves and returns all booking records from the database
        public async Task<IEnumerable<Booking>> GetAllBookingsAsync()
        {
            return await _context.Bookings.Include(b=>b.Resort).Include(b=>b.User).ToListAsync();
        }
 
        //4. Adds a new booking record to the database.
        public async Task<Booking> AddBookingAsync(Booking booking)
        {
            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            // Retrieve the corresponding resort
            var resort = await _context.Resorts.FindAsync(booking.ResortId);
            if (resort != null)
            {
                // Decrement the resort's capacity by the number of persons in the booking
                resort.Capacity -= booking.NoOfPersons;
                await _context.SaveChangesAsync();
            }

            return booking;
        }
 
        //5. Retrieves a booking record from the database based on the specified BookingId and delete that booking
        public async Task DeleteBookingAsync(long id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking != null)
            {
                _context.Bookings.Remove(booking);
                await _context.SaveChangesAsync();
            }
        }
 
        //6. Retrieves a booking record from the database based on the specified BookingId and update the status
        public async Task UpdateBookingStatusAsync(long id, string newStatus)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking != null)
            {
                booking.Status = newStatus;
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new KeyNotFoundException("Booking not found");
            }
        }
        
    }
}