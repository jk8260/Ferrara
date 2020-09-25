"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var DOMOBJDROPDOWN = function DOMOBJDROPDOWN() {
    return {
        nutritionFacts: document.getElementsByClassName("sharednutritionblock"),
        dropDownDisplayName: document.getElementsByClassName("dropdown-display-name"),
        anchor: document.getElementById("dropdown-content"),
        dropDownDiv: document.getElementById("nutrition-dropdown")
    };
};
// Runs on page load
// If There are more than one nutrition panels, display dropdown
exports.nutritionDropDownOnloadFunc = function (domObjDropDown) {
    if (domObjDropDown === void 0) {
        domObjDropDown = DOMOBJDROPDOWN();
    }
    var dropDownDisplayName = domObjDropDown.dropDownDisplayName,
        anchor = domObjDropDown.anchor,
        nutritionFacts = domObjDropDown.nutritionFacts,
        dropDownDiv = domObjDropDown.dropDownDiv;
    if (dropDownDisplayName.length > 1) {
        for (var i = 0; i < dropDownDisplayName.length; i += 1) {
            var optionTag = document.createElement("option");
            optionTag.innerHTML = dropDownDisplayName[i].innerHTML;
            optionTag.value = dropDownDisplayName[i].innerHTML;
            anchor.appendChild(optionTag);
            i <= 0 ? nutritionFacts[i].style.display = "block" : nutritionFacts[i].style.display = "none";
            dropDownDiv.style.display = "unset";
        }
        ;
    } else {
        nutritionFacts[0].style.display = "unset";
        dropDownDiv.style.display = "none";
    }
    ;
    return domObjDropDown;
};
//This function is fired on Carousel OnChange
exports.nutritionDropDownFunc = function (node, domObj) {
    if (domObj === void 0) {
        domObj = DOMOBJDROPDOWN();
    }
    var dropDownDisplayName = domObj.dropDownDisplayName,
        nutritionFacts = domObj.nutritionFacts;
    for (var i = 0; i < dropDownDisplayName.length; i += 1) {
        dropDownDisplayName[i].innerHTML === node ? nutritionFacts[i].style.display = "block" : nutritionFacts[i].style.display = "none";
    }
    ;
    return domObj;
};
if (typeof process === "undefined") exports.nutritionDropDownOnloadFunc();
//# sourceMappingURL=nutritionDropdown.js.map

