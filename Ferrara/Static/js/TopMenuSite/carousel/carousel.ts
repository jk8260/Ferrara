interface IDomObjCarousel {
    unfilteredCarouselEl: HTMLCollectionOf<HTMLElement>;
    carouselRoot: HTMLCollectionOf<HTMLElement>;
    carouselExampleIndicators: HTMLElement;
    carouselEl: HTMLElement[];
};

const DOMOBJCAROUSEL: Function = (): IDomObjCarousel => {
    return {
        unfilteredCarouselEl: document.getElementsByClassName("image-block") as HTMLCollectionOf<HTMLElement>,
        carouselRoot: document.getElementsByClassName("carousel-inner") as HTMLCollectionOf<HTMLElement>,
        carouselExampleIndicators: document.getElementById("carouselExampleIndicators"),
        carouselEl: []
    };
};


export const carouselOnloadFunc: Function = (domObjCarousel: IDomObjCarousel = DOMOBJCAROUSEL()): IDomObjCarousel => {
    const { unfilteredCarouselEl, carouselRoot, carouselExampleIndicators, carouselEl } = domObjCarousel;

    for (let i: number = 0; i < unfilteredCarouselEl.length; i += 1) {
        if (unfilteredCarouselEl[i].parentElement.parentElement.parentNode.nodeName !== "A") carouselEl.push(unfilteredCarouselEl[i]);
    };

    if (carouselEl.length > 1) {
        for (let i: number = 0; i < carouselEl.length; i += 1) {
            const domEl: HTMLDivElement = document.createElement('div');
            i === 0 ? domEl.setAttribute("class", "carousel-item active pull-left img-fluid") : domEl.setAttribute("class", "carousel-item pull-left img-fluid");

            const domLi: HTMLLIElement = document.createElement('li');
            domLi.setAttribute("data-target", "#carouselExampleIndicators");
            domLi.setAttribute("data-slide-to", String(i));
            if (i === 0) domLi.setAttribute("class", "active");

            domEl.appendChild(carouselEl[i]);
            carouselRoot[0].appendChild(domEl);
        };
    } else {
        const parentNode = carouselExampleIndicators.parentNode as HTMLElement;
        parentNode.removeChild(carouselExampleIndicators);
        parentNode.appendChild(carouselEl[0]);
    };
    return domObjCarousel;
};

if (typeof process === "undefined") carouselOnloadFunc();