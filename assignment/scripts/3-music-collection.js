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
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection); // Tested the collection array 

function findByArtist(artist) {
    let artistSearch = [];

//     for (let i = 0; i < collection.length; i++) {
//         if (artist === collection[i].artist){
//             artistSearch.push(collection[i]);    
//             return artistSearch;        
//         }        
//     }
//         return artistSearch;
// }

    for (album of collection){ 
        if (artist === album.artist){
            artistSearch.push(album);
            return artistSearch;
        }        
    }
    return artistSearch;
}    

console.log(findByArtist('Kanye West')); 
console.log(findByArtist('Taylor Swift')); 
console.log(findByArtist('Jimmy Eat World'));


function search(artist, year){
    let searchArray = [];
    // let searchObject = {
    //     artist: artist,
    //     year: year,
    // }

    for (album of collection) {
        if (artist === album.artist && year === album.yearPublished){
        searchArray.push(album);
        return searchArray;
    }    
        else  if(artist === undefined && year === undefined){
            return searchArray;
        }

    }
}

console.log(search('J Cole', '2009'));









