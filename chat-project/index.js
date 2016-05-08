
//Express Modulu import edildi
var express = require('express');
//app artık express instaceını taşımaktadır.
var app = express();
//Server instance'ı üretildi
var server = require('http').createServer(app);
//Socket.io import edilerek server instance'ı parametre olarak eklendi.
//Dikkat etmemiz gereken nokta Express ve Socketin server instance'ı ile beraber çalışması sağlanmaktadır.
var io = require('socket.io')(server);

//Eğer Environment variable içerisinde port set edilmediyse port 3002 olarak belirlenecek
var port = process.env.PORT || 3008;

//Server 3002. portu dinlemeye başladı.
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

//Express.static isimli yapısal express middleware'ine özel bir bölüm açmıştık.
//Bu middleware uygulama level'inde statik klasörlerimizin konumunu set etmeye yarıyordu.
//Statik dosyaların  relative path ile tanımlanması önemlidri. (__dirname)
app.use(express.static(__dirname + '/public'));


//Client-side'da gösterilecek chat'deki kişi sayısı için sunucu 0'dan başlatıyor.
//Her kullanıcı kayıt olduğunda bu sayı bir artırılacak
var numUsers = 0;

//Client bağlanması durumunda bu socket instance'ı kullanılabilir olacaktır.
io.on('connection', function (socket) {
  //Başlangıçta kullanıcı eklendi boolean false olarak işaretlendi.
  var addedUser = false;

  //Client tarafından "new message" emit edilmesi durumunda. Tü
  socket.on('new message', function (data) {

    //Gönderici dışındaki tüm clientlara "new message" eventi parametreler ile gönderildi.
    //Burada aslında herkese kullanıcın ismi ve gönderdiği mesaj iletilecektir.
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  //Kullanıcı giriş yaptığında  "add user" eventini yayınlayarak server'a kayıt gerçekleştirir.
  socket.on('add user', function (username) {

    //Eğer kullanıcı daha önde kayıt olduysa buradan döner.
    if (addedUser) return;

    //İlgili client için açılan Socket nesnesine username property'si ekleniyor.
    socket.username = username;
    //Bağlanmış kullanıcı sayısı artırılıyor
    ++numUsers;
    //Kullanıcı eklendi
    addedUser = true;
    //Sadece ilgili client'a odadaki kişi sayısının artışı emit ediliyor.
    socket.emit('login', {
      numUsers: numUsers
    });

    //İlgili client dışında kalan herkese yeni kullanıcın adı ve kodadaki yeni kişi sayısı emit ediliyor.
    //Burada dikkat etmemiz gereken nokta socket.emit metodu ile emit ettiğimiz eventin için zaten ilgili client kendi kullanıcı adını bildiği için tekrar eklemedik.
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  //Kullanıcıdan herhangi biri klavye ile yazı yazıp "typing" eventi gönderdiğinde o kullanıcı dışındaki diğer kullanıcılara, o kullanıcının ismi ile birlikte event emit edilir.
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  //Kullanıcıdan herhangi biri klavye ile yazı yazmayı bıraktığında "stop typing" eventi gönderdiğinde o
  // kullanıcı dışındaki diğer kullanıcılara, o kullanıcının ismi ile birlikte event emit edilir.
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  //Kullanıcı çıktığı zaman sunucu içerisindeki işlemler ve diğer kullanıcılara bu durumun bildirilmesi sağlanır.
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;
      //Diğer kullanıcılara ayrılan kişinin ismi ve son kullanıcı sayısı bildirildi.
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
