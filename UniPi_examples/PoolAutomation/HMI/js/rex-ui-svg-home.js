/* HOME
* Version 0.1.126
* Created 2014-10-27 17:10 */

/**
 * SVG component represents AirCirculator.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.AirCirculator} New SVG AirCirculator component
 */

REX.UI.SVG.AirCirculator = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var runColor = $o.colorRun,
        stopColor = $o.colorStop;
 
    // Get SVG elements for manipulation
    var airCirculator = that.getChildByTag("airCirculator_area"),
        rotationCenter = that.getChildByTag("middle_circle"),
        backCircle = that.getChildByTag("back_circle"),
        blades = that.getChildByTag("blades"),
        animation = that.getChildByTag("blades_animation");

    //Global variables
    var begin = false;

    //createAnimation();

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            backCircle.style.fill = runColor;
            if (!begin) {
                animation.beginElement();
                begin = true;
            }
        }
        else {
            backCircle.style.fill = stopColor;
            if (begin) {
                animation.endElement();
                begin = false;
            }
        }
    });

/*
    function createAnimation() {
        var animElem = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        animElem.setAttributeNS(null, "attributeName", "transform");
        animElem.setAttributeNS(null, "attributeType", "XML");
        animElem.setAttributeNS(null, "type", "rotate");
        animElem.setAttributeNS(null, "fill", "freeze");
        animElem.setAttributeNS(null, "dur", "1s");
        animElem.setAttributeNS(null, "repeatCount", "indefinite");
        animElem.setAttributeNS(null, "begin", "0s");
        animElem.setAttributeNS(null, "from", "0 " + pumpCenter.getBBox().x + pumpCenter.getBBox().width / 2 + " " + pumpCenter.getBBox().y + pumpCenter.getBBox().height / 2);
        animElem.setAttributeNS(null, "to", "360 " + pumpCenter.getBBox().x + pumpCenter.getBBox().width / 2 + " " + pumpCenter.getBBox().y + pumpCenter.getBBox().height / 2);
        blades.appendChild(animElem);
        animation = animElem;
    }*/

    return that;
};

/**
 * SVG component represents Boiler.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Boiler} New SVG Boiler component
 */

REX.UI.SVG.Boiler = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
 
    // Get SVG elements for manipulation
    var boilerArea = that.getChildByTag("boiler_area"),
        fire = that.getChildByTag("fire");

    //Global variables
    var settemp;
    var currenttemp;
    var boileron;

    that.$c.SETTEMP.on('change', function (itm) {
        settemp = itm.getValue();
    });

    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            boileron = true;
            fire.style.opacity = "1";
        } else {
            boileron = false;
            fire.style.opacity = "0";
        }
    });

    that.$c.CURRENTTEMP.on('change', function (itm) {
        currenttemp = itm.getValue();
        if (boileron) {
            if (settemp < currenttemp) fire.style.opacity = "0.2";
            else fire.style.opacity = "1";
        } else {
            fire.style.opacity = "0";
        }
    });

    return that;
};

/**
 * SVG component represents Filter.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Filter} New SVG Filter component
 */

REX.UI.SVG.Filter = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var onColor = $o.colorOn || "#33ee00",
        offColor = $o.colorOff || "#ececec";
 
    // Get SVG elements for manipulation
    var filterArea = that.getChildByTag("filter_area"),
        filterWindow = that.getChildByTag("filter_window");

    //Global variables

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) filterWindow.style.fill = onColor;
        else  filterWindow.style.fill = offColor;
    });

    return that;
};

/**
 * SVG component represents HandleValve.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.HandleValve} New SVG HandleValve component
 */

