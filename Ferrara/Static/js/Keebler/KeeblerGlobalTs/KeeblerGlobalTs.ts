//  File for all Global Ts Code!
interface EventTarget {
    [x: string]: any;
}

const SWEETTREATSPAGES: Object = {};
const AUTOCOMPLETEARRAY: Array<Array<string>> = [];
const AUTOCOMPLETEURLOBJECT: Object = {};

//  Hide Nav Slider
const navSliderHide: Function = (): void => {
    const nav: HTMLElement = document.getElementById("scroll-track");
    nav.style.display = "none";
};

const buildAutocompleteObject: Function = async (sweetTreatsPageNumber: number, recipesPageNumber: number) => {
    const productResponse: any = await fetch(`/CategoriesListingPage/${sweetTreatsPageNumber}`);
    const productData: string = await productResponse.json();
    console.log("in buildAutocompleteObject");
    if (sweetTreatsPageNumber) {
        console.log(sweetTreatsPageNumber);
    } else {
        console.log("sweetTreatsPageNumber Is Empty");
    }
    if (recipesPageNumber) {
        console.log(recipesPageNumber);
    } else {
        console.log("recipesPageNumber Is Empty");
    }
    

    //  Checking in productData is NOT JSON, null, or undefined. If function return here the user more than likely did not add the AutoComplete page Numbers in the CMS
    if (productData === undefined || productData === null || productData[0] != "[") { return };

    const productJson: JSON = await JSON.parse(productData);

    const recipeResponse: any = await fetch(`/KeeblerRecipesCategoriesListingPage/${recipesPageNumber}`);
    const recipeData: string = await recipeResponse.json();
    const recipesJson: JSON = await JSON.parse(recipeData);
     
    const productsJsonArray: Array<string> = [];
    const recipesJsonArray: Array<string> = [];

    // just builds a list of product names
    Object.keys(productJson).forEach((key1: string): void => {
        Object.keys(productJson[key1].CategoryTabBlock).forEach((key2: string): void => {
            Object.keys(productJson[key1].CategoryTabBlock[key2].ProductsIcons).forEach((key3: string): void => {
                productsJsonArray.push(
                    productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3].ProductName,
                );
                //console.log("Nice...");
                const pathKey = productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3] as any;
                const productName: string = productJson[key1].CategoryTabBlock[key2].ProductsIcons[key3].ProductName.replace(/[^a-z0-9+]/gi, '').toUpperCase();
                //console.log(pathKey);
                //console.log(productName);
                pathKey.UrlPath != null ?
                    AUTOCOMPLETEURLOBJECT[productName] = "/en/sweet-treats/?" + pathKey.UrlPath.replace(/[^a-z0-9+]/gi, ' ').toLowerCase() :
                    AUTOCOMPLETEURLOBJECT[productName] = "/en/sweet-treats/?" + pathKey.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
                // could we just set the paths here ?
                //pathKey.UrlPath = "/en/sweet-treats/" + pathKey.ProductName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
            });
        });
    });

    // just builds a list of recipe names
    Object.keys(recipesJson).forEach((key1: string): void => {
        Object.keys(recipesJson[key1].RecipesCard).forEach((key2: string): void => {
            recipesJsonArray.push(
                recipesJson[key1].RecipesCard[key2].RecipeCardTitle,
            );
            AUTOCOMPLETEURLOBJECT[recipesJson[key1].RecipesCard[key2].RecipeCardTitle.replace(/[^a-z0-9+]/gi, '').toUpperCase()] = recipesJson[key1].RecipesCard[key2].RecipePage;
        });
    });

    AUTOCOMPLETEARRAY.push(productsJsonArray);
    AUTOCOMPLETEARRAY.push(recipesJsonArray);

    //console.log("AUTOCOMPLETEARRAY");
    //console.log(AUTOCOMPLETEARRAY);

    buildFilterDropdownFunction();
};

