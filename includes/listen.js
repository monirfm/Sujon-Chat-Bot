module.exports = function ({
  api: _0xd26ce5,
  models: _0x24c5e7
}) {
  const _0x1bbe40 = require('fs');
  const _0x46b891 = require("./controllers/users")({
    'models': _0x24c5e7,
    'api': _0xd26ce5
  });
  const _0x525910 = require("./controllers/threads")({
    'models': _0x24c5e7,
    'api': _0xd26ce5
  });
  const _0x3a675b = require("./controllers/currencies")({
    'models': _0x24c5e7
  });
  const _0x51cc38 = require("../utils/log.js");
  const _0x758ce9 = require("moment-timezone");
  const _0x40d1b8 = require("axios");
  var _0x33fd8e = _0x758ce9.tz("Asia/Kolkata").day();
  const _0x48014b = __dirname + "/../Script/commands/checktuongtac/";
  setInterval(async () => {
    const _0x5835da = _0x758ce9.tz("Asia/Kolkata").day();
    const _0x5982be = [...global.config.NDH, ...global.config.ADMINBOT];
    try {
      if (_0x33fd8e != _0x5835da) {
        _0x33fd8e = _0x5835da;
        const _0x12330b = _0x1bbe40.readdirSync(_0x48014b).filter(_0x5f0415 => {
          const _0x2d0ead = _0x5f0415.replace(".json", '');
          return _0x5982be.includes(_0x2d0ead) || global.data.allThreadID.includes(_0x2d0ead);
        });
        console.log("SUJON BOSS");
        await new Promise(async _0x379f01 => {
          for (const _0x2a7831 of _0x12330b) {
            const _0x2c1915 = JSON.parse(_0x1bbe40.readFileSync(_0x48014b + _0x2a7831));
            let _0x4fdfbb = [];
            let _0x5f42b0 = 1;
            for (const _0x5c0670 of _0x2c1915.day) {
              const _0x308ed7 = (await _0x46b891.getNameUser(_0x5c0670.id)) || "SUJON BOSS";
              _0x5c0670.name = _0x308ed7;
              _0x4fdfbb.push(_0x5c0670);
            }
            ;
            _0x4fdfbb.sort((_0x16d001, _0x51364d) => {
              return _0x16d001.count > _0x51364d.count ? -1 : _0x16d001.count < _0x51364d.count ? 1 : _0x16d001.name.localeCompare(_0x51364d.name);
            });
            let _0x4f6901 = "==SHAHADAT CHAT BOT==\n\n";
            _0x4f6901 += _0x4fdfbb.slice(0, 10).map(_0x312e4d => {
              return _0x5f42b0++ + ". " + _0x312e4d.name + " with " + _0x312e4d.count + " message";
            }).join("\n");
            _0xd26ce5.sendMessage(_0x4f6901, _0x2a7831.replace(".json", ''), _0x4cfab7 => _0x4cfab7 ? console.log(_0x4cfab7) : '');
            _0x2c1915.day.forEach(_0x208047 => {
              _0x208047.count = 0;
            });
            _0x2c1915.time = _0x5835da;
            _0x1bbe40.writeFileSync(_0x48014b + _0x2a7831, JSON.stringify(_0x2c1915, null, 4));
          }
          _0x379f01();
        });
        await new Promise(async _0x4aa633 => {
          if (_0x5835da == 1) {
            console.log("Priyansh Rajput");
            for (const _0xcf3ba0 of _0x12330b) {
              const _0x4b20a7 = JSON.parse(_0x1bbe40.readFileSync(_0x48014b + _0xcf3ba0));
              let _0xe4d3df = [];
              let _0x14fcdc = 1;
              for (const _0x57cad7 of _0x4b20a7.week) {
                const _0x205278 = (await _0x46b891.getNameUser(_0x57cad7.id)) || "SujonHun Yar";
                _0x57cad7.name = _0x205278;
                _0xe4d3df.push(_0x57cad7);
              }
              ;
              _0xe4d3df.sort((_0x4c22c3, _0x1a4648) => {
                return _0x4c22c3.count > _0x1a4648.count ? -1 : _0x4c22c3.count < _0x1a4648.count ? 1 : _0x4c22c3.name.localeCompare(_0x1a4648.name);
              });
              let _0x506ace = "==SHAHADAT CHAT BOT==\n\n";
              _0x506ace += _0xe4d3df.slice(0, 10).map(_0xc4519d => {
                return _0x14fcdc++ + ". " + _0xc4519d.name + " with " + _0xc4519d.count + " message";
              }).join("\n");
              _0xd26ce5.sendMessage(_0x506ace, _0xcf3ba0.replace(".json", ''), _0x447c68 => _0x447c68 ? console.log(_0x447c68) : '');
              _0x4b20a7.week.forEach(_0x2c14f => {
                _0x2c14f.count = 0;
              });
              _0x1bbe40.writeFileSync(_0x48014b + _0xcf3ba0, JSON.stringify(_0x4b20a7, null, 4));
            }
          }
          _0x4aa633();
        });
        global.client.sending_top = false;
      }
    } catch (_0x354e57) {
      console.error(_0x354e57);
    }
  }, 10000);
  (async function () {
    try {
      _0x51cc38(global.getText("listen", "startLoadEnvironment"), "[ SUJON BOSS ]");
      let _0x36ea1a = await _0x525910.getAll();
      let _0x1e820b = await _0x46b891.getAll(["userID", "name", "data"]);
      let _0x1a31f3 = await _0x3a675b.getAll(["userID"]);
      for (const _0x2b74f7 of _0x36ea1a) {
        const _0x57bbba = String(_0x2b74f7.threadID);
        global.data.allThreadID.push(_0x57bbba);
        global.data.threadData.set(_0x57bbba, _0x2b74f7.data || {});
        global.data.threadInfo.set(_0x57bbba, _0x2b74f7.threadInfo || {});
        if (_0x2b74f7.data && _0x2b74f7.data.banned == true) {
          global.data.threadBanned.set(_0x57bbba, {
            'reason': _0x2b74f7.data.reason || '',
            'dateAdded': _0x2b74f7.data.dateAdded || ''
          });
        }
        if (_0x2b74f7.data && _0x2b74f7.data.commandBanned && _0x2b74f7.data.commandBanned.length != 0) {
          global.data.commandBanned.set(_0x57bbba, _0x2b74f7.data.commandBanned);
        }
        if (_0x2b74f7.data && _0x2b74f7.data.NSFW) {
          global.data.threadAllowNSFW.push(_0x57bbba);
        }
      }
      _0x51cc38.loader(global.getText("listen", "loadedEnvironmentThread"));
      for (const _0x37a0a8 of _0x1e820b) {
        const _0xf353a9 = String(_0x37a0a8.userID);
        global.data.allUserID.push(_0xf353a9);
        if (_0x37a0a8.name && _0x37a0a8.name.length != 0) {
          global.data.userName.set(_0xf353a9, _0x37a0a8.name);
        }
        if (_0x37a0a8.data && _0x37a0a8.data.banned == 1) {
          global.data.userBanned.set(_0xf353a9, {
            'reason': _0x37a0a8.data.reason || '',
            'dateAdded': _0x37a0a8.data.dateAdded || ''
          });
        }
        if (_0x37a0a8.data && _0x37a0a8.data.commandBanned && _0x37a0a8.data.commandBanned.length != 0) {
          global.data.commandBanned.set(_0xf353a9, _0x37a0a8.data.commandBanned);
        }
      }
      for (const _0x400539 of _0x1a31f3) global.data.allCurrenciesID.push(String(_0x400539.userID));
      _0x51cc38.loader(global.getText("listen", "loadedEnvironmentUser"));
      _0x51cc38(global.getText("listen", "successLoadEnvironment"), "[ sujon]");
    } catch (_0x59bb38) {
      return _0x51cc38.loader(global.getText("listen", "failLoadEnvironment", _0x59bb38), "error");
    }
  })();
  _0x51cc38("[ " + global.config.PREFIX + " ] • " + (!global.config.BOTNAME ? '' : global.config.BOTNAME), "[ SUJON BOSS ]");
  const _0x56d0ce = require("./handle/handleCommand")({
    'api': _0xd26ce5,
    'models': _0x24c5e7,
    'Users': _0x46b891,
    'Threads': _0x525910,
    'Currencies': _0x3a675b
  });
  const _0x233840 = require("./handle/handleCommandEvent")({
    'api': _0xd26ce5,
    'models': _0x24c5e7,
    'Users': _0x46b891,
    'Threads': _0x525910,
    'Currencies': _0x3a675b
  });
  const _0xa4479b = require("./handle/handleReply")({
    'api': _0xd26ce5,
    'models': _0x24c5e7,
    'Users': _0x46b891,
    'Threads': _0x525910,
    'Currencies': _0x3a675b
  });
  const _0x450c60 = require("./handle/handleReaction")({
    'api': _0xd26ce5,
    'models': _0x24c5e7,
    'Users': _0x46b891,
    'Threads': _0x525910,
    'Currencies': _0x3a675b
  });
  const _0x3b37dd = require("./handle/handleEvent")({
    'api': _0xd26ce5,
    'models': _0x24c5e7,
    'Users': _0x46b891,
    'Threads': _0x525910,
    'Currencies': _0x3a675b
  });
  const _0x2b47a9 = require("./handle/handleCreateDatabase")({
    'api': _0xd26ce5,
    'Threads': _0x525910,
    'Users': _0x46b891,
    'Currencies': _0x3a675b,
    'models': _0x24c5e7
  });
  const _0x9e37a8 = __dirname + "/../Script/commands/cache/datlich.json";
  const _0x219775 = {
    0x1: 0x9fa52400,
    0x2: 0x90321000,
    0x3: 0x9fa52400,
    0x4: 0x9a7ec800,
    0x5: 0x9fa52400,
    0x6: 0x9a7ec800,
    0x7: 0x9fa52400,
    0x8: 0x9fa52400,
    0x9: 0x9a7ec800,
    0xa: 0x9fa52400,
    0xb: 0x9a7ec800,
    0xc: 0x9fa52400
  };
  const _0x1a513f = _0x5ae788 => new Promise(_0x25758b => {
    _0x5ae788.forEach((_0x4c6cbc, _0x1a44df) => _0x5ae788[_0x1a44df] = parseInt(String(_0x4c6cbc).trim()));
    if (_0x5ae788[1] > 12 || _0x5ae788[1] < 1) {
      _0x25758b("Your month seems invalid");
    }
    if (_0x5ae788[0] > (_0x5ae788[1] == 0 ? 0 : _0x5ae788[1] == 2 ? _0x5ae788[2] % 4 == 0 ? 29 : 28 : [1, 3, 5, 7, 8, 10, 12].includes(_0x5ae788[1]) ? 31 : 30) || _0x5ae788[0] < 1) {
      _0x25758b("Your date seems invalid");
    }
    if (_0x5ae788[2] < 2022) {
      _0x25758b("What era do you live in?");
    }
    if (_0x5ae788[3] > 23 || _0x5ae788[3] < 0) {
      _0x25758b("Your time seems to be invalid");
    }
    if (_0x5ae788[4] > 59 || _0x5ae788[3] < 0) {
      _0x25758b("Your minute seems invalid");
    }
    if (_0x5ae788[5] > 59 || _0x5ae788[3] < 0) {
      _0x25758b("Your seconds seem invalid");
    }
    yr = _0x5ae788[2] - 1970;
    yearToMS = yr * 365 * 24 * 60 * 60 * 1000;
    yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
    monthToMS = 0;
    for (let _0xf7fb6f = 1; _0xf7fb6f < _0x5ae788[1]; _0xf7fb6f++) {
      monthToMS += _0x219775[_0xf7fb6f];
    }
    if (_0x5ae788[2] % 4 == 0) {
      monthToMS += 86400000;
    }
    dayToMS = _0x5ae788[0] * 24 * 60 * 60 * 1000;
    hourToMS = _0x5ae788[3] * 60 * 60 * 1000;
    minuteToMS = _0x5ae788[4] * 60 * 1000;
    secondToMS = _0x5ae788[5] * 1000;
    oneDayToMS = 86400000;
    timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
    _0x25758b(timeMs);
  });
  const _0x9bfa7 = async () => {
    if (!_0x1bbe40.existsSync(_0x9e37a8)) {
      _0x1bbe40.writeFileSync(_0x9e37a8, JSON.stringify({}, null, 4));
    }
    var _0x40a1da = JSON.parse(_0x1bbe40.readFileSync(_0x9e37a8));
    var _0x4e9f6f = _0x758ce9().tz("Asia/Kolkata").format("DD/MM/YYYY_HH:mm:ss");
    _0x4e9f6f = _0x4e9f6f.split('_');
    _0x4e9f6f = [..._0x4e9f6f[0].split('/'), ..._0x4e9f6f[1].split(':')];
    let _0x366067 = [];
    let _0x4fe680 = await _0x1a513f(_0x4e9f6f);
    const _0xd67fb6 = _0x427aa0 => new Promise(async _0xc16991 => {
      let _0x2dda3e = await _0x1a513f(_0x427aa0.split('_'));
      if (_0x2dda3e < _0x4fe680) {
        if (_0x4fe680 - _0x2dda3e < 600000) {
          _0x40a1da[boxID][_0x427aa0].TID = boxID;
          _0x366067.push(_0x40a1da[boxID][_0x427aa0]);
          delete _0x40a1da[boxID][_0x427aa0];
        } else {
          delete _0x40a1da[boxID][_0x427aa0];
        }
        _0x1bbe40.writeFileSync(_0x9e37a8, JSON.stringify(_0x40a1da, null, 4));
      }
      ;
      _0xc16991();
    });
    await new Promise(async _0x30a337 => {
      for (boxID in _0x40a1da) {
        for (e of Object.keys(_0x40a1da[boxID])) await _0xd67fb6(e);
      }
      _0x30a337();
    });
    for (el of _0x366067) {
      try {
        var _0x54e600 = (await _0x525910.getInfo(el.TID)).participantIDs;
        _0x54e600.splice(_0x54e600.indexOf(_0xd26ce5.getCurrentUserID()), 1);
        var _0xd58d5 = el.REASON || "🥰🥰🥰";
        var _0x262db5 = [];
        for (let _0xf2513d = 0; _0xf2513d < _0x54e600.length; _0xf2513d++) {
          if (_0xf2513d == _0xd58d5.length) {
            _0xd58d5 += " ‍ ";
          }
          _0x262db5.push({
            'tag': _0xd58d5[_0xf2513d],
            'id': _0x54e600[_0xf2513d],
            'fromIndex': _0xf2513d - 1
          });
        }
      } catch (_0x3b1baa) {
        return console.log(_0x3b1baa);
      }
      var _0x29c7ad = {
        'body': _0xd58d5,
        'mentions': _0x262db5
      };
      if ("ATTACHMENT" in el) {
        _0x29c7ad.attachment = [];
        for (a of el.ATTACHMENT) {
          let _0x5dbbc6 = (await _0x40d1b8.get(encodeURI(a.url), {
            'responseType': "arraybuffer"
          })).data;
          _0x1bbe40.writeFileSync(__dirname + ("/../Script/commands/cache/" + a.fileName), Buffer.from(_0x5dbbc6, "utf-8"));
          _0x29c7ad.attachment.push(_0x1bbe40.createReadStream(__dirname + ("/../Script/commands/cache/" + a.fileName)));
        }
      }
      console.log(_0x29c7ad);
      if ("BOX" in el) {
        await _0xd26ce5.setTitle(el.BOX, el.TID);
      }
      _0xd26ce5.sendMessage(_0x29c7ad, el.TID, () => "ATTACHMENT" in el ? el.ATTACHMENT.forEach(_0x200825 => _0x1bbe40.unlinkSync(__dirname + ("/../Script/commands/cache/" + _0x200825.fileName))) : '');
    }
  };
  setInterval(_0x9bfa7, 60000);
  return _0x5c132a => {
    switch (_0x5c132a.type) {
      case "message":
      case "message_reply":
      case "message_unsend":
        _0x2b47a9({
          'event': _0x5c132a
        });
        _0x56d0ce({
          'event': _0x5c132a
        });
        _0xa4479b({
          'event': _0x5c132a
        });
        _0x233840({
          'event': _0x5c132a
        });
        break;
      case "event":
        _0x3b37dd({
          'event': _0x5c132a
        });
        break;
      case "message_reaction":
        9;
        _0x450c60({
          'event': _0x5c132a
        });
        break;
      default:
        break;
    }
  };
};