REX.UI.SVG.HandleValve = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var initialPosition = $o.initialPosition || null;
 
    // Get SVG elements for manipulation
    var valveArea = that.getChildByTag("valve_area"),
        handle = that.getChildByTag("handle"),
        centerPoint = that.getChildByTag("center_point");

    //Global variables
    var centerX = centerPoint.getBBox().x + centerPoint.getBBox().width / 2,
        centerY = centerPoint.getBBox().y + centerPoint.getBBox().height / 2,
        currentPosition,
        init = false;

    valveArea.addEventListener("click", switchPosition, false);

    function switchPosition(event) {
        if (currentPosition == 0) {
            handle.setAttributeNS(null, "transform", "rotate(" + -90 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW_W.setValue(true, true);
            currentPosition = 1;
        } else {
            handle.setAttributeNS(null, "transform", "rotate(" + 0 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW_W.setValue(false, true);
            currentPosition = 0;
        }
    }

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.FLOW_R.on('change', function (itm) {
        if (!itm.getValue()) {
            handle.setAttributeNS(null, "transform", "rotate(" + 0 + "," + centerX + "," + centerY + ")");
            currentPosition = 0;
        } else {
            handle.setAttributeNS(null, "transform", "rotate(" + -90 + "," + centerX + "," + centerY + ")");
            currentPosition = 1;
        }
        if (!init && initialPosition != null) {
            if (initialPosition.toLowerCase() == "off"){ 
                that.$c.FLOW_W.setValue(false, true);
            }
            else if (initialPosition.toLowerCase() == "on") {
                that.$c.FLOW_W.setValue(true, true);
            }
            init = true;
        }
    });

    return that;
};

/**
 * SVG component represents HandleValveT.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.HandleValveT} New SVG HandleValveT component
 */

REX.UI.SVG.HandleValveT = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var initialPosition = $o.initialPosition || null;
 
    // Get SVG elements for manipulation
    var valveArea = that.getChildByTag("valve_area"),
        handle = that.getChildByTag("handle"),
        centerPoint = that.getChildByTag("center_point");

    //Global variables
    var centerX = centerPoint.getBBox().x + centerPoint.getBBox().width / 2,
        centerY = centerPoint.getBBox().y + centerPoint.getBBox().height / 2,
        currentPosition,
        init = false;

    valveArea.addEventListener("click", switchPosition, false);

    function switchPosition(event) {
        if (currentPosition == 1) {
            handle.setAttributeNS(null, "transform", "rotate(" + -180 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW1_W.setValue(false, true);
            that.$c.FLOW2_W.setValue(true, true);
            currentPosition = 2;
        } else {
            handle.setAttributeNS(null, "transform", "rotate(" + -90 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW2_W.setValue(false, true);
            that.$c.FLOW1_W.setValue(true, true);
            currentPosition = 1;
        }
    }

    that.$c.FLOW1_R.on('change', function (itm) {
        if (itm.getValue()) {
            handle.setAttributeNS(null, "transform", "rotate(" + -90 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW1_W.setValue(true, true);
            that.$c.FLOW2_W.setValue(false, true);
            currentPosition = 1;
        } else {
            handle.setAttributeNS(null, "transform", "rotate(" + -180 + "," + centerX + "," + centerY + ")");
            that.$c.FLOW2_W.setValue(true, true);
            that.$c.FLOW1_W.setValue(false, true);
            currentPosition = 2;
        }
        if (!init && initialPosition != null) {
            if (initialPosition.toLowerCase() == "1"){ 
                that.$c.FLOW1_W.setValue(true, true);
            }
            init = true;
        }
    });

    that.$c.FLOW2_R.on('change', function (itm) {
        if (itm.getValue()) {
            handle.setAttributeNS(null, "transform", "rotate(" + -180 + "," + centerX + "," + centerY + ")");
            currentPosition = 2;
        }
        else {
            handle.setAttributeNS(null, "transform", "rotate(" + -90 + "," + centerX + "," + centerY + ")");
            currentPosition = 1;
        }
        if (!init && initialPosition != null) {
            if (initialPosition.toLowerCase() == "2") {
                that.$c.FLOW2_W.setValue(true, true);
            }
            init = true;
        }
    });

    return that;
};

/**
 * SVG component represents Heater.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Heater} New SVG Heater component
 */

REX.UI.SVG.Heater = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var heatingColor = $o.colorHeating || "#ff0000",
        coolingColor = $o.colorCooling || "#0000ff",
        offColor = $o.colorOff || "#808080";
 
    // Get SVG elements for manipulation
    var heaterArea = that.getChildByTag("heater_area"),
        spiral = that.getChildByTag("spiral");

    //Global variables
    var settemp;
    var currenttemp;
    var heateron;

    that.$c.SETTEMP.on('change', function (itm) {
        settemp = itm.getValue();
    });

    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            heateron = true;
        } else {
            heateron = false;
        }
    });

    that.$c.CURRENTTEMP.on('change', function (itm) {
        currenttemp = itm.getValue();
        if (heateron) {
            if (settemp <= currenttemp) spiral.style.fill = coolingColor;
            else spiral.style.fill = heatingColor;
        } else {
            spiral.style.fill = offColor;
        }
    });

    return that;
};

