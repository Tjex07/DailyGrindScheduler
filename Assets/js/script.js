// Grabbing  date information with JS and storing letiable data
let event_log;

const weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

let d = new Date();
let day = weekday[d.getDay()];

// Date
let date_raw = new Date();
let dd = date_raw.getDate(); 
let MM = date_raw.getMonth(); 
let yyyy = date_raw.getFullYear(); 
let date_today=(MM+1)+". "+dd+". "+yyyy;
let day_date=' '+day+', '+date_today;

// Obtains present hour to the match_color_bytime function 
let present_hr= d.getHours();

//Creates H2 tag and displays the day of the week and date in the jumbotron

const h2_todays_date=$("<h2 id='p_todays_date'>"+day_date+" </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-dark font-italic font-weight-bold  ")

$("#jumbotron").append(h2_todays_date);

const statement=$("<h3> Ma Grind Flizow </h3>")
statement.attr("class", "cover-heading font-weight-bold textarea ")
$("#jumbotron").append(statement);

//When the save button is clicked the event is triggered and the data is saved.

function match_color_bytime (){

$('textarea').each(function(){
    const schedule_hr=parseInt($(this).attr('id'));
    if (schedule_hr===present_hr){
    $(this).addClass('present-customgreen'); 
    } else if (schedule_hr>present_hr) {
    $(this).addClass('future-blue');
    } else {
        $(this).addClass('past-grey')
    }
}); 
}; 

match_color_bytime()

// Saving tasks

function pull_local_data(){
    if (localStorage.getItem('event_log') !== null) {

     event_log=JSON.parse(localStorage.getItem('event_log'));
      $('.textarea').each(function (button_id){
                $(this).val(event_log[button_id]);        
                });
    } else {
        event_log={};

        for (let i=1;i<=9;i++){
        event_log[i]="";
        }
        console.log(event_log)
    }
}

pull_local_data();

// Saves data to local storage 

$('.btn').click(function (e){
e.preventDefault();

let text_in_box = $(this).parent().prev().val();
console.dir('dir',$(this).parent().prev())
console.log('text in box:', text_in_box)

const button_id=$(this).attr('id')

console.log(button_id, text_in_box)

event_log[button_id]=text_in_box

// Data needs to be converted to JSON
localStorage.setItem('event_log', JSON.stringify(event_log));
console.log( text_in_box, localStorage)

}); 




