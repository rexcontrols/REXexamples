REX.HMI.init = function(){

//Indicators and virtual switches - group A
  var switchesA = {
    column: 1,
    title: 'Switches - group A',
    rows: [
      {type: 'DR', alias: 'switch1', desc: 'Switch 1', cstring: 'myproject_task.OR_A:U1'},
      {type: 'DW', alias: 'switch2', desc: 'Switch 2', cstring: 'myproject_task.CNB_SWITCH2:YCN'},
      {type: 'DR', alias: 'S1orS2', desc: 'S1 OR S2', cstring: 'myproject_task.OR_A:Y'},
    ]
  };
  REX.WebBuDi.addSection(switchesA);

//Indicators and virtual switches - group A
  var switchesB = {
    column: 1,
    title: 'Switches - group B',
    rows: [
      {type: 'DR', alias: 'switch3', desc: 'Switch 3', cstring: 'myproject_task.OR_B:U1'},
      {type: 'DW', alias: 'switch4', desc: 'Switch 4', cstring: 'myproject_task.CNB_SWITCH4:YCN'},
      {type: 'DR', alias: 'S3orS4', desc: 'S3 OR S4', cstring: 'myproject_task.OR_B:Y'},
    ]
  };
  REX.WebBuDi.addSection(switchesB);  

//Timer input
  var timerInput = {
    column: 2,
    title: 'Timer input',
    rows: [
      {type: 'DR', alias: 'inputA', desc: 'Group A', cstring: 'myproject_task.AND_:U1'},
      {type: 'DR', alias: 'inputB', desc: 'Group B', cstring: 'myproject_task.AND_:U2'},
      {type: 'DR', alias: 'AandB', desc: 'A AND B', cstring: 'myproject_task.AND_:Y'},
    ]
  };
  REX.WebBuDi.addSection(timerInput);  

//Timer settings and status
  var timer = {
    column: 2,
    title: 'Timer',
    rows: [
      {type: 'AW', alias: 'interval', desc: 'Timer interval', cstring: 'myproject_task.TIMER_:pt'},
      {type: 'AR', alias: 'rt', desc: 'Remaining time', cstring: 'myproject_task.TIMER_:rt'},
      {type: 'DR', alias: 'timerQ', desc: 'Timer output', cstring: 'myproject_task.TIMER_:Q'},
    ]
  };
  REX.WebBuDi.addSection(timer);

  //Add real-time trend
  REX.HMI.Graph.addTrend({cstring: 'myproject_task.TRND'});
  REX.HMI.Graph.setMaxBufferSize(200);

  // Change title of the page
  REX.HMI.setTitle('My timer - HMI example');
}