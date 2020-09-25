const MAWVideoBlockOnScrollFunc: Function = (): void => {
    const videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0] as HTMLVideoElement;
    let smallMAWBody: boolean = false;

    videoPlayer.pause();

    window.onbeforeunload = (): void => {
        window.scrollTo(0, 0);
    };

    setTimeout((): void => {
        window.onscroll = (): void => {
            videoPlayer.play();
            if (smallMAWBody) { document.getElementsByTagName("BODY")[0].style.height = "100vh"; };
            window.onscroll = null;
        };
    }, 0);

    setTimeout((): void => {
        if (window.innerHeight >= document.body.scrollHeight) {
            document.getElementsByTagName("BODY")[0].style.height = "101vh";
            smallMAWBody = true;
        }
    }, 0);
};

const MAWVideoBlockOnHoverFunc: Function = (): void => {
    const videoButton = document.getElementsByClassName("play-button-no-display")[0] as HTMLButtonElement;
    const videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0] as HTMLVideoElement;

    videoPlayer.pause();

    if (window.innerWidth > 991) {
        videoButton.classList.add("play-button-image");
        videoButton.onclick = (): void => {
            videoPlayer.play();
            videoButton.classList.remove("play-button-image");
            videoPlayer.addEventListener('ended', (): void => {
                videoButton.classList.add("play-button-image");
            });
        };
    } else {
        videoButton.style.display = "block";
        videoButton.onclick = (): void => {
            videoPlayer.play();
            console.log()
            videoButton.style.display = "none";
            videoPlayer.addEventListener('ended', (): void => {
                videoButton.style.display = "block";
            });
        };
    };
};

const MAWVideoBlockOnloadFunc: Function = (): void => {
    const videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0] as HTMLVideoElement;

    videoPlayer.pause();

    setTimeout((): void => {
        videoPlayer.play();
    }, 250);
};

const videoPlayOptionSwitch: Function = (urlParam: string): void => {
    switch (urlParam.toLowerCase()) {
        case "onscroll":
            MAWVideoBlockOnScrollFunc();
            break;
        case "onhover":
            MAWVideoBlockOnHoverFunc()
            break;
        case "onload":
            MAWVideoBlockOnloadFunc();
            break;
        default:
            console.log("You hit the Default Case on the videoPlayOptionSwitch() Switch Statement")
            return;
    };
};
const mawScrollDown: Function = (divScrollTo: string): void => {
    //If the user did not input a div ID to scroll to, scroll to the next panel by default
    if (divScrollTo == '') {
        let videoElementHeight = document.getElementsByClassName("MAW-Top-Video")[0].offsetHeight;
        let nav = document.getElementsByClassName("navbar")[0].offsetHeight;
        let navBuffer = 0;
        let small = window.matchMedia("(max-width: 850px)");
        let medium = window.matchMedia("(min-width: 1000px) and (max-width: 1365px)");
        //Accounts for thicker fudge drip in smaller screens
        if (small.matches) { navBuffer = 35; }
        if (medium.matches) { videoElementHeight = videoElementHeight - 70;}
        window.scroll({
            //Needs to be adjusted because of fudge nav
            top: (videoElementHeight - nav) + navBuffer,
            left: 0,
            behavior: 'smooth'
        });
    }
    else
    {
        const elementToScrollTo = document.getElementById(divScrollTo).offsetTop;
        window.scroll({
            //take off 65 to account for fudge nav
            top: elementToScrollTo - 65,
            left: 0,
            behavior: 'smooth'
        });
    }
}
