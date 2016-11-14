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
    var items = [
        {alias: 'PID_MAN', cstring: 'pidcontrol_control.CNB_MAN:YCN', write: true},
        {alias: 'SP_AW', cstring: 'pidcontrol_control.CNR_sp:ycn', write: true},
        {alias: 'HV_AW', cstring: 'pidcontrol_control.CNR_hv:ycn', write: true}
    ];
    REX.WebBuDi.addItems(items);
    
    var controls = {
        column: 1,
        title: 'User controls',
        rows: [
            {alias: 'PID_MAN', desc:'Controller mode', type: 'DW', label_false: 'AUT', label_true: 'MAN'},
            {alias: 'SP_AW', desc:'Setpoint', type: 'AW'},
            {alias: 'HV_AW', desc:'Hand value', type: 'AW'}
        ]
    };
    REX.WebBuDi.addSection(controls);
    var pidu = {
        column: 2,
        title: 'PID controller unit',
        rows: [
            {alias: 'PIDU_K', cstring: 'pidcontrol_control.PIDU:k', type: 'AW'},
            {alias: 'PIDU_TI', cstring: 'pidcontrol_control.PIDU:ti', type: 'AW'},
            {alias: 'PIDU_TD', cstring: 'pidcontrol_control.PIDU:td', type: 'AW'},
            {alias: 'PIDU_IR_TYPE', cstring: 'pidcontrol_control.PIDU:irtype', type: 'ALT', values: {1: "D", 2: "I", 3: "ID", 4: "P", 5: "PD", 6: "PI", 7: "PID"}},
            {type: 'ES'}
        ]};
    REX.WebBuDi.addSection(pidu);
    var signals = {
        column: 3,
        title: 'Signals',
        rows: [
            {alias: 'SP', desc:'Setpoint', cstring: 'pidcontrol_control.PIDU:sp', type: 'AR'},
            {alias: 'PV', desc:'Process value', cstring: 'pidcontrol_control.PIDU:pv', type: 'AR'},
            {alias: 'HV', desc:'Hand value', cstring: 'pidcontrol_control.PIDU:hv', type: 'AR'},
            {alias: 'MV', desc:'Manipulated variable', cstring: 'pidcontrol_control.PIDU:mv', type: 'AR'},
            {alias: 'MAN', desc:'Controller mode', cstring: 'pidcontrol_control.PIDU:MAN', type: 'DR', options: {color_true: "yellow"}}
        ]
    };
    REX.WebBuDi.addSection(signals);    
    
    // Links to the WebWatch visualization
    REX.WebBuDi.addSection({
        column: 1,
        background_color:"#A66C20",
        rows: [
            {type: 'LINK', desc:"WebWatch", label:"Control", target_url: 'pidcontrol_control.html'},
            {type: 'LINK', desc:"WebWatch", label:"Process", target_url: 'pidcontrol_process.html'}
        ]
    });

    /* REX.HMI.Graph - Time-based graph component which is shown on the bottom of the web page.
     * Graph can read arbitrary signal connected via ALIAS and CSTRING or all signals from TRND
     * blocks. 
     * The Graph is shown when first signal is added over `addSignal` or `addTrend` function.
     */
     
    // Add all signals from TRND block with user defined labels
    REX.HMI.Graph.addTrend({cstring: 'pidcontrol_control.TRND_PIDU', labels: ['Process value','Manipulated variable','Setpoint']});

    /* Add arbitrary signal to graph using ALIAS and CSTRING */
    // REX.HMI.Graph.addSignal({alias:"PV-Graph", cstring:"pidcontrol_control.PIDU:pv", desc:"Process value", period:1000});
    
    // Adjust size of the trend. Value is in <0;1> interval.
    // It represents the percentage of the visible screen
    // REX.HMI.Graph.setSize(0.39);
    
    // Set different target address
    // REX.HMI.setTargetUrl('ws://127.0.0.1:8008/rex');
    
    // Set refresh rate (Default: 500 ms)
    REX.HMI.setRefreshRate(100);
    
    // Change title of the page
    // REX.HMI.setTitle('Simple PID controller');
    
    // Show clock in upper right corner
    // REX.HMI.showHeartBeatClock()
    
}