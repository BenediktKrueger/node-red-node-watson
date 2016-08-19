module.exports = function(RED) {
    

    
    function LowerCaseNode(config) {
    RED.nodes.createNode(this,config);
    //var globalContext = this.context().global;
    
    this.on('input', function(msg) {
    var key = msg.key;
    var input = msg.payload; 
    
    //globalContext.set("key", msg.key);
    //globalContext.set("input", msg.payload);
    

    
    });
    
    msg = {payload: key},          
    this.send(msg);
    
    
    
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
