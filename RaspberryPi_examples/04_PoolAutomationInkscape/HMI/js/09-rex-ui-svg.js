/**********************************************************************************
/*                        author: Ondrej Severa, 2013    
/*                                Lubomir Kristek, 2014                           */
/*                        version: 0.3                                            */
/**********************************************************************************/

// Create new namespace
extend(REX,"UI.SVG");

var REX_SVG_NS = "http://www.rexcontrols.com/rexsvg/";

$(document).ready(function() {
    var svgs = $('#content svg[rexsvg\\:module="REXSVG"]');
    if (svgs.length > 0) {
        for (var i = 0; i < svgs.length; i++) {
            REX.UI.SVG.init(svgs[i]);
        }
        REX.WebVis.connect();
    }
});

/**
 * TODO: Merge into REX.HELPERS definition
 * @param {String} string - boolean string
 * @returns {Boolean} 
 */
REX.HELPERS.parseBoolean = function(string) {
    if (!string) {
        return false;
    }
    if (typeof string === 'string') {
        switch (string.toLowerCase()) {
            case "false":
            case "no":
            case "0":
            case "":
                return false;
            default:
                return true;
        }
    }
    return false;
};
    
    
/**
 * SVG module is responsible for managing all SVG components
 * @type that
 */    
REX.UI.SVG = function() {
    var that = {};
    that.components = [];
    
    /**
     * Register component for futher use
     * @param {type} svgComponent
     */
    that.registerComponent = function(svgComponent) {
        that.components.push(svgComponent);
    };
    
    that.unregisterComponent = function(svgComponent) {
        REX.HELPERS.remove(that.components, svgComponent);
    };
    
    /**
     * Return components from cvomponent list by ID
     * @param {type} id same as a elemnt ID
     * @returns {REX.UI.SVG.Component} Found component or null
     */
    that.getComponentById = function(id){
        for(var i=0; i<that.components.length; i++){
            if(id === that.components[i].id){
                return that.components[i];
            }
        }
        return null;
    };
       
    /**
     * Main initialization function. It is neccessary to call this function after SVG document is loaded
     * @param {type} svg - main svg to initialize
     */
    that.init = function(svg){
        if(!svg) throw "SVG init failed";
        
        // Load alement with definitions for futher use
        var defs = null;
        var defs_elems = svg.getElementsByTagNameNS(REX.HELPERS.ns_svg,"defs");
        if(defs_elems.length>0){
            defs = defs_elems[0];
        }
        else{
            defs = document.createElementNS(REX.HELPERS.ns_svg,"defs");
            svg.appendChild(defs);
        }
        var $svg = $(svg);
        // Load HMIConfig first
        $svg.find('[rexsvg\\:module="HMIConfig"]').each(function(index, item) {
            var module = this.getAttribute("rexsvg:module") || "";
            var component = REX.UI.SVG.HMIConfig(item,
                                {type: module,svg: svg,defs: defs});
            // Run init function if present
            if (component.init)
                component.init();
            that.registerComponent(component);
        });

        // Load all modules
        $svg.find('[rexsvg\\:module]').not('[rexsvg\\:module="HMIConfig"]')
                .each(function(index,item) {
            var module = this.getAttribute("rexsvg:module") || "";
            if (REX.UI.SVG[module]) {
                // Create new component using module specified by id of the svg element
                        var component = REX.UI.SVG[module](item,
                                {type: module, svg: svg, defs: defs});
                // Run init function if present
                if (component.init)
                    component.init();
                that.registerComponent(component);

            }
        });
    };
    
    return that;
}();

/** Extends base event component and create SVG component
 * @param {DOMElement} element 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT} 
 * @returns {REX.UI.SVG.Component}
 */
