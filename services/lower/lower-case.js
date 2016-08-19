module.exports = function(RED) {
    

    
    function LowerCaseNode(config) {
    RED.nodes.createNode(this,config);
    //var globalContext = this.context().global;
    
    var watson = require('watson-developer-cloud');
    var alchemy_language = watson.alchemy_language({
    api_key: 'b242de56e40b4d1393f99f77b3e231d7f2314a98'    
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
    
    this.on('input', function(msg) {
    var key = msg.key;
    var input = msg.payload; 
    
    //globalContext.set("key", msg.key);
    //globalContext.set("input", msg.payload);
    
    

    var neu = def + "---" + fail + "---" + key;
    
    msg = {payload: neu};         
    this.send(msg);
    });
    

    
    
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
