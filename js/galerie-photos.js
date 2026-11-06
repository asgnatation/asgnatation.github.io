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
     "titre": "Meeting de Montivilliers",
     "date": "Janvier",
     "photos": [
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-5.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-6.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-7.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-8.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-montivilliers-janv-2026-9.webp",
       "w": 1600,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Championnats de Seine-Maritime à Grand-Quevilly",
     "date": "Mars",
     "photos": [
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-1.webp",
       "w": 1021,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-5.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-6.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-7.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-8.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-9.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-10.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-chpts-76-grand-quevilly-mars-2026-11.webp",
       "w": 1200,
       "h": 1600
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
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-5.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-6.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-7.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-paques-2026-8.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-paques-2026-9.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-paques-2026-10.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Compétition Avenirs",
     "date": "Mai",
     "photos": [
      {
       "src": "2026/2026-competition-avenirs-mai-2026-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-avenirs-mai-2026-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-avenirs-mai-2026-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-avenirs-mai-2026-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-avenirs-mai-2026-5.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-avenirs-mai-2026-6.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Eau libre à Jumièges",
     "date": "Mai",
     "photos": [
      {
       "src": "2026/2026-competition-eau-libre-jumieges-mai--1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-competition-eau-libre-jumieges-mai--2.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Meeting du sprint à Yvetot",
     "date": "Mai",
     "photos": [
      {
       "src": "2026/2026-meeting-du-sprint-yvetot-mai-2026-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-meeting-du-sprint-yvetot-mai-2026-2.webp",
       "w": 1425,
       "h": 1077
      },
      {
       "src": "2026/2026-meeting-du-sprint-yvetot-mai-2026-3.webp",
       "w": 1200,
       "h": 1600
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
     "titre": "Eau libre à Beauvais",
     "date": "Juin",
     "photos": [
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-1.webp",
       "w": 1461,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-5.webp",
       "w": 1461,
       "h": 1600
      },
      {
       "src": "2026/2026-competition-eau-libre-beauvais-juin-6.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Entraînement swim run",
     "date": "Juin",
     "photos": [
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-1.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-2.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-5.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-entrainement-swim-run-juin-2026-6.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Forum des associations",
     "date": "Septembre",
     "photos": [
      {
       "src": "2026/2026-forum-des-associations-sept-2026-1.webp",
       "w": 1600,
       "h": 931
      },
      {
       "src": "2026/2026-forum-des-associations-sept-2026-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2026/2026-forum-des-associations-sept-2026-3.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Meeting de Nogent",
     "date": "Octobre",
     "photos": [
      {
       "src": "2026/2026-meeting-de-nogent-oct-2026-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-de-nogent-oct-2026-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2026/2026-meeting-de-nogent-oct-2026-3.webp",
       "w": 1200,
       "h": 1600
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
       "h": 1206
      }
     ]
    }
   ]
  },
  {
   "annee": "2025",
   "albums": [
    {
     "titre": "Rencontre avec Alexis Hanquinquant, triple champion paralympique de triathlon",
     "date": "Avril",
     "photos": [
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-5.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-6.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-7.webp",
       "w": 1600,
       "h": 1081
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-8.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-9.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-rencontre-d-alexis-hanquinquant-tri-10.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Meeting de Nogent",
     "date": "Octobre",
     "photos": [
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-1.webp",
       "w": 898,
       "h": 1600
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-2.webp",
       "w": 1600,
       "h": 1202
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-5.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-6.webp",
       "w": 765,
       "h": 1020
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-7.webp",
       "w": 765,
       "h": 1020
      },
      {
       "src": "2025/2025-meeting-de-nogent-oct-2025-8.webp",
       "w": 406,
       "h": 541
      }
     ]
    },
    {
     "titre": "Opération « Tous en maill'eau »",
     "date": "Octobre",
     "photos": [
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-5.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-operation-tous-en-maill-eau-oct-202-6.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
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
     "titre": "Championnats Avenirs",
     "date": "Novembre",
     "photos": [
      {
       "src": "2025/2025-chpts-avenirs-nov-2025-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-chpts-avenirs-nov-2025-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-chpts-avenirs-nov-2025-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-chpts-avenirs-nov-2025-4.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Compétition Avenirs au Havre",
     "date": "Décembre",
     "photos": [
      {
       "src": "2025/2025-competition-avenirs-dec-2025-au-hav-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-competition-avenirs-dec-2025-au-hav-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-competition-avenirs-dec-2025-au-hav-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-competition-avenirs-dec-2025-au-hav-4.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-competition-avenirs-dec-2025-au-hav-5.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Meeting Maîtres",
     "date": "Décembre",
     "photos": [
      {
       "src": "2025/2025-meeting-maitres-dec-2025-1.webp",
       "w": 600,
       "h": 800
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-2.webp",
       "w": 600,
       "h": 800
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-3.webp",
       "w": 1024,
       "h": 770
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-4.webp",
       "w": 1343,
       "h": 1600
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-5.webp",
       "w": 600,
       "h": 800
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-6.webp",
       "w": 1024,
       "h": 768
      },
      {
       "src": "2025/2025-meeting-maitres-dec-2025-7.webp",
       "w": 768,
       "h": 1024
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
    },
    {
     "titre": "Interclubs toutes catégories",
     "date": "",
     "photos": [
      {
       "src": "2025/2025-interclubs-tc-2025-1.webp",
       "w": 1225,
       "h": 922
      },
      {
       "src": "2025/2025-interclubs-tc-2025-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2025/2025-interclubs-tc-2025-3.webp",
       "w": 824,
       "h": 1099
      },
      {
       "src": "2025/2025-interclubs-tc-2025-4.webp",
       "w": 1005,
       "h": 1341
      },
      {
       "src": "2025/2025-interclubs-tc-2025-5.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-interclubs-tc-2025-6.webp",
       "w": 1600,
       "h": 1202
      },
      {
       "src": "2025/2025-interclubs-tc-2025-7.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-interclubs-tc-2025-8.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2025/2025-interclubs-tc-2025-9.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    }
   ]
  },
  {
   "annee": "2024",
   "albums": [
    {
     "titre": "Compétition Avenirs à Grand-Quevilly",
     "date": "Janvier",
     "photos": [
      {
       "src": "2024/2024-competition-avenirs-grd-quevilly-ja-1.webp",
       "w": 1600,
       "h": 1202
      },
      {
       "src": "2024/2024-competition-avenirs-grd-quevilly-ja-2.webp",
       "w": 1440,
       "h": 1086
      },
      {
       "src": "2024/2024-competition-avenirs-grd-quevilly-ja-3.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-competition-avenirs-grd-quevilly-ja-4.webp",
       "w": 1440,
       "h": 1086
      },
      {
       "src": "2024/2024-competition-avenirs-grd-quevilly-ja-5.webp",
       "w": 1440,
       "h": 1080
      }
     ]
    },
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
       "h": 1066
      }
     ]
    },
    {
     "titre": "Défi Adultes loisirs",
     "date": "Février",
     "photos": [
      {
       "src": "2024/2024-defi-adultes-loisirs-fev-2024-1.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-defi-adultes-loisirs-fev-2024-2.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-defi-adultes-loisirs-fev-2024-3.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-defi-adultes-loisirs-fev-2024-4.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-defi-adultes-loisirs-fev-2024-5.webp",
       "w": 960,
       "h": 720
      }
     ]
    },
    {
     "titre": "Meeting de Granville",
     "date": "Février",
     "photos": [
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-1.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-2.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-3.webp",
       "w": 640,
       "h": 960
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-4.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-5.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-6.webp",
       "w": 1067,
       "h": 1600
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-7.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-8.webp",
       "w": 1067,
       "h": 1600
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-9.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-10.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-11.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-12.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-13.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-14.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-15.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-16.webp",
       "w": 1067,
       "h": 1600
      },
      {
       "src": "2024/2024-meeting-de-granville-fev-2024-17.webp",
       "w": 1600,
       "h": 1067
      }
     ]
    },
    {
     "titre": "Fête de Pâques",
     "date": "",
     "photos": [
      {
       "src": "2024/2024-paques-2024-1.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-2.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-3.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2024/2024-paques-2024-5.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-6.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-7.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-8.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-9.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-10.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-11.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2024/2024-paques-2024-12.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-13.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-14.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-15.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-16.webp",
       "w": 720,
       "h": 960
      },
      {
       "src": "2024/2024-paques-2024-17.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2024/2024-paques-2024-18.webp",
       "w": 960,
       "h": 720
      }
     ]
    },
    {
     "titre": "Swim run",
     "date": "Avril et juin",
     "photos": [
      {
       "src": "2024/2024-swim-run-avril-et-juin-2024-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-swim-run-avril-et-juin-2024-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-swim-run-avril-et-juin-2024-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-swim-run-avril-et-juin-2024-4.webp",
       "w": 1600,
       "h": 1200
      }
     ]
    },
    {
     "titre": "Championnats de Seine-Maritime Avenirs",
     "date": "Juin",
     "photos": [
      {
       "src": "2024/2024-chpts-76-avenirs-juin-2024-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-chpts-76-avenirs-juin-2024-2.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2024/2024-chpts-76-avenirs-juin-2024-3.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    }
   ]
  },
  {
   "annee": "2023",
   "albums": [
    {
     "titre": "Compétition à Gournay",
     "date": "Mars",
     "photos": [
      {
       "src": "2023/2023-competition-gournay-mars-2023-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-competition-gournay-mars-2023-2.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Fête de Pâques",
     "date": "",
     "photos": [
      {
       "src": "2023/2023-paques-2023-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-paques-2023-2.webp",
       "w": 1600,
       "h": 980
      },
      {
       "src": "2023/2023-paques-2023-3.webp",
       "w": 1600,
       "h": 821
      }
     ]
    },
    {
     "titre": "Eau libre à Yport",
     "date": "Juin",
     "photos": [
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-1.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-3.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-4.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-5.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-6.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-7.webp",
       "w": 1200,
       "h": 1600
      },
      {
       "src": "2023/2023-competition-eau-libre-yport-juin-20-8.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
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
      },
      {
       "src": "2023/2023-operation-tous-en-maill-eau-sept-20-1.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2023/2023-operation-tous-en-maill-eau-sept-20-2.webp",
       "w": 1200,
       "h": 1600
      }
     ]
    },
    {
     "titre": "Meeting du Bout de l'an à Saint-Lô",
     "date": "31 décembre",
     "photos": [
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-1.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-2.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-3.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-4.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-5.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-6.webp",
       "w": 960,
       "h": 640
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-7.webp",
       "w": 1067,
       "h": 1600
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-8.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-9.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-10.webp",
       "w": 960,
       "h": 720
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-11.webp",
       "w": 1600,
       "h": 1067
      },
      {
       "src": "2023/2023-meeting-du-bout-de-l-an-st-lo-31-de-12.webp",
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
       "h": 1600
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
       "h": 1600
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
       "h": 1200
      },
      {
       "src": "2015/interclubs-2.webp",
       "w": 1600,
       "h": 1200
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
       "h": 1200
      },
      {
       "src": "2014/interclubs-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2014/interclubs-3.webp",
       "w": 1200,
       "h": 1600
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
       "h": 1200
      },
      {
       "src": "2013/groupes-2.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2013/groupes-3.webp",
       "w": 1600,
       "h": 1200
      },
      {
       "src": "2013/groupes-4.webp",
       "w": 1600,
       "h": 1200
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
       "h": 1200
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
