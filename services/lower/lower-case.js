module.exports = function(RED) {
    
    var watson = require('watson-developer-cloud');

    var def = "";
    var fail = "";
    
    var parameters = {
    /*url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'*/
    text: 'test test test test'
    };
    
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            
        });
    
    this.doCall = function(msg) {
    var alchemy_language = watson.alchemy_language({
    api_key: 'b242de56e40b4d1393f99f77b3e231d7f2314a98'    
    });
    };
    
    alchemy_language.entities(parameters, function (err, response) {
    if (err)
    fail = err;
    else
    def = JSON.stringify(response, null, 2);
    });
    
    msg.payload = def + "---" + fail;
    node.send(msg);
    
    }
    
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
