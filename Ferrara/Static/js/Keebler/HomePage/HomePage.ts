let treehouseBase: HTMLElement = document.getElementById("treehouse-base");
let vid = document.getElementById("tree-video") as HTMLVideoElement;
let enterButton: HTMLElement = document.getElementById("enterSiteButton");

let pauseVideo: boolean = true;
let treeRemoved: boolean = false;

window.onwheel = (): void => {
    if (vid) {
        enterSite();
    }
};

$(document).on('touchmove', function () {
    if (vid) {
        enterSite();
    }
});


const enterSite: Function = (): void => {
    console.log("enterSite reached");
    enterButton.classList.add("fade-out-enter-button");
    window.scrollTo(0, 0);
    vid.classList.add("fade-out-video");
    pauseVideo = false;
    vid.play();

    if (vid.currentTime >= 3) { removeTreeElements(); }
};

const removeTreeElements: Function = (): void => {
    vid = document.getElementById("tree-video") as HTMLVideoElement;
    vid.remove();
    vid = null;
    treehouseBase.remove();
    enterButton.remove();
    treeRemoved = true;
    window.scrollTo(0, 0);
    document.getElementById("home-page").style.position = "relative";
    const htmlBodyEl = document.getElementsByTagName("HTML")[0] as HTMLElement;
    htmlBodyEl.addEventListener('wheel', transformScroll);
};

const fadeEnterButton: Function = (): void => {
    if (enterButton) { enterButton.style.opacity = (1 - window.pageYOffset / 200).toString(); }
};

// async function
setInterval((): void => {
    // start video paused
    if (pauseVideo && vid) {
        vid.pause();
    }

    // update video playback for click
    if (vid && vid.currentTime >= 3) { removeTreeElements(); }
}, 40);

// Switch Out Mobile & Full Screen Videos 
const isMobileDevice: Function = (): boolean => {
    return window.matchMedia("(max-width: 900px)").matches;
};

const setTreeVideoSrc: Function = (mobileVideoSrc: string, fullscreenVideoSrc: string): void => {
    const vidSource = document.createElement("source");
    vidSource.setAttribute("type", "video/mp4");
    vid.appendChild(vidSource);

    if (isMobileDevice()) {
        vidSource.setAttribute("src", mobileVideoSrc);
    } else {
        vidSource.setAttribute("src", fullscreenVideoSrc);
    }
}

const applyStlyesInIe: Function = (): void => {
    let sAgent = window.navigator.userAgent;
    const ieIdx = sAgent.indexOf("MSIE");
    const edgeIdx = sAgent.indexOf("Edge");

    // If IE, apply object fit styles.
    if (ieIdx > 0 || edgeIdx > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
        vid.classList.add("ie-object-fit");
    }
}
applyStlyesInIe();

const animateSprite: Function = (path: string, section: string): void => {
    const sweetTreatsSection = document.getElementById("SweetTreats");
    const yummyRecipesSection = document.getElementById("YummyRecipes");

    if (sweetTreatsSection && section == 'SweetTreats') {
        sweetTreatsSection.classList.add("animate-container");
        let textContainer = sweetTreatsSection.getElementsByClassName("info-section")[0];
        textContainer.classList.add("fadeOut");
        let elfSprite = sweetTreatsSection.getElementsByClassName("animation-sprite")[0];    

        elfSprite.classList.add("elf-sprite");

        animateLowerSection(sweetTreatsSection.getElementsByClassName("optional-lower-section")[0]);
        navigateToPath(path, 4000);
    }

    if (yummyRecipesSection && section == 'YummyRecipes') {
        let textContainer = yummyRecipesSection.getElementsByClassName("order-2")[0];
        textContainer.classList.add("fadeOut");
        let ovenSprite = yummyRecipesSection.getElementsByClassName("animation-sprite")[0];    
        ovenSprite.classList.add("oven-sprite");

        animateLowerSection(yummyRecipesSection.getElementsByClassName("optional-lower-section")[0]);

        navigateToPath(path, 3000);
    }
}

const animateLowerSection: Function = (optionalLowerSection: HTMLDivElement): void => {
    if (optionalLowerSection) {
        optionalLowerSection.classList.add("fadeOut");
    }
}

const navigateToPath: Function = (path: string, timeout: number): void => {
    setTimeout((): void => {
        console.log("navigateToPath");
        console.log(path);
        window.location.href = path;
    }, timeout)
} 