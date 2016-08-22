module.exports = function(RED) {
    
  var request = require('request');
  var cfenv = require('cfenv');
  var fs = require('fs');
  var temp = require('temp');
  var async = require('async');
  var watson = require('watson-developer-cloud');
  temp.track();

  // Require the Cloud Foundry Module to pull credentials from bound service 
  // If they are found then they are stored in sUsername and sPassword, as the 
  // service credentials. This separation from sUsername and username to allow 
  // the end user to modify the node credentials when the service is not bound.
  // Otherwise, once set username would never get reset, resulting in a frustrated
  // user who, when he errenously enters bad credentials, can't figure out why
  // the edited ones are not being taken.
	
  var services = cfenv.getAppEnv().services;

  var username, password, sUsername, sPassword;
  var service = cfenv.getAppEnv().getServiceCreds(/dialog/i);
  
  if (service) {
    sUsername = service.username;
    sPassword = service.password;
  }
  
  RED.httpAdmin.get('/service-dialog/vcap', function (req, res) {
		res.json(service ? {bound_service: true} : null);
  }); 
  
  function SampleNode(config) {
    RED.nodes.createNode(this,config);
    // node-specific code goes here

this.on('input', function(msg) {

var msg = { payload:sUsername }
this.send(msg);

});

}
  
    
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
