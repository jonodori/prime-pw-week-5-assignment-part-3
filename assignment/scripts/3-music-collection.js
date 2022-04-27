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

console.log(addToCollection('The Life of Pablo', 'Kanye West', '2016'));
console.log(addToCollection('The Warm Up', 'J Cole', '2009'));
console.log(addToCollection('Red', 'Taylor Swift', '2021'));
console.log(addToCollection('Justice', 'Justin Bieber', '2021'));
console.log(addToCollection('Forest Hills Drive', 'J cole', '2014'));
console.log(addToCollection('25', 'Adele', '2015'));

function showCollection(array){
    console.log(array.length);
    for (album of array){ //created a for of loop, instead of for loop to test 
        console.log(album);
    }
}

showCollection(collection); 



