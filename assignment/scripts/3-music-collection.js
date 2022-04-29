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
    let searchCriteria = {
        artist: artist,
        year: year
    }

    for (let i = 0; i < collection.length; i++) {
        if (searchCriteria.artist === collection[i].artist) {
            searchArray.push(collection[i].artist);
        } if (searchCriteria.year === collection[i].yearPublished){
            searchArray.push(collection[i].yearPublished);
        } if (searchCriteria.artist === undefined && searchCriteria.year === undefined){
            return collection;
        }
    }
    return searchArray;
}

//     for (album of collection){
//         if (artist === album.artist && year === album.yearPublished){
//         searchArray.push(album); 
//         }   
//     }
//     return searchArray;
// }


console.log(search('J Cole', '2014')); //test to see if returns items matched
console.log(search('Ray Charles', '1957')); // test to see if no result, returns empty array
console.log(search()); //test to see if it returns collection 