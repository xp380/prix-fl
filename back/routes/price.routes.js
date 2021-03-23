let mongoose = require('mongoose');
express = require('express'),
    router = express.Router();

let store = require('../models/user-schema');

router.route('/').get((req, res) => {
    store.count({}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/carrefour').get((req, res) => {
    store.count({ entite: "Carrefour" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/auchan').get((req, res) => {
    store.count({ entite: "Auchan" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/franprix').get((req, res) => {
    store.count({ entite: "Franprix" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/systemu').get((req, res) => {
    store.count({ entite: "System U" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/intermarche').get((req, res) => {
    store.count({ entite: "Intermarché" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/monoprix').get((req, res) => {
    store.count({ entite: "Monoprix" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/g20').get((req, res) => {
    store.count({ entite: "G20" }, (err, data) => {
        if (err) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;