var checkUrlPram = function () {
    var pageLocation = window.location.search.replace(/\s+/g, '').toLowerCase();
    if (pageLocation.slice(0, 21) === "?aspxerrorpath=/sweet")
        window.location.href = window.location.origin + "/en" + pageLocation.slice(15, 28) + "/?" + pageLocation.slice(29, pageLocation.length);
    window.history.pushState('/', 'Title', '/');
};
checkUrlPram();
//# sourceMappingURL=UrlRouting.js.map