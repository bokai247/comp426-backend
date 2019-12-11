import express from "express";  
export const router = express.Router();  
export const prefix = '/example';  
var location = require('../data/location.json');
router.get('/location', function (req, res) {  
  res.send({message: location})
});