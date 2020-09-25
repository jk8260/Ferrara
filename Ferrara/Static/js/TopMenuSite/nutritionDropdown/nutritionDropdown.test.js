const imports = require('./nutritionDropdown.es5.min.js');


test('Should change display "none" to "block" for nutrition label', () => {
    const testPTag = document.createElement("p");
    testPTag.innerHTML = "test"

    const testDiv = document.createElement("div");
    testDiv.style.display = "none"

    const testObj = {
        dropDownDisplayName: [ testPTag ],
        nutritionFacts: [ testDiv ]
    };
    
    expect(imports.nutritionDropDownFunc("test", testObj).nutritionFacts[0].style.display).toBe("block");
});



test('Should change display "none" to "block" for [0] for DropDownDisplayName', () => {
    const testDropDownDiv = document.createElement("div");
    testDropDownDiv.style.display = "block";

    const testAnchor = document.createElement("div");

    const testObj = {
        dropDownDisplayName: [],
        nutritionFacts: [],
        anchor: testAnchor,
        dropDownDiv: testDropDownDiv
    };

    for (let i = 0; i < 5; i += 1) {
        const testPTag = document.createElement("p");
        testPTag.innerHTML = i.toString();
        testObj.dropDownDisplayName.push(testPTag);

        const testDiv = document.createElement("div");
        i <= 0 ? testDiv.style.display = "none" : testDiv.style.display = "block";
        testObj.nutritionFacts.push(testDiv);
    };

    expect(imports.nutritionDropDownOnloadFunc(testObj).nutritionFacts[0].style.display).toBe("block");
});