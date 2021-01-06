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
var productXFunc = function (json, id) { return __awaiter(_this, void 0, void 0, function () {
    var parsedXJSON, recipeCardDescription, cardRecipeImg;
    return __generator(this, function (_a) {
        parsedXJSON = JSON.parse(json);
        recipeCardDescription = document.getElementsByClassName("card-description " + id);
        recipeCardDescription[0].innerHTML = parsedXJSON.ProductDescription;
        cardRecipeImg = document.getElementsByClassName("card-image " + id);
        cardRecipeImg[0].src = parsedXJSON.ProductImage[0].src;
        return [2 /*return*/];
    });
}); };
var productsFunc = function (json) { return __awaiter(_this, void 0, void 0, function () {
    var parsedJSON, lowerNav, displayBlockCount, navIndex, lowerNavChildren, childIndex, mainDiv, leftMainContentArrow, leftArrowImg, innerCol, innerRow, imgContainer, productCarousel, carouselIndicators, index, singleIndicator, productInnerCarousel, x, productInnerCarouselItem, itemImg, productImage;
    return __generator(this, function (_a) {
        parsedJSON = JSON.parse(json);
        lowerNav = document.getElementsByClassName("lowerNavDiv");
        displayBlockCount = 0;
        //Counts how many lower nav options are displayed to check if there are multiple products
        for (navIndex = 0; navIndex < lowerNav.length; navIndex++) {
            lowerNavChildren = lowerNav[navIndex].children;
            for (childIndex = 0; childIndex < lowerNavChildren.length; childIndex++) {
                if (lowerNavChildren[childIndex].style.display == "block") {
                    displayBlockCount++;
                }
            }
        }
        mainDiv = document.createElement("div");
        mainDiv.classList.add("row");
        mainDiv.classList.add("product-details-container");
        leftMainContentArrow = document.createElement("div");
        leftMainContentArrow.classList.add("col-md-1");
        leftMainContentArrow.classList.add("col-1");
        leftArrowImg = document.createElement("img");
        leftArrowImg.src = "/Static/gfx/ArrowIcons/LargeLeftArrow.svg";
        leftMainContentArrow.append(leftArrowImg);
        leftMainContentArrow.setAttribute("onclick", "leftChangeMainContent()");
        leftMainContentArrow.classList.add("main-content-arrow");
        if (displayBlockCount < 1) {
            leftMainContentArrow.style.display = "none";
        }
        mainDiv.append(leftMainContentArrow);
        innerCol = document.createElement("div");
        innerCol.classList.add("col-10");
        innerCol.classList.add("product-page-main-content");
        innerRow = document.createElement("div");
        innerRow.classList.add("row");
        // Append Product Image to Main Div
        if (parsedJSON.ProductImage != null) {
            imgContainer = document.createElement("div");
            imgContainer.classList.add("col-lg-4");
            imgContainer.classList.add("col-md-5");
            imgContainer.classList.add("col-sm-12");
            // Create img carousel if more than one image exists
            if (Object.keys(parsedJSON.ProductImage).length > 1) {
                productCarousel = document.createElement("div");
                productCarousel.id = "carouselExampleIndicators";
                productCarousel.classList.add("carousel");
                productCarousel.classList.add("slide");
                productCarousel.setAttribute("data-ride", "carousel");
                productCarousel.setAttribute("data-interval", "false");
                carouselIndicators = document.createElement("ol");
                carouselIndicators.classList.add("carousel-indicators");
                for (index = 0; index < Object.keys(parsedJSON.ProductImage).length; index += 1) {
                    singleIndicator = document.createElement("li");
                    singleIndicator.setAttribute("data-target", "#carouselExampleIndicators");
                    singleIndicator.setAttribute("data-slide-to", String(index));
                    if (index === 0) {
                        singleIndicator.setAttribute("class", "active");
                    }
                    carouselIndicators.appendChild(singleIndicator);
                }
                productInnerCarousel = document.createElement("div");
                productInnerCarousel.classList.add("carousel-inner");
                for (x = 0; x < Object.keys(parsedJSON.ProductImage).length; x += 1) {
                    productInnerCarouselItem = document.createElement("div");
                    productInnerCarouselItem.classList.add("carousel-item");
                    if (x === 0) {
                        productInnerCarouselItem.classList.add("active");
                    }
                    itemImg = document.createElement("img");
                    itemImg.classList.add("d-block");
                    itemImg.classList.add("w-100");
                    itemImg.classList.add("sweet-treats-nutrition-images");
                    if (parsedJSON.ProductImage[x].nutritionTabName) {
                        itemImg.classList.add(parsedJSON.ProductImage[x].nutritionTabName.replace(/[^a-z0-9+]/gi, '').toLowerCase());
                    }
                    ;
                    itemImg.src = parsedJSON.ProductImage[x].src;
                    itemImg.alt = parsedJSON.ProductImage[x].altSEO;
                    productInnerCarouselItem.appendChild(itemImg);
                    productInnerCarousel.appendChild(productInnerCarouselItem);
                }
                productCarousel.appendChild(carouselIndicators);
                productCarousel.appendChild(productInnerCarousel);
                imgContainer.appendChild(productCarousel);
            }
            else {
                productImage = document.createElement("img");
                productImage.src = parsedJSON.ProductImage[0].src;
                productImage.alt = parsedJSON.ProductImage[0].altSEO;
                imgContainer.appendChild(productImage);
            }
            innerRow.appendChild(imgContainer);
        }
        return [2 /*return*/];
    });
}); };
var setNutritionBlock = function (src) {
    var nutritionImage = document.getElementById("nutritionModalImage");
    nutritionImage.setAttribute("src", src);
};
var buildBagSizeDropDownFunc = function (nutritionSrcs) {
    var bagSizeDropdownContainer = document.createElement("div");
    bagSizeDropdownContainer.classList.add("custom-dropdown");
    bagSizeDropdownContainer.style.width = "200px;";
    var bagSizeDropdown = document.createElement("select");
    bagSizeDropdown.onchange = function () {
        setNutritionBlock(bagSizeDropdown.value);
    };
    var bagSizes = Object.keys(nutritionSrcs);
    if (bagSizes.length > 1) {
        bagSizeDropdownContainer.classList.add("has-options");
        for (var _i = 0, bagSizes_1 = bagSizes; _i < bagSizes_1.length; _i++) {
            var bagSize = bagSizes_1[_i];
            var optionTag = document.createElement("option");
            optionTag.innerHTML = bagSize;
            optionTag.value = nutritionSrcs[bagSize];
            if (bagSizes[0] === bagSize) {
                setNutritionBlock(nutritionSrcs[bagSizes[0]]);
            }
            bagSizeDropdown.appendChild(optionTag);
        }
        bagSizeDropdownContainer.appendChild(bagSizeDropdown);
    }
    else {
        bagSizeDropdownContainer.classList.add("has-no-options");
        setNutritionBlock(nutritionSrcs[bagSizes[0]]);
    }
    return bagSizeDropdownContainer;
};
var removeProduct = function () {
    var node = document.getElementById("product-root");
    Array.prototype.forEach.call(node.querySelectorAll("*"), function (n) {
        if (n) {
            n.parentNode.removeChild(n);
        }
    });
};
var nutritionFetch = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var response, myJson;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/KeeblerProductPage/" + id)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                myJson = _a.sent();
                productsFunc(myJson);
                return [2 /*return*/];
        }
    });
}); };
var firstProductsFuncCall = function () {
    var div = document.getElementsByClassName("IdClass");
    var id = parseFloat(div[0].classList[3]);
    var pram = window.location.search;
    var filterPram = pram.slice(1, pram.length);
    if (SWEETTREATSPAGES[filterPram]) {
        nutritionFetch(SWEETTREATSPAGES[filterPram].id);
        buildNavFromQueryString(SWEETTREATSPAGES[filterPram]);
    }
    else {
        nutritionFetch(id);
    }
};
var buildCustomDropdown = function (dropDown, nutritionDetails) {
    var currentSelectElmnt = dropDown.getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    if (currentSelectElmnt) {
        var customSelect = document.createElement("div");
        customSelect.setAttribute("class", "select-selected");
        customSelect.innerHTML = currentSelectElmnt.options[currentSelectElmnt.selectedIndex].innerHTML;
        dropDown.appendChild(customSelect);
        var hiddenOptions = document.createElement("div");
        hiddenOptions.setAttribute("class", "select-items select-hide");
        for (var _i = 0, _a = currentSelectElmnt.options; _i < _a.length; _i++) {
            var selectOption = _a[_i];
            /*for each option in the original select element, create a new DIV that will act as an option item:*/
            var option = document.createElement("div");
            option.innerHTML = selectOption.innerHTML;
            option.id = selectOption.value;
            option.setAttribute("onclick", "optionOnClick(event.target); changeImageFromTabNameClick(event.target.innerHTML);");
            hiddenOptions.appendChild(option);
        }
        dropDown.appendChild(hiddenOptions);
        customSelect.setAttribute("onclick", "onSelectClick(event.target)");
    }
    else {
        var customSelect = document.createElement("div");
        customSelect.setAttribute("class", "select-selected");
        customSelect.innerHTML = Object.keys(nutritionDetails)[0];
        dropDown.appendChild(customSelect);
    }
};
var buildRecipeSection = function (recipeSection, recipeBlocks, linkToRecipePage) {
    // Build Title 
    var recipeHeader = document.createElement("h1");
    recipeHeader.classList.add("recipe-section-header");
    recipeHeader.classList.add("col-12");
    recipeHeader.innerHTML = "Related Recipes";
    recipeSection.appendChild(recipeHeader);
    for (var i = 0; i < Object.keys(recipeBlocks).length; i += 1) {
        var recipeCard = document.createElement("div");
        recipeCard.classList.add("card");
        recipeCard.classList.add("keebler-card");
        var recipeCardBody = document.createElement("div");
        recipeCardBody.classList.add("card-body");
        var cardRow = document.createElement("div");
        cardRow.classList.add("row");
        var cardImgCol = document.createElement("div");
        cardImgCol.classList.add("col-4");
        var cardRecipeImg = document.createElement("img");
        cardRecipeImg.src = recipeBlocks[i].imageSrc;
        cardImgCol.appendChild(cardRecipeImg);
        var cardTextCol = document.createElement("div");
        cardTextCol.classList.add("col-8");
        var recipeCardText = document.createElement("div");
        recipeCardText.classList.add("card-text");
        var recipeCardTitle = document.createElement("h5");
        recipeCardTitle.classList.add("card-title");
        recipeCardTitle.innerHTML = recipeBlocks[i].recipeName;
        var recipeCardDescription = document.createElement("p");
        recipeCardDescription.classList.add("card-description");
        recipeCardDescription.innerHTML = recipeBlocks[i].cardDescription;
        cardTextCol.appendChild(recipeCardTitle);
        cardTextCol.appendChild(recipeCardDescription);
        cardRow.appendChild(cardImgCol);
        cardRow.appendChild(cardTextCol);
        recipeCardBody.appendChild(cardRow);
        recipeCard.appendChild(recipeCardBody);
        var cardCol = document.createElement("div");
        if (Object.keys(recipeBlocks).length > 1) {
            cardCol.classList.add("col-md-6");
            cardCol.classList.add("col-sm-12");
        }
        else {
            cardCol.classList.add("col-12");
        }
        cardCol.classList.add("recipe-card-col");
        var cardAnchorTag = document.createElement("a");
        cardAnchorTag.setAttribute("href", recipeBlocks[i].recipePageLink);
        cardAnchorTag.appendChild(recipeCard);
        cardAnchorTag.style.textDecoration = "none";
        cardAnchorTag.id = recipeBlocks[i].recipeName;
        cardCol.appendChild(cardAnchorTag);
        recipeSection.appendChild(cardCol);
    }
    // Build Button 
    if (linkToRecipePage) {
        var recipeButton = document.createElement("button");
        var recipeButtonForm = document.createElement("form");
        recipeButtonForm.action = linkToRecipePage;
        recipeButtonForm.method = "get";
        recipeButtonForm.classList.add("col-12");
        recipeButton.classList.add("recipe-section-button");
        recipeButton.classList.add("active-oval-filled-red");
        recipeButton.innerHTML = "View More Recipes";
        recipeButtonForm.appendChild(recipeButton);
        recipeSection.appendChild(recipeButtonForm);
    }
    return recipeSection;
};
var onSelectClick = function (selectContainer) {
    closeAllSelect(selectContainer);
    changeDropdownShape(selectContainer);
    selectContainer.nextSibling.classList.toggle("select-hide");
    selectContainer.classList.toggle("select-arrow-active");
};
var optionOnClick = function (selectedOption) {
    var originalSelect = document.getElementsByTagName("select")[0];
    var displayDiv = document.getElementsByClassName("select-arrow-active")[0];
    for (var i = 0; i < originalSelect.options.length; i++) {
        if (selectedOption.innerHTML !== displayDiv.innerHTML) {
            displayDiv.innerHTML = selectedOption.innerHTML;
            setNutritionBlock(selectedOption.id);
            var y = document.getElementsByClassName("same-as-selected");
            for (var k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
            }
            selectedOption.setAttribute("class", "same-as-selected");
            break;
        }
    }
    onSelectClick(displayDiv);
};
// On click change dropdown shape
var changeDropdownShape = function (dropDown) {
    var openBorderRadius = "20px 20px 0px 0px";
    var closedBorderRadius = "20px";
    if (dropDown.style.borderRadius === openBorderRadius) {
        dropDown.setAttribute("style", "border-radius: " + closedBorderRadius);
    }
    else {
        dropDown.setAttribute("style", "border-radius: " + openBorderRadius);
    }
};
var closeAllSelect = function (elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (var i = 0; i < y.length; i++) {
        if (elmnt === y[i]) {
            arrNo.push(i);
        }
        else {
            y[i].setAttribute("style", "border-radius: 10px;");
            y[i].classList.remove("select-arrow-active");
        }
    }
};
var rightChangeMainContent = function () {
    var lowerNavDiv = document.getElementsByClassName("lowerNavDiv");
    for (var i = 0; i < lowerNavDiv.length; i += 1) {
        for (var j = 0; j < lowerNavDiv[i].children.length; j += 1) {
            if (lowerNavDiv[i].children[j].classList.contains("selected-tablink")) {
                if (lowerNavDiv[i].children[j + 1] !== null) {
                    var nextTab = lowerNavDiv[i].children[j + 1];
                    nextTab ? nextTab.click() : lowerNavDiv[i].children[0].click();
                }
                return;
            }
        }
    }
};
var leftChangeMainContent = function () {
    var lowerNavDiv = document.getElementsByClassName("lowerNavDiv");
    for (var i = 0; i < lowerNavDiv.length; i += 1) {
        for (var j = 0; j < lowerNavDiv[i].children.length; j += 1) {
            if (lowerNavDiv[i].children[j].classList.contains("selected-tablink")) {
                if (lowerNavDiv[i].children[j - 1] !== null) {
                    var previousTab = lowerNavDiv[i].children[j - 1];
                    previousTab.click();
                }
                return;
            }
        }
    }
};
var treatFetch = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var response, treatJson;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("/KeeblerProductPage/" + id)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                treatJson = _a.sent();
                //console.log("treatJson");
                //console.log(treatJson);
                productXFunc(treatJson, id);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SweetTreatsProductsAPI.js.map