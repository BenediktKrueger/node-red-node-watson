module.exports = function(RED) {
    
    var watson = require('watson-developer-cloud');
    var alchemy_language = watson.alchemy_language({
    api_key: 'b242de56e40b4d1393f99f77b3e231d7f2314a98'    
    });
    
    
    var parameters = {
     url: 'http://www-03.ibm.com/press/us/en/pressrelease/49384.wss'
    };
    
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
