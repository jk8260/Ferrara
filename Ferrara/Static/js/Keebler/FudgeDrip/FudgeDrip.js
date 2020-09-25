var fudgeContainer = document.getElementById("fudgeDrip");
var nav = document.getElementsByClassName("navbar");
var firstNav = nav[0];
var toggler = document.getElementsByClassName("navbar-toggler-icon");
var togglerFirst = toggler[0];
togglerFirst.setAttribute("onclick", "toggle()");
var mobileScreen = window.matchMedia("(max-width: 991px)");
var anim;
var pathUsed;
var mobile;
var currentFrame;
var destroyAnimation = function () {
    anim.destroy();
};
var loadHeaderAnimation = function (pathStr, pathStrMobile) {
    if (mobileScreen.matches) {
        pathUsed = pathStrMobile;
        firstNav.style.backgroundColor = '#471C09';
        mobile = true;
    }
    else {
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
var fudgeHover = function () {
    var homePage = document.getElementById("home-page");
    var MAWPage = document.getElementsByClassName("MAW-Main-Body-Div");
    if (homePage !== null || MAWPage !== null) {
        fudgeContainer.style.zIndex = '3';
    }
    else {
        fudgeContainer.style.zIndex = '1';
    }
    var firstLoop = function () {
        anim.playSegments([[0, 198], [198, 0]], true);
        anim.setSpeed(1);
    };
    anim.addEventListener('DOMLoaded', firstLoop);
    anim.addEventListener('enterFrame', function () {
        currentFrame = anim.currentFrame;
    });
    anim.addEventListener('complete', function () {
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
};
var enter = function () {
    anim.loop = false;
    anim.playSegments([227, 267], true);
};
var leave = function () {
    anim.loop = false;
    anim.playSegments([267, 227], true);
    anim.setSpeed(2);
};
var yPrev = 0;
var yPrevDirection = "up";
var scrollScreen = function (y, removed) {
    var homePage = document.getElementById("treehouse-base");
    var currentDirection;
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
};
var scrollDown = function () {
    if (window.pageYOffset > 0) {
        anim.loop = false;
        anim.playSegments([282, 300], true);
        anim.setSpeed(.3);
    }
};
var scrollUp = function () {
    anim.loop = false;
    anim.playSegments([300, 282], true);
    anim.setSpeed(2);
};
var toggle = function () {
    var fudgeEdge = document.createElement('img');
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
};
//# sourceMappingURL=FudgeDrip.js.map