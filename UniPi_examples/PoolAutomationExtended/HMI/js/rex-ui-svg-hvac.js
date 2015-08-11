/* HVAC
* Version 0.7.185
* Created 2015-08-04 11:08 */

/**
 * SVG component represents Air filter.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Air Filter component
 */
REX.UI.SVG.AirFilter = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var ofuse = that.getChildByTag("upperRect"),
        ofilter = that.getChildByTag("mainRect");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.DIRTY.on('change',function (i){
      if(i.getValue()){
        ofuse.style.fill = warning_color;
        ofilter.style.fill = warning_color;
      }else{
        ofuse.style.fill = "white";
        ofilter.style.fill = "white";
      }
      });
      
      return that;
};
 /**
 * SVG component represents Circulator.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Circulator component
 */
REX.UI.SVG.Circulator = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';
    
    //var on = 0;

    // Get SVG elements for manipulation
    var oenable = that.getChildByTag("enable"),
        oheat1 = that.getChildByTag("oheat1"),
        oheat2 = that.getChildByTag("oheat2"),
        oheat3 = that.getChildByTag("oheat3");
    //oheat1.endElement();
    //oheat2.endElement();
   // oheat3.endElement();
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.ENABLE.on('change',function (i){
      oenable.style.fill = i.getValue() ? on_color:"white";
      });
      
    that.$c.OHEAT.on('change',function (i){
	if(i.getValue()) oenable.style.fill=error_color;
      
      //~ if(i.getValue() && !on){
        //~ oheat1.beginElement();
        //~ oheat2.beginElement();
        //~ oheat3.beginElement();
      //~ } else if(!i.getValue()){
        //~ oheat1.endElement();
        //~ oheat2.endElement();
        //~ oheat3.endElement();
      //~ }
      //~ on = i.getValue();
      });
      
      return that;
};
/**
* SVG component represents Closing Damper.
* @param {SVGElement} svgElem
* @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
* @returns {REX.UI.SVG.Fan} New SVG Closing Damper component
*/
REX.UI.SVG.ClosingDamper = function(svgElem,args) {
// Inherit from base component
var that = Object.create(REX.UI.SVG.Component(svgElem,args));
// Store options for simple usage
var $o = that.options || {};

// Load options or default values
var on_color = $o.on_color || '#00ff00';
var error_color = $o.off_color || '#ff0000';
var warning_color = $o.warning_color || '#ffff00';

// Get SVG elements for manipulation
var anime = that.getChildByTag("animation"),
enable = that.getChildByTag("enable");

enable.style.fill = "white";
anime.setAttribute("dur", $o.open_time);

// Add anonymous function as event listener. There are two events
// 'change' - called for the first time and every time item value is changed
that.$c.POSITION.on('change',function (i){
var angle = i.getValue() ? 1 : 0;
if(angle) {
anime.beginElement();
anime.setAttribute("from" ,"90 20.5 20");
anime.setAttribute("to" , "0 20.5 20");
//setTimeout(function(){anime.setAttribute("to" , "0 20.5 20")}, $o.open_time*100);
anime.endElement();
}else{
anime.beginElement();
anime.setAttribute("from" ,"0 20.5 20");
anime.setAttribute("to" , "90 20.5 20");
// setTimeout(function(){anime.setAttribute("to" , "90 20.5 20")}, $o.open_time*100);
anime.endElement();
}
//var angle=i.getValue()*(90)+90;
//anime.setAttribute("to",angle+" "+20.5+" "+20);
//~ if (typeof animeD != 'undefined') {
//~ animeD.setAttribute("to",angle+" "+28+" "+72);
//~ }
//~ if (typeof animeL != 'undefined') {
//~ animeL.setAttribute("to",angle+" "+23+" "+29);
//~ }
//~ if (typeof animeR != 'undefined') {
//~ animeR.setAttribute("to",angle+" "+75+" "+25);
//~ }
//~ if (typeof animeU != 'undefined') {
//~ animeU.setAttribute("to",(angle-90)+" "+20.5+" "+20);
//~ }
});

return that;
};
 /**
 * SVG component represents Damper. 
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Damper component
 */
REX.UI.SVG.Damper = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var anime = that.getChildByTag("animation"),
	      enable = that.getChildByTag("enable");
        
    enable.style.fill = "white";
    
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.POSITION.on('change',function (i){
      var angle=i.getValue()*(90);		 
      anime.setAttribute("from",angle +" "+422.9+" " + 293);
      anime.setAttribute("to",angle +" "+422.9+" " + 293);
      anime.beginElement();
      anime.endElement();
      });    
       
    return that;
};



