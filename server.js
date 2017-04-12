'use strict'
var express = require('express');
var app = express();


app.get('/:time', function(req, res){
  var time = req.params.time;
  if (time == 'favicon.ico'){
    res.send();
    return;
  }
  console.log(time);
  var natural;
  var date;
  var unix;
  if (time.indexOf(' ') === -1){
    date = new Date(Number(time)*1000);
    console.log(date);
    unix = Number(time);
    natural = date.toGMTString();
  } else {
    var strMonth, day, year;
    [strMonth, day, year] = time.split(' ');
    day = day.slice(0, -1)
    var month;
    natural = time;
    switch (strMonth){
      case "January":
        month = 0;
        break;
      case "February":
        month = 1;
      break;
      case "March":
        month = 2;
        break;
      case "April":
        month = 3;
        break;
      case "May":
        month = 4;
        break;
      case "June":
        month = 5;
        break;
      case "July":
        month = 6;
        break;
      case "August":
        month = 7;
        break;
      case "September":
        month = 8;
        break;
      case "October":
        month = 9;
        break;
      case "November":
        month = 10;
        break;
      case "December":
        month = 11;
        break;
    }
    date = new Date('2015-12-15T00:00:00');
    console.log('test')
    date.setYear(Number(year));
    console.log(date)
    date.setDate(Number(day)-1);
    console.log(date)
    date.setMonth(month);
    console.log(Math.floor(date.getTime()/1000))
    unix = Math.floor(date.getTime()/1000);
  }
  var str = {
    "unix": unix,
    "natural": natural
  }
  console.log(str);
  res.send(JSON.stringify(str));
})

app.listen(80, function(){
  console.log('listening on *:80');
});
