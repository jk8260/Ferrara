import { promises } from "fs";

let RECIPEFILTEROBJ: Object = {};

const triggerNav: Function = (prevAnchor: any): void => {
    prevAnchor.click();
}

// Function to add categories into tab navigation
const recipeListFunc: Function = (json: string): void => {
    //console.log("BINGO");
    //console.log(json);
    const jsonArr: Array<any> = JSON.parse(json);
    const topNav: HTMLCollection = document.getElementsByClassName("top-nav-recipe");
    const navTabs: HTMLCollection = document.getElementsByClassName("tab-pane");
    const recipeContainer: HTMLCollection = document.getElementsByClassName("recipe-block-container");

    //console.log("jsonArr");
    //console.log(jsonArr);

    jsonArr.forEach((el: any, i: number) => {
        RECIPEFILTEROBJ[el.CategoryTitle] = {};

        i === 0 ? RECIPEFILTEROBJ[el.CategoryTitle].ariaSelected = true : RECIPEFILTEROBJ[el.CategoryTitle].ariaSelected = false;

        //console.log("Working on this category - " + el.CategoryTitle);

        topNav[i].innerHTML = el.CategoryTitle;
        const href: string = "#" + el.CategoryTitle.replace(/\s/g, '');
        topNav[i].setAttribute("href", href);
        topNav[i].setAttribute("aria-controls", el.CategoryTitle.replace(/\s/g, ''));
        topNav[i].id = el.CategoryTitle.replace(/\s/g, '') + "ID";
        const categoryImg: HTMLImageElement = document.createElement("img");
        categoryImg.src = el.CategoryImage.OriginalString;
        topNav[i].parentElement.appendChild(categoryImg);;
        let prevATag: any = categoryImg.previousElementSibling.id;
        topNav[i].parentElement.setAttribute("onclick", "triggerNav(" + prevATag + ")");

        topNav[i].addEventListener("click", () => {
            Object.keys(RECIPEFILTEROBJ).forEach((key) => {
                el.CategoryTitle === key ? RECIPEFILTEROBJ[key].ariaSelected = true : RECIPEFILTEROBJ[key].ariaSelected = false;
            });
        });

        navTabs[i].setAttribute("id", el.CategoryTitle.replace(/\s/g, ''));

        for (let cardIndex: number = 0; cardIndex < el.RecipesCard.length; cardIndex += 1) {

            RECIPEFILTEROBJ[el.CategoryTitle][el.RecipesCard[cardIndex].RecipeCardTitle] = el.RecipesCard[cardIndex]
            //console.log("Working on card - " + el.RecipesCard[cardIndex].RecipeCardTitle);

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
            recipeCardTitle.innerHTML = el.RecipesCard[cardIndex].RecipeCardTitle;
            cardTitleCol.appendChild(recipeCardTitle);

            // image
            const cardImgCol: HTMLDivElement = document.createElement("div");
            cardImgCol.classList.add("col-4");
            const cardRecipeImg: HTMLImageElement = document.createElement("img");
            cardRecipeImg.src = el.RecipesCard[cardIndex].RecipeCardImage.OriginalString;
            cardImgCol.appendChild(cardRecipeImg);

            // description
            const cardTextCol: HTMLDivElement = document.createElement("div");
            cardTextCol.classList.add("col-8");
            const recipeCardText: HTMLDivElement = document.createElement("div");
            recipeCardText.classList.add("card-text");
            const recipeCardDescription: HTMLElement = document.createElement("p");
            recipeCardDescription.classList.add("card-description");
            recipeCardDescription.innerHTML = el.RecipesCard[cardIndex].RecipeCardDescription;

            const recipeCardInfo: HTMLDivElement = document.createElement("div");
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

            const cardAnchorTag: HTMLElement = document.createElement("a");
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

const scrollTabNav: Function = (e: any): void => {
    const tabNav: HTMLElement = document.getElementById("recipe-list");
    const tabAnchorList: HTMLCollection = document.getElementsByClassName("top-nav-recipe");
    let selectedTab: any = e.currentTarget;

    let coordinate: number = 0;

    for (let index: number = 0; index < tabAnchorList.length; index++) {
        if (tabAnchorList[index] === selectedTab) {
            if (index === 0) {
                coordinate = 0;
            } else {
                coordinate = index * selectedTab.scrollWidth;
            }

            tabNav.scrollTo({
                left: coordinate,
                behavior: 'smooth'
            });

        }
    }
}

const filterAsync: Function = (): void => {
    setTimeout(() => {
        filterCardsFunc();
    }, 0);
};

const filterBoolToggleFunc: Function = (obj: any): void => { 
    if (obj.value === "not-selected") {
        obj.value = "selected"
        obj.classList.remove("reversed-oval-outlined");
        obj.classList.add("active-oval-filled-red");
        showClearFiltersButton();
    } else {
        obj.value = "not-selected";
        obj.classList.remove("active-oval-filled-red");
        obj.classList.add("reversed-oval-outlined");
    };
    filterCardsFunc();
};

const showClearFiltersButton: Function = (): void => {
    const clearFiltersButton = document.getElementById("clear-filters-button");
    clearFiltersButton.setAttribute("style", "display: inline");
}

const hideClearFiltersButton: Function = (): void => {
    const clearFiltersButton = document.getElementById("clear-filters-button");
    clearFiltersButton.setAttribute("style", "display: none");
    filterCardsFunc();
}

const clearAllFilters: Function = (): void => {
    const filterButtons = document.getElementsByClassName("recipe-filter-button");

    for (let i: number = 0; i < filterButtons.length; i++) {
        if (filterButtons[i].value === "selected") {
            filterButtons[i].value = "not-selected";
            filterButtons[i].classList.remove("active-oval-filled-red");
            filterButtons[i].classList.add("reversed-oval-outlined");
        };
    }
    hideClearFiltersButton();
}

const showCustomButtons: Function = (): void => {
    const customButtonsObject: HTMLCollectionOf<Element> = document.getElementsByClassName("custom-filter-button");

    Object.keys(customButtonsObject).forEach((key: string): void => {
        if (customButtonsObject[key].innerHTML === "") {
            customButtonsObject[key].setAttribute("style", "display: none");
        } else {
            customButtonsObject[key].setAttribute("style", "display: inline");
        }
    });
};

const filterCardsFunc: Function = (): void => {
    const buttonsObject: HTMLCollectionOf<Element> = document.getElementsByClassName("recipe-filter-button");
    const buttonsObjectKeys: Array<string> = Object.keys(buttonsObject);
    const beenHiddenObject: Object = {};

    const selectedFiltersObject: Object = {};

    buttonsObjectKeys.forEach((el: string): void => {
        selectedFiltersObject[buttonsObject[el].name] = buttonsObject[el].value;
    });

    const selectedFiltersObjectKeys: Array<string> = Object.keys(selectedFiltersObject);

    Object.keys(RECIPEFILTEROBJ).forEach((key: string): void => {
        if (RECIPEFILTEROBJ[key].ariaSelected) {

            let filterSelected: boolean = false;

            selectedFiltersObjectKeys.forEach((filterKey: string): void => {
                if (selectedFiltersObject[filterKey] === "selected") { filterSelected = true; };
            });


            if (filterSelected) {
                selectedFiltersObjectKeys.forEach((nestedKey: string): void => {
                    if (selectedFiltersObject[nestedKey] === "selected") {
                        const RECIPEFILTEROBJKeyArray = Object.keys(RECIPEFILTEROBJ[key])
                        for (let i: number = 0; i < RECIPEFILTEROBJKeyArray.length; i += 1) {
                            // First Parameter of the if statement checks if the card matches the selected filter and the 
                            // second parameter check is the card hs already been hidden
                            if (RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] && beenHiddenObject[RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle] === undefined) {
                                const elToDisplay: HTMLElement = document.getElementById(RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle);
                                elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                                noCardsDisplaying = false;
                            } else if (RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] === false && RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]][nestedKey] != undefined) {
                                const elToHide: HTMLElement = document.getElementById(RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle);
                                elToHide.setAttribute("style", "text-decoration: none; display: none");
                                beenHiddenObject[RECIPEFILTEROBJ[key][RECIPEFILTEROBJKeyArray[i]].RecipeCardTitle] = true;
                            };
                        }
                    };
                });
            } else {
                selectedFiltersObjectKeys.forEach((nestedKey: string) => {
                    Object.keys(RECIPEFILTEROBJ[key]).forEach((deepNestedKey: string) => {
                        if (RECIPEFILTEROBJ[key][deepNestedKey][nestedKey] != undefined) {
                            const elToDisplay: HTMLElement = document.getElementById(RECIPEFILTEROBJ[key][deepNestedKey].RecipeCardTitle);
                            elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                        };
                    });
                });
            };
        };
    });

    const tabPanes: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-pane");
    let noCardsDisplaying: Boolean = true;

    Object.keys(tabPanes).forEach((key: string): void => {
        if (tabPanes[key].classList.contains("active")) {
            // The three variable declarations below are traversing through the ".tab-pane" children to get 
            // to the root card witch allows the logic to check the cards visibility
            const topNodes: HTMLCollectionOf<Element> = tabPanes[key].children;
            const middleNodes: HTMLCollectionOf<Element> = topNodes[0].children;
            const nodes: HTMLCollectionOf<Element> = middleNodes[0].children;

            Object.keys(nodes).forEach((nodeKey: string): void => {
                if (nodes[nodeKey].style.display === "block") { noCardsDisplaying = false; };
            });
        };
    });

    const text: HTMLCollectionOf<Element> = document.getElementsByClassName("no-cards-displaying-text");
    noCardsDisplaying ? text[0].style.display = "block" : text[0].style.display = "none";
};