/**
 * SVG component represents electric air heater.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Electric Air Heater component
 */
REX.UI.SVG.ElAirHeater = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var ofuse = that.getChildByTag("fuse"),
        orect = that.getChildByTag("rect"),
	opower = that.getChildByTag("power");
        
        
    that.$c.ENABLE.on('change',function (i){
      orect.style.fill = i.getValue() ? on_color : "white";
      });
    
    that.$c.CIRCUITBREAKER.on('change',function (i){
      ofuse.style.fill = i.getValue() ? error_color : "white";
      });
      
    that.$c.POWER.on('change',function(i){
      opower.textContent = (i.getValue()).toFixed(0)+"%";
    });
    
        return that;
};

/**
 * SVG component represents exchanger.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Exchanger component
 */
REX.UI.SVG.Exchanger = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var ofuse = that.getChildByTag("fuse"),
        orect = that.getChildByTag("rect");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.ICE.on('change',function (i){
      if(i.getValue()){
        ofuse.style.fill = error_color;
        orect.style.fill = error_color;
      }else{
        ofuse.style.fill = "white";
        orect.style.fill = "white";        
      }
      });

    return that;
};



/**
 * SVG component represents External Thermometer.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG External Thermometer component
 */
REX.UI.SVG.ExternalThermometer = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    

    // Get SVG elements for manipulation
    var otemp = that.getChildByTag("temp");
    
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed  
    that.$c.temp.on('change',function (i){
      otemp.textContent = (i.getValue()).toFixed(1);
      });
	   
    return that;
};

/**
 * SVG component represents Fan with multiple speeds of rotation.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Fan component
 */
REX.UI.SVG.Fan = function (svgElem, args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem, args));
    // Store options for simple usage
    var $o = that.options || {};

    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var ofan = that.getChildByTag("fan"),
            oblades = that.getChildByTag("blades"),
            obox = that.getChildByTag("box"),
            ofuse = that.getChildByTag("fuse"),
            oelectric = that.getChildByTag("electric"),
            obladesanim = that.getChildByTag("animation"),
            power1 = that.getChildByTag("power1"),
            power2 = that.getChildByTag("power2"),
            power3 = that.getChildByTag("power3"),
            oheat = 0,
            run = 0,
            run1 = 0,
            run2 = 0,
            run3 = 0;

    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.OHEAT.on('change', function (i) {
        if (that.$c.OHEAT.getValue()) {
            ofan.style.fill = error_color;
            oelectric.style.fill = error_color;
            oheat = 1;
        } else {
            obox.style.fill = "white";
            ofan.style.fill = "white";
            oelectric.style.fill = "white";
            oheat = 0;
        }
        doRefresh();
    });

    that.$c.RUNNING.on('change', function (i) {
        if (i.getValue()) {
            run = 1;
        } else {
            run = 0;
        }
        doRefresh();
    });

    that.$c.L1.on('change', function (i) {
        if (i.getValue()) {
            run1 = 1;
            obladesanim.setAttribute("dur", "10s");
            power1.style.fill = on_color;
        } else {
            run1 = 0;
            power1.style.fill = "white";
        }
        doRefresh();
    });
    
    // If L2 is set
    if (that.$c.L2) {
        that.$c.L2.on('change', function (i) {
            if (i.getValue()) {
                run2 = 1;
                obladesanim.setAttribute("dur", "5s");
                power2.style.fill = on_color;
            } else {
                run2 = 0;
                obladesanim.setAttribute("dur", "10s");
                power2.style.fill = "white";
            } // Level 1
            doRefresh();
        });
    } else {
        power2.style.visibility = "hidden";
    }
    
    // If L3 is set
    if (that.$c.L3) {
        that.$c.L3.on('change', function (i) {
            if (i.getValue()) {
                run3 = 1;
                obladesanim.setAttribute("dur", "1s");
                power3.style.fill = on_color;
            } else {
                run3 = 0;
                obladesanim.setAttribute("dur", "5s");
                power3.style.fill = "white";
            } // Level 2
            doRefresh();
        });
    } else {
        power3.style.visibility = "hidden";
    }

    var firstRun = true;

    function startAnimation() {
        obladesanim.beginElement();
        firstRun = false;
    }

    function stopAnimation() {
        if (!firstRun) { //Google Chrome workeround
            obladesanim.endElement();
        }
    }

    function doRefresh() {
        stopAnimation();
        if (run1 || run2 || run3) {
            startAnimation();
            ofan.style.fill = warning_color;
            ofuse.style.fill = "white";
            if (run) {
                ofan.style.fill = on_color;
                ofuse.style.fill = on_color;
            }
        } else if (run) {
            startAnimation();
            ofan.style.fill = warning_color;
            ofuse.style.fill = on_color;
        } else if (oheat) {
            ofan.style.fill = error_color;
            ofuse.style.fill = "white";
        } else {
            ofan.style.fill = "white";
            ofuse.style.fill = "white";
        }
    }

    doRefresh();

    return that;
};



