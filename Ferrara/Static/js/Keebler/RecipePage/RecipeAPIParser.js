"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RECIPEFILTEROBJ = {};
var triggerNav = function (prevAnchor) {
    prevAnchor.click();
};
// Function to add categories into tab navigation
var recipeListFunc = function (json) {
    console.log("BINGO");
    //console.log(json);
    var jsonArr = JSON.parse(json);
    var topNav = document.getElementsByClassName("top-nav-recipe");
    var navTabs = document.getElementsByClassName("tab-pane");
    var recipeContainer = document.getElementsByClassName("recipe-block-container");
    //console.log("jsonArr");
    //console.log(jsonArr);
    jsonArr.forEach(function (el, i) {
        RECIPEFILTEROBJ[el.CategoryTitle] = {};
        i === 0 ? RECIPEFILTEROBJ[el.CategoryTitle].ariaSelected = true : RECIPEFILTEROBJ[el.CategoryTitle].ariaSelected = false;
        console.log("Working on this category - " + el.CategoryTitle);
        topNav[i].innerHTML = el.CategoryTitle;
        var href = "#" + el.CategoryTitle.replace(/\s/g, '');
        topNav[i].setAttribute("href", href);
        topNav[i].setAttribute("aria-controls", el.CategoryTitle.replace(/\s/g, ''));
        topNav[i].id = el.CategoryTitle.replace(/\s/g, '') + "ID";
        var categoryImg = document.createElement("img");
        categoryImg.src = el.CategoryImage.OriginalString;
        topNav[i].parentElement.appendChild(categoryImg);
        ;
        var prevATag = categoryImg.previousElementSibling.id;
        topNav[i].parentElement.setAttribute("onclick", "triggerNav(" + prevATag + ")");
        topNav[i].addEventListener("click", function () {
            Object.keys(RECIPEFILTEROBJ).forEach(function (key) {
                el.CategoryTitle === key ? RECIPEFILTEROBJ[key].ariaSelected = true : RECIPEFILTEROBJ[key].ariaSelected = false;
            });
        });
        navTabs[i].setAttribute("id", el.CategoryTitle.replace(/\s/g, ''));
        for (var cardIndex = 0; cardIndex < el.RecipesCard.length; cardIndex += 1) {
            RECIPEFILTEROBJ[el.CategoryTitle][el.RecipesCard[cardIndex].RecipeCardTitle] = el.RecipesCard[cardIndex];
            console.log("Working on card - " + el.RecipesCard[cardIndex].RecipeCardTitle);
            // card main div
            var recipeCard = document.createElement("div");
            recipeCard.classList.add("card");
            recipeCard.classList.add("keebler-card");
            // card body div (not sure how this is different)
            var recipeCardBody = document.createElement("div");
            recipeCardBody.classList.add("card-body");
            // row div is the card display
            var cardRow = document.createElement("div");
            cardRow.classList.add("row");
            //title
            var cardTitleCol = document.createElement("div");
            cardTitleCol.classList.add("col-12");
            var recipeCardTitle = document.createElement("h5");
            recipeCardTitle.classList.add("card-title");
            recipeCardTitle.innerHTML = el.RecipesCard[cardIndex].RecipeCardTitle;
            cardTitleCol.appendChild(recipeCardTitle);
            // image
            var cardImgCol = document.createElement("div");
            cardImgCol.classList.add("col-4");
            var cardRecipeImg = document.createElement("img");
            cardRecipeImg.src = el.RecipesCard[cardIndex].RecipeCardImage.OriginalString;
            cardImgCol.appendChild(cardRecipeImg);
            // description
            var cardTextCol = document.createElement("div");
            cardTextCol.classList.add("col-8");
            var recipeCardText = document.createElement("div");
            recipeCardText.classList.add("card-text");
            var recipeCardDescription = document.createElement("p");
            recipeCardDescription.classList.add("card-description");
            recipeCardDescription.innerHTML = el.RecipesCard[cardIndex].RecipeCardDescription;
            var recipeCardInfo = document.createElement("div");
            recipeCardInfo.classList.add("recipe-bold-info");
            recipeCardInfo.innerHTML = el.RecipesCard[cardIndex].RecipeCardInfo;
            recipeCardText.appendChild(recipeCardDescription);
            recipeCardText.appendChild(recipeCardInfo);
            cardTextCol.appendChild(recipeCardText);
            cardRow.appendChild(cardTitleCol);
            cardRow.appendChild(cardImgCol);
            cardRow.appendChild(cardTextCol);
            recipeCardBody.appendChild(cardRow);
            recipeCard.appendChild(recipeCardBody);
            var cardAnchorTag = document.createElement("a");
            cardAnchorTag.setAttribute("href", el.RecipesCard[cardIndex].RecipePage);
            cardAnchorTag.appendChild(recipeCard);
            cardAnchorTag.style.textDecoration = "none";
            cardAnchorTag.id = el.RecipesCard[cardIndex].RecipeCardTitle;
            //navTabs[i].appendChild(cardAnchorTag);
            recipeContainer[i].appendChild(cardAnchorTag);
        }
        i += 1;
    });
};
var scrollTabNav = function (e) {
    var tabNav = document.getElementById("recipe-list");
    var tabAnchorList = document.getElementsByClassName("top-nav-recipe");
    var selectedTab = e.currentTarget;
    var coordinate = 0;
    for (var index = 0; index < tabAnchorList.length; index++) {
        if (tabAnchorList[index] === selectedTab) {
            if (index === 0) {
                coordinate = 0;
            }
            else {
                coordinate = index * selectedTab.scrollWidth;
            }
            tabNav.scrollTo({
                left: coordinate,
                behavior: 'smooth'
            });
        }
    }
};
var filterAsync = function () {
    setTimeout(function () {
        filterCardsFunc();
    }, 0);
};
var filterBoolToggleFunc = function (obj) {
    if (obj.value === "not-selected") {
        obj.value = "selected";
        obj.classList.remove("reversed-oval-outlined");
        obj.classList.add("active-oval-filled-red");
        showClearFiltersButton();
    }
    else {
        obj.value = "not-selected";
        obj.classList.remove("active-oval-filled-red");
        obj.classList.add("reversed-oval-outlined");
    }
    ;
    filterCardsFunc();
};
var showClearFiltersButton = function () {
    var clearFiltersButton = document.getElementById("clear-filters-button");
    clearFiltersButton.setAttribute("style", "display: inline");
};
var hideClearFiltersButton = function () {
    var clearFiltersButton = document.getElementById("clear-filters-button");
    clearFiltersButton.setAttribute("style", "display: none");
    filterCardsFunc();
};
var clearAllFilters = function () {
    var filterButtons = document.getElementsByClassName("recipe-filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
        if (filterButtons[i].value === "selected") {
            filterButtons[i].value = "not-selected";
            filterButtons[i].classList.remove("active-oval-filled-red");
            filterButtons[i].classList.add("reversed-oval-outlined");
        }
        ;
    }
    hideClearFiltersButton();
};
var showCustomButtons = function () {
    var customButtonsObject = document.getElementsByClassName("custom-filter-button");
    Object.keys(customButtonsObject).forEach(function (key) {
        if (customButtonsObject[key].innerHTML === "") {
            customButtonsObject[key].setAttribute("style", "display: none");
        }
        else {
            customButtonsObject[key].setAttribute("style", "display: inline");
        }
    });
};
var filterCardsFunc = function () {
    var buttonsObject = document.getElementsByClassName("recipe-filter-button");
    var buttonsObjectKeys = Object.keys(buttonsObject);
    var beenHiddenObject = {};
    var selectedFiltersObject = {};
    buttonsObjectKeys.forEach(function (el) {
        selectedFiltersObject[buttonsObject[el].name] = buttonsObject[el].value;
    });
    var selectedFiltersObjectKeys = Object.keys(selectedFiltersObject);
    Object.keys(RECIPEFILTEROBJ).forEach(function (key) {
        if (RECIPEFILTEROBJ[key].ariaSelected) {
            var filterSelected_1 = false;
            selectedFiltersObjectKeys.forEach(function (filterKey) {
                if (selectedFiltersObject[filterKey] === "selected") {
                    filterSelected_1 = true;
                }
                ;
            });
            if (filterSelected_1) {
                selectedFiltersObjectKeys.forEach(function (nestedKey) {
                    if (selectedFiltersObject[nestedKey] === "selected") {
                        var RECIPEFILTEROBJKeyArray = Object.keys(RECIPEFILTEROBJ[key]);
                        for (var i = 0; i < RECIPEFILTEROBJKeyArray.length; i += 1) {
                            // First Parameter of the if statement checks if the card matches the selected filter and the 
                            // second parameter check is the card hs already been hidden
                            if (RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] && beenHiddenObject[RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle] === undefined) {
                                var elToDisplay = document.getElementById(RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle);
                                elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                                noCardsDisplaying = false;
                            }
                            else if (RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] === false && RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] != undefined) {
                                var elToHide = document.getElementById(RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle);
                                elToHide.setAttribute("style", "text-decoration: none; display: none");
                                beenHiddenObject[RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle] = true;
                            }
                            ;
                        }
                    }
                    ;
                });
            }
            else {
                selectedFiltersObjectKeys.forEach(function (nestedKey) {
                    Object.keys(RECIPEFILTEROBJ[key]).forEach(function (deepNestedKey) {
                        if (RECIPEFILTEROBJ[key][deepNestedKey][nestedKey] != undefined) {
                            var elToDisplay = document.getElementById(RECIPEFILTEROBJ[key][deepNestedKey].RecipeCardTitle);
                            elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                        }
                        ;
                    });
                });
            }
            ;
        }
        ;
    });
    var tabPanes = document.getElementsByClassName("tab-pane");
    var noCardsDisplaying = true;
    Object.keys(tabPanes).forEach(function (key) {
        if (tabPanes[key].classList.contains("active")) {
            // The three variable declarations below are traversing through the ".tab-pane" children to get 
            // to the root card witch allows the logic to check the cards visibility
            var topNodes = tabPanes[key].children;
            var middleNodes = topNodes[0].children;
            var nodes_1 = middleNodes[0].children;
            Object.keys(nodes_1).forEach(function (nodeKey) {
                if (nodes_1[nodeKey].style.display === "block") {
                    noCardsDisplaying = false;
                }
                ;
            });
        }
        ;
    });
    var text = document.getElementsByClassName("no-cards-displaying-text");
    noCardsDisplaying ? text[0].style.display = "block" : text[0].style.display = "none";
};
//# sourceMappingURL=RecipeAPIParser.js.map