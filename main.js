var pkg = require(__dirname + '/package.json')
var modules = {}

// Iterate through all modules chosen by the client and add them to the dictionary
for(var key in pkg['dependencies'])
    modules[key] = require(key);

modules['http'].createServer(function (req, res) {
    res.end('Node.js-Module of IIITA Framework!\n' + 'Dependencies included: ' + Object.keys(modules));
}).listen(8080);
