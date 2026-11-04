/* =====================================================================
   GALERIE PHOTOS PAR ANNÉE — AS GOURNAY NATATION
   ---------------------------------------------------------------------
   Pour ajouter des photos :
   1. Déposer les images dans assets/galerie/<année>/ en deux tailles :
      nom.webp (grande, environ 1600 px) et nom-sm.webp (miniature, environ 560 px).
   2. Ajouter un album dans l'année voulue (ou une photo dans un album existant) :
      { titre: "Meeting de ...", date: "12 mars", photos: [
          { src: "2027/meeting-1.webp", w: 1600, h: 1200, legende: "Texte optionnel" }
      ] }
   3. Pour une nouvelle année, copier un bloc { annee: "...", albums: [...] } en haut de la liste.
   L'année la plus récente s'affiche en premier. w et h = largeur et hauteur de la grande image.
   ===================================================================== */
window.GALERIE = {
 "annees": [
  {
   "annee": "2026",
   "albums": [
    {
     "titre": "La saison en images",
     "date": "Juin à octobre",
     "photos": [
      {
       "src": "assets/img/equipe-fresque.webp",
       "w": 828,
       "h": 553,
       "legende": "Les nageurs de l'ASG devant la fresque du nageur"
      },
      {
       "src": "assets/img/eau-libre-depart.webp",
       "w": 828,
       "h": 812,
       "legende": "Départ d'une course en eau libre sur un plan d'eau"
      },
      {
       "src": "assets/img/groupe-bonnets.webp",
       "w": 828,
       "h": 656,
       "legende": "Les nageurs du club, bras levés, au bord du bassin"
      },
      {
       "src": "assets/img/podium-eau-libre.webp",
       "w": 828,
       "h": 812,
       "legende": "David sur la plus haute marche du podium en eau libre"
      },
      {
       "src": "assets/img/bord-bassin.webp",
       "w": 828,
       "h": 608,
       "legende": "Trois jeunes nageurs et leur coach au bord du bassin"
      },
      {
       "src": "assets/img/fete-ballons.webp",
       "w": 828,
       "h": 569,
       "legende": "Fête du club dans le bassin avec des ballons"
      },
      {
       "src": "assets/img/nogent-equipe.webp",
       "w": 828,
       "h": 812,
       "legende": "L'équipe à Nogent-sur-Oise avec le nouveau maillot"
      },
      {
       "src": "assets/img/fete-club-medailles.webp",
       "w": 828,
       "h": 612,
       "legende": "Les nageurs médaillés après la compétition interne"
      },
      {
       "src": "assets/img/trophees-eau-libre.webp",
       "w": 828,
       "h": 819,
       "legende": "Trophées après la compétition d'eau libre"
      }
     ]
    },
    {
     "titre": "Fête de Pâques",
     "date": "Avril",
     "photos": [
      {
       "src": "2026/paques-1.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Groupe Ados loisirs"
      }
     ]
    },
    {
     "titre": "Fête du club",
     "date": "Juin",
     "photos": [
      {
       "src": "2026/fete-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/fete-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Championnats régionaux Benjamins",
     "date": "",
     "photos": [
      {
       "src": "2026/reg-benjamins-1.webp",
       "w": 1600,
       "h": 1206,
       "legende": "Vedran K., qualifié pour la Coupe des régions"
      }
     ]
    }
   ]
  },
  {
   "annee": "2025",
   "albums": [
    {
     "titre": "Championnats régionaux à Granville",
     "date": "Novembre",
     "photos": [
      {
       "src": "2025/reg-granville-1.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Le groupe Adultes loisirs",
     "date": "",
     "photos": [
      {
       "src": "2025/adultes-loisirs-1.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2025/adultes-loisirs-2.webp",
       "w": 960,
       "h": 720
      }
     ]
    },
    {
     "titre": "L'équipe Masters 2025-2026",
     "date": "",
     "photos": [
      {
       "src": "2025/masters-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  },
  {
   "annee": "2024",
   "albums": [
    {
     "titre": "Meeting de Grandvilliers",
     "date": "10 et 11 février",
     "photos": [
      {
       "src": "2024/grandvilliers-1.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/grandvilliers-2.webp",
       "w": 1600,
       "h": 1066
      },
      {
       "src": "2024/grandvilliers-3.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/grandvilliers-4.webp",
       "w": 1600,
       "h": 1069
      },
      {
       "src": "2024/grandvilliers-5.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/grandvilliers-6.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/grandvilliers-7.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/grandvilliers-8.webp",
       "w": 1600,
       "h": 1066,
       "legende": "Nos super-héros"
      }
     ]
    }
   ]
  },
  {
   "annee": "2023",
   "albums": [
    {
     "titre": "Eau libre à Jumièges",
     "date": "Septembre",
     "photos": [
      {
       "src": "2023/jumieges-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Opération « Tous en maill'eau »",
     "date": "Octobre",
     "photos": [
      {
       "src": "2023/maill-eau-1.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    }
   ]
  },
  {
   "annee": "2021",
   "albums": [
    {
     "titre": "Les compétiteurs de retour au bassin",
     "date": "Octobre",
     "photos": [
      {
       "src": "2021/post-covid-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Championnats régionaux d'hiver à Granville",
     "date": "Décembre",
     "photos": [
      {
       "src": "2021/reg-hiver-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  },
  {
   "annee": "2019",
   "albums": [
    {
     "titre": "Le club dans L'Éclaireur",
     "date": "Décembre",
     "photos": [
      {
       "src": "2019/presse-1.webp",
       "w": 1460,
       "h": 1600,
       "legende": "Article de L'Éclaireur"
      }
     ]
    }
   ]
  },
  {
   "annee": "2017",
   "albums": [
    {
     "titre": "Championnats régionaux d'été",
     "date": "",
     "photos": [
      {
       "src": "2017/reg-ete-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  },
  {
   "annee": "2016",
   "albums": [
    {
     "titre": "Meeting de Courbevoie",
     "date": "Février",
     "photos": [
      {
       "src": "2016/courbevoie-1.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Avec Frédéric Bousquet, médaillé olympique"
      }
     ]
    },
    {
     "titre": "Meeting d'Yvetot",
     "date": "Mai",
     "photos": [
      {
       "src": "2016/yvetot-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Meeting de Grand-Quevilly",
     "date": "Octobre",
     "photos": [
      {
       "src": "2016/grand-quevilly-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2016/grand-quevilly-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Stage de la Toussaint",
     "date": "Octobre",
     "photos": [
      {
       "src": "2016/stage-toussaint-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2016/stage-toussaint-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Nationale 2 à Cholet",
     "date": "Décembre",
     "photos": [
      {
       "src": "2016/n2-cholet-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Championnats de France N2 à Saint-Nazaire",
     "date": "",
     "photos": [
      {
       "src": "2016/n2-st-nazaire-1.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    }
   ]
  },
  {
   "annee": "2015",
   "albums": [
    {
     "titre": "Meeting de Montivilliers",
     "date": "Janvier",
     "photos": [
      {
       "src": "2015/montivilliers-1.webp",
       "w": 1600,
       "h": 975
      },
      {
       "src": "2015/montivilliers-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Meeting de Saint-Valery-en-Caux",
     "date": "Avril",
     "photos": [
      {
       "src": "2015/st-valery-1.webp",
       "w": 1200,
       "h": 1600,
       "legende": "Avec Alain Poyé, officiel"
      },
      {
       "src": "2015/st-valery-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Championnats régionaux d'été",
     "date": "13 juin",
     "photos": [
      {
       "src": "2015/reg-ete-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2015/reg-ete-2.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Meeting du Havre",
     "date": "Juin",
     "photos": [
      {
       "src": "2015/le-havre-1.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Championnats de Seine-Maritime à Fécamp",
     "date": "Novembre",
     "photos": [
      {
       "src": "2015/dep-fecamp-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Interclubs",
     "date": "Novembre",
     "photos": [
      {
       "src": "2015/interclubs-1.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Les Masters avec Hugues Duboscq, médaillé olympique"
      },
      {
       "src": "2015/interclubs-2.webp",
       "w": 1600,
       "h": 1200,
       "legende": "L'équipe filles"
      }
     ]
    },
    {
     "titre": "Championnats régionaux d'hiver",
     "date": "Décembre",
     "photos": [
      {
       "src": "2015/reg-hiver-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  },
  {
   "annee": "2014",
   "albums": [
    {
     "titre": "Promotion 76 à Gonfreville-l'Orcher",
     "date": "16 mars",
     "photos": [
      {
       "src": "2014/promo76-1.webp",
       "w": 641,
       "h": 823
      },
      {
       "src": "2014/promo76-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2014/promo76-3.webp",
       "w": 589,
       "h": 641
      },
      {
       "src": "2014/promo76-4.webp",
       "w": 381,
       "h": 494
      },
      {
       "src": "2014/promo76-5.webp",
       "w": 628,
       "h": 809
      }
     ]
    },
    {
     "titre": "Passage de l'ENF2 à Grand-Quevilly",
     "date": "17 mai",
     "photos": [
      {
       "src": "2014/enf2-mai-1.webp",
       "w": 1600,
       "h": 1205
      }
     ]
    },
    {
     "titre": "Rencontre inter-écoles à Étrépagny",
     "date": "11 mai",
     "photos": [
      {
       "src": "2014/inter-ecoles-1.webp",
       "w": 1121,
       "h": 819
      },
      {
       "src": "2014/inter-ecoles-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2014/inter-ecoles-3.webp",
       "w": 1017,
       "h": 767
      },
      {
       "src": "2014/inter-ecoles-4.webp",
       "w": 1156,
       "h": 743
      },
      {
       "src": "2014/inter-ecoles-5.webp",
       "w": 1109,
       "h": 728
      }
     ]
    },
    {
     "titre": "Interclubs",
     "date": "Novembre",
     "photos": [
      {
       "src": "2014/interclubs-1.webp",
       "w": 1600,
       "h": 1200,
       "legende": "L'article de presse"
      },
      {
       "src": "2014/interclubs-2.webp",
       "w": 1600,
       "h": 1200,
       "legende": "L'équipe"
      },
      {
       "src": "2014/interclubs-3.webp",
       "w": 1200,
       "h": 1600,
       "legende": "Le t-shirt du coach"
      },
      {
       "src": "2014/interclubs-4.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Le groupe Compétiteurs",
     "date": "Novembre",
     "photos": [
      {
       "src": "2014/competiteurs-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Passage de l'ENF1 à Gournay",
     "date": "29 novembre",
     "photos": [
      {
       "src": "2014/enf1-1.webp",
       "w": 1115,
       "h": 836
      },
      {
       "src": "2014/enf1-2.webp",
       "w": 1115,
       "h": 836
      }
     ]
    },
    {
     "titre": "Passage de l'ENF2 à Grand-Quevilly",
     "date": "13 décembre",
     "photos": [
      {
       "src": "2014/enf2-dec-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Critérium Benjamins et Poussins à Grand-Quevilly",
     "date": "14 décembre",
     "photos": [
      {
       "src": "2014/criterium-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  },
  {
   "annee": "2013",
   "albums": [
    {
     "titre": "Championnats de France Masters à Chartres",
     "date": "Mars",
     "photos": [
      {
       "src": "2013/france-masters-1.webp",
       "w": 1115,
       "h": 836
      },
      {
       "src": "2013/france-masters-2.webp",
       "w": 1600,
       "h": 1153
      },
      {
       "src": "2013/france-masters-3.webp",
       "w": 702,
       "h": 526
      },
      {
       "src": "2013/france-masters-4.webp",
       "w": 684,
       "h": 513
      },
      {
       "src": "2013/france-masters-5.webp",
       "w": 719,
       "h": 539
      }
     ]
    },
    {
     "titre": "Meeting d'Yvetot",
     "date": "9 mai",
     "photos": [
      {
       "src": "2013/yvetot-1.webp",
       "w": 780,
       "h": 1039
      },
      {
       "src": "2013/yvetot-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2013/yvetot-3.webp",
       "w": 958,
       "h": 719
      },
      {
       "src": "2013/yvetot-4.webp",
       "w": 554,
       "h": 416
      },
      {
       "src": "2013/yvetot-5.webp",
       "w": 508,
       "h": 381
      }
     ]
    },
    {
     "titre": "Fête du club",
     "date": "26 juin",
     "photos": [
      {
       "src": "2013/fete-1.webp",
       "w": 866,
       "h": 650
      },
      {
       "src": "2013/fete-2.webp",
       "w": 676,
       "h": 507
      },
      {
       "src": "2013/fete-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2013/fete-4.webp",
       "w": 832,
       "h": 624
      },
      {
       "src": "2013/fete-5.webp",
       "w": 832,
       "h": 624
      },
      {
       "src": "2013/fete-6.webp",
       "w": 781,
       "h": 679
      }
     ]
    },
    {
     "titre": "Meeting de Formerie",
     "date": "13 septembre",
     "photos": [
      {
       "src": "2013/formerie-1.webp",
       "w": 703,
       "h": 537
      },
      {
       "src": "2013/formerie-2.webp",
       "w": 522,
       "h": 644
      },
      {
       "src": "2013/formerie-3.webp",
       "w": 889,
       "h": 679
      },
      {
       "src": "2013/formerie-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2013/formerie-5.webp",
       "w": 667,
       "h": 905
      },
      {
       "src": "2013/formerie-6.webp",
       "w": 836,
       "h": 603
      },
      {
       "src": "2013/formerie-7.webp",
       "w": 780,
       "h": 598
      }
     ]
    },
    {
     "titre": "Les groupes de la saison",
     "date": "Octobre",
     "photos": [
      {
       "src": "2013/groupes-1.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Groupe Ados du mercredi soir"
      },
      {
       "src": "2013/groupes-2.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Groupe Adultes loisirs"
      },
      {
       "src": "2013/groupes-3.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Groupe Compétiteurs"
      },
      {
       "src": "2013/groupes-4.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Groupe Jeunes loisirs"
      }
     ]
    }
   ]
  },
  {
   "annee": "2012",
   "albums": [
    {
     "titre": "Avenirs Poussins à Dieppe",
     "date": "14 janvier",
     "photos": [
      {
       "src": "2012/avenirs-dieppe-janv-1.webp",
       "w": 733,
       "h": 550
      },
      {
       "src": "2012/avenirs-dieppe-janv-2.webp",
       "w": 733,
       "h": 550
      },
      {
       "src": "2012/avenirs-dieppe-janv-3.webp",
       "w": 733,
       "h": 550
      },
      {
       "src": "2012/avenirs-dieppe-janv-4.webp",
       "w": 733,
       "h": 550
      },
      {
       "src": "2012/avenirs-dieppe-janv-5.webp",
       "w": 733,
       "h": 550
      }
     ]
    },
    {
     "titre": "Compétition Masters à Pacy-sur-Eure",
     "date": "3 février",
     "photos": [
      {
       "src": "2012/masters-pacy-1.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-2.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-3.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-4.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-5.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-6.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-7.webp",
       "w": 611,
       "h": 458
      },
      {
       "src": "2012/masters-pacy-8.webp",
       "w": 611,
       "h": 458
      }
     ]
    },
    {
     "titre": "Avenirs Poussins, 1re estivale à Dieppe",
     "date": "17 mars",
     "photos": [
      {
       "src": "2012/avenirs-estivale-1-1.webp",
       "w": 587,
       "h": 440
      },
      {
       "src": "2012/avenirs-estivale-1-2.webp",
       "w": 756,
       "h": 567
      },
      {
       "src": "2012/avenirs-estivale-1-3.webp",
       "w": 440,
       "h": 587
      },
      {
       "src": "2012/avenirs-estivale-1-4.webp",
       "w": 532,
       "h": 709
      },
      {
       "src": "2012/avenirs-estivale-1-5.webp",
       "w": 567,
       "h": 756
      },
      {
       "src": "2012/avenirs-estivale-1-6.webp",
       "w": 732,
       "h": 549
      }
     ]
    },
    {
     "titre": "Championnats de France Masters à Angers",
     "date": "Mars",
     "photos": [
      {
       "src": "2012/france-masters-1.webp",
       "w": 495,
       "h": 620
      },
      {
       "src": "2012/france-masters-2.webp",
       "w": 763,
       "h": 572
      },
      {
       "src": "2012/france-masters-3.webp",
       "w": 440,
       "h": 662
      },
      {
       "src": "2012/france-masters-4.webp",
       "w": 300,
       "h": 400
      },
      {
       "src": "2012/france-masters-5.webp",
       "w": 763,
       "h": 572
      },
      {
       "src": "2012/france-masters-6.webp",
       "w": 763,
       "h": 572
      },
      {
       "src": "2012/france-masters-7.webp",
       "w": 763,
       "h": 572
      }
     ]
    },
    {
     "titre": "Fête de Pâques",
     "date": "Avril",
     "photos": [
      {
       "src": "2012/paques-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Compétition Avenirs Poussins à Gournay",
     "date": "7 avril",
     "photos": [
      {
       "src": "2012/avenirs-gournay-1.webp",
       "w": 1386,
       "h": 1039
      }
     ]
    },
    {
     "titre": "Avenirs Poussins, 3e estivale à Dieppe",
     "date": "12 mai",
     "photos": [
      {
       "src": "2012/avenirs-estivale-3-1.webp",
       "w": 528,
       "h": 396
      },
      {
       "src": "2012/avenirs-estivale-3-2.webp",
       "w": 587,
       "h": 440
      },
      {
       "src": "2012/avenirs-estivale-3-3.webp",
       "w": 528,
       "h": 396
      },
      {
       "src": "2012/avenirs-estivale-3-4.webp",
       "w": 528,
       "h": 396
      },
      {
       "src": "2012/avenirs-estivale-3-5.webp",
       "w": 587,
       "h": 440
      },
      {
       "src": "2012/avenirs-estivale-3-6.webp",
       "w": 528,
       "h": 396
      }
     ]
    },
    {
     "titre": "Avenirs Poussins, 1re journée",
     "date": "17 novembre",
     "photos": [
      {
       "src": "2012/avenirs-nov-1.webp",
       "w": 329,
       "h": 398
      },
      {
       "src": "2012/avenirs-nov-2.webp",
       "w": 484,
       "h": 645
      },
      {
       "src": "2012/avenirs-nov-3.webp",
       "w": 704,
       "h": 528
      },
      {
       "src": "2012/avenirs-nov-4.webp",
       "w": 1600,
       "h": 1205
      },
      {
       "src": "2012/avenirs-nov-5.webp",
       "w": 778,
       "h": 583
      },
      {
       "src": "2012/avenirs-nov-6.webp",
       "w": 709,
       "h": 532
      },
      {
       "src": "2012/avenirs-nov-7.webp",
       "w": 645,
       "h": 484
      },
      {
       "src": "2012/avenirs-nov-8.webp",
       "w": 480,
       "h": 640
      }
     ]
    },
    {
     "titre": "Championnats de Seine-Maritime à Fécamp",
     "date": "24 et 25 novembre",
     "photos": [
      {
       "src": "2012/dep-fecamp-1.webp",
       "w": 1021,
       "h": 766
      },
      {
       "src": "2012/dep-fecamp-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2012/dep-fecamp-3.webp",
       "w": 788,
       "h": 1051
      }
     ]
    }
   ]
  },
  {
   "annee": "2011",
   "albums": [
    {
     "titre": "Meeting de Formerie",
     "date": "Septembre",
     "photos": [
      {
       "src": "2011/formerie-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2011/formerie-2.webp",
       "w": 1600,
       "h": 1200,
       "legende": "Avec Alain Bernard, champion olympique"
      }
     ]
    },
    {
     "titre": "Avenirs Poussins à Dieppe",
     "date": "26 novembre",
     "photos": [
      {
       "src": "2011/avenirs-dieppe-nov-1.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-2.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-3.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-4.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-5.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-6.webp",
       "w": 686,
       "h": 515
      },
      {
       "src": "2011/avenirs-dieppe-nov-7.webp",
       "w": 686,
       "h": 515
      }
     ]
    },
    {
     "titre": "Téléthon",
     "date": "Décembre",
     "photos": [
      {
       "src": "2011/telethon-1.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    }
   ]
  }
 ]
};
