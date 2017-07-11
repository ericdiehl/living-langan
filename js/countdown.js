// End Date
// Only needs to be called once, so it's outside of the function.
var endDate = new Date("Mar 31, 2018 10:00:00").getTime();

// Initialize Function
var countDown = setInterval(function() {

  // Current Date
  var now = new Date().getTime();

  // Calculate Delta
  var distance = endDate - now;

  // Create Counters
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display Result
  document.getElementById("countdown").innerHTML = days + " Days " + hours +
  " Hours " + minutes + " Minutes " + seconds + " Seconds ";

// Update Every Second
}, 1000);
