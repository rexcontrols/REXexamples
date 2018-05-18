REX.HMI.init = function(){
    /* *******************************************************************************************
     *                          WebBuDi - Web Buttons and Displays configuration file
     * *******************************************************************************************
     *
     * WebBuDi is composed from several rows (graphical components with pre-defined 
     * function and look) connected to a single item in control system (specified by 
     * an alias or a cstring property). There are different rows according to the type 
     * they are changing (for boolean, numbers, dates, etc.).
     * All rows are organised in sections (colored blocks which can have a heading).
     * The sections are then organizes in several columns.
     *
     *
     * Available row types:
     *
     * DR - Digital Read
     *      (options:{label_false:'OFF',
     *                label_true:'ON',
     *                reverse_meaning:false,
     *                color_true:'green',
     *                color_false:'red')
     * DW - Digital Write
     * MP - Manual Pulse
     * PB - Push Button
     * AR - Analog Read
     *       ({format:'number' | format:'time' | format:'date' | format:'datetime' | format:'text'})
     * AW - Analog Write
     *       ({format:'number' | format:'time' | format:'date' | format:'datetime' | format:'text'})
     * ALT - Analog Lookup Table (values:{name:value})
     * LINK - Link to different URL
     * ES - Empty Space
     *
     * The example of the row
     * {alias:<alias of the signal>, desc:<displayed name>, cstring:<Connection string>, type:<type of the signal>,
     *  ...other row specific options }
     *
     * !!! ATTENTION It is posible to add items to various sections, but every item must have UNIQUE ALIAS !!!
     */

    /* Uncomment and set if you want to add the WebBuDi components to the different DIV
     * The default value is: 'content' 
     * NOTE: This assigment must be called before any 'addSection' function
     */
     // REX.WebBuDi.customDivID = 'content';
    
    /*
     * This is example how to define connections in one place for all rows
     * the example of the one line is:
     * {alias:<alias of the signal>, cstring:<Connection string>, write: true | false}    
     */ 
    
    var indicators = {
        column:1,
        name:'Red indicators',
        rows:[
            {name: 'Constant', alias: 'constant', cstring: 'myproject_task.CNB:Y', type: 'DR', true_color:'red'},
            {name: 'Slow', alias: 'slow', cstring: 'myproject_task.BIS_SLOW:Y', type: 'DR', true_color:'red'},
            {name: 'Fast', alias: 'fast', cstring: 'myproject_task.BIS_FAST:Y', type: 'DR', true_color:'red'}
        ]
    };
    REX.WebBuDi.addSection(indicators);

    var links1 = {
        column:1,
        name:'Links to WebBuDi pages',
        rows:[
            {type: 'LINK', desc:"Red indicators", label:"RED", target_url: 'index-red.html'},
            {type: 'LINK', desc:"Green indicators", label:"GREEN", target_url: 'index.html'},
            {type: 'LINK', desc:"Blue indicators", label:"BLUE", target_url: 'index-blue.html'}
        ]
    };
    REX.WebBuDi.addSection(links1);
    
    var links2 = {
        column:1,
        name:'Links to HMI Designer pages',
        rows:[
            {type: 'LINK', desc:"Red indicators", label:"RED", target_url: 'designer-red.html'},            
            {type: 'LINK', desc:"Green indicators", label:"GREEN", target_url: 'designer-green.html'},
            {type: 'LINK', desc:"Blue indicators", label:"BLUE", target_url: 'designer-blue.html'}
        ]
    };
    REX.WebBuDi.addSection(links2);

    // Set refresh rate (Default: 500 ms)
    REX.HMI.setRefreshRate(100);
    
    // Change title of the page
    REX.HMI.setTitle('Multi-page HMI demonstration');
    
    // Show clock in upper right corner
    // REX.HMI.showHeartBeatClock()
    
}