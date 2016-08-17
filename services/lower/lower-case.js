module.exports = function(RED) {
    
    
    
    
    
    
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        var watson = require('watson-developer-cloud');
        var alchemy_language = watson.alchemy_language({
        api_key: 'b242de56e40b4d1393f99f77b3e231d7f2314a98'
        })

        var parameters = {
        url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'
        };

        alchemy_language.entities(parameters, function (err, response) {
        if (err)
        
        else
        msg.payload = JSON.stringify(response, null, 2);
        node.send(msg);
        });
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
