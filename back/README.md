# Documentation d'utilisation des tests via Postman

L'utilisation de Postman va nous permettre de visualiser le format des réponses d'API attendus.

## Liste des Urls

http://localhost:4000/users/callAPI3

### Contexte d'utilisation

Je vais envoyer(POST) une requête au serveur qui va afficher les données correspondant aux critères cités antérieurement. 
Le serveur va analyser les données que j'ai envoyés et il va filtrer les données qui correspondent au critères pré-cités.
Ensuite ne pas oublier de mettre en "body" avec des données "raw" et de régler le format en "JSON".

#### L'utilisation des tokens pour protéger l'API

Pour protéger l'API contre d'éventuels attaques de hackers, il sera protégé grâce aux tokens d'authentifications. 
Lorsque l'utilisateur voudra utiliser l'un de ces urls, il devra d'abord récupérer le token en réalisant les étapes suivantes:
Par ex, il veut voir la liste des tomates : http://localhost:4000/api/getAllProducts
1) 

##### Les url testés

Pour le moment, il y a qu'un seul url testé:

http://localhost:4000/users/callAPI3

Ce lien va juste afficher toute les données qui correspondent au codePostal et au codePLU.
Par exemple, dans Postman, en insérant l'url et en envoyant comme donnée le codePostal(ex:75016) et le codePLU(4985), je devrais avoir toute les données(_id, promo, origine, adresse, ville, codePostal, entite, date etc).
L'objet response sera plus précis et plus filtré. Comme query, Avec le prix max, le prix min et les données sélectionnées entre 17/03/21 et 18/03/21.
 En reprenant les critères au-dessus, je devrais avoir comme objet response suivant:
 
* price: Moyenne calculée par rapport au nb de supermarchés ( somme totale du prix des produits / nb de produits)
* nbProd: Nombre d'objets 
* codePlu: Donnée insérée lors de la saisie et utilisée comme critère
* zip: Donnée insérée lors de la saisie et utilisée comme critère
 productsList: [
{id, date, adresse, entite, codePluPlus, prix, promo, cat ... }, 
{id, date, adresse, entite, codePluPlus, prix, promo, cat} ...] 
en fonction du nombre de magasins utilisés comme critères(nbProd)

{
    "price": 1.3,
    "maxPrice": 1.6,
    "minPrice": 1,
    "nbProd": 3,
    "codePlu": 4985,
    "zip": 75016,
    "productsList": [
        {
            "_id": "60586248b50d442b80ae30b9",
            "promo": "false",
            "prix": 1.6,
            "origine": "Pays tiers",
            "cat": "",
            "cal": "",
            "cond": "",
            "date": "22/03/2021",
            "codePluPlus": "4985",
            "codePlu": "",
            "codeMag": "",
            "entite": "Carrefour",
            "logo": "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
            "adresse": "181 Avenue Victor Hugo",
            "ville": "Paris",
            "codePostal": "75016",
            "__v": 0
        },
        {
            "_id": "60586251b50d442b80ae30ba",
            "promo": "false",
            "prix": 1.3,
            "origine": "FR",
            "cat": "",
            "cal": "",
            "cond": "",
            "date": "22/03/2021",
            "codePluPlus": "4985",
            "codePlu": "",
            "codeMag": "",
            "entite": "Carrefour",
            "logo": "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
            "adresse": "181 Avenue Victor Hugo",
            "ville": "Paris",
            "codePostal": "75016",
            "__v": 0
        },
        {
            "_id": "6058a175f4996c3c76ba1998",
            "promo": "false",
            "prix": 1,
            "origine": "Maurice",
            "cat": "1",
            "cal": "GY",
            "cond": "L'unité",
            "date": "2021-03-21T13:53:41.304Z",
            "codePluPlus": "4985",
            "codePlu": "",
            "codeMag": "",
            "entite": "Carrefour",
            "logo": "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
            "adresse": "181 Avenue Victor Hugo",
            "ville": "Paris",
            "codePostal": "75016",
            "__v": 0
        }
    ],
    "productsDrive": "none"
}


