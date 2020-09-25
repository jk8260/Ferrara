const imports = require('./logoStyle.es5.min.js');

test('Should change Logo Style display', () => {
    const testImage = document.createElement("IMG");

    const testObjTrue = {
        openedMenu: true,
        logoImage: testImage
    };
    const testObjFalse = {
        openedMenu: false,
        logoImage: testImage
    };
    const testObjFamousAmos = {
        openedMenu: false,
        logoImage: 'Famous Amos Test'
    }

    expect(imports.logoStyle('murrayfood', testObjTrue).logoImage.style.display).toBe("none");
    expect(imports.logoStyle('murrayfood', testObjFalse).logoImage.style.display).toBe("block");
    expect(imports.logoStyle('famouamos', testObjFamousAmos).logoImage).toBe("Famous Amos Test");
});