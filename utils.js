(function () {
	exports.registerFunction = function (name, func) {
		exports[name] = func;
	};
}.call(this));