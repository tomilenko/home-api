// 192.168.0.115

// var lgtv = require("lgtv2")({
//     url: 'ws://lgwebostv:3000'
// });
 
// lgtv.on('connect', function () {
//     console.log('connected');
    
//     lgtv.subscribe('ssap://audio/getVolume', function (err, res) {
//         if (res.changed.indexOf('volume') !== -1) console.log('volume changed', res.volume);
//         if (res.changed.indexOf('muted') !== -1) console.log('mute changed', res.muted);
//     });
    
// });

lgtv = require("lgtv");

var tv_ip_address = "192.168.0.115";
lgtv.connect(tv_ip_address, function(err, response){
  if (!err) {
    // lgtv.show_float("It works!", function(err, response){
    //   if (!err) {
    //     lgtv.disconnect();
    //   }
    // }); // show float

    // lgtv.set_volume(0, function(err, response){
    //     lgtv.disconnect();
    //   });

    lgtv.turn_off(function(err, response){
        lgtv.disconnect();
      });

    // lgtv.set_input("HDMI_1", function(err, response){
    //     if (!err) {
    //       lgtv.set_volume(15, function(err, response){
    //         lgtv.disconnect();
    //       });
    //     }
    // });
    // lgtv.apps(function(err, response) {
    //     console.log(response);
    // });
  }
}); // connect