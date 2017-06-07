
var exec = require('cordova/exec');

var AVAudioSession = (function() {
	function AVAudioSession() {

	}

	AVAudioSession.Categories = {
		AMBIENT: 'AVAudioSessionCategoryAmbient',
		SOLO_AMBIENT: 'AVAudioSessionCategorySoloAmbient',
		PLAYBACK: 'AVAudioSessionCategoryPlayback',
		RECORD: 'AVAudioSessionCategoryRecord',
		PLAY_AND_RECORD: 'AVAudioSessionCategoryPlayAndRecord',
		AUDIO_PROCESSING: 'AVAudioSessionCategoryAudioProcessing',
		MULTI_ROUTE: 'AVAudioSessionCategoryMultiRoute'
	};

	AVAudioSession.CategoryOptions = {
		MIX_WITH_OTHERS: 1,
		DUCK_OTHERS: 2,
		ALLOW_BLUETOOTH: 4,
		DEFAULT_TO_SPEAKER: 8
	};

	AVAudioSession.RouteChangeReason = {
		Unknown: 0,
		NewDeviceAvailable: 1,
		OldDeviceUnavailable: 2,
		CategoryChange: 3,
		Override: 4,
		WakeFromSleep: 6,
		NoSuitableRouteForCategory: 7,
		RouteConfigurationChange: 8
	};

	AVAudioSession.prototype.getCategory = function (resultCallback) {
		exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategory", []);

		function successCallback(param) {
			resultCallback(param);
		}

		function errorCallback(param) {
		}
	};

	AVAudioSession.prototype.getCategoryOptions = function (resultCallback) {
		exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategoryOptions", []);

		function successCallback(param) {
			resultCallback(param);
		}

		function errorCallback(param) {
		}
	};

	AVAudioSession.prototype.setCategory = function (category, successCallback, errorCallback) {
		exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category]);
	};

	AVAudioSession.prototype.setCategoryWithOptions = function (category, categoryOptions, successCallback, errorCallback) {
		exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category, categoryOptions]);
	};

	AVAudioSession.prototype.registerRouteChangedCallback = function (successCallback, errorCallback) {
		exec(successCallback, errorCallback, "AVAudioSessionAdapter", "registerRouteChangedCallback", []);
	};
	return AVAudioSession;
}());

module.exports = new AVAudioSessionAdapter();

