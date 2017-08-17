var hour = 8;
var minute = 50;
var period = "AM";

if (minute >= 30)
{
  console.log("almost", (hour ++));
}
else (minute <= 30)
{
  console.log("Just after", (hour));
}

if (period == "AM")
{
  console.log("in the morning.");
}
else (period == "PM")
{
  console.log("in the evening.");
}

console.log(hour, minute, period);

//I don't believe this is correct, however I was unable to get an answer to my question prior to submitting this assignment. 
