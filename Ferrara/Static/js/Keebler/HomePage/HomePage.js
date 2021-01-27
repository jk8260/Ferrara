var treehouseBase = document.getElementById("treehouse-base");
var vid = document.getElementById("tree-video");
var enterButton = document.getElementById("enterSiteButton");
var pauseVideo = true;
var treeRemoved = false;
window.onwheel = function () {
    if (vid) {
        enterSite();
    }
};
$(document).on('touchmove', function () {
    if (vid) {
        enterSite();
    }
});
var enterSite = function () {
    enterButton.classList.add("fade-out-enter-button");
    window.scrollTo(0, 0);
    console.log("enterSite reached");
    vid.classList.add("fade-out-video");
    pauseVideo = false;
    vid.play();
    if (vid.currentTime >= 3) {
        removeTreeElements();
    }
};
var removeTreeElements = function () {
    vid = document.getElementById("tree-video");
    vid.remove();
    vid = null;
    treehouseBase.remove();
    enterButton.remove();
    treeRemoved = true;
    window.scrollTo(0, 0);
    document.getElementById("home-page").style.position = "relative";
    var htmlBodyEl = document.getElementsByTagName("HTML")[0];
    htmlBodyEl.addEventListener('wheel', transformScroll);
};
var fadeEnterButton = function () {
    if (enterButton) {
        enterButton.style.opacity = (1 - window.pageYOffset / 200).toString();
    }
};
// async function
setInterval(function () {
    // start video paused
    if (pauseVideo && vid) {
        vid.pause();
    }
    // update video playback for click
    if (vid && vid.currentTime >= 3) {
        removeTreeElements();
    }
}, 40);
// Switch Out Mobile & Full Screen Videos 
var isMobileDevice = function () {
    return window.matchMedia("(max-width: 900px)").matches;
};
var setTreeVideoSrc = function (mobileVideoSrc, fullscreenVideoSrc) {
    var vidSource = document.createElement("source");
    vidSource.setAttribute("type", "video/mp4");
    vid.appendChild(vidSource);
    if (isMobileDevice()) {
        vidSource.setAttribute("src", mobileVideoSrc);
    }
    else {
        vidSource.setAttribute("src", fullscreenVideoSrc);
    }
};
var applyStlyesInIe = function () {
    var sAgent = window.navigator.userAgent;
    var ieIdx = sAgent.indexOf("MSIE");
    var edgeIdx = sAgent.indexOf("Edge");
    // If IE, apply object fit styles.
    if (ieIdx > 0 || edgeIdx > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        vid.classList.add("ie-object-fit");
    }
};
applyStlyesInIe();
var animateSprite = function (path, section) {
    var sweetTreatsSection = document.getElementById("SweetTreats");
    var yummyRecipesSection = document.getElementById("YummyRecipes");
    if (sweetTreatsSection && section == 'SweetTreats') {
        sweetTreatsSection.classList.add("animate-container");
        var textContainer = sweetTreatsSection.getElementsByClassName("info-section")[0];
        textContainer.classList.add("fadeOut");
        var elfSprite = sweetTreatsSection.getElementsByClassName("animation-sprite")[0];
        elfSprite.classList.add("elf-sprite");
        animateLowerSection(sweetTreatsSection.getElementsByClassName("optional-lower-section")[0]);
        navigateToPath(path, 4000);
    }
    if (yummyRecipesSection && section == 'YummyRecipes') {
        var textContainer = yummyRecipesSection.getElementsByClassName("order-2")[0];
        textContainer.classList.add("fadeOut");
        var ovenSprite = yummyRecipesSection.getElementsByClassName("animation-sprite")[0];
        ovenSprite.classList.add("oven-sprite");
        animateLowerSection(yummyRecipesSection.getElementsByClassName("optional-lower-section")[0]);
        navigateToPath(path, 3000);
    }
};
var animateLowerSection = function (optionalLowerSection) {
    if (optionalLowerSection) {
        optionalLowerSection.classList.add("fadeOut");
    }
};
var navigateToPath = function (path, timeout) {
    setTimeout(function () {
        console.log("navigateToPath");
        console.log(path);
        window.location.href = path;
    }, timeout);
};
//# sourceMappingURL=HomePage.js.map