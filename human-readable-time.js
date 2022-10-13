/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable (seconds) {
  let time = "",
    newSeconds = seconds,
    hour, 
    min, 
    sec;

  //hour
  if (seconds >= 3600) {
    hour = Math.floor(seconds / 3600);
    if (hour < 10) {
      hour = "0" + hour;
    }
    time += hour + ":";
    newSeconds -= parseInt(hour) * 3600;
    
    if (newSeconds >= 60 && newSeconds < 3600) {
      min = Math.floor(newSeconds / 60);
      if (newSeconds < 600) {
        min = "0" + min;
      }
      time +=  min + ":";
      newSeconds -= parseInt(min) * 60;
    } else {
      time += "00:";
    }
    
    
    if (newSeconds < 60 && newSeconds > 0) {
      sec = newSeconds;
      if (newSeconds < 10) {
        sec = "0" + newSeconds;
      }
      time += sec;
    } else {
      time += "00";
    }
  }

  //min
  if (seconds >= 60 && seconds < 3600) {
    time += "00:";
    
    min = Math.floor(seconds / 60);
    if (seconds < 600) {
      min = "0" + min;
    }
    time += min + ":";
    newSeconds -= parseInt(min) * 60;
    
    if (newSeconds < 60 && newSeconds > 0) {
      time += newSeconds;
      if (newSeconds < 10) {
        time += "0" + newSeconds;
      }
    } else {
      time += "00";
    }
  }
  
  //sec
  if (seconds < 60) {
    time = "00:00:" + seconds;
    if (seconds < 10) {
      time = "00:00:0" + seconds;
    }
  }

  return time;
}
