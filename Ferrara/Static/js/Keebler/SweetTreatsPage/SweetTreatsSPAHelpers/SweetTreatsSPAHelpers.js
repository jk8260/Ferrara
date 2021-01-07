var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var openTab = function (selectedButton) {
    var tabLinks = document.getElementsByClassName("tablink");
    var container = document.getElementsByClassName("scroll-container");
    var thumb = document.getElementById("scroll-thumb");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" selected-tablink", "");
    }
    if (selectedButton != null && container != null) {
        selectedButton.className += " selected-tablink";
        for (var i = 0; i < selectedButton.parentElement.children.length; i++) {
            if (selectedButton.parentElement.children[i] == selectedButton) {
                var coordinate = i * selectedButton.scrollWidth;
                thumb.style.left = coordinate + "px";
                customScrollTo(container[0], coordinate);
            }
            ;
        }
        ;
    }
    ;
};
// Toggle color of Mid Nav Buttons on click
var toggleMiddleNavButtons = function (buttonLabel) {
    var allButtons = document.getElementsByClassName("midnav-button");
    for (var i = 0; i < allButtons.length; i++) {
        //console.log(allButtons[i]);
        if (allButtons[i].classList.contains(buttonLabel)) {
            allButtons[i].classList.add("active-oval-filled-brown");
            allButtons[i].classList.remove("active-oval-outlined-brown");
        }
        else {
            allButtons[i].classList.remove("active-oval-filled-brown");
            allButtons[i].classList.add("active-oval-outlined-brown");
        }
        ;
    }
    ;
};
//  Function to hide HTML Elements from the top nav section down.
var topNavHideFunc = function (elPram) {
    var root = document.getElementById("root");
    var rootObj = root.children[1].children[0].children[0].children;
    var classArr = [];
    //Build className array
    for (var i = 0; i < rootObj.length; i += 1) {
        classArr.push(document.getElementsByClassName(rootObj[i].className));
    }
    ;
    for (var i = 0; i < classArr[0].length; i += 1) {
        //checks to see it elParam (top tier class name is in the class list) 
        //and hides/shows this element 
        console.log(classArr[0][i]);
        if (classArr[0][i].children[0].classList.contains("Featured") && classArr[0][i].children.length === 1) {
            classArr[0][i].style.display = "none";
        }
        else if (classArr[0][i].children[0].classList.contains(elPram)) {
            classArr[0][i].style.display = "block";
        }
        else {
            classArr[0][i].style.display = "none";
        }
        ;
    }
    ;
};
//  Function to hide HTML Elements in Lower Nav on change of Middle Nav selection
var middleNavHideFunc = function (pathClass, middleNavId) {
    var lowerNavDiv = document.getElementsByClassName("lowerNavDiv");
    var lowerNavDivArr = Object.keys(lowerNavDiv).map(function (key) {
        return lowerNavDiv[key];
    });
    toggleMiddleNavButtons(middleNavId);
    //  Display children that have the same class name. If it's a different class name, hide that element.
    var lowerNavItemsShowing = [];
    lowerNavDivArr.forEach(function (el) {
        var lowerNavItems = Array.prototype.slice.call(el.childNodes);
        for (var _i = 0, lowerNavItems_1 = lowerNavItems; _i < lowerNavItems_1.length; _i++) {
            var item = lowerNavItems_1[_i];
            if (item.classList.contains(pathClass) && item.classList.contains(middleNavId)) {
                item.style.display = "block";
                lowerNavItemsShowing.push(item);
            }
            else {
                item.style.display = "none";
            }
            if (lowerNavItems.length == 1) {
                item.style.display = "none";
            }
        }
        var scrollBar = document.getElementById("scroll-track");
        var newWidth = 200 * lowerNavItemsShowing.length;
        scrollBar.setAttribute("style", "width: " + newWidth.toString() + "px;");
        for (var i = 0; i < lowerNavDiv.length; i++) {
            if (lowerNavDiv[i].children.length <= 2) {
                lowerNavDiv[i].classList.add("centered");
                scrollBar.classList.add("centered");
            }
            ;
        }
        ;
        openTab(lowerNavItemsShowing[0]);
    });
};
var buildScrollTrack = function () {
    // Build Scrollbar
    var scrollTrack = document.createElement("div");
    scrollTrack.id = "scroll-track";
    var scrollThumb = document.createElement("div");
    scrollThumb.id = "scroll-thumb";
    scrollTrack.appendChild(scrollThumb);
    return scrollTrack;
};
var navArrows = function () { return __awaiter(_this, void 0, void 0, function () {
    var rightArrow, leftArrow, midNavButtons, topNavClick, reloadProduct, key, key, key, key;
    var _this = this;
    return __generator(this, function (_a) {
        rightArrow = document.getElementsByClassName("carousel-control-next-icon");
        leftArrow = document.getElementsByClassName("carousel-control-prev-icon");
        midNavButtons = document.getElementsByClassName("midnav-button");
        topNavClick = document.getElementsByClassName("topNavClick");
        reloadProduct = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function () {
                        setTimeout(function () {
                            var id = document.getElementsByClassName("selected-tablink")[0].classList[3];
                            removeProduct();
                            nutritionFetch(id);
                        }, 1);
                    })];
            });
        }); };
        for (key in topNavClick) {
            if (typeof topNavClick[key] === "object")
                topNavClick[key].addEventListener("click", reloadProduct);
        }
        ;
        for (key in midNavButtons) {
            if (typeof midNavButtons[key] === "object")
                midNavButtons[key].addEventListener("click", reloadProduct);
        }
        ;
        for (key in rightArrow) {
            if (typeof rightArrow[key] === "object")
                rightArrow[key].addEventListener("click", reloadProduct);
        }
        ;
        for (key in leftArrow) {
            if (typeof leftArrow[key] === "object")
                leftArrow[key].addEventListener("click", reloadProduct);
        }
        ;
        return [2 /*return*/];
    });
}); };
// Work around for .scrollTo not being compatible on multiple browsers
var customScrollTo = function (scrollContainer, scrollLeft) {
    scrollContainer.scrollLeft = scrollLeft;
};
var changeImageFromTabNameClick = function (tabName) {
    var tabNameRegex = tabName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
    var nutritionImages = document.getElementsByClassName("sweet-treats-nutrition-images");
    Object.keys(nutritionImages).forEach(function (image) {
        nutritionImages[image].classList.contains(tabNameRegex) ? nutritionImages[image].parentNode.classList.add("active") : nutritionImages[image].parentNode.classList.remove("active");
    });
};
//# sourceMappingURL=SweetTreatsSPAHelpers.js.map