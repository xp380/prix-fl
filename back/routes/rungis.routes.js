let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let rungis = require('../models/rungis-schema');

// Cette url affichera seulement l'id du marché et la region. Je mettrai un 0 à tous les objets sauf marche_id.
router.route('/markets').get((req, res) => {
    rungis.find({}, null, {projection: { _id: 0 }}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Cette url va afficher le libelle et le code_libelle en prenant soin de ne pas prendre des doublons et en prenant compte du marché sélectionné.
router.route('/products').get((req, res) => {

     rungis.find({}, null, {projection: { _id:0, libelle: 1, code_libelle: 1, marche: 1}}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// app.get("/products", function (req, res) {
//     const marche_id = req.query.marche_id;
//     con.query(
//         // `SELECT DISTINCT libelle, code_libelle, marche FROM marche_all WHERE ${
//         `SELECT DISTINCT libelle, code_libelle, marche FROM marche_alpha WHERE ${marche_id !== undefined ? `(marche = '${marche_id}')` : ""
//         } `,
//         function (err, data) {
//             err ? res.send(err) : res.json(data);
//         }
//     );
// });
// router.route('/api/getPrice/').post(async (req, res) => {

//     if (!req.body.zip || !req.body.codePlu || req.body.token !== "7863UYBJ3GIJD853IUDI0I0X082") {
//         res.json({ message: "Bad Request parameters missing", codePostal: req.body.codePostal, CodePlu: req.body.codePlu, prix: req.body.prix, adresse: req.body.adresse });
//     }
//     else {
        
//         let pricesList = await price.find({

//             codePostal: req.body.zip, codePluPlus: req.body.codePlu,
//             $where: function () {

//                 today = new Date(); //
//                 today.setDate(today.getDate() - 10) //Réglez le chiffre pour calculer la date
//                 today.setTime(today.getTime() - today.getHours() * 3600 * 1000 - today.getMinutes() * 60 * 1000);
//                 return (this._id.getTimestamp() >= today)
//             }
//         })

      
//         let sum = 0;
//         let count = pricesList.length;
//         pricesList.map(({ prix }) => sum += prix)
//         max = Math.max(...pricesList.map(({ prix }) => prix))
//         min = Math.min(...pricesList.map(({ prix }) => prix))


//         const newResultPrices = {
//             price: Math.round((sum / count) * 100) / 100,
//             maxPrice: max,
//             minPrice: min,
//             nbProd: count,
//             codePlu: req.body.codePlu,
//             zip: req.body.zip,
//             productsList: pricesList,
//             productsDrive: "none"
//         };

//         console.log(newResultPrices);

//         res.json(newResultPrices);
//         res.status(200).send("prices called")
//     }
// })


// Cette Url va afficher toutes les données en fonction du marché_id déjà sélectionné et du product_id sélectionné
// router.route('/productSelected/').get((req, res) => {
//     const product_id = req.query.product_id;
//     const marche_id = req.query.marche_id;

//      rungis.find({}, null, { sort: { '_id': -1 } }, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//      } )
// })



router.route('/').get((req, res) => {
    rungis.find({}, null, { sort: { '_id': -1 } }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/create').post((req, res, next) => {
    rungis.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/update/:id').put((req, res, next) => {
    rungis.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    rungis.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;