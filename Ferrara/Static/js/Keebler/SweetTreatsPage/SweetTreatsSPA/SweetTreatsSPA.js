"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var streatsListFunc = function (json) {
    console.log("BINGO");
    console.log(json);
    var jsonArr = JSON.parse(json);
    //const topNav: HTMLCollection = document.getElementsByClassName("top-nav-treat");
    //const navTabs: HTMLCollection = document.getElementsByClassName("tab-pane");
    //const jkcontainer: HTMLCollection = document.getElementsByClassName("product-root");
    var root = document.getElementById("sweet-root");
    console.log("YIPPIE");
    jsonArr.forEach(function (el, i) {
        // add all main elements
        console.log(el.CategoryTitle + " - " + el.CategoryImage.Path);
        var categoryTabTitle = document.createElement("p");
        categoryTabTitle.innerHTML = el.CategoryTitle;
        categoryTabTitle.style.textAlign = "center";
        categoryTabTitle.style.fontWeight = "bold";
        var catImg = document.createElement("div");
        catImg.classList.add("col-4");
        var cardImg = document.createElement("img");
        cardImg.src = el.CategoryImage.OriginalString;
        catImg.appendChild(cardImg);
        categoryTabTitle.appendChild(catImg);
        // foreach tabBlock element list them
        el.CategoryTabBlock.forEach(function (tb) {
            //console.log('\t' + tb.TabTitle);
            var subcategoryTabTitle = document.createElement("p");
            subcategoryTabTitle.innerHTML = tb.TabTitle;
            subcategoryTabTitle.style.textAlign = "center";
            subcategoryTabTitle.style.fontWeight = "lighter";
            subcategoryTabTitle.style.fontSize = "small";
            var tabcontent = document.createElement("div");
            tb.ProductsIcons.forEach(function (pi) {
                //console.log('\t' + '\t' + pi.ProductPageId);
                //console.log('\t' + '\t' + pi.ProductName);
                var piTitle = document.createElement("p");
                piTitle.innerHTML = pi.ProductName;
                piTitle.style.textAlign = "center";
                piTitle.style.fontWeight = "lighter";
                piTitle.style.fontSize = "smaller";
                subcategoryTabTitle.appendChild(piTitle);
                //const piImg = document.createElement("img") as any;
                ////const classListArr2: Array<any> = [el.CategoryImage.OriginalString, "topNavClick"]
                ////piImg.classList.add(...classListArr2);
                //piImg.src = pi;
                //subcategoryTabTitle.appendChild(piImg);
            });
            tabcontent.appendChild(subcategoryTabTitle);
            categoryTabTitle.appendChild(tabcontent);
        });
        root.appendChild(categoryTabTitle);
    });
};
//  Function to build and append HTML Elements on the bottom row of the nav section.
var productTabsFunc = function (productTabsArr, productTabsDiv, pathClass, tabName, tabTitle, categoryTitle) {
    var productTabsRootDiv = document.createElement("div");
    productTabsRootDiv.classList.add('lowerNavDiv');
    productTabsRootDiv.classList.add(pathClass);
    productTabsRootDiv.classList.add("recipe-block-container");
    productTabsRootDiv.classList.add("row");
    productTabsRootDiv.classList.add("equal-height");
    console.log("tabName");
    console.log(tabName);
    var cardIndex = 0;
    var shadeInt = 1;
    //  Add product names to lower nav row. 
    productTabsArr.forEach(function (el) {
        var _a;
        console.log("Adding this to the lowerNav -> " + el.ProductName);
        var id = el.ProductPageId;
        var productTab = document.createElement("a");
        // productTab.setAttribute("style", "text-align: center; width:100%;");
        //if (shadeInt > 1) {
        //    shadeInt = 1;
        //    productTab.style.backgroundColor = "blue";
        //} else {
        //    productTab.style.backgroundColor = "grey";
        //    shadeInt += 1;
        //}
        var classes = [pathClass, tabName, "tablink", id, "IdClass"];
        productTab.setAttribute("onclick", "openTab(event.currentTarget)");
        SWEETTREATSPAGES[el.UrlPath != null ? el.UrlPath.replace(/[^a-z0-9+]/gi, '').toLowerCase() : el.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase()] = {
            pathClass: pathClass,
            tabName: tabName.replace(/[^a-z0-9+]/gi, '').toLowerCase(),
            id: id
        };
        productTabsRootDiv.appendChild(productTab);
        //  Load Product Page
        //productTab.addEventListener('click', function () {
        //    const footer = document.getElementsByClassName("keeblerfooterblock")[0] as HTMLDivElement;
        //    console.log("WEEEEE");
        //    try {
        //        footer.style.visibility = "hidden";
        //    } catch {
        //        console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
        //    };
        //    removeProduct();
        //    //nutritionFetch(id);
        //    setTimeout((): void => {
        //        try {
        //            footer.style.visibility = "visible";
        //        } catch {
        //            console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
        //        };
        //    }, 500);
        //});
        (_a = productTab.classList).add.apply(_a, classes);
        //productTab.innerHTML = el.ProductName;
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
        recipeCardTitle.innerHTML = el.ProductName;
        cardTitleCol.appendChild(recipeCardTitle);
        // image
        var cardImgCol = document.createElement("div");
        cardImgCol.classList.add("col-4");
        cardImgCol.classList.add("img");
        var cardRecipeImg = document.createElement("img");
        cardRecipeImg.classList.add("card-image");
        cardRecipeImg.classList.add(el.ProductPageId);
        cardRecipeImg.addEventListener("click", imgClick, false);
        cardImgCol.appendChild(cardRecipeImg);
        // description
        var cardTextCol = document.createElement("div");
        cardTextCol.classList.add("col-8");
        var recipeCardText = document.createElement("div");
        recipeCardText.classList.add("card-text");
        var recipeCardDescription = document.createElement("p");
        recipeCardDescription.classList.add("card-description");
        recipeCardDescription.classList.add(el.ProductPageId);
        recipeCardDescription.innerHTML = "Sweet treats are made of these...";
        recipeCardText.appendChild(recipeCardDescription);
        cardTextCol.appendChild(recipeCardText);
        // ASYNC treat info fetch
        // fetch our product detail
        //console.log("calling treatFetch for - " + el.ProductPageId);
        //treatFetch(el.ProductPageId);
        cardRow.appendChild(cardTitleCol);
        cardRow.appendChild(cardImgCol);
        cardRow.appendChild(cardTextCol);
        recipeCardBody.appendChild(cardRow);
        recipeCard.appendChild(recipeCardBody);
        var cardAnchorTag = document.createElement("a");
        // Build our responsive url here
        var urlPathResponsive = categoryTitle + "/" + tabTitle + "/" + el.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
        if (tabTitle === "Featured") {
            urlPathResponsive = tabTitle + "/" + el.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
        }
        cardAnchorTag.setAttribute("href", urlPathResponsive);
        cardAnchorTag.appendChild(recipeCard);
        cardAnchorTag.style.textDecoration = "none";
        cardAnchorTag.id = el.ProductName;
        productTab.appendChild(cardAnchorTag);
        productTabsRootDiv.appendChild(productTab);
        //productTabsRootDiv.appendChild(recipeCard);
        cardIndex += 1;
    });
    productTabsDiv.appendChild(productTabsRootDiv);
};
function imgClick(e) {
    if (e.target.style.border) {
        e.target.style.border = '';
    }
    else {
        e.target.style.border = '2px solid #33cc33';
    }
}
//  Function to build and append HTML Elements on the middle row of the nav section.
var productCategoriesFunc = function (productCategories, productCategoriesDiv, productTabsDiv, pathClass, categoryTitle) {
    var productCategoriesRoot = document.createElement("div");
    var buttonLabels = [];
    productCategoriesRoot.setAttribute("class", "middleNavDiv");
    //console.log("Building Product Categories");
    //  Add product names to middle nav row.
    productCategories.forEach(function (el, i) {
        var _a;
        //console.log("el in loop in productCategoriesFunc")
        //console.log(el)
        var navButton = document.createElement("button");
        var buttonLabel = el.TabTitle.replace(/\s/g, "");
        var classes = [pathClass, buttonLabel, "active-oval-outlined-brown", "midnav-button"];
        buttonLabels.push(classes[1]);
        (_a = navButton.classList).add.apply(_a, classes);
        navButton.innerHTML = el.TabTitle;
        navButton.onclick = function () {
            var footer = document.getElementsByClassName("keeblerfooterblock")[0];
            try {
                footer.style.visibility = "hidden";
            }
            catch (_a) {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            }
            ;
            middleNavHideFunc(classes[0], classes[1]);
            toggleMiddleNavButtons(buttonLabel);
            setTimeout(function () {
                try {
                    footer.style.visibility = "visible";
                }
                catch (_a) {
                    console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
                }
                ;
            }, 600);
        };
        if (el.TabTitle !== "Featured") {
        }
        console.log("el.TabTitle");
        console.log(el.TabTitle);
        console.log("calling productTabsFunc");
        productCategoriesRoot.appendChild(navButton);
        productTabsFunc(el.ProductsIcons, productTabsDiv, pathClass, buttonLabels[i], el.TabTitle, categoryTitle);
    });
    //  Call nested fuction on each product to to build out sub products.
    //productCategories.forEach((el: any, i: number) => {
    //    productTabsFunc(el.ProductsIcons, productTabsDiv, pathClass, buttonLabels[i]);
    //});
    productCategoriesDiv.appendChild(productCategoriesRoot);
};
//  Function to build and append HTML Elements on the top row of the nav section.
var productTypesFunc = function (json) {
    var jsonArr = JSON.parse(json);
    var root = document.getElementById("root");
    var tempDiv1 = document.createElement("div");
    var tempDiv2 = document.createElement("div");
    var outerContainer = document.createElement("div");
    var middleContainerDiv = document.createElement("div");
    var productDiv = document.createElement("div");
    // Add images to top nav tabs
    var tabItems = document.getElementsByClassName('nav-link');
    // Work around for compatibility in IE 
    var tabItemsArr = Object.keys(tabItems).map(function (key) {
        return tabItems[key];
    });
    var tabItemsWithIDArr = [];
    //make new array of nav items that have an ID
    for (var i = 0; i < tabItemsArr.length; i += 1) {
        if (tabItemsArr[i].hasAttribute('id')) {
            console.log(tabItemsArr[i]);
            tabItemsWithIDArr.push(tabItemsArr[i]);
        }
        ;
    }
    ;
    //let carouselIndex: number = 0;
    var tabIndex = 0;
    jsonArr.forEach(function (el) {
        var _a;
        console.log("el from within jsonArr NOW");
        console.log(el);
        //console.log(el.CategoryImage.OriginalString);
        var imgPath = el.CategoryImage.OriginalString;
        var catagoryImg = document.createElement("img");
        var classListArr2 = [imgPath, "topNavClick"];
        (_a = catagoryImg.classList).add.apply(_a, classListArr2);
        catagoryImg.src = imgPath;
        var categoryTabTitle = document.createElement("p");
        categoryTabTitle.innerHTML = el.CategoryTitle;
        categoryTabTitle.style.textAlign = "center";
        tabItemsWithIDArr[tabIndex].appendChild(catagoryImg);
        tabItemsWithIDArr[tabIndex].appendChild(categoryTabTitle);
        tabIndex += 1;
    });
    //Get arrows
    var firstLArrow = document.getElementById("firstCategory-leftArrow");
    var firstRArrow = document.getElementById("firstCategory-rightArrow");
    var secondLArrow = document.getElementById("secondCategory-leftArrow");
    var secondRArrow = document.getElementById("secondCategory-rightArrow");
    var thirdLArrow = document.getElementById("thirdCategory-leftArrow");
    var thirdRArrow = document.getElementById("thirdCategory-rightArrow");
    var forthLArrow = document.getElementById("forthCategory-leftArrow");
    var forthRArrow = document.getElementById("forthCategory-rightArrow");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var footer = document.getElementsByClassName("keeblerfooterblock")[0];
        try {
            footer.style.visibility = "hidden";
        }
        catch (_a) {
            console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
        }
        ;
        var nav = document.getElementById("myTab");
        var tabAnchorList = nav.getElementsByClassName("nav-link");
        var selectedTab = e.currentTarget;
        var coordinate = 0;
        for (var i = 0; i < tabAnchorList.length; i++) {
            if (tabAnchorList[i] == selectedTab) {
                if (i === 0) {
                    coordinate = 0;
                }
                else {
                    coordinate = 12;
                }
                customScrollTo(nav, coordinate);
            }
        }
        for (var i = 0; i < tabItemsWithIDArr.length; i += 1) {
            if (tabItemsWithIDArr[i].classList.contains("active")) {
                tabItemsWithIDArr[i].style.opacity = 1;
                topNavHideFunc(tabItemsWithIDArr[i].firstElementChild.classList.item(0));
                middleNavHideFunc(jsonArr[i].CategoryImage.OriginalString, jsonArr[i].CategoryTabBlock[0].TabTitle.replace(/\s/g, ''));
                if (tabItemsWithIDArr[i].id === "firstCategory-tab") {
                    firstLArrow.style.display = "block";
                    firstRArrow.style.display = "block";
                }
                else if (tabItemsWithIDArr[i].id === "secondCategory-tab") {
                    secondLArrow.style.display = "block";
                    secondRArrow.style.display = "block";
                }
                else if (tabItemsWithIDArr[i].id === "thirdCategory-tab") {
                    thirdLArrow.style.display = "block";
                    thirdRArrow.style.display = "block";
                }
                else {
                    forthLArrow.style.display = "block";
                    forthRArrow.style.display = "block";
                }
            }
            else {
                tabItemsWithIDArr[i].style.opacity = 0.5;
                if (tabItemsWithIDArr[i].id === "firstCategory-tab") {
                    firstLArrow.style.display = "none";
                    firstRArrow.style.display = "none";
                }
                else if (tabItemsWithIDArr[i].id === "secondCategory-tab") {
                    secondLArrow.style.display = "none";
                    secondRArrow.style.display = "none";
                }
                else if (tabItemsWithIDArr[i].id === "thirdCategory-tab") {
                    thirdLArrow.style.display = "none";
                    thirdRArrow.style.display = "none";
                }
                else {
                    forthLArrow.style.display = "none";
                    forthRArrow.style.display = "none";
                }
            }
        }
        setTimeout(function () {
            try {
                footer.style.visibility = "visible";
            }
            catch (_a) {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            }
            ;
        }, 700);
    });
    //make non active tabs faded initially
    for (var i = 0; i < tabItemsWithIDArr.length; i += 1) {
        if (tabItemsWithIDArr[i].classList.contains("active")) {
            tabItemsWithIDArr[i].style.opacity = 1;
        }
        else {
            tabItemsWithIDArr[i].style.opacity = 0.5;
        }
    }
    var topNavHideFuncParam = tabItemsWithIDArr[0].children[0];
    //  Call nested functions on each image to build out sub-products.
    jsonArr.forEach(function (el) {
        productCategoriesFunc(el.CategoryTabBlock, middleContainerDiv, productDiv, el.CategoryImage.OriginalString, el.CategoryTitle);
    });
    //tempDiv1.classList.add("scroll-container");
    tempDiv1.appendChild(middleContainerDiv);
    tempDiv1.appendChild(middleContainerDiv);
    outerContainer.appendChild(tempDiv1);
    //middleContainerDiv.appendChild(tempDiv2);
    productDiv.classList.add("lowerNavContainer");
    productDiv.classList.add("container");
    productDiv.appendChild(buildScrollTrack());
    //console.log(productDiv);
    // add products to a div
    tempDiv2.appendChild(productDiv);
    outerContainer.appendChild(tempDiv2);
    root.appendChild(outerContainer);
    //  Both functions beneath are called on page load to build out the SPA nav structure.
    topNavHideFunc(topNavHideFuncParam.classList.item(0));
    middleNavHideFunc(jsonArr[0].CategoryImage.OriginalString, jsonArr[0].CategoryTabBlock[0].TabTitle.replace(/\s/g, ''));
    navArrows();
};
//# sourceMappingURL=SweetTreatsSPA.js.map