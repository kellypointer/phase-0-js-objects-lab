//Write your code here

const attendee = {
  attendeeID:  "T0001"
  name = "Alice Smith"
  event = "JavaScript Conference"
  ticketType = "VIP"
  ticketPrice = 150.00
};


function logAttendeeName(attendee) {
  
  console.log(attendee["attendee.name"); 
}
function logticketPrice(attendee) {
  console.log(attendee.ticketPrice)
}
function updateTicketType(attendee) {
  attendee.ticketType = "Regular";
  console.log(attendee); 
  
}
function removeEventProperty(attendee) {
 
delete attendee.event; 
}

function addCheckedInProperty(attendee) {
attendee.checkedIn = "True"

}




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};