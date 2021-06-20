var express = require('express');
var router = express.Router();
const uuid = require('uuid'); //For generating ID's

const initDataObj = {
  data: [
    {
      id: uuid.v4(),
      name: "Yuchen Liu", 
      url: "./images/IMG_1241.JPG",
      detail: "Painting by myself."
    },
    {
      id: uuid.v4(),
      name: "Chole Zhang", 
      url: "./images/IMG_0606.JPG",
      detail: "Picture took in Banff National Park."
    },
    {
      id: uuid.v4(),
      name: "sorincolac / iStock / Getty Images Plus", 
      url: "https://d3vjn2zm46gms2.cloudfront.net/blogs/2012/12/27011605/gtc_2008-05-26spri0002.jpg",
      detail: "Nice picture of Getty museum."
    },
    {
      id: uuid.v4(),
      name: "JAMES CUNO", 
      url: "https://cdn.travelpulse.com/images/04aaedf4-a957-df11-b491-006073e71405/d7dd8d85-eed6-4740-8962-1583ff8dc93f/630x355.jpg",
      detail: "Nice place in Mexico."
    },
    {
      id: uuid.v4(),
      name: "Van Gogh", 
      url: "https://www.vangoghgallery.com/img/starry_night_full.jpg",
      detail: "One of my favourite artist."
    },
    {
      id: uuid.v4(),
      name: "Claude Monet", 
      url: "https://www.claude-monet.com/images/paintings/san-giorgio-maggiore-at-dusk.jpg",
      detail: "Another one of my favourite artist."
    },
    {
      id: uuid.v4(),
      name: "Johannes Vermeer", 
      url: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2016/01/girlwithapearlearring.jpg",
      detail: "Famous portrait."
    },
    {
      id: uuid.v4(),
      name: "Van Gogh", 
      url: "https://www.vincentvangogh.org/images/paintings/cafe-terrace-at-night.jpg",
      detail: "Another one for Van Gogh."
    },
  ]
};

let databaseJSON = JSON.stringify(initDataObj);

// http://localhost:8080/exhibits/
// GET exhibits listing.
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(databaseJSON);
});

// http://localhost:8080/exhibits/:id
// GET one single exhibit.
router.get('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const { id } = req.params;

  const dataObj = JSON.parse(databaseJSON);
  const foundExhibit = dataObj.data.find(element => element.id === id);

  if(!foundExhibit) {
    return res.status(404).send({
      message: "Exhibit not found with id " + id
    });
  }

  res.send(JSON.stringify(foundExhibit));
});

// http://localhost:8080/exhibits/
// Post one single exhibit.
// Body format: { name: newName, url: newUrl, detail: newDetail }
router.post('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const { name: newName, url: newUrl, detail: newDetail } = req.body;

  if(!newName || !newUrl) {
    return res.status(400).send({
      message: "Name and URL cannot be empty"
    });
  }

  let newExhibit = {
    id: uuid.v4(),
    name: newName,
    url: newUrl,
    detail: newDetail
  };

  const dataObj = JSON.parse(databaseJSON);
  dataObj.data.push(newExhibit);
  databaseJSON = JSON.stringify(dataObj);

  res.send(JSON.stringify(newExhibit));
})

// http://localhost:8080/exhibits/:id
// Update detail of one single exhibit.
// Body format: { detail: newExhibitDetail }
router.patch('/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { id } = req.params;

  const dataObj = JSON.parse(databaseJSON);

  const foundExhibit = dataObj.data.find(element => element.id === id);
  if(!foundExhibit) {
    return res.status(404).send({
      message: "Exhibit not found with id " + id
    });
  }

  const { detail: newExhibitDetail} = req.body;  
  if(typeof newExhibitDetail === 'undefined') {
    return res.status(400).send({
      message: "Body must contain 'detail' field."
    });
  }

  foundExhibit.detail = newExhibitDetail;
  databaseJSON = JSON.stringify(dataObj);

  res.send(JSON.stringify(foundExhibit));
})

// http://localhost:8080/exhibits/all
// Delete all exhibits.
router.delete('/all', (req, res) => {
  const emptyDataObj = {
    data:[]
  };

  databaseJSON = JSON.stringify(emptyDataObj);

  res.status(204).send();
})

// http://localhost:8080/exhibits/:id
// Delete one single exhibit.
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const dataObj = JSON.parse(databaseJSON);

  const foundExhibit = dataObj.data.find(element => element.id === id);
  if(!foundExhibit) {
    return res.status(404).send({
      message: "Exhibit not found with id " + id
    });
  }

  dataObj.data = dataObj.data.filter(element => element.id !== id);

  databaseJSON = JSON.stringify(dataObj);

  res.status(204).send();
})

module.exports = router;
