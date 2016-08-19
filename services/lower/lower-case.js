module.exports = function(RED) {
    
    function LowerCaseNode(config) {
    RED.nodes.createNode(this,config);
    
    this.on('input', function(msg) {
    var key = msg.key;
    var input = msg.payload; 
    
    msg.payload = msg.key + "---" + msg.payload;
    this.send(msg);
    
    });
    

    
    
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
