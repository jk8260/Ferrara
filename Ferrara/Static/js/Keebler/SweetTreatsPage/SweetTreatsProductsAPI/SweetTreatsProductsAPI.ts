const productsFunc: Function = async (json: string) => {
    const parsedJSON: any = JSON.parse(json);
    console.log()
    const lowerNav: HTMLCollectionOf<Element> = document.getElementsByClassName("lowerNavDiv");
    let displayBlockCount: number = 0;

    //Counts how many lower nav options are displayed to check if there are multiple products
    for (let navIndex = 0; navIndex < lowerNav.length; navIndex++) {
        let lowerNavChildren = lowerNav[navIndex].children;
        for (let childIndex = 0; childIndex < lowerNavChildren.length; childIndex++) {
            if (lowerNavChildren[childIndex].style.display == "block") {
                displayBlockCount++;
            }
        }
    }

    // Create Main Div
    const mainDiv: HTMLDivElement = document.createElement("div");
    mainDiv.classList.add("row");
    mainDiv.classList.add("product-details-container");

    // Append left arrow
    const leftMainContentArrow: HTMLDivElement = document.createElement("div");
    leftMainContentArrow.classList.add("col-md-1");
    leftMainContentArrow.classList.add("col-1");
    const leftArrowImg: HTMLImageElement = document.createElement("img");
    leftArrowImg.src = "/Static/gfx/ArrowIcons/LargeLeftArrow.svg";
    leftMainContentArrow.append(leftArrowImg);
    leftMainContentArrow.setAttribute("onclick", "leftChangeMainContent()");
    leftMainContentArrow.classList.add("main-content-arrow");

    if (displayBlockCount < 1) {
        leftMainContentArrow.style.display = "none";
    }

    mainDiv.append(leftMainContentArrow);

    const innerCol: HTMLDivElement = document.createElement("div");
    innerCol.classList.add("col-10");
    innerCol.classList.add("product-page-main-content");

    const innerRow: HTMLDivElement = document.createElement("div");
    innerRow.classList.add("row");

    // Append Product Image to Main Div
    if (parsedJSON.ProductImage != null) {
        const imgContainer: HTMLDivElement = document.createElement("div");
        imgContainer.classList.add("col-lg-4");
        imgContainer.classList.add("col-md-5");
        imgContainer.classList.add("col-sm-12");
        // Create img carousel if more than one image exists
        if (Object.keys(parsedJSON.ProductImage).length > 1) {
            const productCarousel: HTMLDivElement = document.createElement("div");
            productCarousel.id = "carouselExampleIndicators";
            productCarousel.classList.add("carousel");
            productCarousel.classList.add("slide");
            productCarousel.setAttribute("data-ride", "carousel");
            productCarousel.setAttribute("data-interval", "false");

            const carouselIndicators: HTMLOListElement = document.createElement("ol");
            carouselIndicators.classList.add("carousel-indicators");

            for (let index = 0; index < Object.keys(parsedJSON.ProductImage).length; index += 1) {
                const singleIndicator: HTMLLIElement = document.createElement("li");
                singleIndicator.setAttribute("data-target", "#carouselExampleIndicators");
                singleIndicator.setAttribute("data-slide-to", String(index));
                if (index === 0) { singleIndicator.setAttribute("class", "active"); }
                carouselIndicators.appendChild(singleIndicator);
            }

            const productInnerCarousel: HTMLDivElement = document.createElement("div");
            productInnerCarousel.classList.add("carousel-inner");

            for (let x = 0; x < Object.keys(parsedJSON.ProductImage).length; x += 1) {
                const productInnerCarouselItem: HTMLDivElement = document.createElement("div"); 
                productInnerCarouselItem.classList.add("carousel-item");
                if (x === 0) { productInnerCarouselItem.classList.add("active"); }
                const itemImg: HTMLImageElement = document.createElement("img");
                itemImg.classList.add("d-block");
                itemImg.classList.add("w-100");
                itemImg.classList.add("sweet-treats-nutrition-images");
                if (parsedJSON.ProductImage[x].nutritionTabName) { itemImg.classList.add(parsedJSON.ProductImage[x].nutritionTabName.replace(/[^a-z0-9+]/gi, '').toLowerCase()); };
                itemImg.src = parsedJSON.ProductImage[x].src;
                itemImg.alt = parsedJSON.ProductImage[x].altSEO;
                productInnerCarouselItem.appendChild(itemImg);
                productInnerCarousel.appendChild(productInnerCarouselItem);
            }

            productCarousel.appendChild(carouselIndicators);
            productCarousel.appendChild(productInnerCarousel);
            imgContainer.appendChild(productCarousel);
        } else {
            const productImage: HTMLImageElement = document.createElement("img");
            productImage.src = parsedJSON.ProductImage[0].src;
            productImage.alt = parsedJSON.ProductImage[0].altSEO;
            imgContainer.appendChild(productImage);
        }

        innerRow.appendChild(imgContainer);
    }

    //// Create Details Section
    //const productDetailsDiv: HTMLDivElement = document.createElement("div");
    //productDetailsDiv.classList.add("col-lg-8");
    //productDetailsDiv.classList.add("col-md-7");
    //productDetailsDiv.classList.add("col-sm-12");

    //// Append Product Title
    //const productDescriptionTitle: HTMLHeadingElement = document.createElement("h1");
    //productDescriptionTitle.innerHTML = parsedJSON.ProductDescriptionName;
    //productDescriptionTitle.classList.add("product-title");
    //productDetailsDiv.appendChild(productDescriptionTitle);

    //// Append Product Description
    //const productDescription: HTMLParagraphElement = document.createElement("p");
    //productDescription.classList.add("product-description");
    //productDescription.innerHTML = parsedJSON.ProductDescription;
    //productDetailsDiv.appendChild(productDescription);

    //// Append Bag Size Dropdown
    //const bagSizeDropDown = await buildBagSizeDropDownFunc(parsedJSON.NutritionSrcs);
    //productDescription.appendChild(bagSizeDropDown);
    //buildCustomDropdown(bagSizeDropDown, parsedJSON.NutritionSrcs);

    //// Append Nutrition Button
    //const nutritionInfoButton: HTMLButtonElement = document.createElement("button");
    //nutritionInfoButton.innerHTML = parsedJSON.NutritionInfoButton;
    //nutritionInfoButton.classList.add("active-oval-white-red");
    //nutritionInfoButton.classList.add("nutrition-btn");
    //nutritionInfoButton.setAttribute("data-toggle", "modal");

    //nutritionInfoButton.setAttribute("data-target", "#nutritionModal");
    //productDescription.appendChild(nutritionInfoButton);

    //// Append Buy Now Button
    //const buyNowButton: HTMLButtonElement = document.createElement("button");
    //buyNowButton.classList.add("active-oval-filled-red");
    //buyNowButton.classList.add("buy-now-button");
    //buyNowButton.setAttribute("data-toggle", "modal");
    //buyNowButton.setAttribute("data-target", "#buyNowModal");
    //buyNowButton.innerHTML = "BUY NOW";
    //buyNowButton.setAttribute("onclick", "destiniFunction('destinidiv','" + parsedJSON.BuyNowButton + "')");

    //productDescription.appendChild(buyNowButton);

    //// Append Recipe Section
    //let recipeSection = null;
    //if (parsedJSON.RecipesCategoryCardBlocks) {
    //    recipeSection = document.createElement("div");
    //    recipeSection.classList.add("sweet-treats-recipe-section");
    //    recipeSection.classList.add("row");

    //    productDescription.appendChild(buildRecipeSection(recipeSection, parsedJSON.RecipesCategoryCardBlocks, parsedJSON.LinkToRecipePage));
    //}

    //// Append Product Details Div to Main Div
    //innerRow.appendChild(productDetailsDiv);
    //innerCol.appendChild(innerRow);
    //mainDiv.appendChild(innerCol);

    //// Append right arrow
    //const rightMainContentArrow: HTMLDivElement = document.createElement("div");
    //rightMainContentArrow.classList.add("col-md-1");
    //rightMainContentArrow.classList.add("col-1");
    //const rightArrowImg: HTMLImageElement = document.createElement("img");
    //rightArrowImg.src = "/Static/gfx/ArrowIcons/LargeRightArrow.svg";
    //rightMainContentArrow.append(rightArrowImg);
    //rightMainContentArrow.setAttribute("onclick", "rightChangeMainContent()");
    //rightMainContentArrow.classList.add("main-content-arrow");

    //if (displayBlockCount < 1) {
    //    rightMainContentArrow.style.display = "none";
    //}

    //mainDiv.append(rightMainContentArrow);

    //const rootProduct: HTMLElement = document.getElementById("product-root");
    //rootProduct.appendChild(mainDiv);
    //if (recipeSection) { rootProduct.appendChild(recipeSection); }
};

