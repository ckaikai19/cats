const date = new Date();
const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

let current_day =  date.getDate();
let current_month = months[date.getMonth()];
let current_week = days[date.getDay()];

let current_hour_text = date.toLocaleString('en-US', {hour: 'numeric', hour12: true })
let current_hour_number = date.toLocaleString('en-US', {hour: 'numeric', hour12: true }).split(" ")[0];


document.getElementById("currentDay").innerText = `${current_week}, ${current_month} ${current_day}`;


document.getElementById("times").addEventListener("click", )

document.getElementsByClassName("time").addEventListener("click", ()=>{
    console.log(`been clciked`)
})










