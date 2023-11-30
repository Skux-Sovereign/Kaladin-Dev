using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;
            
            var activities = new List<Activity>
            {
                new Activity
                {
                   FirstName = "John",
                   MiddleInitial = 'A',
                   LastName = "Smith",
                   DOB = DateTime.UtcNow.Date.AddYears(-30),
                   Age = 30,
                   Sex = 'M',
                   SSN = 123456789,
                   Priority = 3,
                   Height = "6'1",
                   Weight = 180,
                   Ethnicity = "Caucasian",
                   HomeAddress = "123 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-555-1234",
                   PickUpLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   DropOffLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   PickUpTime = DateTime.UtcNow.AddHours(1),
                   TimeSubmitted = DateTime.UtcNow

                },
                new Activity
                {
                   FirstName = "Jane",
                   MiddleInitial = 'B',
                   LastName = "Doe",
                   DOB = DateTime.UtcNow.Date.AddYears(-30),
                   Age = 30,
                   Sex = 'F',
                   SSN = 987654321,
                   Priority = 3,
                   Height = "5'6",
                   Weight = 120,
                   Ethnicity = "Caucasian",
                   HomeAddress = "124 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-444-1234",
                   PickUpLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   DropOffLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   PickUpTime = DateTime.UtcNow.AddHours(2),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Jim",
                   MiddleInitial = 'C',
                   LastName = "Carpenter",
                   DOB = DateTime.UtcNow.Date.AddYears(-42),
                   Age = 42,
                   Sex = 'M',
                   SSN = 891234567,
                   Priority = 2,
                   Height = "5'9",
                   Weight = 170,
                   Ethnicity = "Caucasian",
                   HomeAddress = "122 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-333-1234",
                   PickUpLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   DropOffLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   PickUpTime = DateTime.UtcNow.AddHours(3),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Debra",
                   MiddleInitial = 'A',
                   LastName = "Carpenter",
                   DOB = DateTime.UtcNow.Date.AddYears(-42),
                   Age = 42,
                   Sex = 'F',
                   SSN = 789123456,
                   Priority = 1,
                   Height = "5'4",
                   Weight = 130,
                   Ethnicity = "Caucasian",
                   HomeAddress = "122 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-222-1234",
                   PickUpLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   DropOffLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   PickUpTime = DateTime.UtcNow.AddHours(3),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Pamela",
                   MiddleInitial = 'F',
                   LastName = "Robinson",
                   DOB = DateTime.UtcNow.Date.AddYears(-66),
                   Age = 66,
                   Sex = 'F',
                   SSN = 678123450,
                   Priority = 3,
                   Height = "5'5",
                   Weight = 170,
                   Ethnicity = "Black",
                   HomeAddress = "121 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-111-1234",
                   PickUpLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   DropOffLocation = "5801 Bremo Rd, Richmond, VA 23226",
                   PickUpTime = DateTime.UtcNow.AddDays(1),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Ralph",
                   MiddleInitial = 'M',
                   LastName = "Lincoln",
                   DOB = DateTime.UtcNow.Date.AddYears(-78),
                   Age = 78,
                   Sex = 'M',
                   SSN = 123678901,
                   Priority = 3,
                   Height = "6'2",
                   Weight = 200,
                   Ethnicity = "Black",
                   HomeAddress = "120 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-555-4321",
                   PickUpLocation = "5801 Bremo Rd, Richmond, VA 23226",
                   DropOffLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   PickUpTime = DateTime.UtcNow.AddHours(8),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Ron",
                   MiddleInitial = 'H',
                   LastName = "Lassiter",
                   DOB = DateTime.UtcNow.Date.AddYears(-72),
                   Age = 72,
                   Sex = 'M',
                   SSN = 432167890,
                   Priority = 1,
                   Height = "5'11",
                   Weight = 210,
                   Ethnicity = "Caucasian",
                   HomeAddress = "321 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-555-1230",
                   PickUpLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   DropOffLocation = "8260 Atlee Rd, Mechanicsville, VA 23116",
                   PickUpTime = DateTime.UtcNow.AddDays(2),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Mary",
                   MiddleInitial = 'M',
                   LastName = "Dortmund",
                   DOB = DateTime.UtcNow.Date.AddYears(-19),
                   Age = 19,
                   Sex = 'F',
                   SSN = 567123489,
                   Priority = 2,
                   Height = "5'6",
                   Weight = 120,
                   Ethnicity = "Asian",
                   HomeAddress = "432 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-444-1235",
                   PickUpLocation = "8260 Atlee Rd, Mechanicsville, VA 23116",
                   DropOffLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   PickUpTime = DateTime.UtcNow.AddDays(3),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Amanda",
                   MiddleInitial = 'M',
                   LastName = "Campbell",
                   DOB = DateTime.UtcNow.Date.AddYears(-29),
                   Age = 29,
                   Sex = 'F',
                   SSN = 765432189,
                   Priority = 1,
                   Height = "5'7",
                   Weight = 130,
                   Ethnicity = "Hispanic",
                   HomeAddress = "333 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-333-5432",
                   PickUpLocation = "1250 E Marshall St, Richmond, VA 23219",
                   DropOffLocation = "7101 Jahnke Rd, Richmond, VA 23225",
                   PickUpTime = DateTime.UtcNow.AddHours(6),
                   TimeSubmitted = DateTime.UtcNow
                },
                new Activity
                {
                   FirstName = "Martin",
                   MiddleInitial = 'R',
                   LastName = "Lloyd",
                   DOB = DateTime.UtcNow.Date.AddYears(-75),
                   Age = 75,
                   Sex = 'M',
                   SSN = 567123489,
                   Priority = 1,
                   Height = "5'9",
                   Weight = 180,
                   Ethnicity = "Caucasian",
                   HomeAddress = "234 Main St, Richmond, VA 23221",
                   EmergencyContact = "804-333-1234",
                   PickUpLocation = "1602 Skipwith Rd, Richmond, VA 23229",
                   DropOffLocation = "1250 E Marshall St, Richmond, VA 23219",
                   PickUpTime = DateTime.UtcNow.AddMinutes(30),
                   TimeSubmitted = DateTime.UtcNow
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}