const setNutritionBlock: Function = (src: string): void => {
    const nutritionImage = document.getElementById("nutritionModalImage");
    nutritionImage.setAttribute("src", src);
};

const buildBagSizeDropDownFunc: Function = (nutritionSrcs: any): HTMLElement => {
    const bagSizeDropdownContainer: HTMLElement = document.createElement("div");
    bagSizeDropdownContainer.classList.add("custom-dropdown");
    bagSizeDropdownContainer.style.width = "200px;";

    const bagSizeDropdown: HTMLSelectElement = document.createElement("select");

    bagSizeDropdown.onchange = () => {
        setNutritionBlock(bagSizeDropdown.value);
    };

    const bagSizes: Array<string> = Object.keys(nutritionSrcs);
    if (bagSizes.length > 1) {
        bagSizeDropdownContainer.classList.add("has-options");

        for (const bagSize of bagSizes) {
            const optionTag: HTMLOptionElement = document.createElement("option");
            optionTag.innerHTML = bagSize;
            optionTag.value = nutritionSrcs[bagSize];

            if (bagSizes[0] === bagSize) {
                setNutritionBlock(nutritionSrcs[bagSizes[0]]);
            }

            bagSizeDropdown.appendChild(optionTag);
        }
        bagSizeDropdownContainer.appendChild(bagSizeDropdown);
    } else {
        bagSizeDropdownContainer.classList.add("has-no-options");
        setNutritionBlock(nutritionSrcs[bagSizes[0]]);
    }
    return bagSizeDropdownContainer;
};

