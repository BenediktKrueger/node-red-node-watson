module.exports = function(RED) {
    
    //var input1 = 'test';
    
    function LowerCaseNode(config) {
    RED.nodes.createNode(this,config);
    var globalContext = this.context().global;
    //var globalContext = this.context().global;
    globalContexinput1t.set("input1","test1");
    //input1 = 'test1';
    this.on('input', function(msg) {
    globalContexinput1t.set("input1","test2");
    var key = msg.key;
    input1 = 'test';
    });
    
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
    var neu = def + "---" + fail + "---" + globalContexinput1t.get("input1");
    msg = {payload: neu};         
    this.send(msg);
    });
    

    
    
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
