module.exports = function(RED) {
    
    var watson = require('watson-developer-cloud');
    
    var def = "";
    var fail = "";
    
    var parameters = {
    /*url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'*/
    text: 'Now hes impersonating a presidential candidate. That, too, used to be fun. He played a wretched character who humiliated anyone who stood in his way: immigrants, women, Muslims, the disabled, veterans and his Republican rivals, who keeled over one by one -- "Little Marco," "Low-Energy Jeb," "Lyin Ted."'
    };
    
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
    this.doCall = function(msg) {
      var alchemy_language = watson.alchemy_language({
        api_key: msg.key    
        });
    }
    
    alchemy_language.entities(parameters, function (err, response) {
    if (err)
    fail = err;
    else
    def = JSON.stringify(response, null, 2);
    });
    
    this.on('input', function(msg) {
            msg.payload = def + "---" + fail;
            node.send(msg);
        });
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
