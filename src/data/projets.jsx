import imagePanamWeb from "../images/panam-web.png";
import imageFocus from "../images/focus.png";
import imageManomano from "../images/manomano-hackathon.png";
const projets = [
  {
    id: 1,
    title: "Panam-Web",
    lien: "https://guilhemcv.github.io/panam-web/",
    isOpen: false,
    image: imagePanamWeb,
    description:
      "Un projet qui avait pour but, outre le fait de mettre en avant la fameuse ville de Paris, de travailler en équipe de 4 avec les méthodes agiles et l'outil github. Les technologies utilisées étaient html/css/javascript.",
  },
  {
    id: 2,
    title: "Focus",
    lien: "https://focus-wcs.netlify.app/",
    isOpen: false,
    image: imageFocus,
    description:
      "Un projet bien plus technique mettant en pratique toutes les notions vues depuis le début de la formation en React. Pour ce projet il nous a fallu aussi mener à bien des recherches sur des notions non vues en formation. Technologies utilisées: React, API REST, FireBase(pour le back), Sass.",
  },
  {
    id: 3,
    title: "Hackathon 2022 Manomano",
    lien: "https://hackathon2022-manomano.netlify.app/",
    isOpen: false,
    image: imageManomano,
    description: `En équipe de 4, nous avions 48h pour répondre à une problématique visant à améliorer l'expérience utilisateur du site E-commerce de Manomano! Nous avons imaginés une fonctionnalité permettant à un novice en bricolage de décrire un projet via un formulaire et l'application lui propose tous les matériaux, outils et tutoriels dont il a besoin! Un beau challenge, pour un défi relevé ! Technologies utilisées: React et Sass. Résultat final adapté aux mobiles mais pas encore tout à fait adapté aux écrans de bureaux `,
  },
];

export default projets;
