import imagePanamWeb from "../images/panam-web.png";
import imageFocus from "../images/focus.png";
import imageManomano from "../images/manomano-hackathon.png";
import imageLeBonSens from "../images/le-bon-sens.png";
const projets = [
  {
    id: 1,
    title: "Panam-Web",
    lien: "https://guilhemcv.github.io/panam-web/",
    isOpen: false,
    date: "27/09/2021 au 07/10/2021",
    image: imagePanamWeb,
    description:
      "Un projet qui avait pour but, outre le fait de mettre en avant la fameuse ville de Paris, de travailler en équipe de 4 avec les méthodes agiles et l'outil github. Les technologies utilisées étaient html/css/javascript.",
  },
  {
    id: 2,
    title: "Focus",
    lien: "https://focus-wcs.netlify.app/",
    isOpen: false,
    date: "18/10/2021 au 19/11/2021",
    image: imageFocus,
    description:
      "Un projet bien plus technique mettant en pratique toutes les notions vues depuis le début de la formation en React. Pour ce projet il nous a fallu aussi mener à bien des recherches sur des notions non vues en formation. Technologies utilisées: React, API REST, FireBase(pour le back), Sass.",
  },
  {
    id: 3,
    title: "Hackathon 2022 Manomano",
    lien: "https://hackathon2022-manomano.netlify.app/",
    isOpen: false,
    date: "21/01/2022 au 22/01/2022",
    image: imageManomano,
    description: `En équipe de 4, nous avions 48h pour répondre à une problématique visant à améliorer l'expérience utilisateur du site E-commerce de Manomano! Nous avons imaginés une fonctionnalité permettant à un novice en bricolage de décrire un projet via un formulaire et l'application lui propose tous les matériaux, outils et tutoriels dont il a besoin! Un beau challenge, pour un défi relevé ! Technologies utilisées: React et Sass. Résultat final adapté aux mobiles mais pas encore tout à fait adapté aux écrans de bureaux `,
  },
  {
    id: 4,
    title: "Le Bon Sens",
    lien: "https://le-bon-sens.netlify.app/",
    isOpen: false,
    date: "13/02/2022 au 01/06/2022",
    image: imageLeBonSens,
    description: `Site web créé pour le magasin de produits locaux Le Bon Sens situé vers Ancenis. C'est un projet effectué seul de façon bénévole. Celui-ci est relié à un back end réalisé avec Express js et MySql. Le site possède un back-office qui permet à l'admin, une fois authentifié, de modifier, créer ou supprimer la plupart des contenus. L'objectif était de mettre en avant le magasin en présentant les produits en stock, quelques recettes de cuisines, des événements et les producteurs associés au magasin.`,
  },
];

export default projets;