/**
 * SVG component represents Heating.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Heating} New SVG Heating component
 */

REX.UI.SVG.Heating = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var colorOn = $o.colorOn || "#33ee00",
        colorOff = $o.colorOff || "#808080";
 
    // Get SVG elements for manipulation
    var heaterArea = that.getChildByTag("heating_area"),
        heating = that.getChildByTag("heating");

    //Global variables
    var settemp;
    var currenttemp;
    var heatingon;

    that.$c.SETTEMP.on('change', function (itm) {
        settemp = itm.getValue();
    });

    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            heatingon = true;
        } else {
            heatingon = false;
        }
    });

    that.$c.CURRENTTEMP.on('change', function (itm) {
        currenttemp = itm.getValue();
        if (heatingon) {
            if (settemp <= currenttemp) heating.style.fill = colorOff;
            else heating.style.fill = colorOn;
        } else {
            heating.style.fill = colorOff;
        }
    });

    return that;
};

/**
 * SVG component represents Motor.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Motor} New SVG Motor component
 */

REX.UI.SVG.Motor = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var runColor = $o.colorRun,
        stopColor = $o.colorStop;
        //failColor = $o.colorFail;
 
    // Get SVG elements for manipulation
    var motorArea = that.getChildByTag("motor_area"),
        motorCover = that.getChildByTag("motor_cover"),
        ribs = that.getChildByTag("rib");

    //Global variables
    //var fault = false;

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.POWER.on('change', function (itm) {
        //if (!fault) {
            if (itm.getValue()) {
                motorCover.style.fill = runColor;
                ribs.style.fill = runColor;
            }
            else {
                motorCover.style.fill = stopColor;
                ribs.style.fill = "#f2f2f2";
            }
        /*} else {
            motorCover.style.fill = failColor;
            ribs.style.fill = failColor;
        }*/
    });

    return that;
};

/**
 * SVG component represents Pipe.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Pipe} New SVG Pipe component
 */

