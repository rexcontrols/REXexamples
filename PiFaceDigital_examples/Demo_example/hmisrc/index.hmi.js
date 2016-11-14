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
    
    var inputs = {
        column:1,
        title:'Inputs',
        rows:[
            {alias: 'input0', desc: 'In0 (Push button)', cstring: 'demo_task.RPI__PFIU:val0', type: 'DR', true_label: 'PRESSED', false_label: 'RELEASED', reverse_meaning: true},
            {alias: 'input1', desc: 'In1 (Switch)', cstring: 'demo_task.RPI__PFIU:val1', type: 'DR', true_label: 'PRESSED', false_label: 'RELEASED', reverse_meaning: true},
            {alias: 'input2', desc: 'In2 (Blink)', cstring: 'demo_task.RPI__PFIU:val2', type: 'DR', true_label: 'PRESSED', false_label: 'RELEASED', reverse_meaning: true},
            {alias: 'input3', desc: 'In3 (Timer)', cstring: 'demo_task.RPI__PFIU:val3', type: 'DR', true_label: 'PRESSED', false_label: 'RELEASED', reverse_meaning: true},
        ]
    };
    REX.WebBuDi.addSection(inputs);
    
    var timer = {
        column:1,
        title:'Timer',
        background_color: '#78ADD3',
        rows:[
            {alias: 'delay', desc: 'Timer delay [s]', cstring: 'demo_task.TIMER_:pt', type: 'AW'},
            {alias: 'mp', desc: 'Timer start', label: 'START', cstring: 'demo_task.MP_START:BSTATE', type: 'MP'},
            {alias: 'et', desc: 'Elapsed time', cstring: 'demo_task.TIMER_:et', type: 'AR'},
        ]
    };
    REX.WebBuDi.addSection(timer);
    
    var outputs = {
        column:2,
        title:'Outputs',
        rows:[
            {alias: 'output0', desc: 'Out0 (Push button)', cstring: 'demo_task.RPI__PFO:val0', type: 'DR', label_true: 'ACTIVE', label_false: 'OFF'},
            {alias: 'output1', desc: 'Out1 (Switch)', cstring: 'demo_task.RPI__PFO:val1', type: 'DR', label_true: 'ACTIVE', label_false: 'OFF'},
            {alias: 'output2', desc: 'Out2 (Blink)', cstring: 'demo_task.RPI__PFO:val2', type: 'DR', label_true: 'ACTIVE', label_false: 'OFF'},
            {alias: 'output3', desc: 'Out3 (Timer)', cstring: 'demo_task.RPI__PFO:val3', type: 'DR', label_true: 'ACTIVE', label_false: 'OFF'},
            {alias: 'output4', desc: 'Out4', cstring: 'demo_task.CNB_OUT4:YCN', type: 'DW', label_true: 'ACTIVE', label_false: 'OFF', color_false: '#FF7777'},
            {alias: 'output5', desc: 'Out5', cstring: 'demo_task.CNB_OUT5:YCN', type: 'DW', label_true: 'ACTIVE', label_false: 'OFF', color_false: '#FF7777'},
            {alias: 'output6', desc: 'Out6', cstring: 'demo_task.CNB_OUT6:YCN', type: 'DW', label_true: 'ACTIVE', label_false: 'OFF', color_false: '#FF7777'},
            {alias: 'output7', desc: 'Out7', cstring: 'demo_task.CNB_OUT7:YCN', type: 'DW', label_true: 'ACTIVE', label_false: 'OFF', color_false: '#FF7777'},
            {type:"ES"}
        ]
    };
    REX.WebBuDi.addSection(outputs);
    
    // Links to the WebWatch visualization
    REX.WebBuDi.addSection({
        column: 1,        
        background_color:"#A66C20",
        rows: [
            {type: 'LINK', desc:"WebWatch", label:"Task", target_url: 'demo_task.html'}
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
    REX.HMI.setTitle('Demonstration algorithm for PiFace Digital');
    
    // Show clock in upper right corner
    // REX.HMI.showHeartBeatClock()
    
}