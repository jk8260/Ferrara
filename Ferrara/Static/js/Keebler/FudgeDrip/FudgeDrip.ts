declare var bodymovin: any;
const fudgeContainer: HTMLElement = document.getElementById("fudgeDrip");
const nav: HTMLCollectionOf<Element> = document.getElementsByClassName("navbar");
const firstNav: any = nav[0];
const toggler: HTMLCollectionOf<Element> = document.getElementsByClassName("navbar-toggler-icon");
const togglerFirst: any = toggler[0];
togglerFirst.setAttribute("onclick", "toggle()");
let mobileScreen = window.matchMedia("(max-width: 991px)");

let anim;
let pathUsed;
let mobile: boolean;
 
var currentFrame;

const destroyAnimation: Function = (): void => {
    anim.destroy();
}

const loadHeaderAnimation: Function = (pathStr, pathStrMobile): void => {
    if (mobileScreen.matches) {
        pathUsed = pathStrMobile;
        firstNav.style.backgroundColor = '#471C09';
        mobile = true;
    } else {
        pathUsed = pathStr;
        firstNav.style.backgroundColor = '#471C09';
        mobile = false;
    }
    anim = bodymovin.loadAnimation({
        container: fudgeContainer,
        renderer: 'svg',
        autoplay: true,
        loop: false,
        path: pathUsed
    });
};

const fudgeHover: Function = (): void => {
    const homePage: HTMLElement = document.getElementById("home-page");
    const MAWPage: HTMLCollectionOf<Element> = document.getElementsByClassName("MAW-Main-Body-Div");
    if (homePage !== null || MAWPage !== null) {
        fudgeContainer.style.zIndex = '3';
    }
    else {
        fudgeContainer.style.zIndex = '1';
    }

    const firstLoop = () => {
        anim.playSegments([[0, 198],[198,0]], true);
        anim.setSpeed(1);
    };

    anim.addEventListener('DOMLoaded', firstLoop);
    anim.addEventListener('enterFrame', () => {
        currentFrame = anim.currentFrame;
    });
    anim.addEventListener('complete', () => {
        //if the current frame is not at one we want to stop at
        //(hover end frame or scroll end frame), repeat flow loop
        if (currentFrame !== 17 && currentFrame !== 39) {
            anim.playSegments([[0, 198], [198, 0]], true);
            anim.setSpeed(1);
        }
    });

    if (!mobile) {
        firstNav.setAttribute("onmouseenter", "enter()");
        firstNav.setAttribute("onmouseleave", "leave()");
    }
}

const enter: Function = (): void => {
    anim.loop = false;
    anim.playSegments([227, 267], true);
    
}
const leave: Function = (): void => {
    anim.loop = false;
    anim.playSegments([267, 227], true);
    anim.setSpeed(2);
}

let yPrev: number = 0;
let yPrevDirection: string = "up";
const scrollScreen: Function = (y: number, removed: boolean): void => {
    const homePage: HTMLElement = document.getElementById("treehouse-base");
    let currentDirection: string;
    if (homePage !== null && (y > yPrev)) {
        currentDirection = "down";
        if (currentDirection !== yPrevDirection) {
            yPrevDirection = currentDirection;
            scrollDown();
        }
    }
    else if (homePage !== null && (yPrev > y)) {
        currentDirection = "up";
        if (currentDirection !== yPrevDirection) {
            yPrevDirection = currentDirection;
            scrollUp();
        }
    }
    else if (removed === true) {
        anim.playSegments([[0, 198], [198, 0]], true);
        anim.setSpeed(1);
    }
    yPrev = y;

}

const scrollDown: Function = (): void => {
    if (window.pageYOffset > 0) {
        anim.loop = false;
        anim.playSegments([282, 300], true);
        anim.setSpeed(.3);
    }
}
const scrollUp: Function = (): void => {
    anim.loop = false;
    anim.playSegments([300, 282], true);
    anim.setSpeed(2);
}

const toggle: Function = (): void => {
    var fudgeEdge: HTMLImageElement = document.createElement('img');
    fudgeEdge.src = '/Static/gfx/FudgeDripTrim.png';
    fudgeEdge.alt = 'fudge drip';
    fudgeEdge.id = "fudgeEdge";
    var collapseShow = document.getElementsByClassName('show');
    if (collapseShow.length > 0) {
        $("#fudgeEdge").remove();
    }
    //Append fudge border if hamburger menu is open
    else {
        fudgeEdge.classList.add("fudge-border");
        firstNav.appendChild(fudgeEdge);
    }
}