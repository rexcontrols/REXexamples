/* REX UI SVG JS library
* Authors: Ondrej Severa, Lubomir Kristek
* Version 0.7.185
* Created 2015-08-04 11:08 */

// Create new namespace
extend(REX,"UI.SVG");

var REX_SVG_NS = "http://www.rexcontrols.com/rexsvg/";
// Get current epoch in current time and substract timezone offset to get millisenconds from
// UTC time
var EPOCH_START = new Date(2000, 0, 1).getTime()-new Date(2000, 0, 1).getTimezoneOffset()*60*1000;

$(document).ready(function() {
    var svgs = $('#content svg[rexsvg\\:module="REXSVG"]');
    if (svgs.length > 0) {
        for (var i = 0; i < svgs.length; i++) {
            REX.UI.SVG.init(svgs[i]);
        }
        REX.HMI.connect();
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
                if (conn[i].alias && replaceString(conn[i].cstring) && conn[i].type) {
                    REX.HMI.addItem(
                            conn[i].alias,
                            replaceString(conn[i].cstring),
                            conn[i].type);
                }
                else{
                    REX.LOG.error('alias: ' + conn[i].alias 
                            + ' cstring: ' + replaceString(conn[i].cstring)
                            + ' or type:' + conn[i].type + ' is not defined');
                }
            }            
        }
        else{
            for (var prop in conn){
                if(conn.hasOwnProperty(prop)){
                    if(conn[prop] instanceof Object){
                        // If Object than add new item
                        if(conn[prop].cstring){
                        $c[prop] = REX.HMI.addItem(
                        conn[prop].alias,
                        replaceString(conn[prop].cstring),
                        conn[prop].type);
                        }
                        else {
                            $c[prop] = REX.HMI.$i(conn[prop].alias);
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
                        var item = REX.HMI.$i(itemStr);
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
    
    that.check = function (value, defaultVal) {
        return (typeof value === 'undefined') ? defaultVal : value;
    };
    
    that.checkNumber = function (value, defaultVal) {
        if (typeof value === 'undefined'){
            return defaultVal;
        }        
        if(REX.HELPERS.isNumber(value)){
            return parseFloat(value);
        }
        else {            
            REX.LOG.error('Parameter '+value+' is not number, using defaultValue');
            return defaultVal;
        }
    };
    
    that.parseBoolean = function (string) {
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
    that.getDateFromREXSeconds = function(rexSeconds) {
        var date = new Date((rexSeconds * 1000) + EPOCH_START);
        return date;
    };

    that.getREXSecondsFromDate= function(date) {
        return (date.getTime() - EPOCH_START) / 1000;
    };

    /**
     Parse time in format "hh:mm:ss" or "hh:mm"
     */
    that.str2time= function(str) {
        if (str.indexOf(':') === -1) {
            return Number.NaN;
        }
        var timearr = str.split(':');
        // "hh:mm"
        if (timearr.length === 2) {
            return Number(timearr[0]) * 3600 + Number(timearr[1]) * 60;
        }
        // "hh:mm:ss"
        if (timearr.length === 3) {
            return Number(timearr[0]) * 3600 + Number(timearr[1]) * 60 +
                    Number(timearr[2]);
        } else {
            return Number.NaN;
        }
    };

    that.time2str= function(totSec, format) {
        if (totSec < 0) {
            totSec = (3600 * 24) + totSec;
        }
        var hours = parseInt(totSec / 3600) % 24;
        var minutes = parseInt(totSec / 60) % 60;
        var seconds = totSec % 60;

        var result = (hours < 10 ? "0" + hours : hours) +
                ":" + (minutes < 10 ? "0" + minutes : minutes);

        if (format && format.toLowerCase() === "hh:mm:ss") {
            result += ":" + (seconds < 10 ? "0" + seconds : seconds);
        }
        return result;
    };

    that.date2str= function(date) {
        var curr_date = date.getDate();
        var curr_month = date.getMonth() + 1; //Months are zero based
        var curr_year = date.getFullYear();
        return (''+curr_year
                + "/" + (curr_month < 10 ? "0" + curr_month : curr_month)       
                + "/" + (curr_date < 10 ? "0" + curr_date : curr_date));
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
                        REX.HMI.setWsIP(options[o]);
                        break;
                    case "target_ip":
                        REX.HMI.setTargetIP(options[o]);
                        break;
                    case "refresh_rate":
                        if (REX.HELPERS.isNumber(options[o])) {
                            REX.HMI.setRefreshRate(Number(options[o]));
                        }
                        else {
                            REX.LOG.warn("HMIConfig: Refresh rate is not number, default value is used");
                        }
                        break;
                    case "disable_log":
                        if (REX.HELPERS.parseBoolean(options[o])) {
                            REX.HMI.disableLog();
                        }
                        break;
                    case "debug":
                        if (REX.HELPERS.parseBoolean(options[o])) {
                            REX.HMI.debug = true;
                            REX.LOG.debug('HMI Config - debug mode enabled!');
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
