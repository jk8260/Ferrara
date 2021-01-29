const checkUrlPram: Function = (): void => {
    console.log("checkUrlPram : pageLocation");
    console.log(window.location);
    const pageLocation: string = window.location.search.replace(/\s+/g, '').toLowerCase();
    console.log(pageLocation);
    if (pageLocation.slice(0, 21) === "?aspxerrorpath=/sweet") window.location.href = window.location.origin + "/en" + pageLocation.slice(15, 28) + "/?" + pageLocation.slice(29, pageLocation.length);

    window.history.pushState('/', 'Title', '/');
}

checkUrlPram(); 