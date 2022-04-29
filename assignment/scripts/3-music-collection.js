console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }

    collection.push(album); 
    return album; //added return to see if it gets added to the collection via console log
}

console.log(addToCollection('The Life of Pablo', 'Kanye West', '2016')); 
console.log(addToCollection('The Warm Up', 'J Cole', '2009'));
console.log(addToCollection('Red', 'Taylor Swift', '2021'));
console.log(addToCollection('Justice', 'Justin Bieber', '2021'));
console.log(addToCollection('Forest Hills Drive', 'J Cole', '2014'));
console.log(addToCollection('25', 'Adele', '2015'));
console.log(collection);

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
//             // return artistSearch; //Why is that if I include this return it doesn't show both albums for J Cole   
//         }        
//     }
//         return artistSearch;
// }

    for (let album of collection){ 
        if (artist === album.artist){
            artistSearch.push(album);
            // return artistSearch; //Why is that if I include this return it doesn't show both albums for J Cole           
        }        
    }
    return artistSearch;
}    

console.log(findByArtist('J Cole')); 
console.log(findByArtist('Taylor Swift')); 
console.log(findByArtist('Jimmy Eat World'));


function search(artist, year){
    let searchArray = [];
    let searchCriteria = {
        artist: artist,
        year: year
    }

    // for (let i = 0; i < collection.length; i++) {
    //     if (searchCriteria.artist === collection[i].artist) {
    //         searchArray.push(collection[i].artist);
    //     } if (searchCriteria.year === collection[i].yearPublished){
    //         searchArray.push(collection[i].yearPublished);
    //     } if (searchCriteria.artist === undefined && searchCriteria.year === undefined){
    //         return collection;
    //     }
    // }
    // return searchArray;
// }

    for (let album of collection){ //fixed my for of loop and used let 
        if (artist === album.artist && year === album.yearPublished){
        searchArray.push(album); 
        } if (searchCriteria.artist === undefined && searchCriteria.year === undefined){
                    return collection;
        }              
    }
    return searchArray;
}


console.log(search('J Cole', '2014')); //test to see if returns items matched
console.log(search('Ray Charles', '1957')); // test to see if no result, returns empty array
console.log(search()); //test to see if it returns collection 