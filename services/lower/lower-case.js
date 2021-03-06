module.exports = function(RED) {
    
    var watson = require('watson-developer-cloud');
    
    var def = "";
    var fail = "";

    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
        	
            performCreate(node,msg);	
        	
            msg.payload = def;
            node.send(msg);
        });
    }
    
    function performCreate(node,msg) {
    	
    var alchemy_language = watson.alchemy_language({
    api_key: msg.key    
    });
    
    var parameters = {
    /*url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'*/
    text: msg.textInput
    };	
    	
    alchemy_language.keywords(parameters, function (err, response) {
    if (err)
    fail = err;
    else
    //def = JSON.stringify(response, null, 2);
    def = response;
    });	
    	
    }	
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
