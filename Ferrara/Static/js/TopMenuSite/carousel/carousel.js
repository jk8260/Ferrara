"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var DOMOBJCAROUSEL = function () {
    return {
        unfilteredCarouselEl: document.getElementsByClassName("image-block"),
        carouselRoot: document.getElementsByClassName("carousel-inner"),
        carouselExampleIndicators: document.getElementById("carouselExampleIndicators"),
        carouselEl: []
    };
};
exports.carouselOnloadFunc = function (domObjCarousel) {
    if (domObjCarousel === void 0) { domObjCarousel = DOMOBJCAROUSEL(); }
    var unfilteredCarouselEl = domObjCarousel.unfilteredCarouselEl, carouselRoot = domObjCarousel.carouselRoot, carouselExampleIndicators = domObjCarousel.carouselExampleIndicators, carouselEl = domObjCarousel.carouselEl;
    for (var i = 0; i < unfilteredCarouselEl.length; i += 1) {
        if (unfilteredCarouselEl[i].parentElement.parentElement.parentNode.nodeName !== "A")
            carouselEl.push(unfilteredCarouselEl[i]);
    }
    ;
    if (carouselEl.length > 1) {
        for (var i = 0; i < carouselEl.length; i += 1) {
            var domEl = document.createElement('div');
            i === 0 ? domEl.setAttribute("class", "carousel-item active pull-left img-fluid") : domEl.setAttribute("class", "carousel-item pull-left img-fluid");
            var domLi = document.createElement('li');
            domLi.setAttribute("data-target", "#carouselExampleIndicators");
            domLi.setAttribute("data-slide-to", String(i));
            if (i === 0)
                domLi.setAttribute("class", "active");
            domEl.appendChild(carouselEl[i]);
            carouselRoot[0].appendChild(domEl);
        }
        ;
    }
    else {
        var parentNode = carouselExampleIndicators.parentNode;
        parentNode.removeChild(carouselExampleIndicators);
        parentNode.appendChild(carouselEl[0]);
    }
    ;
    return domObjCarousel;
};
if (typeof process === "undefined")
    exports.carouselOnloadFunc();
//# sourceMappingURL=carousel.js.map