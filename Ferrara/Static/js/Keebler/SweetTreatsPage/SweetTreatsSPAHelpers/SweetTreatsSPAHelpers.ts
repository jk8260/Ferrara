const openTab: Function = (selectedButton: any): void => {
    const tabLinks: HTMLCollection = document.getElementsByClassName("tablink");
    const container: HTMLCollection = document.getElementsByClassName("scroll-container");
    const thumb: HTMLElement = document.getElementById("scroll-thumb");

    for (let i: number = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" selected-tablink", "");
    }
    if (selectedButton != null && container != null) {
        selectedButton.className += " selected-tablink";
        for (let i = 0; i < selectedButton.parentElement.children.length; i++) {
            if (selectedButton.parentElement.children[i] == selectedButton) {
                const coordinate: number = i * selectedButton.scrollWidth;
                thumb.style.left = coordinate + "px";
                customScrollTo(container[0], coordinate);
            };
        };
    };
};

// Toggle color of Mid Nav Buttons on click
const toggleMiddleNavButtons: Function = (buttonLabel: any): void => {
    const allButtons = document.getElementsByClassName("midnav-button");

    for (let i = 0; i < allButtons.length; i++) {
        //console.log(allButtons[i]);
        if (allButtons[i].classList.contains(buttonLabel)) {
            allButtons[i].classList.add("active-oval-filled-brown");
            allButtons[i].classList.remove("active-oval-outlined-brown");
        } else {
            allButtons[i].classList.remove("active-oval-filled-brown");
            allButtons[i].classList.add("active-oval-outlined-brown");
        };
    };
};

//  Function to hide HTML Elements from the top nav section down.
const topNavHideFunc: Function = (elPram): void => {
    const root: HTMLElement = document.getElementById("root");
    const rootObj: HTMLCollection = root.children[1].children[0].children[0].children;
    const classArr: Array<any> = [];

    //Build className array
    for (let i: number = 0; i < rootObj.length; i += 1) {
        classArr.push(document.getElementsByClassName(rootObj[i].className)); 
    };


    for (let i: number = 0; i < classArr[0].length; i += 1) {
        //checks to see it elParam (top tier class name is in the class list) 
        //and hides/shows this element 
        console.log(classArr[0][i]);
        if (classArr[0][i].children[0].classList.contains("Featured") && classArr[0][i].children.length === 1) {
            classArr[0][i].style.display = "none";
        }
        else if (classArr[0][i].children[0].classList.contains(elPram)) {
            classArr[0][i].style.display = "block";
        }
        else {
            classArr[0][i].style.display = "none";
        };
    };
};

//  Function to hide HTML Elements in Lower Nav on change of Middle Nav selection
const middleNavHideFunc: Function = (pathClass: string, middleNavId: string): void => {
    const lowerNavDiv: HTMLCollectionOf<Element> = document.getElementsByClassName("lowerNavDiv");
    const lowerNavDivArr: any[] = Object.keys(lowerNavDiv).map(function (key) {
        return lowerNavDiv[key];
    });
    toggleMiddleNavButtons(middleNavId);

    //  Display children that have the same class name. If it's a different class name, hide that element.
    const lowerNavItemsShowing: any[] = [];

    lowerNavDivArr.forEach((el: any) => {
        const lowerNavItems: any[] = Array.prototype.slice.call(el.childNodes);

        for (const item of lowerNavItems) {
            if (item.classList.contains(pathClass) && item.classList.contains(middleNavId)) {
                item.style.display = "block";
                lowerNavItemsShowing.push(item);
            } else {
                item.style.display = "none";
            }
            if (lowerNavItems.length == 1)
            {
                item.style.display = "none";
            }
        }
        const scrollBar: HTMLElement = document.getElementById("scroll-track");
        const newWidth: number = 200 * lowerNavItemsShowing.length;
        scrollBar.setAttribute("style", "width: " + newWidth.toString() + "px;");


        for (let i = 0; i < lowerNavDiv.length; i++) {
            
            if (lowerNavDiv[i].children.length <= 2) {
                lowerNavDiv[i].classList.add("centered");
                scrollBar.classList.add("centered");
            };
        };
        openTab(lowerNavItemsShowing[0]);
    });
};

const buildScrollTrack: Function = (): HTMLDivElement => {
    // Build Scrollbar
    const scrollTrack: HTMLDivElement = document.createElement("div");
    scrollTrack.id = "scroll-track";

    const scrollThumb: HTMLDivElement = document.createElement("div");
    scrollThumb.id = "scroll-thumb";
    scrollTrack.appendChild(scrollThumb);

    return scrollTrack;
}

const navArrows: Function = async (): Promise<any> => {
    const rightArrow: HTMLCollection = document.getElementsByClassName("carousel-control-next-icon");
    const leftArrow: HTMLCollection = document.getElementsByClassName("carousel-control-prev-icon");
    const midNavButtons: HTMLCollection = document.getElementsByClassName("midnav-button");
    const topNavClick: HTMLCollection = document.getElementsByClassName("topNavClick");

    const reloadProduct: Function = async (): Promise<any> => {
        return new Promise((): any => {
            setTimeout((): void => {
                const id: any = document.getElementsByClassName("selected-tablink")[0].classList[3];
                removeProduct();
                nutritionFetch(id);
            }, 1);
        });
    };

    for (let key in topNavClick) {
        if (typeof topNavClick[key] === "object") topNavClick[key].addEventListener("click", reloadProduct as any);
    };

    for (let key in midNavButtons) {
        if (typeof midNavButtons[key] === "object") midNavButtons[key].addEventListener("click", reloadProduct as any);
    };

    for (let key in rightArrow) {
        if (typeof rightArrow[key] === "object") rightArrow[key].addEventListener("click", reloadProduct as any);
    };

    for (let key in leftArrow) {
        if (typeof leftArrow[key] === "object") leftArrow[key].addEventListener("click", reloadProduct as any);
    };
};

// Work around for .scrollTo not being compatible on multiple browsers
const customScrollTo: Function = (scrollContainer: any, scrollLeft: number): void => {
    scrollContainer.scrollLeft = scrollLeft;
}

const changeImageFromTabNameClick: Function = (tabName: string): void => {
    const tabNameRegex: string = tabName.replace(/[^a-z0-9+]/gi, '').toLowerCase();
    const nutritionImages = document.getElementsByClassName("sweet-treats-nutrition-images") as HTMLCollectionOf<Element>;

    Object.keys(nutritionImages).forEach((image: string): void => {
        nutritionImages[image].classList.contains(tabNameRegex) ? nutritionImages[image].parentNode.classList.add("active") : nutritionImages[image].parentNode.classList.remove("active");
    });
}