/**
 * SVG component represents Gas Boiler with 4 power levels
 * @param {SVGElement} svgElem
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT} 
 * @returns {REX.UI.SVG.GasBoiler} New SVG GasBoiler component
 */
REX.UI.SVG.GasBoiler = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var flame_color = $o.flame_color || "#ffff00";
    var iflame_color = $o.innerFlame_color || "#ffff00";
    var led_color = $o.led_color || "#ff0000";
    var f1on = $o.flame1_on || .20;
    var f2on = $o.flame2_on || .40;
    var f3on = $o.flame3_on || .60;
    var f4on = $o.flame4_on || .80;
    
    // Get SVG elements for manipulation
    var led1 = that.getChildByTag("led1"),
        flame1 = that.getChildByTag("flame1"),iflame1 = that.getChildByTag("innerFlame1"),
        flame2 = that.getChildByTag("flame2"),iflame2 = that.getChildByTag("innerFlame2"),
        flame3 = that.getChildByTag("flame3"),iflame3 = that.getChildByTag("innerFlame3"),
        flame4 = that.getChildByTag("flame4"),iflame4 = that.getChildByTag("innerFlame4");
    
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.ERROR.on('change', function(i) {
        led1.style.fill = that.$c.ERROR.getValue() ? led_color : "none";
    });
    
    that.$c.POWER.on('change', function(i) {
        power=i.getValue();
        if(power<f1on){flame1.style.fill="white";flame2.style.fill="white";flame3.style.fill="white";flame4.style.fill="white";iflame1.style.fill="white";iflame2.style.fill="white";iflame3.style.fill="white";iflame4.style.fill="white";}
        if(power>=f1on&&power<f2on){flame1.style.fill=flame_color;flame2.style.fill="white";flame3.style.fill="white";flame4.style.fill="white";iflame1.style.fill=iflame_color;iflame2.style.fill="white";iflame3.style.fill="white";iflame4.style.fill="white";}
        if(power>=f2on&&power<f3on){flame1.style.fill=flame_color;flame2.style.fill=flame_color;flame3.style.fill="white";flame4.style.fill="white";iflame1.style.fill=iflame_color;iflame2.style.fill=iflame_color;iflame3.style.fill="white";iflame4.style.fill="white";}
        if(power>=f3on&&power<f4on){flame1.style.fill=flame_color;flame2.style.fill=flame_color;flame3.style.fill=flame_color;flame4.style.fill="white";iflame1.style.fill=iflame_color;iflame2.style.fill=iflame_color;iflame3.style.fill=iflame_color;iflame4.style.fill="white";}
        if(power>=f4on){flame1.style.fill=flame_color;flame2.style.fill=flame_color;flame3.style.fill=flame_color;flame4.style.fill=flame_color;iflame1.style.fill=iflame_color;iflame2.style.fill=iflame_color;iflame3.style.fill=iflame_color;iflame4.style.fill=iflame_color;}
    });
    
    return that;
};



/**
 * SVG component represents simple water pump
 * @param {SVGElement} svgElem
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT} 
 * @returns {REX.UI.SVG.Pump} New SVG Pump component
 */
REX.UI.SVG.Pump = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || "#55ff00";
    
    // Get SVG elements for manipulation
    var indicator = that.getChildByTag("indicator");
    
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.ON.on('change', function(i) {
        indicator.style.fill = that.$c.ON.getValue() ? on_color : "none";
    });
    
    return that;
};


	/**
 * SVG component represents Rotary Exchanger.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Rotary Exchanger component
 */
