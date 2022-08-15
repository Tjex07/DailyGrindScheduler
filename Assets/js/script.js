// Grabbing  date information with JS and storing variable data
var event_log;

const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
var day = weekday[d.getDay()];

// Date
var date_raw = new Date();
var dd = date_raw.getDate(); 
var MM = date_raw.getMonth(); 
var yyyy = date_raw.getFullYear(); 
var date_today=(MM+1)+". "+dd+". "+yyyy;
var day_date=' '+day+', '+date_today;

// Obtains present hour to the match_color_bytime function 
var present_hr= d.getHours();

//JQuery creates H2 tag and displays date and day of week in the jumbotron

const h2_todays_date=$("<h2 id='p_todays_date'>"+day_date+" </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-dark font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);

// Inserting a "plan as you go statement under Today's date in jumbotron- the text area is a custom class created by me"
const statement=$("<h3> Ma Grind Flizow </h3>")
statement.attr("class", "cover-heading font-weight-bold textarea ")
$("#jumbotron").append(statement);

//Event is triggered when clicking save button, the unique id for each of the buttons can be used as the unique id for event

function match_color_bytime (){

$('textarea').each(function(){
// Obtain the id, convert to integer and store it into scheduled hr because their id corresponds to the number for the hr of the day that text area is assigned to
    const schedule_hr=parseInt($(this).attr('id'));
     // shows all the ids converted to integers

    if (schedule_hr===present_hr){

    $(this).addClass('present-customblue');
    // $(this).removeClass('past-grey')
    }// br-close if statement 

    else if (schedule_hr>present_hr) {
    // $(this).removeClass('past-grey')
    $(this).addClass('future-blue');
    }//br-close else if

    else {
        $(this).addClass('past-grey')
    }
}); 

}; 

match_color_bytime()

// Local Storage

function pull_local_data(){
    if (localStorage.getItem('event_log') !== null) {
    //* Converting local storage to an object type form for JS, 
     event_log=JSON.parse(localStorage.getItem('event_log'));
      $('.textarea').each(function (button_id){
                $(this).val(event_log[button_id]);        
                });
    } else {
        // create event_log object
        event_log={};
        //creates 9 empty blocks of time used for inputtin tasks by id
        for (let i=1;i<=9;i++){
        event_log[i]="";
        }
        console.log(event_log)
    }
}

pull_local_data();

// Save data local storage 

$('.btn').click(function (e){
e.preventDefault();

//obtainig value of element immediately before (hence .prev().val()) the clicked button

var text_in_box = $(this).parent().prev().val();
console.dir('dir',$(this).parent().prev())
console.log('text in box:', text_in_box)

// Obtains button id for event id  events are saved to the clicked event
var button_id=$(this).attr('id')

console.log(button_id, text_in_box)

//pushes text to the time-block textbox in event_log and pairs the button id number.

event_log[button_id]=text_in_box

// Data cannot be grabbed from local storage in object form.  javascript needs data in object form and therefore pushes the data to local storage and is converted to string using JSON.stringify.
localStorage.setItem('event_log', JSON.stringify(event_log));
console.log( text_in_box, localStorage)

}); 




