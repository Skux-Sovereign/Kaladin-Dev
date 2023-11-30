using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public char? MiddleInitial { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
        public int Age { get; set; }
        public char Sex { get; set; }
        public int SSN { get; set; }
        public int Priority { get; set; }
        public string Height { get; set; }
        public int Weight { get; set; }
        public string Ethnicity { get; set; }
        public string HomeAddress { get; set; }
        public string EmergencyContact { get; set; }
        public string PickUpLocation { get; set; }
        public string DropOffLocation { get; set; }
        public DateTime PickUpTime { get; set; }
        public DateTime TimeSubmitted { get; set; }
    }
}