REX.UI.SVG.RotExchanger = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var gPower = that.getChildByTag("onOffRect"),
        gRot = that.getChildByTag("animation"),
        gArrow = that.getChildByTag("arrow");
        gRot.endElement();
        gArrow.endElement();
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed
    that.$c.ICE.on('change',function (i){
      if(i.getValue()){
        ofuse.style.fill = error_color;
        orect.style.fill = error_color;
      }else{
        ofuse.style.fill = "white";
        orect.style.fill = "white";        
      }
      });

    return that;
};  
  //~ this.rotates = 0;
	//~ this.vPower=0;

	
//~ RotaryExchangerFcn.prototype.onChangeExchanger = function(item) {
	//~ this.vPower = item.getValue()?1:0;
	//~ this.doRefresh();
 //~ }

//~ RotaryExchangerFcn.prototype.doRefresh = function() {
 	//~ this.gPower.style.fill = this.vPower ? "green":"none";
	
	  //~ if (this.vPower) {
		//~ this.gRot.setAttribute("dur", "4s");
		//~ this.gArrow.setAttribute("dur", "4s");
	//~ }
		
	//~ if(this.vPower && !this.rotates) {
		//~ this.gRot.beginElement();
		//~ this.gArrow.beginElement();
	//~ } else 
	//~ if(!this.vPower) {
		//~ this.gRot.endElement();
		//~ this.gArrow.endElement();
	//~ }
	//~ this.rotates = this.vPower;
//~ }

/**
 * SVG component represents T Valve.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG T Valve component
 */
REX.UI.SVG.AirFilter = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var ofuse = that.getChildByTag("upperRect"),
        ofilter = that.getChildByTag("mainRect");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.DIRTY.on('change',function (i){
      if(i.getValue()){
        ofuse.style.fill = warning_color;
        ofilter.style.fill = warning_color;
      }else{
        ofuse.style.fill = "white";
        ofilter.style.fill = "white";
      }
      });
      
      return that;
};
/**
 * SVG component represents Thermometer.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Thermometer component
 */
REX.UI.SVG.Thermometer = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    

    // Get SVG elements for manipulation
    var otemp = that.getChildByTag("temp");
    
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed  
    that.$c.temp.on('change',function (i){
      otemp.textContent = (i.getValue()).toFixed(1);
      });
	   
    return that;
};

/**
 * SVG component represents Thermostat.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG Thermostat component
 */
REX.UI.SVG.Thermostat = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var otherm = that.getChildByTag("therm");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.THERM.on('change',function (i){
      otherm.style.fill = i.getValue() ? on_color:"white";
      });
      
      return that;
};
/**
 * SVG component represents ThermostatThree.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG ThermostatThree component
 */
REX.UI.SVG.ThermostatThree = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var otherm1 = that.getChildByTag("therm1"),
        otherm2 = that.getChildByTag("therm2"),
        otherm3 = that.getChildByTag("therm3");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.THERM.on('change',function (i){
      otherm1.style.fill = i.getValue() ? on_color:"white";
    });
    that.$c.THERMTWO.on('change',function (i){
      otherm2.style.fill = i.getValue() ? error_color:"white";
    });
    that.$c.THERMTHREE.on('change',function (i){
      otherm3.style.fill = i.getValue() ? warning_color:"white";
    });
      
      return that;
};
/**
 * SVG component represents ThermostatTwo.
 * @param {SVGElement} svgElem 
 * @param {Object} args It is possible to specify {type:"",svg:SVG_ELEMENT,defs:DEFS_ELEMENT}
 * @returns {REX.UI.SVG.Fan} New SVG ThermostatTwo component
 */
REX.UI.SVG.ThermostatTwo = function(svgElem,args) {
    // Inherit from base component
    var that = Object.create(REX.UI.SVG.Component(svgElem,args));
    // Store options for simple usage
    var $o = that.options || {};    
    
    // Load options or default values
    var on_color = $o.on_color || '#00ff00';
    var error_color = $o.off_color || '#ff0000';
    var warning_color = $o.warning_color || '#ffff00';

    // Get SVG elements for manipulation
    var otherm1 = that.getChildByTag("therm1"),
        otherm2 = that.getChildByTag("therm2");
        
    // Add anonymous function as event listener. There are two events
    // 'read' - it is called every time when item is read
    // 'change' - called for the first time and every time item value is changed    
    that.$c.THERM.on('change',function (i){
      otherm1.style.fill = i.getValue() ? on_color:"white";
    });
    that.$c.THERMTWO.on('change',function (i){
      otherm2.style.fill = i.getValue() ? error_color:"white";
    });
      
      return that;
};

