interface IDomObjDropDown {
    nutritionFacts: HTMLCollectionOf<HTMLElement>;
    dropDownDisplayName: HTMLCollectionOf<HTMLElement>;
    anchor: HTMLElement;
    dropDownDiv: HTMLElement;
};

const DOMOBJDROPDOWN: Function = (): IDomObjDropDown => {
    return {
        nutritionFacts: document.getElementsByClassName("sharednutritionblock") as HTMLCollectionOf<HTMLElement>,
        dropDownDisplayName: document.getElementsByClassName("dropdown-display-name") as HTMLCollectionOf<HTMLElement>,
        anchor: document.getElementById("dropdown-content"),
        dropDownDiv: document.getElementById("nutrition-dropdown")
    };
};

// Runs on page load
// If There are more than one nutrition panels, display dropdown
export const nutritionDropDownOnloadFunc: Function = (domObjDropDown: IDomObjDropDown = DOMOBJDROPDOWN()): IDomObjDropDown => {
    const { dropDownDisplayName, anchor, nutritionFacts, dropDownDiv } = domObjDropDown;

    if (dropDownDisplayName.length > 1) {
        for (let i: number = 0; i < dropDownDisplayName.length; i += 1) {
            const optionTag: HTMLOptionElement = document.createElement("option");
            optionTag.innerHTML = dropDownDisplayName[i].innerHTML;
            optionTag.value = dropDownDisplayName[i].innerHTML;
            anchor.appendChild(optionTag);

            i <= 0 ? nutritionFacts[i].style.display = "block" : nutritionFacts[i].style.display = "none";
            dropDownDiv.style.display = "unset";
        };
    } else {
        nutritionFacts[0].style.display = "unset";
        dropDownDiv.style.display = "none";
    };
    return domObjDropDown;
};

//This function is fired on Carousel OnChange
export const nutritionDropDownFunc: Function = (node: String, domObj: IDomObjDropDown = DOMOBJDROPDOWN()): IDomObjDropDown => {
    const { dropDownDisplayName, nutritionFacts } = domObj

    for (let i: number = 0; i < dropDownDisplayName.length; i += 1) {
        dropDownDisplayName[i].innerHTML === node ? nutritionFacts[i].style.display = "block" : nutritionFacts[i].style.display = "none";
    };

    return domObj;
};

if (typeof process === "undefined") nutritionDropDownOnloadFunc();

