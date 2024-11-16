using System.ComponentModel.DataAnnotations;
namespace dotnetapp.Models
{
    public class Booking

    {
        [Key]
        public long? BookingId { get; set; }
        public int? NoOfPersons { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string? Status { get; set; }
        public double? TotalPrice { get; set; }
        public string? Address { get; set; }
        public long? UserId { get; set; }
        public User? User { get; set; }
        public long? ResortId { get; set; }
        public Resort? Resort { get; set; }
    }
} 