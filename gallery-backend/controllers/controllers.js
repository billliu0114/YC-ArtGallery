const mongoose = require('mongoose');
const ArtItem = require('../models/artItem');

const createArtItem = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const { name, url, detail } = req.body;

    if (!name || !url) {
        return res.status(400).send({
            message: "Name and URL cannot be empty"
        });
    }

    const newExhibit = new ArtItem({
        name,
        url,
        detail,
    });

    try {
        await newExhibit.save();
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot add art." }
        );
    }

    res.status(200).json(newExhibit);
};

const getAllArtItems = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let artItems=[];
    try {
        artItems = await ArtItem.find();
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot find arts." }
        );
    }
    res.status(200).json({data: artItems.map(art => art)});
};

const getArtItemById = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.params;
    let foundExhibit;
    try {
        foundExhibit = await ArtItem.findById(id);
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot find the requested piece of art." }
        );
    }

    if(!foundExhibit) {
        return res.status(404).send({
          message: "Exhibit not found with id " + id
        });
    }

    res.status(200).json(foundExhibit);
};

const updateArtItem = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { id } = req.params;
    let foundExhibit;
    try {
        foundExhibit = await ArtItem.findById(id);
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot find the requested piece of art." }
        );
    }
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
    try {
        await foundExhibit.save();
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot update the detail of art." }
        );
    }
    res.status(200).json(foundExhibit);
};

const deleteArtItemById = async (req, res) => {
    const { id } = req.params;
    let foundExhibit;
    try {
        foundExhibit = await ArtItem.findById(id);
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot find the requested piece of art." }
        );
    }
    if(!foundExhibit) {
        return res.status(404).send({
          message: "Exhibit not found with id " + id
        });
    }
    try {
        await foundExhibit.remove();
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot delete the selected art." }
        );
    }
    res.status(204).send();
};

const deleteAllArtItems = async (req, res) => {
    try {
        await ArtItem.remove({});
    } catch (err) {
        return res.status(500).send(
            { message: "Internal server error. Cannot find arts." }
        );
    }
    res.status(204).send();
};

exports.createArtItem = createArtItem;
exports.getAllArtItems = getAllArtItems;
exports.getArtItemById = getArtItemById;
exports.updateArtItem = updateArtItem;
exports.deleteArtItemById = deleteArtItemById;
exports.deleteAllArtItems = deleteAllArtItems;