REX.UI.SVG.Pipe = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
   var ocmi = $o.colorMin || ' ',
            ocma = $o.colorMax || ' ',
            R_min = hexToR(ocmi) || 0,
            G_min = hexToG(ocmi) || 0,
            B_min = hexToB(ocmi) || 0,
            R_max = hexToR(ocma) || 0,
            G_max = hexToG(ocma) || 0,
            B_max = hexToB(ocma) || 0;

    // Get SVG elements for manipulation
    var area = that.getChildByTag("area");
    var gradient = that.getChildByTag("gradient");
    area.style.fill="url(#"+gradient.id+")";
    
    //for elbow
    if(gradient.id.search("radial") !== -1){
      var linGrad=that.getChildByTag("linGrad");
      gradient.setAttribute("xlink:href","#"+linGrad.id);
    }
    
    //for pipeEnding
    try {
      var area2 = that.getChildByTag("area2");
      area2.style.fill="url(#"+gradient.id+")";
    }
    catch(err) {}
    
    //for tPipe 
    try {
      var areaV = that.getChildByTag("areaV");
      var gradientV = areaV.style.fill.slice(5,-1);
      gradientV = that.svg.getElementById(gradientV);
      gradientV.setAttribute("xlink:href","#"+gradient.id);
    }
    catch(err) {}
    
    
    
    //var gradient = that.svg.getElementById(area.style.fill.slice(5,-1));
    var stopCol = that.getChildByTag("color");

    //Global variables
    //var fault = false;

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.COLOR.on('change', function (itm) {
       var value = itm.getValue();
       if (REX.HELPERS.isNumber(value)) {
            var R, G, B, X;
            
            if (value > $o.colorSignalMin && value < $o.colorSignalMax) {
                R = Math.round(R_min + ((R_max - R_min) * (value - $o.colorSignalMin)) / ($o.colorSignalMax - $o.colorSignalMin));
                G = Math.round(G_min + ((G_max - G_min) * (value - $o.colorSignalMin)) / ($o.colorSignalMax - $o.colorSignalMin));
                B = Math.round(B_min + ((B_max - B_min) * (value - $o.colorSignalMin)) / ($o.colorSignalMax - $o.colorSignalMin));
                X = rgbToHex(R, G, B);
                stopCol.style.stopColor = X;
            }
            else if (value <= $o.colorSignalMin) {
                stopCol.style.stopColor = $o.colorMin;
            }
            else if (value >= $o.colorSignalMax) {
                stopCol.style.stopColor = $o.colorMax;
            }
            else {
                stopCol.style.stopColor = "grey";
            }
        } else if (typeof value === 'string') {
            stopCol.style.stopColor = value;
        }
        
        $(that.svg).hide().show(0);
        
    });
    
    function rgbToHex(R, G, B) {
        return '#' + toHex(R) + toHex(G) + toHex(B);
    }
    function toHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }
    ;
    function hexToR(h) {
        return parseInt((cutHex(h)).substring(0, 2), 16);
    }
    ;
    function hexToG(h) {
        return parseInt((cutHex(h)).substring(2, 4), 16);
    }
    ;
    function hexToB(h) {
        return parseInt((cutHex(h)).substring(4, 6), 16);
    }
    ;
    function cutHex(h) {
        return (h.charAt(0) === "#") ? h.substring(1, 7) : h;
    }
    ;

    return that;
};
/**
 * SVG component represents Pump.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Pump} New SVG Pump component
 */

REX.UI.SVG.PumpRotation = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var runColor = $o.colorRun,
        //failColor = $o.colorFail || "#ff0000",
        stopColor = $o.colorStop;
 
    // Get SVG elements for manipulation
    var pumpArea = that.getChildByTag("pump_area"),
        pumpCenter = that.getChildByTag("pump_center"),
        blades = that.getChildByTag("blades"),
        animation = that.getChildByTag("blades_animation");

    //Global variables
    //var fault = false;
    var begin = false;

    //createAnimation();

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.POWER.on('change', function (itm) {
        //if (!fault) {
            if (itm.getValue()) {
                pumpCenter.style.fill = runColor;
                if (!begin) {
                    animation.beginElement();
                    begin = true;
                }
            }
            else {
                pumpCenter.style.fill = stopColor;
                if (begin) {
                    animation.endElement();
                    begin = false;
                }
            }
        /*} else {
            pumpCenter.style.fill = failColor;
            animation.endElement();
            begin = false;
        }*/
    });

/*
    function createAnimation() {
        var animElem = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        animElem.setAttributeNS(null, "attributeName", "transform");
        animElem.setAttributeNS(null, "attributeType", "XML");
        animElem.setAttributeNS(null, "type", "rotate");
        animElem.setAttributeNS(null, "fill", "freeze");
        animElem.setAttributeNS(null, "dur", "1s");
        animElem.setAttributeNS(null, "repeatCount", "indefinite");
        animElem.setAttributeNS(null, "begin", "0s");
        animElem.setAttributeNS(null, "from", "0 " + pumpCenter.getBBox().x + pumpCenter.getBBox().width / 2 + " " + pumpCenter.getBBox().y + pumpCenter.getBBox().height / 2);
        animElem.setAttributeNS(null, "to", "360 " + pumpCenter.getBBox().x + pumpCenter.getBBox().width / 2 + " " + pumpCenter.getBBox().y + pumpCenter.getBBox().height / 2);
        blades.appendChild(animElem);
        animation = animElem;
    }*/

    return that;
};

