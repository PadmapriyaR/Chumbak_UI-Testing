var HtmlReporter = require('protractor-angular-screenshot-reporter');
exports.config = {
	
	allScriptsTimeout: 99999,

	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities:{
		'browserName': 'firefox'
	},
	
	framework: 'jasmine2',

	specs: ['chumbakUISpec.js'],

	jasmineNodeOpts:{
		defaultTimoutInterval: 1440000,
		showColors: true
	},

	onPrepare: function(){
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: './report/Screenshots/',
			docTitle: 'Cumbak Tests Reporter',
			docName: 'ChumbakTestReport.html',
			//cssOverrideFile: 'css/style.css',
			metaDataBuilder: function metaDataBuilder(spec, descriptions, results, capabilities) {
      		// Return the description of the spec and if it has passed or not: 
      		return {
         		description: descriptions.join(' '), 
         		passed: results.passed()
      			};
			}
		}).getJasmine2Reporter());
	}
};

/*metaDataBuilder: function metaDataBuilder(spec, descriptions, results, capabilities) {
      		// Return the description of the spec and if it has passed or not: 
      		return {
         		description: descriptions.join(' '), 
         		passed: results.passed()
      		};
		}*/