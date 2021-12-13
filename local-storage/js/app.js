const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }
    saveToDb(db);
}

// delete from the object through function
const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}


// add / save to local storage
const saveToDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}





// the function what is being used to do the entire work
const getDb = () => {
    let savedDb = localStorage.getItem('shopping-cart');
    savedDb = JSON.parse(savedDb);
    return savedDb;
}