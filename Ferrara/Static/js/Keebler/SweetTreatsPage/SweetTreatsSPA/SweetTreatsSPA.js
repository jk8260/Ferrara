//  Function to build and append HTML Elements on the bottom row of the nav section.
var productTabsFunc = function (productTabsArr, productTabsDiv, pathClass, tabName) {
    var productTabsRootDiv = document.createElement("div");
    productTabsRootDiv.classList.add('lowerNavDiv');
    productTabsRootDiv.classList.add(pathClass);
    //  Add product names to lower nav row. 
    productTabsArr.forEach(function (el) {
        var _a;
        var id = el.ProductPageId;
        var productTab = document.createElement("div");
        var classes = [pathClass, tabName, "tablink", id, "IdClass"];
        productTab.setAttribute("onclick", "openTab(event.currentTarget)");
        SWEETTREATSPAGES[el.UrlPath != null ? el.UrlPath.replace(/[^a-z0-9+]/gi, '').toLowerCase() : el.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase()] = {
            pathClass: pathClass,
            tabName: tabName.replace(/[^a-z0-9+]/gi, '').toLowerCase(),
            id: id
        };
        //  Load Product Page
        productTab.addEventListener('click', function () {
            var footer = document.getElementsByClassName("keeblerfooterblock")[0];
            try {
                footer.style.visibility = "hidden";
            }
            catch (_a) {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            }
            ;
            removeProduct();
            nutritionFetch(id);
            setTimeout(function () {
                try {
                    footer.style.visibility = "visible";
                }
                catch (_a) {
                    console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
                }
                ;
            }, 500);
        });
        (_a = productTab.classList).add.apply(_a, classes);
        productTab.innerHTML = el.ProductName;
        productTabsRootDiv.appendChild(productTab);
    });
    productTabsDiv.appendChild(productTabsRootDiv);
};
//  Function to build and append HTML Elements on the middle row of the nav section.
var productCategoriesFunc = function (productCategories, productCategoriesDiv, productTabsDiv, pathClass) {
    var productCategoriesRoot = document.createElement("div");
    var buttonLabels = [];
    productCategoriesRoot.setAttribute("class", "middleNavDiv");
    //  Add product names to middle nav row.
    productCategories.forEach(function (el) {
        var _a;
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
        productCategoriesRoot.appendChild(navButton);
    });
    //  Call nested fuction on each product to to build out sub products.
    productCategories.forEach(function (el, i) {
        productTabsFunc(el.ProductsIcons, productTabsDiv, pathClass, buttonLabels[i]);
    });
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
            tabItemsWithIDArr.push(tabItemsArr[i]);
        }
        ;
    }
    ;
    //let carouselIndex: number = 0;
    var tabIndex = 0;
    jsonArr.forEach(function (el) {
        var _a;
        var catagoryImg = document.createElement("img");
        var classListArr2 = [el.CategoryImage.OriginalString, "topNavClick"];
        (_a = catagoryImg.classList).add.apply(_a, classListArr2);
        catagoryImg.src = el.CategoryImage.OriginalString;
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
                else {
                    thirdLArrow.style.display = "block";
                    thirdRArrow.style.display = "block";
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
                else {
                    thirdLArrow.style.display = "none";
                    thirdRArrow.style.display = "none";
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
        productCategoriesFunc(el.CategoryTabBlock, middleContainerDiv, productDiv, el.CategoryImage.OriginalString);
    });
    outerContainer.appendChild(tempDiv1);
    middleContainerDiv.appendChild(tempDiv2);
    tempDiv1.appendChild(middleContainerDiv);
    productDiv.appendChild(buildScrollTrack());
    productDiv.classList.add("lowerNavContainer");
    tempDiv2.classList.add("scroll-container");
    tempDiv2.appendChild(productDiv);
    root.appendChild(outerContainer);
    //  Both functions beneath are called on page load to build out the SPA nav structure.
    topNavHideFunc(topNavHideFuncParam.classList.item(0));
    middleNavHideFunc(jsonArr[0].CategoryImage.OriginalString, jsonArr[0].CategoryTabBlock[0].TabTitle.replace(/\s/g, ''));
    navArrows();
};
//# sourceMappingURL=SweetTreatsSPA.js.map