const removeProduct: Function = (): void => {
    const node: HTMLElement = document.getElementById("product-root");

    Array.prototype.forEach.call(node.querySelectorAll("*"), function(n) {
        if (n) {
            n.parentNode.removeChild(n);
        }
    });
};

const nutritionFetch: Function = async (id: number): Promise<any> => {
    const response = await fetch(`/KeeblerProductPage/${id}`);
    const myJson = await response.json();
    productsFunc(myJson);
};

const firstProductsFuncCall: Function = (): void => {
    const div: HTMLCollectionOf<Element> = document.getElementsByClassName("IdClass");
    const id: number = parseFloat(div[0].classList[3]);

    const pram: string = window.location.search;
    const filterPram: string = pram.slice(1, pram.length);

    if (SWEETTREATSPAGES[filterPram]) {
        nutritionFetch(SWEETTREATSPAGES[filterPram].id);
        buildNavFromQueryString(SWEETTREATSPAGES[filterPram]);
    } else {
        nutritionFetch(id);
    }
};

const buildCustomDropdown: Function = (dropDown: any, nutritionDetails: any): void => {
    const currentSelectElmnt = dropDown.getElementsByTagName("select")[0];

    /*for each element, create a new DIV that will act as the selected item:*/
    if (currentSelectElmnt) {
        const customSelect: HTMLDivElement = document.createElement("div");
        customSelect.setAttribute("class", "select-selected");
        customSelect.innerHTML = currentSelectElmnt.options[currentSelectElmnt.selectedIndex].innerHTML;
        dropDown.appendChild(customSelect);

        const hiddenOptions: HTMLDivElement = document.createElement("div");
        hiddenOptions.setAttribute("class", "select-items select-hide");
        for (let selectOption of currentSelectElmnt.options) {
            /*for each option in the original select element, create a new DIV that will act as an option item:*/
            const option: HTMLDivElement = document.createElement("div");
            option.innerHTML = selectOption.innerHTML;
            option.id = selectOption.value;
            option.setAttribute("onclick", "optionOnClick(event.target); changeImageFromTabNameClick(event.target.innerHTML);");
            hiddenOptions.appendChild(option);
        }

        dropDown.appendChild(hiddenOptions);

        customSelect.setAttribute("onclick", "onSelectClick(event.target)");
    } else {
        const customSelect: HTMLDivElement = document.createElement("div");
        customSelect.setAttribute("class", "select-selected");
        customSelect.innerHTML = Object.keys(nutritionDetails)[0];
        dropDown.appendChild(customSelect);
    }


}