const buildFilterDropdownFunction: Function = (): void => {
    const dropDownDiv: HTMLElement = document.getElementById("myDropdown");

    AUTOCOMPLETEARRAY.forEach((innerArray: Array<string>, index: number): void => {
        if (index === 0) {
            const divTag: HTMLDivElement = document.createElement("div");
            const pTag: HTMLParagraphElement = document.createElement("h5");

            pTag.innerHTML = "Products";
            divTag.style.display = "";
            divTag.setAttribute("class", "Results-Dropdown-Section-Div");
            divTag.appendChild(pTag);
            dropDownDiv.appendChild(divTag);
        } else if (index === 1) {
            const divTag: HTMLDivElement = document.createElement("div");
            const pTag: HTMLParagraphElement = document.createElement("h5");

            pTag.innerHTML = "Recipes";
            divTag.style.display = "";
            divTag.setAttribute("class", "Results-Dropdown-Section-Div");
            divTag.appendChild(pTag);
            dropDownDiv.appendChild(divTag);
        }

        innerArray.forEach((name: string): void => {
            const aTag: any = document.createElement("a");
            aTag.innerHTML = name;
            aTag.href = AUTOCOMPLETEURLOBJECT[name.replace(/[^a-z0-9+]/gi, '').toUpperCase()];
            dropDownDiv.appendChild(aTag);
        });
    });

    const outerDivTag: HTMLDivElement = document.createElement("div");
    const outerPTag: HTMLParagraphElement = document.createElement("h5");
    outerPTag.innerHTML = "No Results";
    outerDivTag.style.display = "none";
    outerDivTag.setAttribute("id", "No-Results-Dropdown-Div");
    outerDivTag.appendChild(outerPTag);
    dropDownDiv.appendChild(outerDivTag);

    document.addEventListener("click", (event: any): void => {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".dropdown")) return;

        // If user clicks outside the element, hide it!
        const searchIconEl: HTMLElement = document.getElementById("fa-custom-search");

        // The If condition is checking the Icon src, I'm using .slice() because I only want the end of the .src URL
        if (searchIconEl.src.slice(searchIconEl.src.length - 15, searchIconEl.src.length) === "times-solid.svg") {
            document.getElementById("myInput").value = "";
            changeSearchDropdownShape(true);
            document.querySelector("#myDropdown").classList.remove("show");
            searchIconEl.src = `/Static/gfx/SeachIcons/SearchIcon_Dark.svg`;
            xToggleIcon = false;
        };
    });
};

const dropdownFilterFunction: Function = (): void => {
    const input = document.getElementById("myInput") as any;
    const filter = input.value.toUpperCase();
    const myDropdownDiv = document.getElementById("myDropdown");
    const aTags = myDropdownDiv.getElementsByTagName("a");
    const icon: any = document.getElementById("fa-custom-search");
    let noMatches = true;

    Object.keys(aTags).forEach((key: string): void => {
        const txtValue = aTags[key].textContent || aTags[key].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            aTags[key].style.display = "";
            noMatches = false;
        } else {
            aTags[key].style.display = "none";
        }
    });

    if (noMatches) {
        document.getElementById("No-Results-Dropdown-Div").style.display = "";
        const domObject: Object = document.getElementsByClassName("Results-Dropdown-Section-Div");

        Object.keys(domObject).forEach((key: string): void => {
            domObject[key].style.display = "none";
        });
    } else {
        document.getElementById("No-Results-Dropdown-Div").style.display = "none";
        const domObject: Object = document.getElementsByClassName("Results-Dropdown-Section-Div");

        Object.keys(domObject).forEach((key: string): void => {
            domObject[key].style.display = "";
        });
    }

    if (filter.length > 0 && document.getElementById("myDropdown").classList[1] === undefined) {
        icon.src = `/Static/gfx/SeachIcons/times-solid.svg`;
        xToggleIcon = true;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(false);
    } else if (filter === "" && document.getElementById("myDropdown").classList[1]) {
        icon.src = `/Static/gfx/SeachIcons/SearchIcon_Dark.svg`;
        xToggleIcon = false;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(true);
    }
};

