import { promises } from "fs";

let SweetTreatFILTEROBJ: Object = {};

const triggerNav: Function = (prevAnchor: any): void => {
    prevAnchor.click();
}

// Function to add categories into tab navigation
const sweettreatsListFunc: Function = (json: string): void => {
    console.log("SWEET BINGO");
    console.log(json);
    const jsonArr: Array<any> = JSON.parse(json);
    const topNav: HTMLCollection = document.getElementsByClassName("top-nav-SweetTreat");
    const navTabs: HTMLCollection = document.getElementsByClassName("tab-pane");
    const SweetTreatContainer: HTMLCollection = document.getElementsByClassName("SweetTreat-block-container");

    jsonArr.forEach((el: any, i: number) => {
        SweetTreatFILTEROBJ[el.CategoryTitle] = {};

        i === 0 ? SweetTreatFILTEROBJ[el.CategoryTitle].ariaSelected = true : SweetTreatFILTEROBJ[el.CategoryTitle].ariaSelected = false;

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
            Object.keys(SweetTreatFILTEROBJ).forEach((key) => {
                el.CategoryTitle === key ? SweetTreatFILTEROBJ[key].ariaSelected = true : SweetTreatFILTEROBJ[key].ariaSelected = false;
            });
        });

        navTabs[i].setAttribute("id", el.CategoryTitle.replace(/\s/g, ''));

        for (let cardIndex: number = 0; cardIndex < el.SweetTreatsCard.length; cardIndex += 1) {

            SweetTreatFILTEROBJ[el.CategoryTitle][el.SweetTreatsCard[cardIndex].SweetTreatCardTitle] = el.SweetTreatsCard[cardIndex]

            const SweetTreatCard: HTMLDivElement = document.createElement("div");
            SweetTreatCard.classList.add("card");
            SweetTreatCard.classList.add("keebler-card");
            const SweetTreatCardBody: HTMLDivElement = document.createElement("div");
            SweetTreatCardBody.classList.add("card-body");

            const cardRow: HTMLDivElement = document.createElement("div");
            cardRow.classList.add("row");

            const cardTitleCol: HTMLDivElement = document.createElement("div");
            cardTitleCol.classList.add("col-12");

            const SweetTreatCardTitle: HTMLElement = document.createElement("h5");
            SweetTreatCardTitle.classList.add("card-title");
            SweetTreatCardTitle.innerHTML = el.SweetTreatsCard[cardIndex].SweetTreatCardTitle;

            cardTitleCol.appendChild(SweetTreatCardTitle);

            const cardImgCol: HTMLDivElement = document.createElement("div");
            cardImgCol.classList.add("col-4");

            const cardSweetTreatImg: HTMLImageElement = document.createElement("img");
            cardSweetTreatImg.src = el.SweetTreatsCard[cardIndex].SweetTreatCardImage.OriginalString;

            cardImgCol.appendChild(cardSweetTreatImg);

            const cardTextCol: HTMLDivElement = document.createElement("div");
            cardTextCol.classList.add("col-8");

            const SweetTreatCardText: HTMLDivElement = document.createElement("div");
            SweetTreatCardText.classList.add("card-text");

            const SweetTreatCardDescription: HTMLElement = document.createElement("p");
            SweetTreatCardDescription.classList.add("card-description");
            SweetTreatCardDescription.innerHTML = el.SweetTreatsCard[cardIndex].SweetTreatCardDescription;

            const SweetTreatCardInfo: HTMLDivElement = document.createElement("div");
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

            const cardAnchorTag: HTMLElement = document.createElement("a");
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

const scrollTabNav: Function = (e: any): void => {
    const tabNav: HTMLElement = document.getElementById("SweetTreat-list");
    const tabAnchorList: HTMLCollection = document.getElementsByClassName("top-nav-SweetTreat");
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
    const filterButtons = document.getElementsByClassName("SweetTreat-filter-button");

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
    const buttonsObject: HTMLCollectionOf<Element> = document.getElementsByClassName("SweetTreat-filter-button");
    const buttonsObjectKeys: Array<string> = Object.keys(buttonsObject);
    const beenHiddenObject: Object = {};

    const selectedFiltersObject: Object = {};

    buttonsObjectKeys.forEach((el: string): void => {
        selectedFiltersObject[buttonsObject[el].name] = buttonsObject[el].value;
    });

    const selectedFiltersObjectKeys: Array<string> = Object.keys(selectedFiltersObject);

    Object.keys(SweetTreatFILTEROBJ).forEach((key: string): void => {
        if (SweetTreatFILTEROBJ[key].ariaSelected) {

            let filterSelected: boolean = false;

            selectedFiltersObjectKeys.forEach((filterKey: string): void => {
                if (selectedFiltersObject[filterKey] === "selected") { filterSelected = true; };
            });


            if (filterSelected) {
                selectedFiltersObjectKeys.forEach((nestedKey: string): void => {
                    if (selectedFiltersObject[nestedKey] === "selected") {
                        const SweetTreatFILTEROBJKeyArray = Object.keys(SweetTreatFILTEROBJ[key])
                        for (let i: number = 0; i < SweetTreatFILTEROBJKeyArray.length; i += 1) {
                            // First Parameter of the if statement checks if the card matches the selected filter and the 
                            // second parameter check is the card hs already been hidden
                            if (SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] && beenHiddenObject[SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle] === undefined) {
                                const elToDisplay: HTMLElement = document.getElementById(SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle);
                                elToDisplay.setAttribute("style", "text-decoration: none; display: block");
                                noCardsDisplaying = false;
                            } else if (SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] === false && SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]][nestedKey] != undefined) {
                                const elToHide: HTMLElement = document.getElementById(SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle);
                                elToHide.setAttribute("style", "text-decoration: none; display: none");
                                beenHiddenObject[SweetTreatFILTEROBJ[key][SweetTreatFILTEROBJKeyArray[i]].SweetTreatCardTitle] = true;
                            };
                        }
                    };
                });
            } else {
                selectedFiltersObjectKeys.forEach((nestedKey: string) => {
                    Object.keys(SweetTreatFILTEROBJ[key]).forEach((deepNestedKey: string) => {
                        if (SweetTreatFILTEROBJ[key][deepNestedKey][nestedKey] != undefined) {
                            const elToDisplay: HTMLElement = document.getElementById(SweetTreatFILTEROBJ[key][deepNestedKey].SweetTreatCardTitle);
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