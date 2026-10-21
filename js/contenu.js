/* =====================================================================
   CONTENU DU SITE — AS GOURNAY NATATION
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre à jour le site :
   horaires, tarifs, actus, prochaine compétition, équipe, liens...
   Règles simples :
     - garder les guillemets "..." autour des textes
     - garder les virgules entre les éléments
     - les dates s'écrivent "AAAA-MM-JJ" (ex : "2026-11-11")
   ===================================================================== */

window.CLUB = {

  saison: "2026-2027",

  /* Bandeau d'information en haut du site (fermeture de piscine, etc.)
     Mettre actif: true pour l'afficher, false pour le cacher. */
  alerte: {
    actif: false,
    texte: "Piscine fermée le jeudi 12 novembre : pas d'entraînement ce soir-là."
  },

  contact: {
    email: "asgournaynatation@gmail.com",
    telephone: "06 15 54 59 99",
    adresse: "Piscine municipale, avenue des Aulnaies",
    ville: "76220 Gournay-en-Bray",
    instagram: "https://www.instagram.com/asg.natation/",
    facebook: "https://facebook.com/asgnatation",
    inscription: "#"   // À REMPLACER par le lien du formulaire d'inscription en ligne
  },

  chiffres: [
    { valeur: 105, suffixe: "", label: "licenciés cette saison" },
    { valeur: 6, suffixe: "", label: "groupes, du loisir à la compète" },
    { valeur: 5, suffixe: "", label: "jours d'entraînement par semaine" },
    { valeur: 25, suffixe: " m", label: "le bassin sportif" },
    { valeur: 15, suffixe: " m", label: "le bassin d'apprentissage, pour l'animation et la pédagogie" },
    { valeur: 1, suffixe: "", label: "pentaglisse, pour les temps forts" }
  ],

  /* Groupes et horaires. jour : lun, mar, mer, jeu, ven, sam
     debut / fin au format "18h30". note : texte optionnel. */
  groupes: [
    {
      id: "jeunes", filiere: "loisirs", nom: "Jeunes", public: "Nés en 2015 et après", naissanceMin: 2015, naissanceMax: null,
      tarif: 185, seances: "2 séances au choix",
      description: "Apprendre à bien nager les 4 nages et prendre goût à l'eau, à son rythme.",
      creneaux: [
        { jour: "mar", debut: "17h", fin: "18h" },
        { jour: "mer", debut: "13h", fin: "14h" },
        { jour: "sam", debut: "10h", fin: "11h" }
      ]
    },
    {
      id: "ados", filiere: "loisirs", nom: "Ados", public: "Nés de 2009 à 2014", naissanceMin: 2009, naissanceMax: 2014,
      tarif: 185, seances: "2 séances",
      description: "Se perfectionner, garder la forme et nager entre potes, sans pression du chrono.",
      creneaux: [
        { jour: "mer", debut: "18h", fin: "19h" },
        { jour: "sam", debut: "11h", fin: "12h" }
      ]
    },
    {
      id: "adultes-loisirs", filiere: "loisirs", nom: "Adultes", public: "Nés en 2008 et avant", naissanceMin: null, naissanceMax: 2008,
      tarif: 205, seances: "2 à 3 séances",
      description: "Reprendre, progresser en technique ou simplement enchaîner les longueurs.",
      creneaux: [
        { jour: "mar", debut: "19h45", fin: "20h45" },
        { jour: "mer", debut: "13h", fin: "14h", note: "en libre" },
        { jour: "jeu", debut: "20h", fin: "21h" }
      ]
    },
    {
      id: "groupe-1", filiere: "competition", nom: "Groupe 1", public: "Nés en 2015 et après", naissanceMin: 2015, naissanceMax: null,
      tarif: 215, seances: "3 séances",
      description: "Les jeunes compétiteurs : départs, virages, et les premiers chronos qui tombent.",
      creneaux: [
        { jour: "lun", debut: "18h", fin: "19h15" },
        { jour: "mer", debut: "19h", fin: "20h" },
        { jour: "jeu", debut: "18h", fin: "19h15" }
      ]
    },
    {
      id: "groupe-2", filiere: "competition", nom: "Groupe 2", public: "Nés de 2003 à 2014", naissanceMin: 2003, naissanceMax: 2014,
      tarif: 225, seances: "3 séances",
      description: "Ados et jeunes adultes : volume, technique fine et objectifs départementaux, régionaux, voire plus haut.",
      creneaux: [
        { jour: "lun", debut: "18h30", fin: "20h" },
        { jour: "mer", debut: "19h", fin: "20h30" },
        { jour: "jeu", debut: "18h30", fin: "20h" }
      ]
    },
    {
      id: "adultes-competition", filiere: "competition", nom: "Adultes", public: "Nés en 2002 et avant", naissanceMin: null, naissanceMax: 2002,
      tarif: 225, seances: "3 à 4 séances",
      description: "Pour les adultes qui veulent un vrai plan d'entraînement, en bassin comme en eau libre.",
      creneaux: [
        { jour: "lun", debut: "19h", fin: "20h", note: "compétiteurs uniquement" },
        { jour: "mar", debut: "19h", fin: "20h30" },
        { jour: "mer", debut: "13h", fin: "14h", note: "en libre" },
        { jour: "jeu", debut: "19h15", fin: "20h45" }
      ]
    }
  ],

  /* ÉVÉNEMENTS ET COMPÉTITIONS À VENIR
     Le site affiche automatiquement le PROCHAIN événement (avec compte à rebours)
     et liste les suivants. Une fois la date passée, il disparaît tout seul.
     Pour en ajouter un : copier un bloc { ... }, le coller dans la liste et changer les infos.
       type     : "competition" ou "evenement"
       date     : "AAAA-MM-JJ"      heure : "HH:MM"
       lienLive : lien du live FFN (programme et résultats). Laisser "" tant que la FFN ne l'a pas publié. */
  evenements: [
    {
      type: "competition",
      nom: "Compétition jeunes au Havre",
      date: "2026-11-11",
      heure: "09:00",
      lieu: "Le Havre",
      public: "Réservée aux nageurs nés de 2015 à 2019",
      lienLive: ""
    }
  ],

  bonnet: {
    prix: 6
  },

  /* Actus et résultats. categorie : "bassin", "eau-libre" ou "vie-du-club" */
  actus: [
    {
      categorie: "bassin",
      date: "2026-10-11",
      titre: "Nogent-sur-Oise : c'est parti !",
      image: "assets/img/nogent-equipe.webp",
      resume: "Première compétition de la saison, avec le nouveau maillot offert par le Crédit Agricole Normandie-Seine. 12 clubs au départ, dont un d'Île-de-France.",
      temps_forts: [
        { valeur: "52\"02", label: "Romane L., 2e au 50 m brasse (2016)" },
        { valeur: "5", label: "nageurs en finale" },
        { valeur: "12", label: "clubs présents" }
      ]
    },
    {
      categorie: "eau-libre",
      date: "2026-06-27",
      titre: "6 podiums au plan d'eau du Canada",
      image: "assets/img/trophees-eau-libre.webp",
      resume: "Trois engagés à la 2e manche d'eau libre organisée par le BAC (Beauvais), dans une eau à 25 degrés. Un podium au scratch et un dans sa catégorie pour chacun.",
      temps_forts: [
        { valeur: "1er", label: "Médéric, 1 500 m (catégorie)" },
        { valeur: "3e", label: "Gaby, 1 500 m (catégorie)" },
        { valeur: "1er", label: "David, 3 km (catégorie), 3e au scratch" }
      ]
    },
    {
      categorie: "vie-du-club",
      date: "2026-06-20",
      titre: "Fête du club et assemblée générale",
      image: "assets/img/fete-club-medailles.webp",
      resume: "Compétition interne, jeux, repas façon auberge espagnole et AG à la piscine de Gournay. Tous les nageurs et officiels sont repartis médaillés. Merci à la mairie pour le prêt des locaux (et du toboggan).",
      temps_forts: [
        { valeur: "100 %", label: "des nageurs médaillés" },
        { valeur: "1", label: "toboggan très apprécié" }
      ]
    }
  ],

  galerie: [
    { src: "assets/img/equipe-fresque.webp", alt: "Les nageurs de l'ASG devant la fresque du nageur" },
    { src: "assets/img/eau-libre-depart.webp", alt: "Départ d'une course en eau libre sur un plan d'eau" },
    { src: "assets/img/groupe-bonnets.webp", alt: "Les nageurs du club, bras levés, au bord du bassin" },
    { src: "assets/img/podium-eau-libre.webp", alt: "David sur la plus haute marche du podium en eau libre" },
    { src: "assets/img/bord-bassin.webp", alt: "Trois jeunes nageurs et leur coach au bord du bassin" },
    { src: "assets/img/fete-ballons.webp", alt: "Fête du club dans le bassin avec des ballons" },
    { src: "assets/img/nogent-equipe.webp", alt: "L'équipe à Nogent-sur-Oise avec le nouveau maillot" },
    { src: "assets/img/fete-club-medailles.webp", alt: "Les nageurs médaillés après la compétition interne" },
    { src: "assets/img/trophees-eau-libre.webp", alt: "Trophées après la compétition d'eau libre" }
  ],

  /* Équipe : photo = "assets/img/equipe/prenom.webp" quand elle sera prête (laisser "" en attendant) */
  equipe: {
    bureau: [
      { nom: "Véronique Cotineau", role: "Présidente", photo: "" },
      { nom: "Kristell Faverot", role: "Secrétaire", photo: "" },
      { nom: "Véronique Bisschope", role: "Trésorière", photo: "" }
    ],
    entraineurs: [
      { nom: "David Cotineau", role: "Entraîneur principal", photo: "" },
      { nom: "Médéric Cotineau", role: "Entraîneur", photo: "" }
    ],
    officiels: [
      { nom: "Margot Cateigne", role: "Officielle", photo: "" },
      { nom: "Mariane Pastore", role: "Officielle", photo: "" },
      { nom: "Camille Métier", role: "Officielle", photo: "" },
      { nom: "Jennifer Dekkers", role: "Officielle", photo: "" }
    ],
    communication: [
      { nom: "Gaby Cotineau", role: "Community manager", photo: "" }
    ]
  },

  aides: [
    { titre: "Réduction famille", texte: "−10 € pour le 2e adhérent, −15 € pour le 3e, −20 € pour le 4e." },
    { titre: "Pass Sport", texte: "50 € de réduction pour les jeunes éligibles (ne s'applique pas à la part licence)." },
    { titre: "Atouts Normandie", texte: "50 € pour les 15-25 ans inscrits sur la plateforme de la Région." },
    { titre: "Chèques ANCV", texte: "Chèques vacances ANCV et Coupon Sport acceptés, jusqu'à la moitié de l'adhésion." }
  ],

  aSavoir: [
    "Vestiaires accessibles 10 minutes avant la séance, bassin 5 minutes avant.",
    "Les parents restent hors des plages du bassin.",
    "Pas d'entraînement pendant les vacances scolaires (des stages peuvent être proposés aux groupes compétition).",
    "Bonnet du club obligatoire en compétition."
  ],

  partenaires: [
    { nom: "Crédit Agricole Normandie-Seine", logo: "assets/logos/credit-agricole.png", role: "Fournisseur officiel des maillots" },
    { nom: "Ville de Gournay-en-Bray", logo: "assets/logos/ville-gournay.png" },
    { nom: "Communauté de communes des 4 Rivières en Bray", logo: "assets/logos/comcom-4-rivieres.png" },
    { nom: "Département de la Seine-Maritime", logo: "assets/logos/seine-maritime.png" },
    { nom: "Région Normandie", logo: "assets/logos/region-normandie.png" },
    { nom: "Atouts Normandie", logo: "assets/logos/atouts-normandie.png" },
    { nom: "Pass Sport", logo: "assets/logos/pass-sport.png" }
  ]
};
