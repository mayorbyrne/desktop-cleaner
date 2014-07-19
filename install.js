var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Desktop Cleaner',
  description: 'Rids desktop of unwanted files',
  script: require('path').join(__dirname,'desktop-cleaner.js'),
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:3000 to see it in action.');
});

svc.install();