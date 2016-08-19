module.exports = function(RED) {
    
    var cfenv = require('cfenv');
    var services = cfenv.getAppEnv().services;

    var username, password, sUsername, sPassword;
    var service = cfenv.getAppEnv().getServiceCreds(/dialog/i)
  
    if (service) {
    sUsername = service.username;
    sPassword = service.password;
    }
  
  RED.httpAdmin.get('/service-dialog/vcap', function (req, res) {
		res.json(service ? {bound_service: true} : null);
  }); 
    
    var watson = require('watson-developer-cloud');
    var alchemy_language = watson.alchemy_language({
    api_key: msg.key    
    });
    var def = "";
    var fail = "";
    
    var parameters = {
    /*url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'*/
    text: 'Now hes impersonating a presidential candidate. That, too, used to be fun. He played a wretched character who humiliated anyone who stood in his way: immigrants, women, Muslims, the disabled, veterans and his Republican rivals, who keeled over one by one -- "Little Marco," "Low-Energy Jeb," "Lyin Ted."'
    };
    
    alchemy_language.entities(parameters, function (err, response) {
    if (err)
    fail = err;
    else
    def = JSON.stringify(response, null, 2);
    });
    
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = sUsername + "---" + sPassword;
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
