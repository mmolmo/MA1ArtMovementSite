
// async function fetchData() {
//   const jsonString = `{
//   "artworks": [
//     {
//       "id": 1,
//       "url": "url",
//       "alt" : "",
//       "name": "John Doe",
//       "artist":"",
//       "year": "1983",
//       "medium": "medium",
//       "dimensions": "55 x 43 x 23",
//       "description": "short paragraph description"
//     },
//     {
//       "id": 2,
//       "url": "../Images/cardartwork/krasner-still-life.jpg",
//       "alt" : "still life img",
//       "name": "Still Life",
//       "artist":"Lee Krasner",
//       "year": "1938",
//       "medium": "Oil on paper",
//       "dimensions": "Sheet: 19 × 24 3/4in. (48.3 × 62.9 cm)",
//       "description": "short paragraph description"
//     },
//     {
//       "id": 3,
//       "url": "../Images/cardartwork/DeKooning_UntitledXXII.jpg",
//       "alt" : "untitled XXII image",
//       "name": "Untitled XXII",
//       "artist":"Willem de Kooning",
//       "year": "1982",
//       "medium": "Oil on canvas",
//       "dimensions": "70 1/4 x 80 1/8 in. (178.4 x 203.5 cm)",
//       "description": "short paragraph description"
//     },
//     {
//       "id": 4,
//       "url": "../Images/cardartwork/Pollock_red_composition.jpg",
//       "alt" : "red composition image",
//       "name": "Red Composition",
//       "artist":"Jackson Pollock",
//       "year": "(1912-1956)",
//       "medium": "oil on Masonite",
//       "dimensions": "19 x 23 3/4 in. (48.3 x 60.3 cm.)",
//       "description": "short paragraph description"
//     },
//     {
//       "id": 5,
//       "url": "../Images/cardartwork/mark_rothko-untitled-1953-trivium-art-history-1_webp.png",
//       "alt" : "untitled img",
//       "name": "Untitled",
//       "artist":"Mark Rothko",
//       "year": "1953",
//       "medium": "Oil on Canvas",
//       "dimensions": "(300 cm x 442.5 cm)",
//       "description": "short paragraph description"
//     },
//     {
//       "id": 6,
//       "url": "../Images/cardartwork/91-lee-krasner-goldorsilver.jpg",
//       "alt" : "gold or silver alt",
//       "name": "Gold Or Silver",
//       "artist":"Lee Krasner",
//       "year": "1954",
//       "medium": "oil and paper collage on Masonite",
//       "dimensions": "48 x 61 3/4 in. (122 x 157 cm.)",
//       "description": "short paragraph description"
//     }
//     ]
// }`

//  const dataUrl = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonString);

// // ../data/data.json

// fetch('dataUrl')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok', error);

//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('JSON data:', data);
//     displayData(data);
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });
// }


async function fetchartworkData(artID){
  
  const artworks = [
    {
      "id": "aw_pollock_convergence",
      "url": "../Images/cardartwork/convergence.jpg",
      "alt" : "convergence",
      "name": "Convergence",
      "artist":"Jackson Pollock",
      "year": "1952",
      "medium": "Oil on canvas",
      "dimensions": "95 1/4 x 157 1/8 x 3 inches\n(241.94 x 399.1 x 7.62 cm)",
      "description": "short paragraph description"
    },
    {
      "id": "aw_krasner_stilllife_1938",
      "url": "../Images/cardartwork/krasner-still-life.jpg",
      "alt" : "still life img",
      "name": "Still Life",
      "artist":"Lee Krasner",
      "year": "1938",
      "medium": "Oil on paper",
      "dimensions": "Sheet: 19 × 24 3/4in.\n(48.3 × 62.9 cm)",
      "description": "short paragraph description"
    },
    {
      "id": "aw_dekooning_1982",
      "url": "../Images/cardartwork/DeKooning_UntitledXXII.jpg",
      "alt" : "untitled XXII image",
      "name": "Untitled XXII",
      "artist":"Willem de Kooning",
      "year": "1982",
      "medium": "Oil on canvas",
      "dimensions": "70 1/4 x 80 1/8 in.\n(178.4 x 203.5 cm)",
      "description": "short paragraph description"
    },
    {
      "id": "aw_pollock_redcomp",
      "url": "../Images/cardartwork/Pollock_red_composition.jpg",
      "alt" : "red composition image",
      "name": "Red Composition",
      "artist":"Jackson Pollock",
      "year": "(1912-1956)",
      "medium": "oil on Masonite",
      "dimensions": "19 x 23 3/4 in.\n(48.3 x 60.3 cm.)",
      "description": "short paragraph description"
    },
    {
      "id": "aw_rothko_1953",
      "url": "../Images/cardartwork/mark_rothko-untitled-1953-trivium-art-history-1_webp.png",
      "alt" : "untitled img",
      "name": "Untitled",
      "artist":"Mark Rothko",
      "year": "1953",
      "medium": "Oil on Canvas",
      "dimensions": "118 x 174 in.\n(300 cm x 442.5 cm)",
      "description": "short paragraph description"
    },
    {
      "id": "aw_krasner_1954",
      "url": "../Images/cardartwork/91-lee-krasner-goldorsilver.jpg",
      "alt" : "gold or silver alt",
      "name": "Gold Or Silver",
      "artist":"Lee Krasner",
      "year": "1954",
      "medium": "oil and paper collage on Masonite",
      "dimensions": "48 x 61 3/4 in.\n(122 x 157 cm.)",
      "description": "short paragraph description"
    }
    ]
  
  artwork = artworks.find((element) => element.id === artID);
  console.log(artwork);
  return artwork;
}

async function displayData(data) {

  console.log(data)
  console.log(data.name)
  
  // Check if data is an array or object
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      console.log(`Item ${index + 1}:`, item);
    });
  } else {
    // Display object properties
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(`${key}:`, data[key]);
      }
    }
  }
  
  // For HTML display
  const artTitle = document.getElementById('title');
  const artist = document.getElementById('artist');
  const year = document.getElementById('year');
  const medium = document.getElementById('medium');
  const dimensions = document.getElementById('dimensions');
  const description = document.getElementById('description');
  const artworkimg = document.querySelector('.gallery-aside img')

  console.log(artworkimg)

  const outputDiv = document.getElementById('description');
  if (outputDiv) {
    outputDiv.innerHTML = JSON.stringify(data, null, 2);
  }

  artTitle.textContent = data.name;
  artist.textContent = data.artist;
  year.textContent = data.year;
  medium.textContent = data.medium ;
  dimensions.textContent = data.dimensions ;
  description.textContent = data.description;
  artworkimg.src = data.url;
  artworkimg.alt = data.alt; 
  
}

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const artID = urlParams.get('id');

  if (!artID) {
    console.log("couldn't find that artwork")
    return;
  }

  try {
      let artwork = await fetchartworkData(artID);
      if (artwork){
        displayData(artwork);
      }
  } catch (error) {
      console.error('Error fetching art:', error);
      // Redirect or show error message
  }
});