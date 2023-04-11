function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Batman']
    function cryForHelp() {
        for (const hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp()
}

//an inner function nested inside a parent funcion has access to the scope variables defined in the scope of that outher funcion


