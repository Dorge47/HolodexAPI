const holodex = require('./screwyHolodexAPI.js');
async function listFutureVids(channelID, apikey) {
    var resp = await holodex.getFutureVids(channelID, apikey);
    console.log(JSON.stringify(resp));
};
//listFutureVids("", "")