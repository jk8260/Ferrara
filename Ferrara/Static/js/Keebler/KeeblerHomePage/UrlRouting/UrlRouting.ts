const checkUrlPram: Function = (): void => {
    const pageLocation: string = window.location.search.replace(/\s+/g, '').toLowerCase();

    if (pageLocation.slice(0, 21) === "?aspxerrorpath=/sweet") window.location.href = window.location.origin + "/en" + pageLocation.slice(15, 28) + "/?" + pageLocation.slice(29, pageLocation.length);

    window.history.pushState('/', 'Title', '/');
}

checkUrlPram(); 