//=================================================
//  Set unwanted extensions and desktop path, and 
//  removes files with those extensions every 24  
//  hours (set cleanInterval time to whatever you'd 
//  like).                                        
//=================================================
//  NOTE: Unwanted extensions must be an array
//  with format '.extension' to avoid any unwanted 
//  removals.
//-------------------------------------------------

var unwantedExtensions = ['.torrent', '.tnt'];
var desktopPath = 'C:\\Users\\Kevin\\Desktop';
var cleanInterval = 86400000; //milliseconds

var exec = require('child_process').exec;

// need to use 'del' command because 'rm' will not be recognized by windows
var command = 'del *' + unwantedExtensions.join(' *');
//-------------------------------------------------

var cleanDesktop = setInterval(function () {
  exec(command, {
    cwd: desktopPath
  }, function (err, stdout, stderr) {
    console.log(err);
  });
}, cleanInterval);