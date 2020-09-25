var alertOfIE = function () {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    // If IE, return version number.
    if (Idx > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        alert("This site is not fully supported by Internet Explorer. It is best viewed in an updated browser like: Google Chrome, Opera, Mozilla Firefox or Microsoft Edge.");
    }
};
//# sourceMappingURL=TopMenuSiteGlobal.js.map