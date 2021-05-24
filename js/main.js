const initDataStr = '{"data": [{"name": "Yuchen Liu", "url": "./images/IMG_1241.JPG"}, ' +
    '{"name": "Chole Zhang", "url": "./images/IMG_0606.JPG"}, ' +
    '{"name": "sorincolac / iStock / Getty Images Plus", "url": "https://cdn.travelpulse.com/images/04aaedf4-a957-df11-b491-006073e71405/d7dd8d85-eed6-4740-8962-1583ff8dc93f/630x355.jpg"}, ' +
    '{"name": "JAMES CUNO", "url": "https://d3vjn2zm46gms2.cloudfront.net/blogs/2012/12/27011605/gtc_2008-05-26spri0002.jpg"}, ' +
    '{"name": "Van Gogh", "url": "https://www.vangoghgallery.com/img/starry_night_full.jpg"}, ' +
    '{"name": "Claude Monet", "url": "https://www.claude-monet.com/images/paintings/san-giorgio-maggiore-at-dusk.jpg"}, ' +
    '{"name": "Johannes Vermeer", "url": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/01/girlwithapearlearring.jpg"}, ' +
    '{"name": "Van Gogh", "url": "https://www.vincentvangogh.org/images/paintings/cafe-terrace-at-night.jpg"}]}';

function load() {
    const initDataObj = JSON.parse(initDataStr);
    const initDataArr = initDataObj.data;
    initDataArr.forEach(element => {
        insertCardToList(element);
    });
}

function insertCardToList(card) {
    let cardList = document.getElementById('card-flex-container');
    let item = document.createElement('li');
    item.setAttribute('class', 'card-flex-item');
    item.insertAdjacentHTML('afterbegin', `<div class="card">
        <img src=${card.url} alt="ImageCard" style="width:100%">
        <div class="ref">
        <h4>${card.name}</h4>
        </div>
        <input class="delete-one-art" type="button" value="x" onclick="deleteOneCard(this)"/>
    </div>`);
    cardList.appendChild(item);
}

function addCard() {
    const artist = document.getElementById('artist');
    const url = document.getElementById('imageURL');
    imageExists(url.value, function(exists) {
        if (artist.value!=='' && url.value!=='' && exists) {
            const card = {"name": artist.value, "url": url.value};
            insertCardToList(card);
            artist.value='';
            url.value='';
        }
    });
}

function clearForm() {
    const artist = document.getElementById('artist');
    const url = document.getElementById('imageURL');
    artist.value='';
    url.value='';
}

function deleteAllCards() {
    document.getElementById("card-flex-container").innerHTML = "";
}

function deleteOneCard(elem) {
    let item = elem.parentNode.parentNode;
    item.parentNode.removeChild(item);
}

// check image url is adapted from 
// https://stackoverflow.com/questions/14651348/checking-if-image-does-exists-using-javascript
function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}