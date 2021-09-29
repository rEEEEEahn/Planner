// needed selctions U5/21-26 (local storage todos)
// 
// top time (using moment)
var plannerTime = moment ().format('LLL') 
$('#currentDay').text(plannerTime);
// time is dynamic (set var to time)
var currentHour = moment().hour();
console.log(currentHour);
//saves
// each block needs to be able to check time
//if block time is < (current) make grey
//if block time is = (current) make green
//else if block time is > (current) make red
// save storage button https://stackoverflow.com/questions/42963091/how-to-save-the-value-of-textarea-to-localstorage-then-display-it-in-the-same-te