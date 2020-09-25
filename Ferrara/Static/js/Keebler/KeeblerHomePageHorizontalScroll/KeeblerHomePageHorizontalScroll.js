var transformScroll = function (event) {
    // Check if Video is on the DOM
    var vidEl = document.getElementById("tree-video");
    if (vidEl) {
        return;
    }
    ;
    // #3rd Condition that is hit -> This Condition to re-engage the Horizontal Scrolling
    if (window.scrollY < 3 && tracker2) {
        tracker1 = false;
        tracker2 = false;
        trackerScrollY = 0;
        event.currentTarget.scrollLeft -= 1;
        footerEl.style.display = "none";
        return;
    }
    ;
    // #1st Condition that is hit -> This Condition is used when the Client hit the end of the Horizontal Scroll and needs to start scrolling down 
    if (event.currentTarget.scrollLeft === blocksWidth && tracker1 === false) {
        tracker1 = true;
        window.scrollTo(blocksWidth, 3);
        footerEl.style.display = "block";
        footerHeight = calculateFooterHeight();
        return;
    }
    ;
    // #2nd Condition that is hit -> This Condition is used when the Client is scrolling up and down
    if (tracker1) {
        if ((trackerScrollY + event.deltaY) >= footerHeight && trackerScrollY < (trackerScrollY + event.deltaY)) {
            return;
        }
        ;
        trackerScrollY += event.deltaY;
        window.scrollTo(blocksWidth, trackerScrollY);
        tracker2 = true;
        return;
    }
    ;
    // Horizontal Scrolling Logic
    event.currentTarget.scrollLeft += event.deltaY;
};
// Tracker Variables for Conditional Statements
var tracker1 = false;
var tracker2 = false;
var footerHeight = 0;
var trackerScrollY = 0;
// GDynamic Window Size
var windowSizeX = window.innerWidth;
var windowSizeY = window.innerHeight;
var mainContentDivs = document.getElementsByClassName("keeblerstartpageblock");
var amountOfBlocks = mainContentDivs.length - 1;
var blocksWidth = windowSizeX * amountOfBlocks;
var blockHeight = 9;
// Dynamically calculate the width of the Div container that holds the Main Home Page Blocks
var mainContentDivContainer = document.getElementsByClassName("home-page-main-content-blocks")[0];
var divWidthString = (mainContentDivs.length * 100).toString();
mainContentDivContainer.style.width = divWidthString + "%";
// Query Footer and append onScroll to the HTML Page
var htmlEl = document.getElementsByTagName("HTML")[0];
var footerEl = document.getElementsByClassName("home-page-main-footer-block")[0];
htmlEl.addEventListener('wheel', transformScroll);
// Function that moves the Window into place on Animation Button Click
var snapWindowToBlock = function (path, section) {
    var blockButtons = document.getElementsByClassName("animateSprite-button");
    if (!window.matchMedia("(max-width: 991px)").matches) {
        Object.keys(blockButtons).forEach(function (key, index) {
            if (blockButtons[index].value === section) {
                window.scrollTo((index * windowSizeX), trackerScrollY);
            }
        });
    }
    else {
        Object.keys(blockButtons).forEach(function (key, index) {
            if (blockButtons[index].value === section) {
                window.scrollTo(0, ((index * windowSizeY) + 64));
            }
        });
    }
    ;
    setTimeout(function () {
        animateSprite(path, section);
    }, 1000);
};
var calculateFooterHeight = function () {
    var body = document.body;
    var html = document.documentElement;
    var fullDocumentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return fullDocumentHeight - window.innerHeight;
};
//# sourceMappingURL=KeeblerHomePageHorizontalScroll.js.map