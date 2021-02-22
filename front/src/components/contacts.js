const contacts = [
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "181 Avenue Victor Hugo",
        ville: "Paris",
        codePostal: "75016",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png"
    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "Clos Du Mont D'est",
        ville: "Noisy-le-Grand",
        codePostal: "93160",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png"
    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "5 Rue Franklin",
        ville: "Montreuil",
        codePostal: "93100",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png"
    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "33 Rue De Fremicourt",
        ville: "Paris",
        codePostal: "75015",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "16 rue Dufrenoy",
        ville: "Paris",
        codePostal: "75016",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "50 rue de la Fédération",
        ville: "Paris",
        codePostal: "75015",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "98 avenue Emile Cossonneau",
        ville: "Noisy le Grand",
        codePostal: "93160",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "4 avenue Paul Signac",
        ville: "Montreuil",
        codePostal: "93100",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        entite: "Intermarché",
        adresse: "59 Rue Boileau",
        ville: "Paris",
        codePostal: "75016",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        entite: "Intermarché",
        adresse: " 81 rue de Lourmel",
        ville: "Paris",
        codePostal: "75015",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: " rue de Javel",
        ville: "Paris",
        codePostal: "75015",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "33 Rue Raffet",
        ville: "Paris",
        codePostal: "75016",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "1 place des opérettes",
        ville: "Noisy-le-Grand",
        codePostal: "93160",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "98 Boulevard de la Boissière",
        ville: "Montreuil",
        codePostal: "93100",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Logo_Franprix_-_2015.svg",
        entite: "Franprix",
        adresse: "",
        ville: "",
        codePostal: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Logo_Franprix_-_2015.svg"
    },
    {
        imgURL: "http://assets.stickpng.com/images/5a1c2d20f65d84088faf13c4.png",
        entite: "Monoprix",
        adresse: "",
        ville: "",
        codePostal: "",
        logo: "http://assets.stickpng.com/images/5a1c2d20f65d84088faf13c4.png"
    },
];

export default contacts;
