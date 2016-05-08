var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('request_send', function(){
   console.log('Request gönderildi.');
});

//network_activated event'i emit edildiginde
//Tetiklenecek
eventEmitter.on('network_activated', function(){
   console.log('network aktifleştirildi.');
   //Network Aktifleştirildikten sonra request
  //gönderip request_send isimli eventi yayınlıyoruz (emit).
   eventEmitter.emit('request_send');
});


//Burada Manual olarak  network_activated  eventini emit ediyoruz (Yayinliyoruz)
eventEmitter.emit('network_activated');



