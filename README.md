# Documentation d'utilisation des tests via Postman

L'utilisation de Postman va nous permettre de visualiser le format des réponses d'API attendus.

## Liste des Urls


### Contexte d'utilisation

Je vais envoyer(POST) une requête au serveur qui va afficher les données correspondant aux critères cités antérieurement. 
Le serveur va analyser les données que j'ai envoyés et il va filtrer les données qui correspondent au critères pré-cités.
Ensuite ne pas oublier de mettre en "body" avec des données "raw" et de régler le format en "JSON".

#### Les url testés

Pour le moment, il y a 2 urls testés:

1) http://localhost:4000/users/callAPI

Ce lien va juste afficher toute les données qui correspondent au codePostal et au codePLU.
Par exemple, dans Postman, en insérant l'url et en envoyant comme donnée le codePostal(ex:75016) et le codePLU(4985), je devrais avoir toute les données(_id, promo, origine, adresse, ville, codePostal, entite, date etc).

[
    {
        "prix": 234,
        "codePluPlus": "4985",
        "codePlu": "FGR",
        "entite": "Carrefour",
        "adresse": "181 Avenue Victor Hugo",
        "codePostal": "75016"
    },
    {
        "prix": 1.3,
        "codePluPlus": "4985",
        "codePlu": "AQW",
        "entite": "Carrefour",
        "adresse": "181 Avenue Victor Hugo",
        "codePostal": "75016"
    },
    {
        "prix": 1.9,
        "codePluPlus": "4985",
        "codePlu": "AQW",
        "entite": "Carrefour",
        "adresse": "181 Avenue Victor Hugo",
        "codePostal": "75016"
    },
]

2) http://localhost:4000/users/callAPI2

Maintenant, ce lien va être différent du précédent. L'objet response sera plus précis et plus filtré qu'avant. En reprenant les mêmes critères qu'au-dessus, je devrais avoir comme objet response suivant:

- price: Moyenne calculée par rapport au nb de supermarchés ( somme totale du prix des produits / nb de produits)
- nbProd: Nombre d'objets 
- codePlu: Donnée insérée lors de la saisie et utilisée comme critère
- zip: Donnée insérée lors de la saisie et utilisée comme critère
- productsList: [
{id, date, adresse, entite, codePluPlus, prix, promo, cat ... }, 
{id, date, adresse, entite, codePluPlus, prix, promo, cat} ...] 
en fonction du nombre de magasins utilisés comme critères(nbProd)

{
    "price": 1522.8083333333334,
    "nbProd": 24,
    "codePlu": "4985",
    "zip": "75016",
    "productsList": [
        {
            "_id": "6038bf02f8957b3065aa5113",
            "promo": "false",
            "prix": 234,
            "origine": "Costa Rica",
            "cat": "2",
            "cal": "YUIO",
            "cond": "Vrac",
            "date": "2021-02-03T09:27:03.451Z",
            "codePluPlus": "4985",
            "codePlu": "FGR",
            "codeMag": "6789",
            "entite": "Carrefour",
            "logo": "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
            "adresse": "181 Avenue Victor Hugo",
            "ville": "Paris",
            "codePostal": "75016",
            "__v": 0
        },
}

3) http://localhost:4000/users/callAPI3

Avec le prix max, le prix min et les données sélectionnées entre 17/03/21 et 18/03/21
