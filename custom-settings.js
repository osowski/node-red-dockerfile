/**
 *  Updated settings.js borrowed from bluemix-settings.js from Bluemix boilerplates
 **/

var settings = module.exports = {
    uiPort: process.env.VCAP_APP_PORT || 8080,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    functionGlobalContext: { }
}

var when = require("when");
if (process.env.NODE_RED_USERNAME && process.env.NODE_RED_PASSWORD) {
    settings.adminAuth = {
        type: "credentials",
        users: function(username) {
            if (process.env.NODE_RED_USERNAME == username) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        },
        authenticate: function(username, password) {
            if (process.env.NODE_RED_USERNAME == username &&
                process.env.NODE_RED_PASSWORD == password) {
                return when.resolve({username:username,permissions:"*"});
            } else {
                return when.resolve(null);
            }
        }
    }
}
