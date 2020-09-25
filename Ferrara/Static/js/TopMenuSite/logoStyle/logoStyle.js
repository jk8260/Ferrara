"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var DOMOBJLOGOSTYLE = function () {
    return {
        openedMenu: document.querySelector('button[aria-expanded="false"]'),
        logoImage: document.getElementById("logo-image")
    };
};
exports.logoStyle = function (brandName, domObjLogoStyle) {
    if (domObjLogoStyle === void 0) { domObjLogoStyle = DOMOBJLOGOSTYLE(); }
    if (brandName === 'murrayfood') {
        domObjLogoStyle.openedMenu ? domObjLogoStyle.logoImage.style.display = "none" : domObjLogoStyle.logoImage.style.display = "block";
    }
    ;
    return domObjLogoStyle;
};
if (typeof process === "undefined")
    exports.logoStyle();
//# sourceMappingURL=logoStyle.js.map