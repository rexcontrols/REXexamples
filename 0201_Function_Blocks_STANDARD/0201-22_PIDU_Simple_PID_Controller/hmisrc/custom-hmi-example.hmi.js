// Add init function where new items can be registered for reading and writing
REX.HMI.init = function () {

    // THIS EXAMPLE IS BASED ON THE "PIDU - Simple PID controller" EXECUTIVE

    //Add read items (alias,cstring,type)
    // alias - UNIQE local alias of the connection string (no spaces, asci signs)
    // cstring - connection string
    // write - true || false    
    REX.HMI.addItem({alias:"PV",cstring:"pidcontrol_control.PIDU:pv"});
    REX.HMI.addItem({alias:"SP",cstring:"pidcontrol_control.PIDU:sp"});

    //Add write items (alias,cstring,type)  
    REX.HMI.addItem({alias:"MAN", cstring:"pidcontrol_control.CNB_MAN:YCN", write:true});
    REX.HMI.addItem({alias:"SP-W",cstring:"pidcontrol_control.CNR_sp:ycn", write:true});

    // Get item with given alias and assign read event
    REX.HMI.get("PV").on("read", function (itm) {
        var value = itm.getValue();
        var stringToFixed = value.toFixed(2);
        
        // Select element using jQuery library and set read value and round to two decimal places 
        $('#read-value').val(stringToFixed);
    });

    // Get item with given alias and assign read event
    REX.HMI.get("SP").on("change", function (itm) {
        var value = itm.getValue();
        var stringToFixed = value.toFixed(2);
        $('#read-value-on-change').val(stringToFixed);
        
        var msg = "SP changed to " + stringToFixed;
        // Write message to the log        
        REX.HMI.log.info(msg);
        // Also write the same message to console. Press F12 to see
        console.log(msg);
    });

    // Write items are also read if not disableRefresh flag is set
    REX.HMI.get("MAN").on("read", function (itm) {
        if (itm.getValue()) {
            $('#write-boolean-value-1').prop("checked", true);
        }
        else {
            $('#write-boolean-value-0').prop("checked", true);
        }
    });

    REX.HMI.get("SP-W").on("change", function (itm) {
        $('#write-value').val(itm.getValue().toFixed(2));
    });

    // Connect webpage events to write items, this can be done either inside init function or anywhere in the code
    // Add change eventListener to the Radio buttons
    $('input:radio[name=radio]').on("change", function (evt) {
        var value = $('#write-boolean-value-0').prop("checked");
        // If first one is checked than write 0 othewise 1
        if (value) {
            // write(alias,value)
            REX.HMI.get("MAN").write(0);
        }
        else {
            REX.HMI.get("MAN").write(1);
        }
        REX.HMI.log.info("MAN set to " + value);
    });

    $('#btn-set').on("click", function (evt) {
        var value = Number($('#write-value').val());
        REX.HMI.get("SP-W").write(value);
        REX.HMI.log.info("SP set to " + value);
    });
    
    // Set different WS server IP (Default: host/rex)
    // REX.HMI.setTargetUrl('127.0.0.1/rex');

    // Set refresh rate (Default: 500 ms)
    // REX.HMI.setRefreshRate(500);
};
