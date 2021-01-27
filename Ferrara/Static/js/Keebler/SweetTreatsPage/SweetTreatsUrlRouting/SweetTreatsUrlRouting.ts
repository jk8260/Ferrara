interface IQueryObj {
    pathClass: string;
    tabName: string;
    id: number;
};

const buildNavFromQueryString: Function = (queryObj: IQueryObj): void => {
    const navTop = document.getElementsByClassName("nav-link") as any;
    const middleNav: HTMLCollectionOf<Element> = document.getElementsByClassName("middleNavDiv");
    const lowerNav: HTMLCollectionOf<Element> = document.getElementsByClassName("lowerNavDiv");
    console.log("we are in the STUR");
    for (let i: any = 0; i < navTop.length; i += 1) {
        if (navTop[i].children.length > 1) {
            if (navTop[i].children[0].classList[0] === queryObj.pathClass) {
                navTop[i].setAttribute("aria-selected", "true");
                navTop[i].setAttribute("class", "nav-link active");
                navTop[i].style = "opacity: 1.0;";

                const arrowNum: string = navTop[i].id.slice(0, navTop[i].id.length - 4);

                const leftArrows: HTMLCollectionOf<Element> = document.getElementsByClassName("left-arrow");
                for (let j: number = 0; j < leftArrows.length; j += 1) {
                    leftArrows[j].id.includes(arrowNum) ? leftArrows[j].removeAttribute("style") : leftArrows[j].setAttribute("style", "display:none");
                };

                const rightArrows: HTMLCollectionOf<Element> = document.getElementsByClassName("right-arrow");
                for (let j: number = 0; j < rightArrows.length; j += 1) {
                    rightArrows[j].id.includes(arrowNum) ? rightArrows[j].removeAttribute("style") : rightArrows[j].setAttribute("style", "display:none");
                };
            } else {
                navTop[i].setAttribute("aria-selected", "false");
                navTop[i].setAttribute("class", "nav-link");
                navTop[i].style = "opacity: 0.5;";
            };
        };
    };

    for (let i: any = 0; i < middleNav.length; i += 1) {
        const str: string = middleNav[i].children[0].getAttribute("class"); 
        const strArr: Array<string> = str.split(' ');
        if (strArr[0] === queryObj.pathClass) {
            middleNav[i].setAttribute("style", "display: block");
            for (let j: number = 0; j < middleNav[i].children.length; j += 1) {
                middleNav[i].children[j].classList[1].replace(/[^a-z0-9+]/gi, '').toLowerCase() === queryObj.tabName ? middleNav[i].children[j].classList.replace("active-oval-outlined-brown", "active-oval-filled-brown") : middleNav[i].children[j].classList.replace("active-oval-filled-brown", "active-oval-outlined-brown");
            };
        } else {
            middleNav[i].setAttribute("style", "display: none");
        };
    };

    for (let i: number = 0; i < lowerNav.length; i += 1) {
        const nestLowerNav: HTMLCollectionOf<Element> = lowerNav[i].children;
        for (let j: number = 0; j < nestLowerNav.length; j += 1) {
            nestLowerNav[j].classList[1].replace(/[^a-z0-9+]/gi, '').toLowerCase() === queryObj.tabName ? nestLowerNav[j].setAttribute("style", "display: block") : nestLowerNav[j].setAttribute("style", "display: none");

            if (nestLowerNav[j].classList[3] === queryObj.id.toString()) {
                nestLowerNav[j].classList.add("selected-tablink");
            } else {
                if (nestLowerNav[j].classList.contains("selected-tablink")) nestLowerNav[j].classList.remove("selected-tablink");
            };
        };
    };
};