const config = require('../../config/global.config.js');
const lgtv = require("lgtv");
const lgtvConfig = config.lgtv;


exports.turnOff = (req, res) => {
    lgtv.connect(lgtvConfig.ip, (err, response) => {
        if (!err) {
            lgtv.turn_off((err, response) => {
                    res.json({
                        "success": true,
                        "message": `LGTV was turned off`
                    });
            });
        }
    });
};

exports.changeInput = (req, res) => {
    let id = req.params.id;

    lgtv.connect(lgtvConfig.ip, (err, response) => {
        if (!err) {
            lgtv.set_input(`HDMI_${id}`, (err, response) => {
                // if (response) {
                    res.json({
                        "success": true,
                        "message": `Input was changed to ${id}`
                    });
                // }
            });
        }
    });
    // res.json({"message": "Welcome to update: " + req.params.noteId});
};