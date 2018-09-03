const Client = require('utorrent-api');
const utorrentConfig = require('../../config/utorrent.config.js');
const utorrent = new Client(utorrentConfig.url, utorrentConfig.port);
utorrent.setCredentials(utorrentConfig.username, utorrentConfig.password);

exports.torrentList = (req, res) => {
    utorrent.call('list', (err, torrentsList) => {
        if (err) { res.json({"error": err}); return; } 
        res.json({"torrents": torrentsList.torrents});
    });
};

exports.stopTorrent = (req, res) => {
    utorrent.call('stop', {'hash': req.params.hash}, (err, data) => {
        if (err) { res.json({"success": false, "error": err}); return; }

        res.json({
            "success": true,
            "message": "Torrent has been stopped!"
        });
    });
};

exports.startTorrent = (req, res) => {
    utorrent.call('start', {'hash':  req.params.hash}, (err, data) => {
        if (err) { res.json({"success": false, "error": err}); return; }

        res.json({
            "success": true,
            "message": "Torrent has been started!"
        });
    });
};

exports.removeTorrent = (req, res) => {
    utorrent.call('remove', {'hash':  req.params.hash}, (err, data) => {
        if (err) { res.json({"success": false, "error": err}); return; }
        
        res.json({
            "success": true,
            "message": "Torrent has been removed!"
        });
    });
};

exports.getDetails = (req, res) => {
    utorrent.call('getprops', {'hash': req.params.hash}, (err, data) => {
        if (err) { res.json({"success": false, "error": err}); return; }
        let props = data.props[0];

        res.json({
            "success": true,
            "message": "Torrent props",
            "data": props
        });
    });
};

exports.setPriority = (req, res) => {
    utorrent.call('setprio', {'hash': req.params.hash, 'p': req.params.priority}, (err, data) => {
        if (err) { res.json({"success": false, "error": err}); return; }
        // let props = data.props[0];

        res.json({
            "success": true,
            "message": `Priority has been set to ${req.params.priority}`,
        });
    });
};

// exports.addTorrentByFile = (req, res) => {
//     utorrent.call('add-file', {'torrent_file': torrentFileBuffer}, function(err, data) {
//         if (err) { res.json({"error": err}); return; } 
//         ctx.reply("Torrent has been added to the downloading list!")
//     });


//     res.json({"message": "Welcome to delete: " + req.params.noteId});
// };

// exports.addTorrentByUrl = (req, res) => {
//     utorrent.call('add-url', {'s': url}, function(err, data) {
//         if (err) { res.json({"error": err}); return; } 
//         ctx.reply("Torrent has been added to the downloading list!");
//     });

//     res.json({"message": "Welcome to delete: " + req.params.noteId});
// };