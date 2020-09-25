var MAWVideoBlockOnScrollFunc = function () {
    var videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0];
    var smallMAWBody = false;
    videoPlayer.pause();
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    setTimeout(function () {
        window.onscroll = function () {
            videoPlayer.play();
            if (smallMAWBody) {
                document.getElementsByTagName("BODY")[0].style.height = "100vh";
            }
            ;
            window.onscroll = null;
        };
    }, 0);
    setTimeout(function () {
        if (window.innerHeight >= document.body.scrollHeight) {
            document.getElementsByTagName("BODY")[0].style.height = "101vh";
            smallMAWBody = true;
        }
    }, 0);
};
var MAWVideoBlockOnHoverFunc = function () {
    var videoButton = document.getElementsByClassName("play-button-no-display")[0];
    var videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0];
    videoPlayer.pause();
    if (window.innerWidth > 991) {
        videoButton.classList.add("play-button-image");
        videoButton.onclick = function () {
            videoPlayer.play();
            videoButton.classList.remove("play-button-image");
            videoPlayer.addEventListener('ended', function () {
                videoButton.classList.add("play-button-image");
            });
        };
    }
    else {
        videoButton.style.display = "block";
        videoButton.onclick = function () {
            videoPlayer.play();
            console.log();
            videoButton.style.display = "none";
            videoPlayer.addEventListener('ended', function () {
                videoButton.style.display = "block";
            });
        };
    }
    ;
};
var MAWVideoBlockOnloadFunc = function () {
    var videoPlayer = document.getElementsByClassName("MAW-Top-Video")[0];
    videoPlayer.pause();
    setTimeout(function () {
        videoPlayer.play();
    }, 250);
};
var videoPlayOptionSwitch = function (urlParam) {
    switch (urlParam.toLowerCase()) {
        case "onscroll":
            MAWVideoBlockOnScrollFunc();
            break;
        case "onhover":
            MAWVideoBlockOnHoverFunc();
            break;
        case "onload":
            MAWVideoBlockOnloadFunc();
            break;
        default:
            console.log("You hit the Default Case on the videoPlayOptionSwitch() Switch Statement");
            return;
    }
    ;
};
var mawScrollDown = function (divScrollTo) {
    //If the user did not input a div ID to scroll to, scroll to the next panel by default
    if (divScrollTo == '') {
        var videoElementHeight = document.getElementsByClassName("MAW-Top-Video")[0].offsetHeight;
        var nav_1 = document.getElementsByClassName("navbar")[0].offsetHeight;
        var navBuffer = 0;
        var small = window.matchMedia("(max-width: 850px)");
        var medium = window.matchMedia("(min-width: 1000px) and (max-width: 1365px)");
        //Accounts for thicker fudge drip in smaller screens
        if (small.matches) {
            navBuffer = 35;
        }
        if (medium.matches) {
            videoElementHeight = videoElementHeight - 70;
        }
        window.scroll({
            //Needs to be adjusted because of fudge nav
            top: (videoElementHeight - nav_1) + navBuffer,
            left: 0,
            behavior: 'smooth'
        });
    }
    else {
        var elementToScrollTo = document.getElementById(divScrollTo).offsetTop;
        window.scroll({
            //take off 65 to account for fudge nav
            top: elementToScrollTo - 65,
            left: 0,
            behavior: 'smooth'
        });
    }
};
//# sourceMappingURL=MakeAWishVideoBlock.js.map