let whiteToggleIcon: Boolean = true;
let xToggleIcon: Boolean = false;
const showOrHideSearchBar: Function = (): void => {
    const icon: any = document.getElementById("fa-custom-search");
    const searchBar: any = document.getElementById("myInput");
    const keeblerIcon: any = document.getElementsByClassName("sharedimageblock")[0];
    
    if (whiteToggleIcon) {
        if (window.screen.width < 767 && keeblerIcon) { document.getElementsByClassName("sharedimageblock")[0].style.display = "none"; };
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
        icon.src = `/Static/gfx/SeachIcons/SearchIcon_Dark.svg`;
        whiteToggleIcon = false;
    } else if (!xToggleIcon) {
        if (window.screen.width < 767 && keeblerIcon) { document.getElementsByClassName("sharedimageblock")[0].style.display = ""; };
        searchBar.style.visibility = "hidden";
        searchBar.style.opacity = "0";
        icon.src = `/Static/gfx/SeachIcons/SeachIcon_White.svg`;
        document.getElementById("myInput").value = "";
        changeSearchDropdownShape(true);
        whiteToggleIcon = true;
    }

    if (xToggleIcon) {
        icon.src = `/Static/gfx/SeachIcons/SearchIcon_Dark.svg`;
        document.getElementById("myInput").value = "";
        xToggleIcon = false;
        document.getElementById("myDropdown").classList.toggle("show");
        changeSearchDropdownShape(true);
    };
    
};

// On click change dropdown shape
const changeSearchDropdownShape: Function = (toggle: Boolean): void => {
    const dropDownEl: HTMLElement = document.getElementById("myInput");
    const openBorderRadius: string = "20px 20px 0 0";
    const closedBorderRadius: string = "20px";

    dropDownEl.style.borderRadius = toggle ? closedBorderRadius : openBorderRadius;
};

const loadingSpinnerFunction: Function = (animationURL: string, pxSize: number): void => {
    const page: HTMLElement = document.getElementsByTagName("html")[0];
    const animationLoadingSpinnerContainer: HTMLElement = document.getElementById("animation-loading-spinner-container");
    page.style.overflow = "hidden";

    animationLoadingSpinnerContainer.style.maxWidth = ("" + pxSize + "px");

    const animationLoadingSpinnerAnim: any = bodymovin.loadAnimation({
        container: animationLoadingSpinnerContainer,
        renderer: "svg",
        autoplay: true,
        loop: true,
        path: animationURL,
    });
};

const removeSpinnerFunction: Function = (timeoutMs: number): void => {
    const page: HTMLElement = document.getElementsByTagName("html")[0];
    const animationloadingSpinnerDiv: HTMLElement = document.getElementById("animation-loading-spinner-div");

    setTimeout((): void => {
        if (page.style.overflow === "hidden" && window.location.pathname !== '/') {
            page.style.overflow = "";
        }
        animationloadingSpinnerDiv.remove();
    }, timeoutMs);
};

const alertOnIE: Function = (): void => {
    const sAgent = window.navigator.userAgent;
    const Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        alert("This site is not fully supported by Internet Explorer. It is best viewed in an updated browser like: Google Chrome, Opera, Mozilla Firefox or Microsoft Edge.");
    }
};

// TEMPORARY -- CURRENTLY MAILCHIMP IS HANDLING THE EMAIL PORTION AND THIS IS ALWAYS A SUCCESS 
// USE THIS FUNCTION WHEN WE HIT API FROM JS

//const subscribeToEmailList: Function = (event: any): void => {
//    event.preventDefault();
//    // const form = document.getElementById("emailForm");
//    const existingFailureMessage = document.getElementById("email-failure");
//    // let response;

//    if (existingFailureMessage != null) {
//        existingFailureMessage.remove();
//    } else {
//    }
//    displayResponse("success"); 
//    // displayResponse(response);
//}

const displayResponse: Function = (responseCode: string): void => {
    const emailInputContainer = document.getElementById("emailInputContainer");
    const submitArrow = document.getElementById("submit-arrow");

    if (responseCode == "success") {
        submitArrow.style.display = "none";
        // Build Success Alert
        const successAlert: HTMLDivElement = document.createElement("div");
        successAlert.innerHTML = "Thanks, the elves have accepted your email!";
        successAlert.classList.add("email-success");

        // Build Success Check Mark
        const successCheckMark: HTMLImageElement = document.createElement("img");
        successCheckMark.src = "/Static/gfx/Icons/ComfirmedIcon.svg";
        successCheckMark.classList.add("success-checkmark");

        emailInputContainer.appendChild(successAlert);
        emailInputContainer.appendChild(successCheckMark);

    } else {
        // Re-display Arrow Button
        submitArrow.style.display = "";

        // Build Failure Alert 
        const failureAlert: HTMLDivElement = document.createElement("div");
        failureAlert.innerHTML = "Something went wrong - please try again.";
        failureAlert.id = "email-failure";

        emailInputContainer.appendChild(failureAlert);
    }
}
