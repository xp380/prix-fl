const contacts = [
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "181 Avenue Victor Hugo",
        ville: "Paris",
        codePostal: "75016",
        location: "181 Avenue Victor Hugo 75016 Paris",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        redirect: "https://www.google.fr/maps/place/Carrefour+Market+Paris+Lamartine/@48.8666267,2.2743682,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66557b726a6c3:0xb0014e03a05a8144!8m2!3d48.8666267!4d2.2765569",

    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "Clos Du Mont D'est",
        location: "Clos du Mont D'est 93160 Noisy-le-Grand",
        ville: "Noisy-le-Grand",
        codePostal: "93160",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        redirect: "https://www.google.fr/maps/place/Carrefour+Noisy+Le+Grand/@48.8394007,2.5440708,17z/data=!3m2!4b1!5s0x47e60e084f173c13:0x7edf0a3a2372d9b0!4m5!3m4!1s0x47e60de2304e539d:0x7b0d2dcf557093c6!8m2!3d48.8394007!4d2.5462595"
    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "5 Rue Franklin",
        ville: "Montreuil",
        location: "5 rue Franklin 93100 Montreuil",
        codePostal: "93100",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        redirect: "https://www.google.fr/maps/place/Carrefour+Drive+Montreuil+Coeur+De+Ville/@48.8617551,2.4406125,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66d6b357710c5:0xd022e73f4653e28c!8m2!3d48.8617551!4d2.4428012"
    },
    {
        imgURL: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        entite: "Carrefour",
        adresse: "33 Rue De Fremicourt",
        ville: "Paris",
        location: "33 rue de Fremicourt 75015 Paris",
        codePostal: "75015",
        logo: "https://www.coupvray.fr/wp-content/uploads/2018/04/1007px-Logo_Carrefour_Market.svg-Copie.png",
        redirect: "https://www.google.fr/maps/place/Carrefour+Drive/@48.8477334,2.2971233,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67110e0c04a0f:0x263b1e16de6b1d9!8m2!3d48.8477334!4d2.299312"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "16 rue Dufrenoy",
        ville: "Paris",
        location: "16 rue Dufrenoy 75016 Paris",
        codePostal: "75016",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        redirect: "https://www.google.fr/maps/place/U+Express+et+Drive/@48.8662788,2.2716131,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66557146bb191:0x44f8dc55d9c66fd1!8m2!3d48.8662788!4d2.2738018"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "50 rue de la Fédération",
        ville: "Paris",
        location: "50 rue de la Fédération 75015 Paris",
        codePostal: "75015",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        redirect: "https://www.google.fr/maps/place/U+Express+et+Drive/@48.8534965,2.2925686,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6701e9714d61b:0x24cd539d2260950a!8m2!3d48.8534965!4d2.2947573"
    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "98 avenue Emile Cossonneau",
        ville: "Noisy le Grand",
        location: "98 avenue Emile Cossonneau 93160 Noisy le Grand",
        codePostal: "93160",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        redirect: "https://www.google.fr/maps/place/Super+U+et+Drive/@48.84904,2.5639775,17z/data=!3m1!4b1!4m5!3m4!1s0x47e60e1f03209c4f:0x11cbf2a0f2d77539!8m2!3d48.84904!4d2.5661662"

    },
    {
        imgURL: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        entite: "System U",
        adresse: "4 avenue Paul Signac",
        ville: "Montreuil",
        location: "4 avenue Paul Signac 93100 Montreuil",
        codePostal: "93100",
        logo: "https://www.neevagroup.com/w2018/wp-content/uploads/2017/06/Systeme_U_2009_logo.png",
        redirect: "https://www.google.fr/maps/place/U+Express+et+Drive/@48.8694445,2.4475727,17z/data=!4m8!1m2!2m1!1sSystem+u+4+avenue+Paul+Signac+Montreuil!3m4!1s0x47e66d492900317d:0xa4a8c6407e6fa15!8m2!3d48.8694556!4d2.4498192"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        entite: "Intermarché",
        adresse: "59 Rue Boileau",
        ville: "Paris",
        location: "59 rue Boileau 75016 Paris",
        codePostal: "75016",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        redirect: "https://www.google.fr/maps/place/Intermarch%C3%A9+EXPRESS+Paris+et+Drive/@48.842704,2.2621875,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67abca9f575d1:0x5200a9cafb25f9b1!8m2!3d48.842704!4d2.2643762"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        entite: "Intermarché",
        adresse: " 81 rue de Lourmel",
        ville: "Paris",
        location: "81 rue de Lourmel 75015 Paris",
        codePostal: "75015",
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f4/Logo_Intermarch%C3%A9_%28Super%29.svg/1200px-Logo_Intermarch%C3%A9_%28Super%29.svg.png",
        redirect: "https://www.google.fr/maps/place/Intermarch%C3%A9+EXPRESS+Paris/@48.8448648,2.2855582,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6722fa29d0ed5:0x7966961f082d8266!8m2!3d48.8448648!4d2.2877469"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: " rue de Javel",
        ville: "Paris",
        location: "rue de Javel 75015 Paris",
        codePostal: "75015",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        redirect: "https://www.google.fr/maps/place/Auchan+Paris+Javel/@48.8467123,2.2783676,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67008a4c6d641:0x551d4dea57b5ac67!8m2!3d48.8467123!4d2.2805563"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "33 Rue Raffet",
        ville: "Paris",
        location: "33 rue Raffet 75016 Paris",
        codePostal: "75016",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        redirect: "https://www.google.fr/maps/place/Auchan+-+A+2+pas/@48.8519618,2.2621517,17z/data=!3m1!4b1!4m5!3m4!1s0x47e67ab1958e295b:0x53fe4e89d63c5a6!8m2!3d48.8519618!4d2.2643404"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "1 place des opérettes",
        ville: "Noisy-le-Grand",
        location: "1 place des opérettes 93160 Noisy-le-Grand",
        codePostal: "93160",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        redirect: "https://www.google.fr/maps/place/Auchan+Supermarch%C3%A9+Noisy-Le-Grand/@48.8476142,2.5465455,17z/data=!3m1!4b1!4m5!3m4!1s0x47e60e03d81782ab:0x762f1c047d0198e6!8m2!3d48.8476142!4d2.5487342"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        entite: "Auchan",
        adresse: "98 Boulevard de la Boissière",
        ville: "Montreuil",
        location: "98 Boulevard de la Boissière 93100 Montreuil",
        codePostal: "93100",
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_Auchan_%282015%29.svg",
        redirect: "https://www.google.fr/maps/place/Auchan+Supermarch%C3%A9+Montreuil-Sous-Bois/@48.8776786,2.4560303,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66d34b777dedd:0x12204b10e5d2b33f!8m2!3d48.8776786!4d2.458219"

    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Logo_Franprix_-_2015.svg",
        entite: "Franprix",
        adresse: "",
        ville: "",
        codePostal: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Logo_Franprix_-_2015.svg",

    },
    {
        imgURL: "http://assets.stickpng.com/images/5a1c2d20f65d84088faf13c4.png",
        entite: "Monoprix",
        adresse: "",
        ville: "",
        codePostal: "",
        logo: "http://assets.stickpng.com/images/5a1c2d20f65d84088faf13c4.png"
    },
    {
        imgURL: "https://upload.wikimedia.org/wikipedia/fr/9/9a/Logo_Supermarch%C3%A9s_G20_%282011%29.svg",
        entite: "G20",
        adresse: "5, rue Eric de St-Sauveur",
        ville: "Sarcelles",
        location: "5 rue Eric de St-Sauveur 95200 Sarcelles",
        codePostal: "95200",
        logo: "https://upload.wikimedia.org/wikipedia/fr/9/9a/Logo_Supermarch%C3%A9s_G20_%282011%29.svg",
        redirect: "https://www.google.com/maps/place/Supermarch%C3%A9+G20./@48.9771367,2.3867305,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66a32a4606b9d:0xcc9ad9fc846ee00f!8m2!3d48.9771367!4d2.3889192"
    }
];

export default contacts;
