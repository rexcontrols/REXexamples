REX.HMI.init = function(){

//Temperature sensors
  var sensors = {
    column: 1,
    title: 'Temperature sensors',
    rows: [
      {type: 'AR', alias: 'sensor1', desc: 'Sensor 1', cstring: 'logger_task.TRND_3hours:u1'},
      {type: 'AR', alias: 'sensor2', desc: 'Sensor 2', cstring: 'logger_task.TRND_3hours:u2'},
      {type: 'AR', alias: 'sensor3', desc: 'Sensor 3', cstring: 'logger_task.TRND_3hours:u3'},
      {type: 'AR', alias: 'sensor4', desc: 'Sensor 4', cstring: 'logger_task.TRND_3hours:u4'},
    ]
  };
  REX.WebBuDi.addSection(sensors);

//Links
  var links = {
    column: 2,
    title: 'Links',
    rows: [
      {type: 'ES'},
      {type: 'LINK', desc:"WebWatch HMI", label:"Go", target_url: 'logger_task.html'},
      {type: 'ES'},
      {type: 'ES'},      
    ]
  };
  REX.WebBuDi.addSection(links);  

  //Add real-time trend
  REX.HMI.Graph.addTrend({cstring: 'logger_task.TRND_3hours', labels: ['Sensor one','Sensor two','Sensor three','Sensor four']});
  REX.HMI.Graph.setMaxBufferSize(5400);

  // Change title of the page
  REX.HMI.setTitle('Temperature logger');
}