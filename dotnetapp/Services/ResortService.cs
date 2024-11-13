using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Data;
using dotnetapp.Exceptions;

namespace dotnetapp.Services{
    public class ResortService
    {
        private readonly ApplicationDbContext _context;
        public ResortService(ApplicationDbContext context)
        {
            _context=context;
        }
        public async Task <IEnumerable<Resort>> GetAllResortsAsync()
        {
            return await  _context.Resorts.ToListAsync();
        }
       public async Task<Resort> AddResortAsync(Resort resort){
            if(await _context.Resorts.AnyAsync(r=>r.ResortName==resort.ResortName)){
                throw new ResortException("A resort with the same name already exists");
            }
       
        _context.Resorts.Add(resort);
        await _context.SaveChangesAsync();
        return resort;
        }
        public async Task<Resort> UpdateResortAsync(long id,Resort resort){
            var existingResort=await _context.Resorts.FindAsync(id);
            if(existingResort==null)
            {
                return null;
            }
            existingResort.ResortName=resort.ResortName;
            existingResort.ResortImageUrl=resort.ResortImageUrl;
            existingResort.ResortLocation=resort.ResortLocation;
            existingResort.ResortAvailableStatus=resort.ResortAvailableStatus;
            existingResort.Price=resort.Price;
            existingResort.Capacity=resort.Capacity;
            existingResort.Description=resort.Description;
 
            _context.Resorts.Update(existingResort);
            await _context.SaveChangesAsync();
            return existingResort;
        }
        public async Task<Resort> DeleteResortAsync(long id)
        {
            var resort = await _context.Resorts.FindAsync(id);
            if (resort == null)
            {
                return null; // Resort not found
            }

            // Find associated bookings
            var bookings = await _context.Bookings
                .Where(b => b.ResortId == id)
                .ToListAsync();

            // Remove associated bookings
            _context.Bookings.RemoveRange(bookings);

            // Remove the resort
            _context.Resorts.Remove(resort);

            // Save changes
            await _context.SaveChangesAsync();

            return resort;
        }
      public async Task<Resort> GetResortByIdAsync(long id){
        return await _context.Resorts.FindAsync(id);
      }
    }
    
    

}
