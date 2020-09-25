﻿const transformScroll = (event: any): void => {
    // Check if Video is on the DOM
    const vidEl = document.getElementById("tree-video") as HTMLVideoElement;
    if (vidEl) { return; };

    // #3rd Condition that is hit -> This Condition to re-engage the Horizontal Scrolling
    if (window.scrollY < 3  && tracker2) {
        tracker1 = false;
        tracker2 = false;
        trackerScrollY = 0;
        event.currentTarget.scrollLeft -= 1;
        footerEl.style.display = "none";
        return;
    };

    // #1st Condition that is hit -> This Condition is used when the Client hit the end of the Horizontal Scroll and needs to start scrolling down 
    if (event.currentTarget.scrollLeft === blocksWidth && tracker1 === false) {
        tracker1 = true;
        window.scrollTo(blocksWidth, 3);
        footerEl.style.display = "block";
        footerHeight = calculateFooterHeight();
        return;
    };

    // #2nd Condition that is hit -> This Condition is used when the Client is scrolling up and down
    if (tracker1) {
        if ((trackerScrollY + event.deltaY) >= footerHeight && trackerScrollY < (trackerScrollY + event.deltaY)) { return; };
        trackerScrollY += event.deltaY;
        window.scrollTo(blocksWidth, trackerScrollY);
        tracker2 = true;
        return;
    };

    // Horizontal Scrolling Logic
    event.currentTarget.scrollLeft += event.deltaY;
};

// Tracker Variables for Conditional Statements
let tracker1: boolean = false;
let tracker2: boolean = false;
let footerHeight: number = 0;
let trackerScrollY: number = 0;

// GDynamic Window Size
const windowSizeX: number = window.innerWidth;
const windowSizeY: number = window.innerHeight;
const mainContentDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("keeblerstartpageblock");
const amountOfBlocks: number = mainContentDivs.length - 1;
const blocksWidth: number = windowSizeX * amountOfBlocks;
const blockHeight: number = 9;


// Dynamically calculate the width of the Div container that holds the Main Home Page Blocks
const mainContentDivContainer = document.getElementsByClassName("home-page-main-content-blocks")[0] as HTMLDivElement;
const divWidthString: string = (mainContentDivs.length * 100).toString()
mainContentDivContainer.style.width = divWidthString + "%";

// Query Footer and append onScroll to the HTML Page
const htmlEl = document.getElementsByTagName("HTML")[0] as HTMLElement;
const footerEl = document.getElementsByClassName("home-page-main-footer-block")[0] as HTMLDivElement;
htmlEl.addEventListener('wheel', transformScroll);

// Function that moves the Window into place on Animation Button Click
const snapWindowToBlock: Function = (path: string, section: string): void => {
    const blockButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("animateSprite-button");

    if (!window.matchMedia("(max-width: 991px)").matches) {

        Object.keys(blockButtons).forEach((key: string, index: number) => {
            if (blockButtons[index].value === section) {
                window.scrollTo((index * windowSizeX), trackerScrollY);
            }
        });
    } else {
        Object.keys(blockButtons).forEach((key: string, index: number) => {
            if (blockButtons[index].value === section) {
                window.scrollTo(0, ((index * windowSizeY) + 64));
            }
        });
    };
    setTimeout(() => {
        animateSprite(path, section);
    }, 1000);
   
};

const calculateFooterHeight: Function = (): number => {
    const body = document.body;
    const html = document.documentElement;

    const fullDocumentHeight: number = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    return fullDocumentHeight - window.innerHeight;
}
