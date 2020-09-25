;
var homeText = document.getElementsByClassName("home-link")[0];
var TIMESTAMPOBJECT = {};
homeText.onclick = function () {
    var timeStamp = Math.floor(Date.now() / 1000);
    localStorage.setItem('homeButtonClick', timeStamp.toString());
};
var readLocalStorageForHomeButtonTimeStamp = function () {
    var homeButtonClickLocalStorage = localStorage.getItem('homeButtonClick');
    if (homeButtonClickLocalStorage) {
        TIMESTAMPOBJECT['homeButtonClickTimeStamp'] = parseInt(homeButtonClickLocalStorage);
        TIMESTAMPOBJECT['timeStampDifference'] = Math.floor(Date.now() / 1000) - TIMESTAMPOBJECT.homeButtonClickTimeStamp;
    }
    ;
};
var hideTreeIfHomeButtonWasClicked = function () {
    if (TIMESTAMPOBJECT.timeStampDifference < 2) {
        removeTreeElements();
    }
    ;
};
//# sourceMappingURL=KeeblerLocalStorageForStartPageTs.js.map