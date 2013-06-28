var vendors = ['ms', 'moz', 'webkit', 'o']
	, lastFrameTime = null;

for (var i = 0, n = vendors.length; i < n; i++) {
	vendor = vendors[i];
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
	}
}

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = function(callback, element) {
		var currFrameTime = +(new Date())
			, id, interval, lastTime;
		if (lastFrameTime == null) {
			lastFrameTime = currFrameTime;
		}
		interval = Math.max(0, 16 - (currFrameTime - lastFrameTime));
		id = window.setTimeout((function() {
			// Call with elapsed frame time
			callback(currFrameTime + interval);
		}), interval);
		lastTime = currFrameTime + interval;
		return id;
	};
}

if (!window.cancelAnimationFrame) {
	window.cancelAnimationFrame = function(id) {
		clearTimeout(id);
	};
}
