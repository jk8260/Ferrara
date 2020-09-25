interface ItimeStampObject {
    timeStampDifference?: number;
    homeButtonClickTimeStamp?: number;
};

const homeText = document.getElementsByClassName("home-link")[0] as HTMLDListElement;
const TIMESTAMPOBJECT: ItimeStampObject = {};

homeText.onclick = (): void => {
    const timeStamp: number = Math.floor(Date.now() / 1000);
    localStorage.setItem('homeButtonClick', timeStamp.toString());
};

const readLocalStorageForHomeButtonTimeStamp: Function = (): void => {
    const homeButtonClickLocalStorage: string = localStorage.getItem('homeButtonClick');

    if (homeButtonClickLocalStorage) {
        TIMESTAMPOBJECT['homeButtonClickTimeStamp'] = parseInt(homeButtonClickLocalStorage);
        TIMESTAMPOBJECT['timeStampDifference'] = Math.floor(Date.now() / 1000) - TIMESTAMPOBJECT.homeButtonClickTimeStamp;
    };
};

const hideTreeIfHomeButtonWasClicked: Function = (): void => {
    if (TIMESTAMPOBJECT.timeStampDifference < 2) {
        removeTreeElements();
    };
};
