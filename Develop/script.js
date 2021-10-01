// needed selctions U5/21-26 (local storage todos)
// 
// top time (using moment)
var button = $('.saveBtn')


var plannerTime = moment ().format('LLL') ;

$('#currentDay').text(plannerTime);
// time is dynamic (set var to time)
function currentTime() {
var currentHour = moment().hour();
var time = $('.time-block');
console.log(currentHour);
console.log(time);

time.each(function () {
    var hour = parseInt($(this).attr('id'))
  //  console.log(hour);
  console.log(hour)

    if (hour === currentHour) {
      $(this).children('.col-md-10').attr('class', 'present col-md-10 description')
  //    console.log(('present' + hour + current))
    } else if (currentHour > hour) {
      $(this).children('.col-md-10').attr('class', 'past col-md-10 description')
  //    console.log(('past' + hour + current))
    } else {
      $(this).children('.col-md-10').attr('class', 'future col-md-10 description')
  //    console.log(('future' + hour + current))
    }
  })
}
currentTime()

button.on('click', function (event) {
  event.preventDefault();
  var text = $(this).siblings('.col-md-10').val().replace(/['"]+/g, '');
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text));

})
$('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
$('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
$('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
$('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
$('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
$('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
$('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
$('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
$('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');


 // function to update row color

//saves
// each block needs to be able to check time
//if block time is < (current) make grey
//if block time is = (current) make green
//else if block time is > (current) make red
// save storage button https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te
//Given a time block element

//let currentHour = get the current hour
//let blockHour = get time block hour

//IF currentHour < blockHour
  // add "future" class to block element
//ELSE IF currentHour > blockHour
 //  add "past" class to block element
//ELSE
  // add "present" class to block element
//currentHour = 9
//blockHour = 9
//result adds "past" class to time block to make gray