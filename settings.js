exports.shorten_settings = {
	dev_domain: 'localhost:8888', // Your development domain
	live_domain: 'y.yolk.cc', // Live domain
	dev_mongodb_uri: 'mongodb://localhost/yyolkcc',
	live_mongodb_uri: process.env.MONGOHQ_URL
};


/*
*   Schema definition
*/
var Schema = require('mongoose').Schema;
// LinkStats is an embedded-document schema of LinkMaps
var LinkStats = new Schema();
LinkStats.add({
    ip: String,
    userAgent: String,
    referrer: String,
    timestamp: {type: Date, default: Date.now}
});

exports.models = {
	LinkMaps: new Schema({
	    linkDestination: String,
	    linkHash: String,
	    timestamp: {type: Date, default: Date.now},
	    linkStats: [LinkStats]
	})
};