/**
 * SVG component represents Shower.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Shower} New SVG Shower component
 */

REX.UI.SVG.Shower = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
 
    // Get SVG elements for manipulation
    var showerArea = that.getChildByTag("shower_area"),
        showerPipe = that.getChildByTag("shower_pipe"),
        drops1 = that.getChildByTag("drops1"),
        drops2 = that.getChildByTag("drops2");

    //Global variables

    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            showerPipe.style.fill = "#0000ff";
            showerPipe.style.fillOpacity = "0.4";
            drops1.style.fillOpacity = "1";
            drops2.style.fillOpacity = "1";
        } else {
            showerPipe.style.fill = "#ececec";
            showerPipe.style.fillOpacity = "1";
            drops1.style.fillOpacity = "0";
            drops2.style.fillOpacity = "0";
        }
    });

    return that;
};

/**
 * SVG component represents Tank.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Tank} New SVG Tank component
 */

REX.UI.SVG.Tank = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var capacity = $o.capacity || 100,
        levelColor = $o.colorOfLevel|| "#0000ff";
 
    // Get SVG elements for manipulation
    var tankArea = that.getChildByTag("tank_area"),
        levelWindow = that.getChildByTag("level_window");

    //Global variables
    var tankLevel;

    createLevel();

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.LEVEL.on('change', function (itm) {
        var currentLevel = itm.getValue();
        if (currentLevel >= 0 && currentLevel <= capacity) {
            tankLevel.setAttributeNS(null, "height",(levelWindow.getBBox().height * currentLevel / capacity));
        } else {
            if (currentLevel > capacity) {
                tankLevel.setAttributeNS(null, "height", levelWindow.getBBox().height);
            } else {
                tankLevel.setAttributeNS(null, "height", 0);       
            }   
        }
    });

    function createLevel(){
        var x = levelWindow.getBBox().x;
        var y = levelWindow.getBBox().y + levelWindow.getBBox().height;
        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttributeNS(null, "x", x + 1);
        rect.setAttributeNS(null, "y", y);
        rect.setAttributeNS(null, "width", levelWindow.getBBox().width - 2);
        rect.setAttributeNS(null, "height", 0);
        rect.setAttributeNS(null, "style", "fill:"+ levelColor);
        tankArea.appendChild(rect);
        rect.setAttributeNS(null, "transform", "rotate(" + 180 + "," + (levelWindow.getBBox().x + levelWindow.getBBox().width / 2) + "," + (levelWindow.getBBox().y + levelWindow.getBBox().height) + ")");
        tankLevel = rect;
    }

    return that;
};

/**
 * SVG component represents WaterBoiler.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.WaterBoiler} New SVG WaterBoiler component
 */

REX.UI.SVG.WaterBoiler = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Get options or default values
    var heatingColor = $o.colorHeating || "#ff0000",
        coolingColor = $o.colorCooling || "#0000ff",
        offColor = $o.colorOff || "#808080";
 
    // Get SVG elements for manipulation
    var boilerArea = that.getChildByTag("boiler_area"),
        levelWindow = that.getChildByTag("level_window"),
        spiral = that.getChildByTag("spiral");

    //Global variables
    var settemp;
    var currenttemp;
    var heateron;

    that.$c.SETTEMP.on('change', function (itm) {
        settemp = itm.getValue();
    });

    that.$c.POWER.on('change', function (itm) {
        if (itm.getValue()) {
            heateron = true;
            levelWindow.style.fill = "#00bbff";
        } else {
            heateron = false;
            levelWindow.style.fill = "#f2f2f2";
        }
    });

    that.$c.CURRENTTEMP.on('change', function (itm) {
        currenttemp = itm.getValue();
        if (heateron) {
            if (settemp <= currenttemp) spiral.style.fill = coolingColor;
            else spiral.style.fill = heatingColor;
        } else {
            spiral.style.fill = offColor;
        }
    });

    return that;
};


