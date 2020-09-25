const imports = require('./carousel.es5.min.js');

test('BootStrap shoud be removed with on 1 product Image', () => {
    const testRootDiv = document.createElement("div");
    testRootDiv.setAttribute("class", "testRootDiv");

    const testTopDiv = document.createElement("div");
    testTopDiv.setAttribute("class", "testTopDiv"); 

    const testBottomDiv = document.createElement("div");
    testBottomDiv.setAttribute("class", "testBottomDiv");

    testTopDiv.appendChild(testBottomDiv);

    const testObj = {
        unfilteredCarouselEl: [],
        carouselRoot: [],
        carouselIndicatorsRoot: [],
        carouselExampleIndicators: testBottomDiv,
        carouselEl: [testRootDiv]
    };


    expect(imports.carouselOnloadFunc(testObj).carouselEl[0].getAttribute("class")).toBe("testRootDiv");
});
