module.exports = (app) => {

    const utorrent = require('../controllers/utorrent.controller.js');

    app.get('/', (req, res) => res.json({"message": "Welcome to utorrent/."}));

    app.get('torrentList/', utorrent.torrentList);

    app.get('stopTorrent/:hash', utorrent.stopTorrent);
    app.get('startTorrent/:hash', utorrent.startTorrent);
    app.get('removeTorrent/:hash', utorrent.removeTorrent);
    app.get('getDetails/:hash', utorrent.getDetails);
    app.get('setPriority/:hash/:priority', utorrent.setPriority);
    // app.get('addTorrentByFile/:file', notes.findOne);
    // app.get('addTorrentByUrl/:url', notes.findOne);
}