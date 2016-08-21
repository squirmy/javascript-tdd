var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var noop = function() {};

var jasmine = new Jasmine();
jasmine.configureDefaultReporter({print: noop});
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile();
jasmine.execute(process.argv.slice(2));
