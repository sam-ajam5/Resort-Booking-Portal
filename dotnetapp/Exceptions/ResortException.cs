using System;
 
namespace dotnetapp.Exceptions
{
    public class ResortException : Exception
    {
        // Constructor that accepts a custom message
        public ResortException(string message) : base(message)
        {
            
        }
    }
}
