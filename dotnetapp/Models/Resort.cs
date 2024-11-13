using System;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{

public class Resort
    {
        [Key]
        public long? ResortId { get; set; }
        public string? ResortName { get; set; }
        public string? ResortImageUrl { get; set; }
        public string? ResortLocation { get; set; }
        public string? ResortAvailableStatus { get; set; }
        public long? Price { get; set; }
        public int? Capacity { get; set; }
        public string? Description { get; set; }
        public ICollection<Booking>? Bookings { get; set; }
    }
}

