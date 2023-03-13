var today = function () {
    var date = dayjs().format('dddd MMMM DD, YYYY')
        $("div.timeRows").text(today);
}

var time = function () {
    var now = dayjs().format('H:mm:ss');
        $("div.clock").text(now);
}

var hourRows = function () {
    var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    var currentHour = dayjs().format('H');

    for(var i = 0; i < hours.length; i++) {
        var rows = $('<div class="row"></div>');
        var times = $('<div class="hour">${hours[i]}</div>');
        var text = $('<textarea data-time="${i + 9}"></textarea>');

        if ((i +9) == currentHour) {
            text.addClass('present');
        } else if ((i + 9) < currentHour) {
            text.addClass('past');
        } else {
            text.addClass('future');
        }

        var litSaveBtn = $('<div class="saveBtn" data-time="${i + 9}"><i class=fas fa-save"</i></div>');

        rows.append(times);
        rows.append(text);
        rows.append(litSaveBtn);
        $('timeRows').append(rows);
    }
}


