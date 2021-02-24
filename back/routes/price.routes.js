let mongoose = require('mongoose');
express = require('express'),
router = express.Router();

let user = require('../models/user-schema');

router.route('/').get((req, res) => {
    user.count({ }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/carrefour').get((req, res) => {
    user.count({entite: "Carrefour"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/auchan').get((req, res) => {
    user.count({entite: "Auchan"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/franprix').get((req, res) => {
    user.count({entite: "Franprix"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/systemu').get((req, res) => {
    user.count({entite: "System U"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/intermarche').get((req, res) => {
    user.count({entite: "Intermarché"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/monoprix').get((req, res) => {
    user.count({entite: "Monoprix"}, (err, data) =>{
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;