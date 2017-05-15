// Custom component script
// Name of the component must match the name of written in XML attribute eg.
// <g id="someID" rexsvg:module="CustomComponent" >
//

REX.UI.SVG.CustomComponent = function(svgElem,args) {
    // Inherit from base component
    var that = new REX.UI.SVG.Component(svgElem,args);
    // Store options for simple usage
    var $o = that.options || {};
    
    // Root level element converted to SVG.JS object
    // see http://svgjs.com/ for more info
    var element = that.element;
    
    // Find element by rexsvg:tag attribute
    // and convert it to the SVG.JS object
    // see http://svgjs.com/ for more info
    var rect = SVG.adopt(that.getChildByTag("rectangle"));   
    
    var text = SVG.adopt(that.getChildByTag("text"));
    
    
    // Check if connection string 'valueX' or 'valueY' is marked as writable 
    if (that.$c.valueX.type === 'R') {
        that.log.error('Connection String: ' + that.$c.valueX.cstring + '(' + that.$c.valueX.alias + ') is read-only');
        return that;    
    }
    if (that.$c.valueY.type === 'R') {
        that.log.error('Connection String: ' + that.$c.valueY.cstring + '(' + that.$c.valueY.alias + ') is read-only');
        return that;
    }
    
    // If the value is changed within the REX system 
    // process the value and show it
    that.$c.valueX.on('change', function(itm) {        
        var val  = itm.getValue();
        that.log.info('Value Y changed to: '+val);
    });
    
    that.$c.valueY.on('change', function(itm) {        
        var val  = itm.getValue();
        that.log.info('Value X changed to: '+val);
    });

    var point = that.svg.createSVGPoint();        
    var CTM = element.getScreenCTM();
    
    // Add event listener
    // see http://svgjs.com/events/
    rect.on('mousemove',function(evt){
        point.x = evt.pageX;
        point.y = evt.pageY;
        
        if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
            point = point.matrixTransform(CTM.inverse());
            point.x -= (rect.getBBox().x);            
        } else {
            point = point.matrixTransform(CTM.inverse());
        }
        
        // Substract margin to get relative coordinates inside rectangle
        point.x = point.x - rect.x();
        point.y = point.y - rect.y();
        
        text.text('Point ['+point.x.toFixed(3)+','+point.y.toFixed(3)+']');
        
        that.$c.valueX.write(point.x);
        that.$c.valueY.write(point.y);       
        
    });
    
    that.enable();    
    return that;
};
