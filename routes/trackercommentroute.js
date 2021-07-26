const express = require('express');
const trackercommentroute = express.Router();
const trackercomment = require('../controllers/tracker/trackercomment.controller');

trackercommentroute
    .post('/:userid/:projectid/:trackercontainerid/:categorycontainerid/:trackerid/create',trackercomment.createComment) //Tracker Comment
    .put('/:userid/:projectid/:trackercontainerid/:categorycontainerid/:trackerid/update',trackercomment.updateComment) //Tracker Comment
    .delete('/:userid/:projectid/:trackercontainerid/:categorycontainerid/:trackerid/delete',trackercomment.deleteComment); //Tracker Comment

module.exports = trackercommentroute;