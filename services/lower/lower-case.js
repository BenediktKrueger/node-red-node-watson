module.exports = function(RED) {
    
    var globalContext = this.context().global;
    
    function LowerCaseNode(config) {
    RED.nodes.createNode(this,config);
    
    this.on('input', function(msg) {
    var key = msg.key;
    var input = msg.payload; 
    
    globalContext.set("key", msg.key);
    globalContext.set("input", msg.payload);
    
    msg.payload = globalContext.get("key"); + "---" + globalContext.get("input");
    this.send(msg);
    
    });
    

    
    
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
