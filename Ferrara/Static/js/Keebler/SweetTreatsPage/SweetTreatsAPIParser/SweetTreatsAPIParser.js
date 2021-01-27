"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SweetTreatFILTEROBJ = {};
var triggerNav = function (prevAnchor) {
    prevAnchor.click();
};
// Function to add categories into tab navigation
var sweettreatsListFunc = function (json) {
    console.log("SWEET BINGO");
    console.log(json);
    var jsonArr = JSON.parse(json);
    var topNav = document.getElementsByClassName("top-nav-SweetTreat");
    var navTabs = document.getElementsByClassName("tab-pane");
    var SweetTreatContainer = document.getElementsByClassName("SweetTreat-block-container");
    jsonArr.forEach(function (el, i) {
        SweetTreatFILTEROBJ[el.CategoryTitle] = {};
        i === 0 ? SweetTreatFILTEROBJ[el.CategoryTitle].ariaSelected = true : SweetTreatFILTEROBJ[el.CategoryTitle].ariaSelected = false;
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
            Object.keys(SweetTreatFILTEROBJ).forEach(function (key) {
                el.CategoryTitle === key ? SweetTreatFILTEROBJ[key].ariaSelected = true : SweetTreatFILTEROBJ[key].ariaSelected = false;
            });
        });
        navTabs[i].setAttribute("id", el.CategoryTitle.replace(/\s/g, ''));
        for (var cardIndex = 0; cardIndex < el.SweetTreatsCard.length; cardIndex += 1) {
            SweetTreatFILTEROBJ[el.CategoryTitle][el.SweetTreatsCard[cardIndex].SweetTreatCardTitle] = el.SweetTreatsCard[cardIndex];
            var SweetTreatCard = document.createElement("div");
            SweetTreatCard.classList.add("card");
            SweetTreatCard.classList.add("keebler-card");
            var SweetTreatCardBody = document.createElement("div");
            SweetTreatCardBody.classList.add("card-body");
            var cardRow = document.createElement("div");
            cardRow.classList.add("row");
            var cardTitleCol = document.createElement("div");
            cardTitleCol.classList.add("col-12");
            var SweetTreatCardTitle = document.createElement("h5");
            SweetTreatCardTitle.classList.add("card-title");
            SweetTreatCardTitle.innerHTML = el.SweetTreatsCard[cardIndex].SweetTreatCardTitle;
            cardTitleCol.appendChild(SweetTreatCardTitle);
            var cardImgCol = document.createElement("div");
            cardImgCol.classList.add("col-4");
            var cardSweetTreatImg = document.createElement("img");
            cardSweetTreatImg.src = el.SweetTreatsCard[cardIndex].SweetTreatCardImage.OriginalString;
            cardImgCol.appendChild(cardSweetTreatImg);
            var cardTextCol = document.createElement("div");
            cardTextCol.classList.add("col-8");
            var SweetTreatCardText = document.createElement("div");
            SweetTreatCardText.classList.add("card-text");
            var SweetTreatCardDescription = document.createElement("p");
            SweetTreatCardDescription.classList.add("card-description");
            SweetTreatCardDescription.innerHTML = el.SweetTreatsCard[cardIndex].SweetTreatCardDescription;
            var SweetTreatCardInfo = document.createElement("div");
            SweetTreatCardInfo.classList.add("SweetTreat-bold-info");
            SweetTreatCardInfo.innerHTML = el.SweetTreatsCard[cardIndex].SweetTreatCardInfo;
            SweetTreatCardText.appendChild(SweetTreatCardDescription);
            SweetTreatCardText.appendChild(SweetTreatCardInfo);
            cardTextCol.appendChild(SweetTreatCardText);
            cardRow.appendChild(cardTitleCol);
            cardRow.appendChild(cardImgCol);
            cardRow.appendChild(cardTextCol);
            SweetTreatCardBody.appendChild(cardRow);
            SweetTreatCard.appendChild(SweetTreatCardBody);
            var cardAnchorTag = document.createElement("a");
            cardAnchorTag.setAttribute("href", el.SweetTreatsCard[cardIndex].SweetTreatPage);
            cardAnchorTag.appendChild(SweetTreatCard);
            cardAnchorTag.style.textDecoration = "none";
            cardAnchorTag.id = el.SweetTreatsCard[cardIndex].SweetTreatCardTitle;
            //navTabs[i].appendChild(cardAnchorTag);
            SweetTreatContainer[i].appendChild(cardAnchorTag);
        }
        i += 1;
    });
};
var scrollTabNav = function (e) {
    var tabNav = document.getElementById("SweetTreat-list");
    var tabAnchorList = document.getElementsByClassName("top-nav-SweetTreat");
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
    var filterButtons = document.getElementsByClassName("SweetTreat-filter-button");
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
    var buttonsObject = document.getElementsByClassName("SweetTreat-filter-button");
    var buttonsObjectKeys = Object.keys(buttonsObject);
    var beenHiddenObject = {};
    var selectedFiltersObject = {};
    buttonsObjectKeys.forEach(function (el) {
        selectedFiltersObject[buttonsObject[el].name] = buttonsObject[el].value;
    });
    var selectedFiltersObjectKeys = Object.keys(selectedFiltersObject);
    Object.keys(SweetTreatFILTEROBJ).forEach(function (key) {
        if (SweetTreatFILTEROBJ[key].ariaSelected) {
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
                        var SweetTreatFILTEROBJKeyArray = Object.keys(SweetTreatFILTEROBJ[key]);
                        for (var i = 0; i < SweetTreatFILTEROBJKeyArray.length; i += 1) {
                            // First Parameter of the if statement checks if the card matches the selected filter and the 
                            // second parameter check is the card hs already been hidden
                            if (SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] && beenHiddenObject[SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle] === undefined) {
                                var elToDisplay = document.getElementById(SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle);
                                elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                                noCardsDisplaying = false;
                            }
                            else if (SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] === false && SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] != undefined) {
                                var elToHide = document.getElementById(SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle);
                                elToHide.setAttribute("style", "text-decoration: none; display: none");
                                beenHiddenObject[SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle] = true;
                            }
                            ;
                        }
                    }
                    ;
                });
            }
            else {
                selectedFiltersObjectKeys.forEach(function (nestedKey) {
                    Object.keys(SweetTreatFILTEROBJ[key]).forEach(function (deepNestedKey) {
                        if (SweetTreatFILTEROBJ[key][deepNestedKey][nestedKey] != undefined) {
                            var elToDisplay = document.getElementById(SweetTreatFILTEROBJ[key][deepNestedKey].SweetTreatCardTitle);
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
//# sourceMappingURL=SweetTreatsAPIParser.js.map