let moment = require('moment')
let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();


let price = require('../models/user-schema');

router.route('/create').post((req, res, next) => {
    price.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    price.find({}, null, { sort: { '_id': -1 } }, (error, data) => {
        // user.sort({_id: 1},(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/callAPI').post(async (req, res)=> {
   
    if( !req.body.zip || !req.body.codePlu  ){
        
        res.json({ message: "Bad Request parameters missing",  codePostal: req.body.codePostal, CodePlu: req.body.codePlu, prix: req.body.prix, adresse: req.body.adresse });
    }
    else{
        let critere = await 
        price.find({ codePostal: req.body.zip, codePluPlus: req.body.codePlu}, { _id:0, promo:0, origine:0, cat:0, cal:0, cond:0, date: 0, codeMag:0, logo:0, __v:0, ville: 0, })
            
        console.log(critere)
        //4 retour response
        res.json(critere);
        res.status(200)
        } 
})

router.route('/callAPI2').post(async (req, res)=> {
   
    if( !req.body.zip || !req.body.codePlu  ){
        res.json({ message: "Bad Request parameters missing",  codePostal: req.body.codePostal, CodePlu: req.body.codePlu, prix: req.body.prix, adresse: req.body.adresse });
    }
    else{
        let pricesList = await price.find({ codePostal: req.body.zip, codePluPlus: req.body.codePlu})
        // let newResult = []
        // var sum = 0    
        // for(var i = 0; i < pricesList.length; i++)
        // {
        //     sum = pricesList.prix + sum / pricesList.length
        // }
        // newResult.push(sum)
        let sum = 0;
        let count = pricesList.length;
        pricesList.map(({prix}) => sum += prix)


        const newPricesAVG = {
                price: sum/count,
                nbProd : count,
                codePlu: req.body.codePlu,
                zip: req.body.zip,
                productsList: pricesList,
                productsDrive: "none"
            };

        console.log(newPricesAVG);
           
        res.json(newPricesAVG);
        res.status(200)
        
        }
       
})
router.route('/callAPI3').post(async (req, res)=> {
   
    if( !req.body.zip || !req.body.codePlu  ){
        res.json({ message: "Bad Request parameters missing",  codePostal: req.body.codePostal, CodePlu: req.body.codePlu, prix: req.body.prix, adresse: req.body.adresse });
    }
    else{
         //1. recuperation des donnes en DB

        let pricesList = await price.find({ codePostal: req.body.zip, codePluPlus: req.body.codePlu,
           date: 
           { 
             $lt: ('2021-03-19T16:00:00.000Z'),
             $gte: ('2021-03-16T16:00:00.000Z') 
            
           }
        //    { $gte:("2021-03-17")}
            // db.order.find({"OrderDateTime":{ $gte:ISODate("2019-02-10"), $lt:ISODate("2019-02-21") }
        })
        
        

        //2. debut de boucle
        
        let sum = 0;
        let count = pricesList.length;
        pricesList.map(({prix}) => sum += prix)
        max = Math.max(...pricesList.map(({prix}) => prix))
        min = Math.min(...pricesList.map(({prix}) => prix))

        //3. remplissage d'un nouvel objet (au format de response attendu)

        const newResultPrices = {
                price: sum/count,
                maxPrice: max,
                minPrice: min,
                nbProd : count,
                codePlu: req.body.codePlu,
                zip: req.body.zip,
                productsList: pricesList,
                productsDrive: "none"
            };

        console.log(newResultPrices);

        // var responseExpected = {
        //     price: 3.45,
        //     nbProd: 3,
        //     codePlu: "4333",
        //     Zip: "95200",
        
        //     produit_1: {
        //          codePlu: "6633",
        //          productName: "Tomaterondedessables",
        //          productPrice: 3.45,
        //          magName: "xxxx",
        //          magAdresse: "ytgfgf",
        //      },
        //     produit_2: {
        //          codePlu: "6632",
        //          productName: "Tomaterondevrac",
        //          productPrice: 2,
        //      }, 
        
        //     prixDrive: {
        //          codePlu: "3421",
        //          productName: "Tomaterondecagette",
        //          productPrice: 1.5,         
        //      },
        //     autre_info_reponse    
        // };
        //3.1 header du json retour
        
        //3.2 produits (loop)
               
        //4 retour response
        res.json(newResultPrices);
        res.status(200)
        }     
})

router.route('/update/:id').put((req, res, next) => {
    price.findByIdAndUpdate(req.params.id, {
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
    price.findByIdAndRemove(req.params.id, (error, data) => {
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