const buildRecipeSection: Function = (recipeSection: HTMLDivElement, recipeBlocks: any, linkToRecipePage: string): HTMLDivElement => {
    // Build Title 
    const recipeHeader: HTMLHeadingElement = document.createElement("h1");
    recipeHeader.classList.add("recipe-section-header");
    recipeHeader.classList.add("col-12");
    recipeHeader.innerHTML = "Related Recipes";
    recipeSection.appendChild(recipeHeader);

    for (let i = 0; i < Object.keys(recipeBlocks).length; i += 1) { 
        const recipeCard: HTMLDivElement = document.createElement("div");
        recipeCard.classList.add("card");
        recipeCard.classList.add("keebler-card");
        const recipeCardBody: HTMLDivElement = document.createElement("div");
        recipeCardBody.classList.add("card-body");

        const cardRow: HTMLDivElement = document.createElement("div");
        cardRow.classList.add("row");

        const cardImgCol: HTMLDivElement = document.createElement("div");
        cardImgCol.classList.add("col-4");

        const cardRecipeImg: HTMLImageElement = document.createElement("img");
        cardRecipeImg.src = recipeBlocks[i].imageSrc; 

        cardImgCol.appendChild(cardRecipeImg);

        const cardTextCol: HTMLDivElement = document.createElement("div");
        cardTextCol.classList.add("col-8");

        const recipeCardText: HTMLDivElement = document.createElement("div");
        recipeCardText.classList.add("card-text");

        const recipeCardTitle: HTMLElement = document.createElement("h5");
        recipeCardTitle.classList.add("card-title");
        recipeCardTitle.innerHTML = recipeBlocks[i].recipeName; 

        const recipeCardDescription: HTMLElement = document.createElement("p");
        recipeCardDescription.classList.add("card-description");
        recipeCardDescription.innerHTML = recipeBlocks[i].cardDescription; 

        cardTextCol.appendChild(recipeCardTitle);
        cardTextCol.appendChild(recipeCardDescription);

        cardRow.appendChild(cardImgCol);
        cardRow.appendChild(cardTextCol);

        recipeCardBody.appendChild(cardRow);
        recipeCard.appendChild(recipeCardBody);

        const cardCol: HTMLElement = document.createElement("div");
        if (Object.keys(recipeBlocks).length > 1) {
            cardCol.classList.add("col-md-6");
            cardCol.classList.add("col-sm-12");
        } else {
            cardCol.classList.add("col-12");
        }
        cardCol.classList.add("recipe-card-col");

        const cardAnchorTag: HTMLElement = document.createElement("a");
        cardAnchorTag.setAttribute("href", recipeBlocks[i].recipePageLink);
        cardAnchorTag.appendChild(recipeCard);
        cardAnchorTag.style.textDecoration = "none";
        cardAnchorTag.id = recipeBlocks[i].recipeName;

        cardCol.appendChild(cardAnchorTag);
        recipeSection.appendChild(cardCol);
    }

    // Build Button 
    if (linkToRecipePage) {
        const recipeButton: HTMLButtonElement = document.createElement("button");
        const recipeButtonForm: HTMLFormElement = document.createElement("form");
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

const onSelectClick: Function = (selectContainer: any): void => {
    closeAllSelect(selectContainer);
    changeDropdownShape(selectContainer);
    selectContainer.nextSibling.classList.toggle("select-hide");
    selectContainer.classList.toggle("select-arrow-active");
};

const optionOnClick: Function = (selectedOption: HTMLOptionElement): void => {
    const originalSelect: any = document.getElementsByTagName("select")[0];
    const displayDiv: any = document.getElementsByClassName("select-arrow-active")[0];

    for (let i: number = 0; i < originalSelect.options.length; i++) {
        if (selectedOption.innerHTML !== displayDiv.innerHTML) {
            displayDiv.innerHTML = selectedOption.innerHTML;

            setNutritionBlock(selectedOption.id);

            const y: HTMLCollection = document.getElementsByClassName("same-as-selected");
            for (let k: number = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
            }

            selectedOption.setAttribute("class", "same-as-selected");
            break;
        }
    }
    onSelectClick(displayDiv);
};

// On click change dropdown shape
const changeDropdownShape: Function = (dropDown: HTMLDivElement): void => {
    const openBorderRadius: string = "20px 20px 0px 0px";
    const closedBorderRadius: string = "20px";
    if (dropDown.style.borderRadius === openBorderRadius) {
        dropDown.setAttribute("style", "border-radius: " + closedBorderRadius);
    } else {
        dropDown.setAttribute("style", "border-radius: " + openBorderRadius);
    }
};

const closeAllSelect: Function = (elmnt: any): void => {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let x: HTMLCollection, y: HTMLCollection, arrNo: Array<any> = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (let i: number = 0; i < y.length; i++) {
        if (elmnt === y[i]) {
            arrNo.push(i);
        } else {
            y[i].setAttribute("style", "border-radius: 10px;");
            y[i].classList.remove("select-arrow-active");
        }
    }
};

const rightChangeMainContent: Function = (): void => {
    const lowerNavDiv: HTMLCollectionOf<Element> = document.getElementsByClassName("lowerNavDiv");
    for (let i: number = 0; i < lowerNavDiv.length; i += 1) {
        for (let j: number = 0; j < lowerNavDiv[i].children.length; j += 1) {
            if (lowerNavDiv[i].children[j].classList.contains("selected-tablink")) {
                if (lowerNavDiv[i].children[j + 1] !== null) {
                    const nextTab = lowerNavDiv[i].children[j + 1] as any;
                    nextTab ? nextTab.click() : lowerNavDiv[i].children[0].click();
                }
                return;
            }
        }
    }
};

const leftChangeMainContent: Function = (): void => {
    const lowerNavDiv: HTMLCollectionOf<Element> = document.getElementsByClassName("lowerNavDiv");
    for (let i: number = 0; i < lowerNavDiv.length; i += 1) {
        for (let j: number = 0; j < lowerNavDiv[i].children.length; j += 1) {
            if (lowerNavDiv[i].children[j].classList.contains("selected-tablink")) {
                if (lowerNavDiv[i].children[j - 1] !== null) {
                    const previousTab = lowerNavDiv[i].children[j - 1] as any;
                    previousTab.click();
                }
                return;
            }
        }
    }
};
