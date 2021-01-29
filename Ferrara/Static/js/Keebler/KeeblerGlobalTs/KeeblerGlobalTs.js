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
var SWEETTREATSPAGES = {};
var AUTOCOMPLETEARRAY = [];
var AUTOCOMPLETEURLOBJECT = {};
//  Hide Nav Slider
var navSliderHide = function () {
    var nav = document.getElementById("scroll-track");
    nav.style.display = "none";
};
var buildAutocompleteObject = function (sweetTreatsPageNumber, recipesPageNumber) { return __awaiter(_this, void 0, void 0, function () {
    var productResponse, productData, productJson, recipeResponse, recipeData, recipesJson, productsJsonArray, recipesJsonArray;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/CategoriesListingPage/" + sweetTreatsPageNumber)];
            case 1:
                productResponse = _a.sent();
                return [4 /*yield*/, productResponse.json()];
            case 2:
                productData = _a.sent();
                console.log("in buildAutocompleteObject");
                if (sweetTreatsPageNumber) {
                    console.log(sweetTreatsPageNumber);
                }
                else {
                    console.log("sweetTreatsPageNumber Is Empty");
                }
                if (recipesPageNumber) {
                    console.log(recipesPageNumber);
                }
                else {
                    console.log("recipesPageNumber Is Empty");
                }
                //  Checking in productData is NOT JSON, null, or undefined. If function return here the user more than likely did not add the AutoComplete page Numbers in the CMS
                if (productData === undefined || productData === null || productData[0] != "[") {
                    return [2 /*return*/];
                }
                ;
                return [4 /*yield*/, JSON.parse(productData)];
            case 3:
                productJson = _a.sent();
                return [4 /*yield*/, fetch("/KeeblerRecipesCategoriesListingPage/" + recipesPageNumber)];
            case 4:
                recipeResponse = _a.sent();
                return [4 /*yield*/, recipeResponse.json()];
            case 5:
                recipeData = _a.sent();
                return [4 /*yield*/, JSON.parse(recipeData)];
            case 6:
                recipesJson = _a.sent();
                productsJsonArray = [];
                recipesJsonArray = [];
                // just builds a list of product names
                Object.keys(productJson).forEach(function (key1) {
                    Object.keys(productJson[key1].CategoryTabBlock).forEach(function (key2) {
                        Object.keys(productJson[key1].CategoryTabBlock[key2].ProductsIcons).forEach(function (key3) {
                            productsJsonArray.push(productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3].ProductName);
                            //console.log("Nice...");
                            var pathKey = productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3];
                            var productName = productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3].ProductName.replace(/[^a-z0-9+]/gi, '').toUpperCase();
                            //console.log(pathKey);
                            //console.log(productName);
                            pathKey.UrlPath != null ?
                                AUTOCOMPLETEURLOBJECT[productName] = "/en/sweet-treats/?" + pathKey.UrlPath.replace(/[^a-z0-9+]/gi, ' ').toLowerCase() :
                                AUTOCOMPLETEURLOBJECT[productName] = "/en/sweet-treats/?" + pathKey.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
                            // could we just set the paths here ?
                            //pathKey.UrlPath = "/en/sweet-treats/" + pathKey.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
                        });
                    });
                });
                // just builds a list of recipe names
                Object.keys(recipesJson).forEach(function (key1) {
                    Object.keys(recipesJson[key1].RecipesCard).forEach(function (key2) {
                        recipesJsonArray.push(recipesJson[key1].RecipesCard[key2].RecipeCardTitle);
                        AUTOCOMPLETEURLOBJECT[recipesJson[key1].RecipesCard[key2].RecipeCardTitle.replace(/[^a-z0-9+]/gi, '').toUpperCase()] = recipesJson[key1].RecipesCard[key2].RecipePage;
                    });
                });
                AUTOCOMPLETEARRAY.push(productsJsonArray);
                AUTOCOMPLETEARRAY.push(recipesJsonArray);
                //console.log("AUTOCOMPLETEARRAY");
                //console.log(AUTOCOMPLETEARRAY);
                buildFilterDropdownFunction();
                return [2 /*return*/];
        }
    });
}); };
var buildFilterDropdownFunction = function () {
    var dropDownDiv = document.getElementById("myDropdown");
    AUTOCOMPLETEARRAY.forEach(function (innerArray, index) {
        if (index === 0) {
            var divTag = document.createElement("div");
            var pTag = document.createElement("h5");
            pTag.innerHTML = "Products";
            divTag.style.display = "";
            divTag.setAttribute("class", "Results-Dropdown-Section-Div");
            divTag.appendChild(pTag);
            dropDownDiv.appendChild(divTag);
        }
        else if (index === 1) {
            var divTag = document.createElement("div");
            var pTag = document.createElement("h5");
            pTag.innerHTML = "Recipes";
            divTag.style.display = "";
            divTag.setAttribute("class", "Results-Dropdown-Section-Div");
            divTag.appendChild(pTag);
            dropDownDiv.appendChild(divTag);
        }
        innerArray.forEach(function (name) {
            var aTag = document.createElement("a");
            aTag.innerHTML = name;
            aTag.href = AUTOCOMPLETEURLOBJECT[name.replace(/[^a-z0-9+]/gi, '').toUpperCase()];
            dropDownDiv.appendChild(aTag);
        });
    });
    var outerDivTag = document.createElement("div");
    var outerPTag = document.createElement("h5");
    outerPTag.innerHTML = "No Results";
    outerDivTag.style.display = "none";
    outerDivTag.setAttribute("id", "No-Results-Dropdown-Div");
    outerDivTag.appendChild(outerPTag);
    dropDownDiv.appendChild(outerDivTag);
    document.addEventListener("click", function (event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".dropdown"))
            return;
        // If user clicks outside the element, hide it!
        var searchIconEl = document.getElementById("fa-custom-search");
        // The If condition is checking the Icon src, I'm using .slice() because I only want the end of the .src URL
        if (searchIconEl.src.slice(searchIconEl.src.length - 15, searchIconEl.src.length) === "times-solid.svg") {
            document.getElementById("myInput").value = "";
            changeSearchDropdownShape(true);
            document.querySelector("#myDropdown").classList.remove("show");
            searchIconEl.src = "/Static/gfx/SeachIcons/SearchIcon_Dark.svg";
            xToggleIcon = false;
        }
        ;
    });
};
var dropdownFilterFunction = function () {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var myDropdownDiv = document.getElementById("myDropdown");
    var aTags = myDropdownDiv.getElementsByTagName("a");
    var icon = document.getElementById("fa-custom-search");
    var noMatches = true;
    Object.keys(aTags).forEach(function (key) {
        var txtValue = aTags[key].textContent || aTags[key].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            aTags[key].style.display = "";
            noMatches = false;
        }
        else {
            aTags[key].style.display = "none";
        }
    });
    if (noMatches) {
        document.getElementById("No-Results-Dropdown-Div").style.display = "";
        var domObject_1 = document.getElementsByClassName("Results-Dropdown-Section-Div");
        Object.keys(domObject_1).forEach(function (key) {
            domObject_1[key].style.display = "none";
        });
    }
    else {
        document.getElementById("No-Results-Dropdown-Div").style.display = "none";
        var domObject_2 = document.getElementsByClassName("Results-Dropdown-Section-Div");
        Object.keys(domObject_2).forEach(function (key) {
            domObject_2[key].style.display = "";
        });
    }
    if (filter.length > 0 && document.getElementById("myDropdown").classList[1] === undefined) {
        icon.src = "/Static/gfx/SeachIcons/times-solid.svg";
        xToggleIcon = true;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(false);
    }
    else if (filter === "" && document.getElementById("myDropdown").classList[1]) {
        icon.src = "/Static/gfx/SeachIcons/SearchIcon_Dark.svg";
        xToggleIcon = false;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(true);
    }
};
var whiteToggleIcon = true;
var xToggleIcon = false;
var showOrHideSearchBar = function () {
    var icon = document.getElementById("fa-custom-search");
    var searchBar = document.getElementById("myInput");
    var keeblerIcon = document.getElementsByClassName("sharedimageblock")[0];
    if (whiteToggleIcon) {
        if (window.screen.width < 767 && keeblerIcon) {
            document.getElementsByClassName("sharedimageblock")[0].style.display = "none";
        }
        ;
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
        icon.src = "/Static/gfx/SeachIcons/SearchIcon_Dark.svg";
        whiteToggleIcon = false;
    }
    else if (!xToggleIcon) {
        if (window.screen.width < 767 && keeblerIcon) {
            document.getElementsByClassName("sharedimageblock")[0].style.display = "";
        }
        ;
        searchBar.style.visibility = "hidden";
        searchBar.style.opacity = "0";
        icon.src = "/Static/gfx/SeachIcons/SeachIcon_White.svg";
        document.getElementById("myInput").value = "";
        changeSearchDropdownShape(true);
        whiteToggleIcon = true;
    }
    if (xToggleIcon) {
        icon.src = "/Static/gfx/SeachIcons/SearchIcon_Dark.svg";
        document.getElementById("myInput").value = "";
        xToggleIcon = false;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(true);
    }
    ;
};
// On click change dropdown shape
var changeSearchDropdownShape = function (toggle) {
    var dropDownEl = document.getElementById("myInput");
    var openBorderRadius = "20px 20px 0 0";
    var closedBorderRadius = "20px";
    dropDownEl.style.borderRadius = toggle ? closedBorderRadius : openBorderRadius;
};
var loadingSpinnerFunction = function (animationURL, pxSize) {
    var page = document.getElementsByTagName("html")[0];
    var animationLoadingSpinnerContainer = document.getElementById("animation-loading-spinner-container");
    page.style.overflow = "hidden";
    animationLoadingSpinnerContainer.style.maxWidth = ("" + pxSize + "px");
    var animationLoadingSpinnerAnim = bodymovin.loadAnimation({
        container: animationLoadingSpinnerContainer,
        renderer: "svg",
        autoplay: true,
        loop: true,
        path: animationURL,
    });
};
var removeSpinnerFunction = function (timeoutMs) {
    var page = document.getElementsByTagName("html")[0];
    var animationloadingSpinnerDiv = document.getElementById("animation-loading-spinner-div");
    setTimeout(function () {
        if (page.style.overflow === "hidden" && window.location.pathname !== '/') {
            page.style.overflow = "";
        }
        animationloadingSpinnerDiv.remove();
    }, timeoutMs);
};
var alertOnIE = function () {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    // If IE, return version number.
    if (Idx > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        alert("This site is not fully supported by Internet Explorer. It is best viewed in an updated browser like: Google Chrome, Opera, Mozilla Firefox or Microsoft Edge.");
    }
};
// TEMPORARY -- CURRENTLY MAILCHIMP IS HANDLING THE EMAIL PORTION AND THIS IS ALWAYS A SUCCESS 
// USE THIS FUNCTION WHEN WE HIT API FROM JS
//const subscribeToEmailList: Function = (event: any): void => {
//    event.preventDefault();
//    // const form = document.getElementById("emailForm");
//    const existingFailureMessage = document.getElementById("email-failure");
//    // let response;
//    if (existingFailureMessage != null) {
//        existingFailureMessage.remove();
//    } else {
//    }
//    displayResponse("success"); 
//    // displayResponse(response);
//}
var displayResponse = function (responseCode) {
    var emailInputContainer = document.getElementById("emailInputContainer");
    var submitArrow = document.getElementById("submit-arrow");
    if (responseCode == "success") {
        submitArrow.style.display = "none";
        // Build Success Alert
        var successAlert = document.createElement("div");
        successAlert.innerHTML = "Thanks, the elves have accepted your email!";
        successAlert.classList.add("email-success");
        // Build Success Check Mark
        var successCheckMark = document.createElement("img");
        successCheckMark.src = "/Static/gfx/Icons/ComfirmedIcon.svg";
        successCheckMark.classList.add("success-checkmark");
        emailInputContainer.appendChild(successAlert);
        emailInputContainer.appendChild(successCheckMark);
    }
    else {
        // Re-display Arrow Button
        submitArrow.style.display = "";
        // Build Failure Alert 
        var failureAlert = document.createElement("div");
        failureAlert.innerHTML = "Something went wrong - please try again.";
        failureAlert.id = "email-failure";
        emailInputContainer.appendChild(failureAlert);
    }
};
//# sourceMappingURL=KeeblerGlobalTs.js.map