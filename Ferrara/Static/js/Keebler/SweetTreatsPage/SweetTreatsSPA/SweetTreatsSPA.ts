import { stringify } from "querystring";

const streatsListFunc: Function = (json: string): void => {
    console.log("BINGO");
    console.log(json);
    const jsonArr: Array<any> = JSON.parse(json);
    //const topNav: HTMLCollection = document.getElementsByClassName("top-nav-treat");
    //const navTabs: HTMLCollection = document.getElementsByClassName("tab-pane");
    //const jkcontainer: HTMLCollection = document.getElementsByClassName("product-root");
    const root: HTMLElement = document.getElementById("sweet-root");
    console.log("YIPPIE");

    jsonArr.forEach((el: any, i: number) => {
        // add all main elements
        console.log(el.CategoryTitle + " - " + el.CategoryImage.Path);
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
const productTabsFunc: Function = (productTabsArr: Array<HTMLElement>, productTabsDiv: HTMLDivElement, pathClass: string, tabName: string): void => {

    const productTabsRootDiv: HTMLDivElement = document.createElement("div");
    productTabsRootDiv.classList.add('lowerNavDiv');
    productTabsRootDiv.classList.add(pathClass);
    productTabsRootDiv.classList.add("recipe-block-container");
    productTabsRootDiv.classList.add("row");
    productTabsRootDiv.classList.add("equal-height");


    let cardIndex: number = 0;
    let shadeInt: number = 1;
    //  Add product names to lower nav row. 
    productTabsArr.forEach((el: any) => {
        //console.log("Working on Sub Item - " + el.ProductName);
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

        //productTabsRootDiv.appendChild(productTab);


        //  Load Product Page

        productTab.addEventListener('click', function () {
            const footer = document.getElementsByClassName("keeblerfooterblock")[0] as HTMLDivElement;

            try {
                footer.style.visibility = "hidden";
            } catch {
                console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
            };

            removeProduct();
            //nutritionFetch(id);

            setTimeout((): void => {
                try {
                    footer.style.visibility = "visible";
                } catch {
                    console.log("In Try Catch in SweetTreatsSPA. The Client is selecting tabs too fast.");
                };
            }, 500);

        });
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

        // ASYNC treat info fetch
        // fetch our product detail
        //console.log("calling treatFetch for - " + el.ProductPageId);
        treatFetch(el.ProductPageId);

        cardRow.appendChild(cardTitleCol);
        cardRow.appendChild(cardImgCol);
        cardRow.appendChild(cardTextCol);
        
        recipeCardBody.appendChild(cardRow);
        recipeCard.appendChild(recipeCardBody);


        //const cardAnchorTag: HTMLElement = document.createElement("a");
        //cardAnchorTag.setAttribute("href", el.ProductPageId);
        //cardAnchorTag.appendChild(recipeCard);
        //cardAnchorTag.style.textDecoration = "none";
        //cardAnchorTag.id = el.ProductName;

        productTab.appendChild(recipeCard);
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
const productCategoriesFunc: Function = (productCategories: HTMLDivElement[], productCategoriesDiv: HTMLElement, productTabsDiv: HTMLDivElement, pathClass: string): void => {
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

        productCategoriesRoot.appendChild(navButton);
        productTabsFunc(el.ProductsIcons, productTabsDiv, pathClass, buttonLabels[i]);
    });

    //  Call nested fuction on each product to to build out sub products.
    //productCategories.forEach((el: any, i: number) => {
    //    productTabsFunc(el.ProductsIcons, productTabsDiv, pathClass, buttonLabels[i]);
    //});

    productCategoriesDiv.appendChild(productCategoriesRoot);
};

//  Function to build and append HTML Elements on the top row of the nav section.
const productTypesFunc: Function = (json: string): void => {
    //console.log("same inside");
    //console.log(json);

    //fetch("mockdata.json")
    //    .then(response => response.json())
    //    .then(json => console.log(json));

    

    const jsonArr: Array<any> = JSON.parse(json);
    const root: HTMLElement = document.getElementById("root");
    const tempDiv1: HTMLDivElement = document.createElement("div");
    const tempDiv2: HTMLDivElement = document.createElement("div");
    const outerContainer: HTMLDivElement = document.createElement("div");
    const middleContainerDiv: HTMLDivElement = document.createElement("div");
    const productDiv: HTMLDivElement = document.createElement("div");



    //jsonArr.push(tempjk);

    //jsonArr.unshift(0);
    //jsonArr[0] = tempjk;
    //jsonArr.push(tempjk);

    //console.log("jsonArr in productTypesFunc StartOfDump");
    //console.log(jsonArr);
    //console.log("jsonArr in productTypesFunc EndOfDump");


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
            console.log(tabItemsArr[i]);
            tabItemsWithIDArr.push(tabItemsArr[i]);
        };
    };

    //let carouselIndex: number = 0;
    let tabIndex: number = 0;

    //const clone = [].concat(jsonArr);
    //console.log("clone");
    //clone.pop();
    //clone.pop();
    //console.log(clone.length);
    //console.log(clone);

    
    //clone[0]["CategoryTitle"] = "Featured";
    //clone[0]["CategoryImage"]["OriginalString"] = "data:image/jpeg;base64,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";;

    //jsonArr.push(jsonArr[0]);
    //jsonArr[0]["CategoryTitle"] = "Featured";
    //jsonArr[0]["CategoryImage"]["OriginalString"] = "data:image/jpeg;base64,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";;

    jsonArr.forEach((el: any) => {
        console.log("el from within jsonArr");
        console.log(el);
        //console.log(el.CategoryImage.OriginalString);

        var imgPath = el.CategoryImage.OriginalString;
        //if (el.CategoryTitle == "Cookies")
        //{
        //    el.CategoryTitle = "Featured";
        //    imgPath = "data:image/jpeg;base64,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";
        //}

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
        //console.log("Subproduct - ");
        //console.log(el.CategoryTitle);
        //console.log("el.CategoryTabBlock - ");
        //console.log(el.CategoryTabBlock);
        //console.log("middleContainerDiv - ");
        //console.log(middleContainerDiv);
        //console.log("productDiv - ");
        //console.log(productDiv);
        //console.log("el.CategoryImage.OriginalString - ");
        //console.log(el.CategoryImage.OriginalString);

        productCategoriesFunc(el.CategoryTabBlock, middleContainerDiv, productDiv, el.CategoryImage.OriginalString);
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
