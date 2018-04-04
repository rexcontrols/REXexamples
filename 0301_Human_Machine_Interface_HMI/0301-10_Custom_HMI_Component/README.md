*REXYGEN HMI Designer* - custom component
==================================

When the special behaviour of the component is needed it is possible to create custom one. Custom HMI component is 
combined from an SVG file and javascript. 
The example shows custom coponent which read the position of the mouse and write the coordinates to the two real contants in running task.

The SVG component is marked using `rexsvg:module` attribute. In this example we have a svg group with one rectangle and text field. The group have a following format
```
<g id="someID" rexsvg:module="CustomComponent" >
  <desc>
   <!-- Configuration in JSON format -->
  </desc>
  
  <rect rexsvg:tag="rectangle" ...>
   ...
  </rect>
  <text rexsvg:tag="text" ...>
   ...
  </text>
</g>
```
The `<desc>` tag contain configuration in JSON format. One can edit it using XML *XML Editor* function in *REXYGEN HMI Designer* (CTRL+SHITF+X). The most important field is `connections` where connection strings are defined. In this case the configuration is following:
```
{
 "connections":{
  "valueX":"$T_X",
  "valueY":"$T_Y"
 },
 "options":{
 }
}
```

Then two elements are tagged with `rexsvg:tag` attribute. This easy the localization of the interesting tags.

The javascript file controls the behaviour of the component, it must begin with the function with same name as in the `rexsvg:module` attribute. See the `CUTSOM/js/custom.js` file.

```
REX.UI.SVG.CustomComponent = function(svgElem,args) { ... }
```

The `custom.js` file documents all the necessary steps from loading the elements to listening for the mouse events.

The component is finnaly loaded to the final SVG scheme using *Library Path* setting in the *HTML export* tab in *HMI Config* element. 

## Documentation ##

- [REXYGEN HMI User Guide](https://www.rexygen.com/doc/PDF/ENGLISH/RexygenHMI_ENG.pdf)
- [SVG.JS](http://svgjs.com)
- [Complete documentation of REXYGEN](http://www.rexygen.com/documentation-and-support)

## Additional information ##

- Visit the [REXYGEN webpage](http://www.rexygen.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REXYGEN.
