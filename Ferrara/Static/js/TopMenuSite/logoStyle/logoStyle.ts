interface IDomObjLogoStyle {
    openedMenu: HTMLElement;
    logoImage: HTMLElement;
};

const DOMOBJLOGOSTYLE: Function = (): IDomObjLogoStyle => {
    return {
        openedMenu: document.querySelector('button[aria-expanded="false"]'),
        logoImage: document.getElementById("logo-image")
    };
};


export const logoStyle: Function = (brandName: string, domObjLogoStyle: IDomObjLogoStyle = DOMOBJLOGOSTYLE()): IDomObjLogoStyle => {
    if (brandName === 'murrayfood') {
        domObjLogoStyle.openedMenu ? domObjLogoStyle.logoImage.style.display = "none" : domObjLogoStyle.logoImage.style.display = "block";
    };
    return domObjLogoStyle;
};

if (typeof process === "undefined") logoStyle();