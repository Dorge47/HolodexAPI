const https = require('https');
function sendRequest(func, apiKey, params) {
    let urlQuery = new URLSearchParams(params).toString();
    const options = {
        hostname: 'holodex.net',
        path: '/api/v2/' + func + "?" + urlQuery,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-APIKEY': apiKey
        },
    };
    return new Promise(function(resolve) {
        https.get(options, (resp) => {
            var data = "";
            resp.on("data", (chunk) => (data += chunk));
            resp.on("end", () => {
                resolve(data);
            });
        });
    });
}
exports.getFutureVids = async function(channelId, apiKey) {
    var apiRequest = {
        "channel_id": channelId,
        "max_upcoming_hours": 100
    }
    let responseObj = await sendRequest("live", apiKey, apiRequest)
    return JSON.parse(responseObj);
}