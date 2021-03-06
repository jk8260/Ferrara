﻿import { stringify } from "querystring";

const streatsListFunc: Function = (json: string): void => {
    //console.log("BINGO");
    //console.log(json);
    const jsonArr: Array<any> = JSON.parse(json);
    //const topNav: HTMLCollection = document.getElementsByClassName("top-nav-treat");
    //const navTabs: HTMLCollection = document.getElementsByClassName("tab-pane");
    //const jkcontainer: HTMLCollection = document.getElementsByClassName("product-root");
    const root: HTMLElement = document.getElementById("sweet-root");
    //console.log("YIPPIE");

    jsonArr.forEach((el: any, i: number) => {
        // add all main elements
        //console.log(el.CategoryTitle + " - " + el.CategoryImage.Path);
        const categoryTabTitle: HTMLElement = document.createElement("p");
        categoryTabTitle.innerHTML = el.CategoryTitle;
        categoryTabTitle.style.textAlign = "center";
        categoryTabTitle.style.fontWeight = "bold";

        const catImg: HTMLDivElement = document.createElement("div");
        catImg.classList.add("col-4");
        
        const cardImg: HTMLImageElement = document.createElement("img");
        cardImg.src = el.CategoryImage.OriginalString;
        catImg.appendChild(cardImg);
        categoryTabTitle.appendChild(catImg);

        // foreach tabBlock element list them
        el.CategoryTabBlock.forEach((tb: any) => {

            //console.log('\t' + tb.TabTitle);
            const subcategoryTabTitle: HTMLElement = document.createElement("p");
            subcategoryTabTitle.innerHTML = tb.TabTitle;
            subcategoryTabTitle.style.textAlign = "center";
            subcategoryTabTitle.style.fontWeight = "lighter";
            subcategoryTabTitle.style.fontSize = "small";

            const tabcontent: HTMLDivElement = document.createElement("div");

            tb.ProductsIcons.forEach((pi: any) => {
                //console.log('\t' + '\t' + pi.ProductPageId);
                //console.log('\t' + '\t' + pi.ProductName);
                const piTitle: HTMLElement = document.createElement("p");
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
const productTabsFunc: Function = (productTabsArr: Array<HTMLElement>, productTabsDiv: HTMLDivElement, pathClass: string, tabName: string, tabTitle: string, categoryTitle: string): void => {

    const productTabsRootDiv: HTMLDivElement = document.createElement("div");
    productTabsRootDiv.classList.add('lowerNavDiv');
    productTabsRootDiv.classList.add(pathClass);
    productTabsRootDiv.classList.add("recipe-block-container");
    productTabsRootDiv.classList.add("row");
    productTabsRootDiv.classList.add("equal-height");

    //console.log("tabName");
    //console.log(tabName);

    let cardIndex: number = 0;
    let shadeInt: number = 1;
    //  Add product names to lower nav row. 
    productTabsArr.forEach((el: any) => {
        //console.log("Adding this to the lowerNav -> " + el.ProductName);
        const id: number = el.ProductPageId;
        const productTab: HTMLElement = document.createElement("a");

       // productTab.setAttribute("style", "text-align: center; width:100%;");
        //if (shadeInt > 1) {
        //    shadeInt = 1;
        //    productTab.style.backgroundColor = "blue";
        //} else {
        //    productTab.style.backgroundColor = "grey";
        //    shadeInt += 1;
        //}

        const classes: Array<any> = [pathClass, tabName, "tablink", id, "IdClass"];
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
        productTab.classList.add(...classes);
        //productTab.innerHTML = el.ProductName;

        // card main div
        const recipeCard: HTMLDivElement = document.createElement("div");
        recipeCard.classList.add("card");
        recipeCard.classList.add("keebler-card");

        // card body div (not sure how this is different)
        const recipeCardBody: HTMLDivElement = document.createElement("div");
        recipeCardBody.classList.add("card-body");

        // row div is the card display
        const cardRow: HTMLDivElement = document.createElement("div");
        cardRow.classList.add("row");

        //title
        const cardTitleCol: HTMLDivElement = document.createElement("div");
        cardTitleCol.classList.add("col-12");
        const recipeCardTitle: HTMLElement = document.createElement("h5");
        recipeCardTitle.classList.add("card-title");
        recipeCardTitle.innerHTML = el.ProductName;
        cardTitleCol.appendChild(recipeCardTitle);

        // image
        const cardImgCol: HTMLDivElement = document.createElement("div");
        cardImgCol.classList.add("col-4");
        cardImgCol.classList.add("img");

        const cardRecipeImg: HTMLImageElement = document.createElement("img");
        cardRecipeImg.classList.add("card-image");
        cardRecipeImg.classList.add(el.ProductPageId);
        cardRecipeImg.addEventListener("click", imgClick, false);

        cardImgCol.appendChild(cardRecipeImg);

        // description
        const cardTextCol: HTMLDivElement = document.createElement("div");
        cardTextCol.classList.add("col-8");

        const recipeCardText: HTMLDivElement = document.createElement("div");
        recipeCardText.classList.add("card-text");

        const recipeCardDescription: HTMLElement = document.createElement("p");
        recipeCardDescription.classList.add("card-description");
        recipeCardDescription.classList.add(el.ProductPageId);
        recipeCardDescription.innerHTML = "Sweet treats are made of these...";

        recipeCardText.appendChild(recipeCardDescription);
        cardTextCol.appendChild(recipeCardText);

        // ASYNC image fetch for the product page
        treatFetch(el.ProductPageId);

        cardRow.appendChild(cardTitleCol);
        cardRow.appendChild(cardImgCol);
        cardRow.appendChild(cardTextCol);
        
        recipeCardBody.appendChild(cardRow);
        recipeCard.appendChild(recipeCardBody);

        const cardAnchorTag: HTMLElement = document.createElement("a");
        // Build our responsive url here
        var urlPathResponsive = categoryTitle.replace(/[^a-z0-9+]/gi, '-').replace('--', '-').toLowerCase() + "/" + tabTitle.replace(/[^a-z0-9+]/gi, '-').replace('--', '-').toLowerCase() + "/" + el.ProductName.replace(/[^a-z0-9+]/gi, '-').toLowerCase().replace('--', '-');
        
        // if categoryTitle and tabTitle are featured only show one
        if (tabTitle === "Featured") {
            urlPathResponsive = tabTitle.replace(/[^a-z0-9+]/gi, '-').replace('--', '-').toLowerCase() + "/" + el.ProductName.replace(/[^a-z0-9+]/gi, '-').toLowerCase().replace('--', '-');
        }

        if (urlPathResponsive.endsWith('-')) {
            urlPathResponsive = urlPathResponsive.substr(0, (urlPathResponsive.length - 1));
        }        

        //console.log("yes sir");
        //console.log(urlPathResponsive);

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
    } else {
        e.target.style.border = '2px solid #33cc33';
    }
}

//  Function to build and append HTML Elements on the middle row of the nav section.
const productCategoriesFunc: Function = (productCategories: HTMLDivElement[], productCategoriesDiv: HTMLElement, productTabsDiv: HTMLDivElement, pathClass: string, categoryTitle: string): void => {
    const productCategoriesRoot: HTMLDivElement = document.createElement("div");
    const buttonLabels: string[] = [];

    productCategoriesRoot.setAttribute("class", "middleNavDiv");
    //console.log("Building Product Categories");
    //  Add product names to middle nav row.
    productCategories.forEach((el: any, i: number) => {
        //console.log("el in loop in productCategoriesFunc")
        //console.log(el)
        const navButton: HTMLElement = document.createElement("button");
        const buttonLabel: string = el.TabTitle.replace(/\s/g, "");
        const classes: Array<any> = [pathClass, buttonLabel, "active-oval-outlined-brown", "midnav-button"];

        buttonLabels.push(classes[1]);

        navButton.classList.add(...classes);
        navButton.innerHTML = el.TabTitle;
        navButton.onclick = (): void => {
            const footer = document.getElementsByClassName("keeblerfooterblock")[0] as HTMLDivElement;

            try {
                footer.style.visibility = "hidden";
            } catch {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            };

            middleNavHideFunc(classes[0], classes[1]);
            toggleMiddleNavButtons(buttonLabel);

            setTimeout((): void => {
                try {
                    footer.style.visibility = "visible";
                } catch {
                    console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
                };
            }, 600);

        };

        if (el.TabTitle !== "Featured") {
        }

        //console.log("el.TabTitle");
        //console.log(el.TabTitle);

        //console.log("calling productTabsFunc");
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
const productTypesFunc: Function = (json: string): void => {

    const jsonArr: Array<any> = JSON.parse(json);
    const root: HTMLElement = document.getElementById("root");
    const tempDiv1: HTMLDivElement = document.createElement("div");
    const tempDiv2: HTMLDivElement = document.createElement("div");
    const outerContainer: HTMLDivElement = document.createElement("div");
    const middleContainerDiv: HTMLDivElement = document.createElement("div");
    const productDiv: HTMLDivElement = document.createElement("div");

    // Add images to top nav tabs
    const tabItems: HTMLCollection = document.getElementsByClassName('nav-link');
    // Work around for compatibility in IE 
    const tabItemsArr = Object.keys(tabItems).map(function (key) {
        return tabItems[key];
    });
    const tabItemsWithIDArr: Array<any> = [];

    //make new array of nav items that have an ID
    for (let i: number = 0; i < tabItemsArr.length; i += 1) {
        if (tabItemsArr[i].hasAttribute('id')) {
            //console.log(tabItemsArr[i]);
            tabItemsWithIDArr.push(tabItemsArr[i]);
        };
    };

    //let carouselIndex: number = 0;
    let tabIndex: number = 0;

    jsonArr.forEach((el: any) => {
        //console.log("el from within jsonArr NOW");
        //console.log(el);
        //console.log(el.CategoryImage.OriginalString);

        var imgPath = el.CategoryImage.OriginalString;

        const catagoryImg = document.createElement("img") as any;
        const classListArr2: Array<any> = [imgPath, "topNavClick"]
        catagoryImg.classList.add(...classListArr2);
        catagoryImg.src = imgPath;

        const categoryTabTitle: HTMLElement = document.createElement("p");
        categoryTabTitle.innerHTML = el.CategoryTitle;
        categoryTabTitle.style.textAlign = "center";


        tabItemsWithIDArr[tabIndex].appendChild(catagoryImg);
        tabItemsWithIDArr[tabIndex].appendChild(categoryTabTitle);
        tabIndex += 1;
    });

    //Get arrows
    const firstLArrow: HTMLElement = document.getElementById("firstCategory-leftArrow");
    const firstRArrow: HTMLElement = document.getElementById("firstCategory-rightArrow");

    const secondLArrow: HTMLElement = document.getElementById("secondCategory-leftArrow");
    const secondRArrow: HTMLElement = document.getElementById("secondCategory-rightArrow");

    const thirdLArrow: HTMLElement = document.getElementById("thirdCategory-leftArrow");
    const thirdRArrow: HTMLElement = document.getElementById("thirdCategory-rightArrow");

    const forthLArrow: HTMLElement = document.getElementById("forthCategory-leftArrow");
    const forthRArrow: HTMLElement = document.getElementById("forthCategory-rightArrow");


    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        const footer = document.getElementsByClassName("keeblerfooterblock")[0] as HTMLDivElement;

        try {
            footer.style.visibility = "hidden";
        } catch {
            console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
        };

        const nav: HTMLElement = document.getElementById("myTab");
        const tabAnchorList: HTMLCollection = nav.getElementsByClassName("nav-link");
        let selectedTab: any = e.currentTarget;
        let coordinate: number = 0;
        for (let i = 0; i < tabAnchorList.length; i++) {
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
        for (let i: number = 0; i < tabItemsWithIDArr.length; i += 1) {
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
                } else {
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
                } else {
                    forthLArrow.style.display = "none";
                    forthRArrow.style.display = "none";
                }
            }
        }

        setTimeout((): void => {
            try {
                footer.style.visibility = "visible";
            } catch {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            };
        }, 700);

    })

    //make non active tabs faded initially
    for (let i: number = 0; i < tabItemsWithIDArr.length; i += 1) {
        if (tabItemsWithIDArr[i].classList.contains("active")) {
            tabItemsWithIDArr[i].style.opacity = 1;
        }
        else {
            tabItemsWithIDArr[i].style.opacity = 0.5;
        }
    }

    const topNavHideFuncParam = tabItemsWithIDArr[0].children[0] as HTMLElement;


    //  Call nested functions on each image to build out sub-products.
    jsonArr.forEach((el: any) => {
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
