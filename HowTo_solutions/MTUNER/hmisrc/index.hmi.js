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
        {alias: 'PID_MAN', cstring: 'mtuner_control.CNB_MAN:YCN', write: true},
        {alias: 'Astatism', cstring: 'mtuner_process.CNB_ASTAT:YCN', write: true}
    ];
    REX.WebBuDi.addItems(items);
    
    var controls = {
        column: 1,
        title: 'User Controls',
        rows: [
            {alias: 'PID_MAN', type: 'DW', label_false: 'AUT', label_true: 'MAN'},
            {alias: 'Astatism', type: 'DW'},
            {desc: 'Load disturbance', cstring: 'mtuner_process.SG_load:amp', type: 'AW'},
            {desc: 'Measurement noise', cstring: 'mtuner_process.SG_noise:amp', type: 'AW'}
        ]
    };
    REX.WebBuDi.addSection(controls);
    var controls_sp = {
        column: 1,
        title: 'Set point',
        rows: [
            {alias: 'SP_UP', cstring: 'mtuner_control.MP_sp_UP:BSTATE', type: 'MP'},
            {alias: 'SP_DN', cstring: 'mtuner_control.MP_sp_DN:BSTATE', type: 'MP'},
            {alias: 'SP_RV', cstring: 'mtuner_control.CNR_sp_rv:ycn', type: 'AW'},
            {alias: 'SP_SWITCH', cstring: 'mtuner_control.CNB_sp_LOC:YCN', type: 'DW', label_false: 'RV', label_true: 'MP'},
            {type:"ES"},{type:"ES"}
        ],
        disable_by: {alias: 'PID_MAN'}
    };
    REX.WebBuDi.addSection(controls_sp);
    var pidma = {
        column: 2,
        title: 'PIDMA',
        rows: [
            {alias: 'PIDMA_K', cstring: 'mtuner_control.PIDMA:k', type: 'AW'},
            {alias: 'PIDMA_TI', cstring: 'mtuner_control.PIDMA:ti', type: 'AW'},
            {alias: 'PIDMA_TD', cstring: 'mtuner_control.PIDMA:td', type: 'AW'},
            {alias: 'PIDMA_IR_TYPE', cstring: 'mtuner_control.PIDMA:irtype', type: 'ALT', values: {1: "D", 2: "I", 3: "ID", 4: "P", 5: "PD", 6: "PI", 7: "PID"}}
        ]};
    REX.WebBuDi.addSection(pidma);
    var controls_hv = {
        column: 2,
        title: 'Hand value',
        rows: [
            {alias: 'HV_UP', cstring: 'mtuner_control.MP_hv_UP:BSTATE', type: 'MP'},
            {alias: 'HV_DN', cstring: 'mtuner_control.MP_hv_DN:BSTATE', type: 'MP'},
            {alias: 'HV_RV', cstring: 'mtuner_control.CNR_hv_rv:ycn', type: 'AW'},
            {alias: 'HV_SWITCH', cstring: 'mtuner_control.CNB_hv_LOC:YCN', type: 'DW', label_false: 'RV',
                label_true: 'MP'}
        ],
        disable_by: {alias: 'PID_MAN', reverse_meaning:true}
    };
    REX.WebBuDi.addSection(controls_hv);
    var autotune = {
        column: 3,
        title: 'Auto tune',
        rows: [
            {alias: 'TUNE', cstring: 'mtuner_control.MP_TUNE:BSTATE', type: 'MP'},
            {alias: 'ite', cstring: 'mtuner_control.PIDMA:ite', type: 'AR'},
            {alias: 'TAFF', cstring: 'mtuner_control.CNB_TAFF:YCN', type: 'DW'}
        ]
    };
    REX.WebBuDi.addSection(autotune);
    var signals = {
        column: 3,
        title: 'Signals',
        rows: [
            {alias: 'SP', desc:'Setpoint', cstring: 'mtuner_control.PIDMA:sp', type: 'AR'},
            {alias: 'PV', desc:'Process value', cstring: 'mtuner_control.PIDMA:pv', type: 'AR'},
            {alias: 'HV', desc:'Hand value', cstring: 'mtuner_control.PIDMA:hv', type: 'AR'},
            {alias: 'MV', desc:'Manipulated variable', cstring: 'mtuner_control.PIDMA:mv', type: 'AR'},
            {alias: 'MAN', desc:'Controller mode', cstring: 'mtuner_control.PIDMA:MAN', type: 'DR', options: {color_true: "yellow"}},
            {type:"ES"},{type:"ES"}
        ]
    };
    REX.WebBuDi.addSection(signals);
    
    // Links to the WebWatch visualization
    REX.WebBuDi.addSection({
        column: 2,        
        rows: [
            {type: 'LINK', desc:"WebWatch", label:"Control", target_url: 'mtuner_control.html'},
            {type: 'LINK', desc:"WebWatch", label:"Process", target_url: 'mtuner_process.html'}
        ]
    });
    
    /* REX.HMI.Graph - Time-based graph component which is shown on the bottom of the web page.
     * Graph can read arbitrary signal connected via ALIAS and CSTRING or all signals from TRND
     * blocks. 
     * The Graph is shown when first signal is added over `addSignal` or `addTrend` function.
     */
     
    // Add all signals from TRND block with user defined labels
    REX.HMI.Graph.addTrend({cstring: 'mtuner_control.TRND_PIDMA', labels: ['Process value','Manipulated variable','Setpoint']});
    
    /* Add arbitrary signal to graph using ALIAS and CSTRING */
    // REX.HMI.Graph.addSignal({alias:"PV-Graph", cstring:"mtuner_control.PIDMA:pv", desc:"Process value", period:1000});
    
    // Adjust size of the trend. Value is in <0;1> interval.
    // It represents the percentage of the visible screen
    // REX.HMI.Graph.setSize(0.39);
    
    // Set different target address
    // REX.HMI.setTargetUrl('ws://127.0.0.1:8008/rex');
    
    // Set refresh rate (Default: 500 ms)
    REX.HMI.setRefreshRate(100);
    
    // Change title of the page
    REX.HMI.setTitle('MTUNER - Advanced example for PID controller with the moment autotuner');
    
    // Show clock in upper right corner
    // REX.HMI.showHeartBeatClock()
    
}