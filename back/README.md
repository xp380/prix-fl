# Documentation d'utilisation des tests via Postman

L'utilisation de Postman va nous permettre de visualiser le format des réponses d'API attendus.

## Liste des Urls

http://localhost:4000/users/callAPI3

### Contexte d'utilisation

Je vais envoyer(POST) une requête au serveur qui va afficher les données correspondant aux critères cités antérieurement. 
Le serveur va analyser les données que j'ai envoyés et il va filtrer les données qui correspondent au critères pré-cités.
Ensuite ne pas oublier de mettre en "body" avec des données "raw" et de régler le format en "JSON".

#### L'utilisation des tokens pour protéger l'API

Pour protéger l'API contre d'éventuels attaques de hackers, il sera protégé grâce à un token. Ce n'est pas un "vrai" token généré de façon aléatoire par une librairie. C'est un token que vous pouvez y accéder en accédant au fichier user.routes.js dans le dossier back. 
Lorsque l'utilisateur voudra utiliser l'un de ces urls, il devra d'abord toujours mettre l'objet token.
 

##### Les url testés

Pour le moment, il y a qu'un seul url testé:

http://localhost:4000/users/callAPI3

Ce lien va juste afficher toute les données qui correspondent au codePostal et au codePLU.
Par exemple, dans Postman, en insérant l'url et en envoyant comme donnée le codePostal(ex:95200) et le codePLU(4985), je devrais avoir toute les données(_id, promo, origine, adresse, ville, codePostal, entite, date etc).
L'objet response sera plus précis et plus filtré. Comme query, Avec le prix max, le prix min et les données sélectionnées entre hier et aujourd'hui.
En reprenant les critères au-dessus, je devrais avoir comme objet response suivant:
 
* price: Moyenne calculée par rapport au nb de supermarchés ( somme totale du prix des produits / nb de produits)
* nbProd: Nombre d'objets 
* codePlu: Donnée insérée lors de la saisie et utilisée comme critère
* zip: Donnée insérée lors de la saisie et utilisée comme critère
 productsList: [
{id, date, adresse, entite, codePluPlus, prix, promo, cat ... }, 
{id, date, adresse, entite, codePluPlus, prix, promo, cat} ...] 
en fonction du nombre de magasins utilisés comme critères(nbProd)

exemple d'utilisation: 

1 - Coller l'url suivant à côté du bouton send: "http://localhost:4000/prices/api/getPrice/"
2 - Mettez les paramètres suivants: Body, raw et sélectionnez JSON(à côté de GraphQL).
3 - Mettez le call json suivant: 
rem: Tant que vous n'aurez pas mis le bon token: Postman vous renverra toujours "Bad request parameters missing".
{
    {
    "token": "7863UYBJ3GIJD853IUDI0I0X082", 
    "zip": 95200,
    "codePlu": 4985
    }
}
4 - Résultat du response json: 
{
    "price": 5.84,
    "maxPrice": 9.97,
    "minPrice": 1.7,
    "nbProd": 2,
    "codePlu": 4985,
    "zip": 95200,
    "productsList": [
        {
            "_id": "6059c008afecdf5321d6bec5",
            "promo": "false",
            "prix": 1.7,
            "origine": "Costa Rica",
            "cat": "1",
            "cal": "9",
            "cond": "Pièce",
            "date": "23/03/2021",
            "codePluPlus": "4985",
            "codePlu": "",
            "codeMag": "",
            "entite": "G20",
            "logo": "https://upload.wikimedia.org/wikipedia/fr/9/9a/Logo_Supermarch%C3%A9s_G20_%282011%29.svg",
            "adresse": "5, rue Eric de St-Sauveur",
            "ville": "Sarcelles",
            "codePostal": "95200",
            "__v": 0
        },
        {
            "_id": "6059c0e9afecdf5321d6bec6",
            "promo": "false",
            "prix": 9.97,
            "origine": "Costa Rica",
            "cat": "",
            "cal": "",
            "cond": "kg",
            "date": "23/03/2021",
            "codePluPlus": "4985",
            "codePlu": "",
            "codeMag": "",
            "entite": "G20",
            "logo": "https://upload.wikimedia.org/wikipedia/fr/9/9a/Logo_Supermarch%C3%A9s_G20_%282011%29.svg",
            "adresse": "5, rue Eric de St-Sauveur",
            "ville": "Sarcelles",
            "codePostal": "95200",
            "__v": 0
        }
    ],
    "productsDrive": "none"
}


