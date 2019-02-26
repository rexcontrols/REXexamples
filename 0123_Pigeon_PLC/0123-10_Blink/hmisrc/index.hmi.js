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
    
    var controls = {
        column: 1,
        title: 'User controls',
        rows: [
            {alias: 'do1_write', desc: 'Output 1', cstring: 'blink_task.CNB_O1:YCN', type: 'DW'},
            {type: 'ES'}
        ]
    };
    REX.WebBuDi.addSection(controls);
    var status = {
        column: 2,
        title: 'Status of the outputs',
        rows: [
            {alias: 'out1', desc: 'Output 1', cstring: 'blink_task.PGN__O1:value', type: 'DR'},
            {alias: 'out2', desc: 'Output 2', cstring: 'blink_task.PGN__O2:value', type: 'DR'},
            {alias: 'out3', desc: 'Output 3', cstring: 'blink_task.PGN__O3:value', type: 'DR'}
        ]
    };
    REX.WebBuDi.addSection(status);
    
    // Links to the WebWatch visualization
    REX.WebBuDi.addSection({
        column: 1,        
        background_color:"#A66C20",
        rows: [
            {type: 'LINK', desc:"WebWatch", label:"Task", target_url: 'blink_task.html'}
        ]
    });
    
    /* REX.HMI.Graph - Time-based graph component which is shown on the bottom of the web page.
     * Graph can read arbitrary signal connected via ALIAS and CSTRING or all signals from TRND
     * blocks. 
     * The Graph is shown when first signal is added over `addSignal` or `addTrend` function.
     */
     
    // Add all signals from TRND block with user defined labels
    // REX.HMI.Graph.addTrend({cstring: 'task_name.TRND_name', labels: ['Signal 1','Signal 2','Signal 3','Signal 4']});
    
    /* Add arbitrary signal to graph using ALIAS and CSTRING */
    // REX.HMI.Graph.addSignal({alias:"Graph", cstring:"task_name.block_name:signal", desc:"Signal value", period:1000});
    
    // Adjust size of the trend. Value is in <0;1> interval.
    // It represents the percentage of the visible screen
    // REX.HMI.Graph.setSize(0.39);
    
    // Set different target address
    // REX.HMI.setTargetUrl('ws://127.0.0.1:8008/rex');
    
    // Set refresh rate (Default: 500 ms)
    REX.HMI.setRefreshRate(100);
    
    // Change title of the page
    REX.HMI.setTitle('Pigeon PLC - blink example');
    
    // Show clock in upper right corner
    // REX.HMI.showHeartBeatClock()
    
}