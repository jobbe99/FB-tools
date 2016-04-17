chrome.browserAction.onClicked.addListener(function(tab) {
	var scripts = [
	  'jquery.min.js',
	  'analyze.js'
	];
	scripts.forEach(function(script) {
	  chrome.tabs.executeScript(null, { file: script }, function(resp) {
		if (script!=='last.js') return;
		// Your callback code here
	  });
	});
});