REX.UI.SVG.Component = function(element,args){
    var that = Object.create(REX.BASE.EventComponent());
    args = args || {};
    that.id = element.id;
    that.element = element;    
    // Save root element and defs for futher use
    that.svg = args.svg || null;
    that.defs = args.defs || null;
    
    that.type = args.type || 'BaseComponent';        
    
        
    var title_elem = $("#"+element.id+" > title")[0];        
    var title = title_elem ? title_elem.childNodes[0].nodeValue : null;    
    
    var desc = $("#"+element.id+" > desc")[0];
    
    // Load component parameters from DESC element
    if (desc) {
        var desc_json;
        try {
            desc_json = JSON.parse(desc.childNodes[0].nodeValue);
        }
        catch (err) {
            REX.LOG.error('Failed to parse options from DESC tag in ' + element.id);
        }
        if (desc_json) {
            that.$c = initConnections(desc_json['connections']);
            that.options = desc_json.options || {};
        }
    }
    else {
        REX.LOG.error('Element ' + element.id + " has no description tag");
    }
    
    function initConnections(conn){
        if(!conn) return {};
        var $c = {};
        // Add array of connection objects
        if(conn instanceof Array){
            for(var i=0; i<conn.length; i++){
                REX.WebVis.addItem(
                        conn[i].alias,
                        replaceString(conn[i].cstring),
                        conn[i].type);
            }            
        }
        else{
            for (var prop in conn){
                if(conn.hasOwnProperty(prop)){
                    if(conn[prop] instanceof Object){
                        // If Object than add new item
                        if(conn[prop].cstring){
                        $c[prop] = REX.WebVis.addItem(
                        conn[prop].alias,
                        replaceString(conn[prop].cstring),
                        conn[prop].type);
                        }
                        else {
                            $c[prop] = REX.WebVis.$i(conn[prop].alias);
                            if (!$c[prop]) {
                                REX.LOG.error(element.id + ": Alias " + itemStr + " is not found");
                                // Assign empty Item to prevend error during initialization
                                $c[prop] = REX.WS.Item();
                            }
                        }
                    }
                    // Othewise find item according to the alias
                    else{
                        var itemStr = replaceString(conn[prop]);
                        var item = REX.WebVis.$i(itemStr);
                        if(item){$c[prop] = item;}
                        else{
                            REX.LOG.error(element.id + ": Alias "+itemStr+" is not found");                            
                            // Assign empty Item to prevend error during initialization
                            $c[prop] = REX.WS.Item();
                        }
                         
                    }
                }
            }
        }
        
        return $c;
    }
    
    /** Replace string marks with title string, etc.
     * @param {String} str String with replace marks ie. $T - replaced by title
     */
    function replaceString(str){
        return (title ? str.replace('$T',title):str);
    }
    
    /**
     * Get child element based on the ID or ID prefix
     * @param {DOMElement} element Root element, where search for the child begins
     * @param {String} childId ID or prefix ID of the child element
     */
    function getChildOfElementById(element, childId)
    {
        var childNodes = Array.prototype.slice.call(element.childNodes);

        for (var i = 0; i < childNodes.length; i++) {
            var item = childNodes[i];
            var id = item.id;
            if (id && ((id === childId) || (id.indexOf(childId + "-") === 0))) {
                return item;
            }
            childNodes = childNodes.concat(Array.prototype.slice.call(item.childNodes));
        }
    }
    
     /**
     * Get child element based on the REX:SVG module
     * @param {DOMElement} element Root element, where search for the child begins
     * @param {String} childModule child attribute rexsvg:module
     * @
     */
    function getChildOfElementByTag(element, childModule)
    {
        var childNodes = Array.prototype.slice.call(element.childNodes);

        for (var i = 0; i < childNodes.length; i++) {
            var item = childNodes[i];
            if(item.getAttribute){ var tag = item.getAttribute("rexsvg:tag") || "";}
            if (tag === childModule) {
                return item;
            }
            childNodes = childNodes.concat(Array.prototype.slice.call(item.childNodes));
        }
    }
    
    /**
     * @deprecated Use getChildByTag instead
     * Find child of current component based on the ID or ID prefix
     * @param {Strin} child ID or ID prefix of the child
     * @return {DOMElement} Found child or null 
     */
    that.getChild = function(child){
        REX.LOG.warn("Deprecated: Function getChild is deprecated use getChildByTag instead");
        return getChildOfElementById(that.element,child);
    };
    
    /**
     * Find child of current component based on the REX:SVG module
     * @param {String} module attribute rexsvg:module of child element
     * @return {DOMElement} Found child or null 
     */
    that.getChildByTag = function(tag){
        return getChildOfElementByTag(that.element,tag);
    };    
    
    return that;
};

/**
 * SVG component represents Air filter.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.HMIConfig} New SVG Air Filter component
 */
REX.UI.SVG.HMIConfig = function(svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var options = that.options || {};

    for (var o in options) {
        if (options.hasOwnProperty(o)) {
            if (options[o]) {
                switch (o.toLowerCase()) {
                    case "ws_ip":
                        REX.WebVis.setWsIP(options[o]);
                        break;
                    case "target_ip":
                        REX.WebVis.setTargetIP(options[o]);
                        break;
                    case "refresh_rate":
                        if (REX.HELPERS.isNumber(options[o])) {
                            REX.WebVis.setRefreshRate(Number(options[o]));
                        }
                        else {
                            REX.LOG.warn("HMIConfig: Refresh rate is not number, default value is used");
                        }
                        break;
                    case "disable_log":
                        if (REX.HELPERS.parseBoolean(options[o])) {
                            REX.WebVis.disableLog();
                        }
                        break;
                    default:
                        REX.LOG.error("HMIConfig: Unknown option " + o);
                }
            }
        }
    }
    // Hide element after initialization
    that.element.setAttribute('visibility', 'hidden');

    return that;
};
