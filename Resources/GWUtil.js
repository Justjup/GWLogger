

var GWUtil = {

	showNoInternetAlert: function() {
		var alertDialog = Titanium.UI.createAlertDialog({
		    title: 'No internet connection',
		    message: 'Please connect to the internet and try again.',
		    buttonNames: ['OK']
		});
		alertDialog.show();
	},

	cn: function(txt) {
		var array = txt.split('/');
		return array[array.length - 1];
	},

	getTimeInClockFormat: function(date) {
		return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	},

	debug: function(e, txt) {
		GWUtil.printReal(txt, e, 0);
	},

	info: function(e, txt) {
		GWUtil.printReal(txt, e, 1);
	},

	warn: function(e, txt) {
		GWUtil.printReal(txt, e, 2);
	},
	
	printReal: function(txt, e, type) {
		var funcName = "";
		if (arguments.callee.caller !== null && typeof arguments.callee.caller !== 'undefined') {
			funcName = arguments.callee.caller.name;
			if (funcName.length > 0){ funcName = " " + funcName + "()"; };
		}

		var output = GWUtil.getTimeInClockFormat(new Date()) + " [" + GWUtil.cn(e.sourceURL) + " " + e.line + funcName + "]: " + txt;
		switch (type) {
		case 0:
			
				Ti.API.debug(output);
				break;
			
		case 1:
			
				Ti.API.info(output);
				break;
			
		case 2:
			
				Ti.API.warn(output);
				break;
			
		default:
			
				Ti.API.info(output);
				break;
			

		}

	}

};

this.U = GWUtil;
