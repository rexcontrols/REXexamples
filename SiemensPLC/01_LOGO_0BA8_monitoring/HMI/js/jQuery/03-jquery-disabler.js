/*!
 * jQuery Disabler
 * Author: Doug Estep - Dayton Technology Group.
 * Version 1.1.0
 * 
 * API Documentation:
 *   http://dougestep.com/dme/jquery-disabler-widget 
 * 
 * Depends:
 *   jquery >= 1.7.0 
 *   jquery-ui widget factory >= 1.8.0 
 *   
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($, undefined) {
	var classDisablerContainer = "hasDisabler";
	var classDisablerIgnoreReadOnly = "disabler-ignore-readonly";
	var classDisablerHideReadOnly = "disabler-hide-readonly";
	var classDisablerShowTextReadOnly = "disabler-show-text-readonly";
	var classPanelsDatePicker = "panels-date-picker";
	var classReadOnlyText = "disabler-read-only-text";
	var classReadOnlyRemoveMe = "disabler-read-only-display-as-text";
	var dataReadOnlyByDisabler = "data-disabler-read-only";
	var dataHiddenInputs = "disabler-hidden-inputs";
	var dataAnchorHref = "data-disabler-anchor-href";
	var dataSavedEvents = "disabler-saved-events";
	var dataReadOnlyDisplay = "data-disabler-read-only-display";

	$.widget("dtg.disabler", {
		// default options
		options: {
			// supply true to disable the contents of the plugin; false to enable.
			disable : false,
			// supply true to set all inputable columns within the plugin to read-only.
			readonly : false,
			// the selector expression to use to search through the descendants of each element in the DOM tree 
			expression : "*:not(.disabler-ignore-readonly)",
			// the CSS class to assign to an element being disabled
			disabledClass : "ui-state-disabled"
		},
		
		_create : function() {
			this._initOptions();
			
			if (this.options.disable) {
				this._setOption("disable", this.options.disable);
			}
			if (this.options.readonly) {
				this._setOption("readonly", this.options.readonly);
			}
			// mark container as being associated with this plugin
			if (!this.element.hasClass(classDisablerContainer)) {
				this.element.addClass(classDisablerContainer);
			}
		},
		
		_initOptions : function() {
			this.options.disable = this._ensureBoolean(this.options.disable);
			this.options.readonly = this._ensureBoolean(this.options.readonly);
		},
		
		_ensureBoolean : function(value) {
			var bool = false;
			if (this._isNotNullAndNotUndefined(value)) {
				var flag = new String(value).toLowerCase();
				bool = flag === "true";
			}
			return bool;
		},
		
		_setOption: function( key, value ) {	
			this._initOptions();
			this.options[ key ] = value;
			
			var containerId = this.element.attr("id");
			switch (key) {
			case 'disable':
				this._doDisable(containerId, value);
				break;
			case 'readonly':
				this.readOnly(containerId, this.options.readonly);
				break;
			}
		},
		
		_getId : function(id) {
			if (this._isNullOrUndefined(id)) {
				id = this.element.attr("id");
			}
			if (this._isNotNullAndNotUndefined(id)) {
				id = $.trim(id);
				if (id.length === 0) {
					id = null;
				}
			}
			return id;
		},
		
		/**
		 * Enables the inputable columns within the supplied container.
		 * @param containerId the ID representing the container to enable. Set to null or undefined to enable the entire 
		 * container in which this plugin is acting against.  If this value is null or undefined and the container in which this 
		 * plugin is acting against doesn't have an ID attribute with a value then this method does nothing.
		 */
		enable : function(containerId) {
			containerId = this._getId(containerId);
			if (this._isNullOrUndefined(containerId)) { return; }
			
			this._doDisable(containerId, false);
		},
		
		/**
		 * Disables the inputable columns within the supplied container.
		 * @param containerId the ID representing the container to disable. Set to null or undefined to disable the entire 
		 * container in which this plugin is acting against.  If this value is null or undefined and the container in which this 
		 * plugin is acting against doesn't have an ID attribute with a value then this method does nothing.
		 */
		disable : function(containerId) {
			containerId = this._getId(containerId);
			if (this._isNullOrUndefined(containerId)) { return; }
			
			this._doDisable(containerId, true);
		},
		
		_doDisable : function(containerId, disabling) {
			var escapedId = this._escape(containerId);
			var bde = $.Event("beforeDisable");
			this._trigger("beforeDisable", bde, {
				'containerId' : escapedId,
				'disabling' : disabling,
				'element' : this.element
			});
			if (bde.isDefaultPrevented()) { return; }
			
			this._readOnlyForDisable(containerId, disabling);
			this.options.disable = disabling;
			
			var ade = $.Event("afterDisable");
			this._trigger("afterDisable", ade, {
				'containerId' : escapedId,
				'disabling' : disabling,
				'element' : this.element
			});
			this.options.disable = disabling;
		},
		
		_readOnlyForDisable : function(containerId, readOnlyFlag) {
			containerId = this._getId(containerId);
			if (this._isNullOrUndefined(containerId)) { return; }
			
			readOnlyFlag = this._defaultReadOnlyFlag(readOnlyFlag);
			this._doReadOnly(containerId, readOnlyFlag, true);
		},
		
		/**
		 * Sets the inputable columns contained with the supplied container to read-only, disables buttons, and unbinds all events.
		 * Warning: this method can be expensive for very busy containers because it has to traverse the entire DOM to unbind all
		 * events. Use with caution.
		 * @param containerId the ID representing the container to set to read-only. Set to null or undefined to set the entire 
		 * container in which this plugin is acting against to read-only.  An exception will be thrown if this value is null or 
		 * undefined and the container in which this plugin is acting against doesn't have an ID attribute with a value.
		 * @param readOnlyFlag set to true to set to read-only.  Set to false to undo the read-only 
		 * columns set by this function, to enable the buttons, and bind the events back.  Setting this parameter to false will 
		 * not remove the read-only attribute of a column that was not set to read-only by this function.
		 */
		readOnly : function(containerId, readOnlyFlag) {
			containerId = this._getId(containerId);
			if (this._isNullOrUndefined(containerId)) { return; }
			
			readOnlyFlag = this._defaultReadOnlyFlag(readOnlyFlag);
			this._doReadOnly(containerId, readOnlyFlag, false);
		},
		
		_defaultReadOnlyFlag : function(readOnlyFlag) {
			if (readOnlyFlag === undefined) {
				readOnlyFlag = true;
			}
			return readOnlyFlag;
		},
		
		_doReadOnly : function(containerId, readOnlyFlag, disabling) {
			var escapedId = this._escape(containerId);
			var croe = $.Event("beforeReadOnly");
			this._trigger("beforeReadOnly", croe, {
				'containerId' : escapedId,
				'readOnlyFlag' : readOnlyFlag,
				'disabling' : disabling,
				'element' : this.element
			});
			if (croe.isDefaultPrevented() || readOnlyFlag === undefined) { return; }		
			
			var hiddenInputs = [];
			var selector = this._formatSelectorForContainerId(escapedId);
			var topElement = $(selector);
			if (topElement.length === 0) { return; }
			
			this._doReadOnlyIteration(topElement, readOnlyFlag, hiddenInputs, disabling);
			
			var plugin = this;
			var selector = this.options.expression 
				+ ", span." + classReadOnlyText
				+ ", ." + classDisablerHideReadOnly;			
			topElement.find(selector).each(function(index) {
				var inp = $(this);		
				var roie = $.Event("readOnlyIteration");
				plugin._trigger("readOnlyIteration", roie, {
					'input' : inp,
					'index' : index,
					'containerId' : escapedId,
					'readOnlyFlag' : readOnlyFlag,
					'disabling' : disabling,
					'element' : plugin.element
				});
				if (roie.isDefaultPrevented()) { return true; }
				
				var inputDisabler = inp.data("disabler");
				if (inputDisabler !== undefined) {
					// Ignore this input because it has a disabler of it's own acting on it. 
					return true;
				}
				
				plugin._doReadOnlyIteration(inp, readOnlyFlag, hiddenInputs, disabling);
			});
			
			this._processHiddenInputsOnReadOnly(escapedId, readOnlyFlag, hiddenInputs);
			this.options.readonly = readOnlyFlag;
			
			// fire user event
			var aroe = $.Event("afterReadOnly");
			this._trigger("afterReadOnly", aroe, {
				'containerId' : escapedId,
				'readOnlyFlag' : readOnlyFlag,
				'disabling' : disabling,
				'element' : this.element
			});
		},
		
		_whatTypeAmI : function(inp) {
			var type = inp.attr("type");
			if (type === undefined) {
				if (inp[0] === undefined) {
					type = "";
				} else {
					type = inp[0].tagName;
				}
			}
			return type.toLowerCase();
		},
		
		_doReadOnlyIteration : function(inp, readOnlyFlag, hiddenInputs, disabling) {
			if (readOnlyFlag) {
				this._turnReadOnlyOn(inp, hiddenInputs, disabling);
			} else {
				this._turnReadOnlyOff(inp);
			}
		},
		
		_turnReadOnlyOn : function(inp, hiddenInputs, disabling) {
			if (this._hasAttribute(inp, dataReadOnlyByDisabler)) {
				// this element has already been set to read-only by this plugin
				return; 
			}
			//if (inp.data(dataReadOnlyByDisabler) !== undefined) { 
			//	// this element has already been set to read-only by this plugin
			//	return; 
			//}
			if (inp.attr("readonly") !== undefined || inp.attr("disabled") !== undefined) { 
				// this element is already read-only or disabled outside the control of this plugin
				return; 
			}
			if ((inp.hasClass("hasDatepicker") || inp.hasClass(classPanelsDatePicker)) && inp.datepicker("option", "disabled")) { 
				// this element is controlled via the datepicker widget and has been disabled outside the control of this plugin
				return; 
			}
			
			this._setAttribute(inp, dataReadOnlyByDisabler, "true");
			//inp.data(dataReadOnlyByDisabler, true);
			if (inp.hasClass(classDisablerIgnoreReadOnly)) {
				// marked to ignore
				return;
			}
			
			var type = this._whatTypeAmI(inp);
			if (!disabling) {
				if (inp.hasClass(classDisablerHideReadOnly)) {
					// keep record of what is being hidden in order to unhide later
					this._disableEvents(inp);
					hiddenInputs.push(inp);
					inp.hide();
					return;
				}
				
				if (inp.hasClass(classDisablerShowTextReadOnly)) {
					this._disableEvents(inp);
					this._showTextReadOnly(inp, type);
					return;
				} 
			}
			
			var trooe = $.Event("turnReadOnlyOn");
			this._trigger("turnReadOnlyOn", trooe, inp);
			if (trooe.isDefaultPrevented()) { return; }
			
			if (inp.data("ui-accordion") !== undefined) {
				// accordion's are made up of li's and anchors, which get disabled as well
				//inp.accordion("disable");
			} else if (inp.data("ui-progressbar") !== undefined) {
				inp.progressbar("disable");
			} else if (inp.data("ui-slider") !== undefined) {
				inp.slider("disable");
			} else if (inp.data("ui-spinner") !== undefined) {
				inp.spinner("disable");
			} else if (inp.data("ui-tabs") !== undefined) {
				inp.tabs("disable");
			} else if (inp.data("ui-menu") !== undefined) {
				inp.menu("disable");
			} else if (inp.data("ui-datepicker") || inp.data("datepicker") || inp.hasClass(classPanelsDatePicker)) {
				inp.datepicker("disable");
			} else if (type === "a") {
				this._disableLink(inp);
			} else if (type === "submit" || type=="button" || type=="label") {
				if (inp.hasClass("ui-button") && inp.data("ui-button")) {
					inp.button("disable");
				} else if (type === "label") {
					inp.addClass(this.options.disabledClass);
				} else {
					inp.attr("disabled", "true");
				}
			} else if (type === "select" || type=="checkbox" || type=="radio") {
				this._disableEvents(inp);
				inp.attr("disabled", "true");
				inp.addClass(this.options.disabledClass);
			} else if (type === "text" || type === "textarea") {
				inp.attr("readonly", "readonly");
				inp.attr("disabled", "true");
				inp.addClass(this.options.disabledClass);
			} else {
				this._disableEvents(inp);
			}
		},
		
		_showTextReadOnly : function(inp, type) {
			var stroe = $.Event("showTextReadOnly");
			this._trigger("showTextReadOnly", stroe, inp);
			if (stroe.isDefaultPrevented()) { return; }
			
			var plugin = this;
			var overrideText = "";
			var text = "";
			if (type === "a") {
				text = this._getTextForInput(inp, inp.text());
			} else if (type === "text" || type === "textarea") {
				text = this._getTextForInput(inp, inp.val());
			} else if (type === "radio" || type === "checkbox") {
				if (inp.prop("checked")) {
					text = this._getTextForInput(inp, inp.val());
				}				
			} else if (type === "select") {
				var options = [];
				// loop through SELECT options in the event of multiselect = true
				inp.find('option:selected').each(function(index) {
					var option = $(this);
					// check for data attribute specifying what to display when readonly
					var optionText = plugin._getTextForSelectOption(option);
					options.push(optionText);
				});
				// return comma-delimeted list of text values
				text = options.join(", ");
			}
			
			// wrap a SPAN around the input in order to find all elements affected by this operation
			inp.wrap('<span class="' + classReadOnlyText + '"></span>');
			
			this._setAttribute(inp.parent("span." + classReadOnlyText), dataReadOnlyByDisabler, "true");
			//inp.parent("span." + classReadOnlyText).data(dataReadOnlyByDisabler, true); 
			
			// wrap a SPAN around the text being displayed and place the SPAN beside the element.  This SPAN will be removed when this operation is undone.
			var style = "";
			if ($.trim(text).length === 0) {
				style = "style=\"display: none; \"";
			}
			inp.parent().after('<span class="' + classReadOnlyRemoveMe + '" ' + style + '>' + text + '</span>');
			
			// hide the element
			inp.hide();
		},
		
		_getTextForInput : function(inp, elementText) {
			// check for data attribute specifying what to display when readonly
			//var text = inp.attr(dataReadOnlyDisplay);
			var text = this._getAttribute(inp, dataReadOnlyDisplay);
			if (text === undefined) {
				// no value specified. take text of element.
				text = elementText;
			}
			// Check if the parent container has the data attribute specifying what to display when readonly
			//overrideText = inp.parent().attr(dataReadOnlyDisplay);
			overrideText = this._getAttribute(inp.parent(), dataReadOnlyDisplay);
			if (overrideText !== undefined) {
				text = overrideText;
			}
			return text;
		},
		
		_getTextForSelectOption : function(option) {
			// check for data attribute specifying what to display when readonly
			//var optionText = option.attr(dataReadOnlyDisplay);
			var optionText = this._getAttribute(option, dataReadOnlyDisplay);
			if (optionText === undefined) {
				optionText = option.text();
			}
			return optionText;
		},
		
		_turnReadOnlyOff : function(inp) {
			if (this._hasNoAttribute(inp, dataReadOnlyByDisabler)) {
				// if the element was NOT set to read-only by this plugin, ignore
				return; 
			}
			//if (inp.data(dataReadOnlyByDisabler) === undefined) { 
			//	// if the element was NOT set to read-only by this plugin, ignore
			//	return; 
			//}
			
			this._removeAttribute(inp, dataReadOnlyByDisabler);
			//inp.removeData(dataReadOnlyByDisabler);
			if (inp.hasClass(classReadOnlyText)) {
				var ustroe = $.Event("undoShowTextReadOnly");
				this._trigger("undoShowTextReadOnly", ustroe, inp);
				if (!ustroe.isDefaultPrevented()) { 
					// remove the SPAN surrounding the text of the element being displayed
					var span = inp.next('span.' + classReadOnlyRemoveMe);
					span.remove();
					
					// unwrap the SPAN element put around the element by this plugin
					var child = inp.children();
					child.unwrap();
					
					this._enableEvents(child);
					// show the previously hidden element
					child.show();
				}
			} else {
				var trooe = $.Event("turnReadOnlyOff");
				this._trigger("turnReadOnlyOff", trooe, inp);
				if (!trooe.isDefaultPrevented()) { 
					var type = this._whatTypeAmI(inp);
					if (inp.data("ui-accordion") !== undefined) {
						//inp.accordion("enable");
					} else if (inp.data("ui-progressbar") !== undefined) {
						inp.progressbar("enable");
					} else if (inp.data("ui-slider") !== undefined) {
						inp.slider("enable");
					} else if (inp.data("ui-spinner") !== undefined) {
						inp.spinner("enable");
					} else if (inp.data("ui-tabs") !== undefined) {
						inp.tabs("enable");
					} else if (inp.data("ui-menu") !== undefined) {
						inp.menu("enable");
					} else if (inp.data("ui-datapicker") || inp.data("datepicker") || inp.hasClass(classPanelsDatePicker)) {
						inp.datepicker("enable");
					} else if (type === "a") { 
						this._enableLink(inp);
					} else if (type === "submit" || type=="button" || type=="label") {
						if (inp.hasClass("ui-button") && inp.data("ui-button")) {
							inp.button("enable");
						} else if (type === "label") {
							inp.removeClass(this.options.disabledClass)
						} else {
							inp.removeAttr("disabled");
						}
					} else if (type === "select" || type=="checkbox" || type=="radio") {
						this._enableEvents(inp);
						inp.removeAttr("disabled");
						inp.removeClass(this.options.disabledClass);
					} else if (type === "text" || type === "textarea") {
						inp.removeAttr("readonly");
						inp.removeAttr("disabled");
						inp.removeClass(this.options.disabledClass);
					} else {
						this._enableEvents(inp);
					}
				}
			}
		},
		
		_processHiddenInputsOnReadOnly : function(containerId, readOnlyFlag, hiddenInputs) {
			var escapedId = this._escapeValue(this.element.attr("id"));
			if (readOnlyFlag) {
				if (hiddenInputs.length > 0) {
					// save hidden elements on the container to be unhidden later
					$("#" + escapedId).data(dataHiddenInputs, hiddenInputs);
				}
				
				var phiroe = $.Event("processHiddenInputsReadOnly");
				this._trigger("processHiddenInputsReadOnly", phiroe, {
					'containerId' : escapedId,
					'hiddenInput' : hiddenInput,
					'element' : this.element
				});
			} else {
				hiddenInputs = $("#" + escapedId).data(dataHiddenInputs);
				if (hiddenInputs !== undefined) {
					// unhide previously hidden elements
					for (var i = 0; i < hiddenInputs.length; i++) {
						var hiddenInput = hiddenInputs[i];
						this._enableEvents(hiddenInput);
						hiddenInput.show();
						
						var phinreie = $.Event("processHiddenInputsNotReadOnlyIteration");
						this._trigger("processHiddenInputsNotReadOnlyIteration", phinreie, {
							'containerId' : escapedId,
							'hiddenInput' : hiddenInput,
							'element' : this.element
						});
					}
					// remove the array from the container
					$("#" + escapedId).removeData(dataHiddenInputs);
				}
			}
		},
		
		_disableLink : function(inp) {
			// save all events
			this._disableEvents(inp);
			
			var href = inp.attr("href");
			if (href !== undefined) {
				// save the HREF attribute value and remove the value
				this._setAttribute(inp, dataAnchorHref, href);
				//inp.data(dataAnchorHref, href);
				inp.attr("href", "#");
			}
			
			// override all click events
			inp.on("click", function(e) {
				e.preventDefault();
			});
			
			inp.addClass(this.options.disabledClass);
		},
		
		_disableEvents : function(inp) {
			var de = $.Event("disableEvents");
			this._trigger("disableEvents", de, inp);
			if (de.isDefaultPrevented()) { return; }
			
			var widgetEventPrefix = this.widgetEventPrefix;
			// jQuery adds an "events" data attribute on the element when events are registered
			var events = inp.data("events");
			if (events !== undefined) { 	
				var savedEvents = [];
				// loop through each event found on the element...
				$.each(events, function(eventName, handlers) {
				    $.each(handlers, function(index) {
				    	var handler = handlers[index];
				    	if (handler !== undefined) {
				    		// save the event and handler
					    	var eventObj = {
					    		'eventName' : eventName, 
					    		'handler' : handler
					    	};
					    	if (eventName.indexOf(widgetEventPrefix) < 0) {
					    		// unbinding a non widget event
						    	savedEvents.push(eventObj);
						    	inp.unbind(eventName);
					    	}
				    	}
				    });
				});
				// store the saved events as a data attribute on the element
				inp.data(dataSavedEvents, savedEvents);
			}			
		},
		
		_enableLink : function(inp) {
			// unbind event put on by disable function
			inp.unbind();
			
			// put back all events removed from the disableEvents step
			this._enableEvents(inp);
			
			// put back the HREF removed from the disableLink step
			//var href = inp.data(dataAnchorHref);
			var href = this._getAttribute(inp, dataAnchorHref);
			if (href !== undefined) {
				inp.attr("href", href);
				//inp.removeData(dataAnchorHref);
				this._removeAttribute(inp, dataAnchorHref);
			}
			
			inp.removeClass(this.options.disabledClass);
		},
		
		_enableEvents : function(inp) {
			var ee = $.Event("enableEvents");
			this._trigger("enableEvents", ee, inp);
			if (ee.isDefaultPrevented()) { return; }
			
			var savedEvents = inp.data(dataSavedEvents);
			if (savedEvents !== undefined) { 
				// loop through each saved event and register events on element.
				$.each(savedEvents, function(index) {
					var savedEvent = savedEvents[index];
					var eventName = savedEvent.eventName;
					var handler = savedEvent.handler;
					inp.on(eventName, handler); 
				});
			}
			// remove the saved events from the input
			inp.removeData(dataSavedEvents);
		},
		
		_escape : function(containerId) {
			if (containerId === undefined) {
				containerId = this.element.attr("id");
			}
			return this._escapeValue(containerId);
		},
		
		_escapeValue : function(str) {
			str = str.replace(/\+/g,"\\+");
			str = str.replace(/\\/g,"\\");
			str = str.replace(/\//g,"\\/");
			str = str.replace(/!/g,"\\!");
			str = str.replace(/"/g,'\\"');
			str = str.replace(/#/g,"\\#");
			str = str.replace(/\$/g,"\\$");
			str = str.replace(/%/g,"\\%");
			str = str.replace(/&/g,"\\&");
			str = str.replace(/'/g,"\\'");
			str = str.replace(/\(/g,"\\(");
			str = str.replace(/\)/g,"\\)");
			str = str.replace(/\*/g,"\\*");
			str = str.replace(/,/g,"\\,");
			str = str.replace(/\./g,"\\.");
			str = str.replace(/:/g,"\\:");
			str = str.replace(/;/g,"\\;");
			str = str.replace(/\?/g,"\\?");
			str = str.replace(/@/g,"\\@");
			str = str.replace(/\[/g,"\\[");
			str = str.replace(/\]/g,"\\]");
			str = str.replace(/\^/g,"\\^");
			str = str.replace(/`/g,"\\`");
			str = str.replace(/\{/g,"\\{");
			str = str.replace(/\}/g,"\\}");
			str = str.replace(/\|/g,"\\|");
			str = str.replace(/\~/g,"\\~");
			
			return str;
		},
	
		_isNotNullAndNotUndefined : function(obj) {
			return obj !== undefined && obj != null;
		},
		
		_isNullOrUndefined : function(obj) {
			return obj === null || obj === undefined;
		},
		
		_formatSelectorForContainerId : function(containerId) {
			var panelId = this._escapeValue(this.element.attr("id"));
			if (panelId === containerId) {
				containerId = null;
			}
			var selector = '#' + containerId + ' ';
			if (this._isNullOrUndefined(containerId)) {
				selector = '';
			}
			if (selector === '') {
				selector = '#' + panelId;
			} else {
				selector = '#' + panelId + ' ' + selector;
			}
			return selector + ' ';
		},
		
		_hasAttribute : function(inp, attrName) {
			var attr = inp.attr(attrName);
			return typeof attr !== 'undefined' && attr !== false;
		},
		
		_hasNoAttribute : function(inp, attrName) {
			return !this._hasAttribute(inp, attrName);
		},
		
		_setAttribute : function(inp, attrName, attrValue) {
			inp.attr(attrName, attrValue);
		},
		
		_removeAttribute : function(inp, attrName) {
			inp.removeAttr(attrName);
		},
		
		_getAttribute : function(inp, attrName) {
			return inp.attr(attrName);
		}
	});
	
	$.extend( $.dtg.disabler, {
		version: "1.1.0"
	});
}(jQuery));
