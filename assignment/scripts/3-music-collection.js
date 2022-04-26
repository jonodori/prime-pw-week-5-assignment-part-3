console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }

    collection.push(album);
    return collection;
}

addToCollection('The Life of Pablo', 'Kanye West', '2016');
addToCollection('Thank Me Later', 'Drake', '2010');
addToCollection('Red', 'Taylor Swift', '2021');
addToCollection('Justice', 'Justin Bieber', '2021');
addToCollection('Forest Hills Drive', 'J cole', '2014');
addToCollection('25', 'Adele', '2015');

console.log(collection); //test to see if album gets pushed to the collection 