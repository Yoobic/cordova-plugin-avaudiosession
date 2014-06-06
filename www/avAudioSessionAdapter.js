
var exec = require('cordova/exec');

var AVAudioSessionAdapter = function() {
};

AVAudioSessionAdapter.Categories = {
    AMBIENT: 'AVAudioSessionCategoryAmbient',
    SOLO_AMBIENT: 'AVAudioSessionCategorySoloAmbient',
    PLAYBACK: 'AVAudioSessionCategoryPlayback',
    RECORD: 'AVAudioSessionCategoryRecord',
    PLAY_AND_RECORD: 'AVAudioSessionCategoryPlayAndRecord',
    AUDIO_PROCESSING: 'AVAudioSessionCategoryAudioProcessing',
    MULTI_ROUTE: 'AVAudioSessionCategoryMultiRoute'
};

AVAudioSessionAdapter.CategoryOptions = {
    MIX_WITH_OTHERS: 1,
    DUCK_OTHERS: 2,
    ALLOW_BLUETOOTH: 4,
    DEFAULT_TO_SPEAKER: 8
};

AVAudioSessionAdapter.prototype.getCategory = function(resultCallback) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategory", []);
        
    function successCallback(param) {
        resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.getCategoryOptions = function(resultCallback) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "getCategoryOptions", []);
        
    function successCallback(param) {
            resultCallback(param);
    }
        
    function errorCallback(param) { }
};

AVAudioSessionAdapter.prototype.setCategory = function(successCallback, errorCallback, category) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category]);
};

AVAudioSessionAdapter.prototype.setCategoryWithOptions = function(successCallback, errorCallback, category, categoryOptions) {
    exec(successCallback, errorCallback, "AVAudioSessionAdapter", "setCategory", [category, categoryOptions]);
};

module.exports = AVAudioSessionAdapter;

