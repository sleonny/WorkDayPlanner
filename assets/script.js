var today = function () {
    var date = dayjs().format('dddd MMMM DD, YYYY')
        $("div.timeRows").text(today);
}
//To Display the date
var time = function () {
    var now = dayjs().format('H:mm:ss');
        $("div.clock").text(now);
}
//To Display the time
var hourRows = function () {
    var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    var currentHour = dayjs().format('H');
//Created an array for each time in a workday
    for(var i = 0; i < hours.length; i++) {
        var rows = $('<div class="timeRows"></div>');
        var times = $('<div class="hour">${hours[i]}</div>');
        var text = $('<textarea data-time="${i + 9}"></textarea>');
//Built a loop to add them to html
        if ((i +9) == currentHour) {
            text.addClass('present');
        } else if ((i + 9) < currentHour) {
            text.addClass('past');
        } else {
            text.addClass('future');
        }
//Assigned classes to change color based on time of day
        var litSaveBtn = $('<div class="saveBtn" data-time="${i + 9}"><i class=fas fa-save"</i></div>');
//The save button icon

        rows.append(times);
        rows.append(text);
        rows.append(litSaveBtn);
        $('.timeRows').append(rows);
    }
}
//Hopefully appended rows to html so that they are built correctly...
var saveData = function (event) {
    var when = $(event.target).attr("data-time");
    var what = $('textarea[data-time="' + when + '"]').val();
    if (what.length) {
        localStorage.setItem(when, what)
    } else {
        localStorage.removeItem(when);
    }
}
//Built local storage to store user input

var loadData = function () {
    let displayAlert;

    if(localStorage.length > 0) {
        for(let i=9; i<=17; i++) {
            var saveText = localStorage.getItem(i);
            if (saveText) {
                var textArea = $('textarea[data-time="' + i + '"]');
                $(textArea).what(saveText);
            }
        }

        displayAlert = $('<div class="alert alert-success">Here is how the day is looking...</div>')
    } else {
        displayAlert = $('<div class="alert alert-info">Type tasks in the boxes and click save.</div>')
    }
$('header').append(displayAlert);

var loadPage = function () {
    today();
    time();
    setInterval(time, 1000);
    hourRows();
    loadData();
    $(".saveBtn").click(saveData);
}
}
$(document).ready("load", loadData());

