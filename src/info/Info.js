import self from "../img/hugo.JPG"
import Nina1 from "../img/Nina1.jpg"
import Back from "../img/Back.jpg"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Hugo",
    lastName: "Mintegui",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Développeur Front-End & Back-End",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'France'
        },
        {
            emoji: "💼",
            text: "Futur Data Analyst"
        },
        {
            emoji: "📧",
            text: "mintegui.hugo@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Bonjour ! Je suis développeur web diplômé de la formation OpenClassrooms depuis aout 2024. Passionné par les nouvelles technologies et l'apprentissage continu, je cherche constamment à approfondir mes compétences, notamment dans le domaine de l'analyse de données",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Html5', 'Css3', 'Figma', 'MongoDB'],
            exposedTo: ['Nodejs', 'Python']
        }
    ,
    hobbies: [
        {
            label: 'Sport',
            emoji: '⚽'
        },
        {
            label: 'Musique',
            emoji: '♬'
        },
        {
            label: 'Film & Serie',
            emoji: '🎥'
        },
        {
            label: 'Jeux vidéo',
            emoji: '🎮'
        }

    ],
    portfolio: [ 
        {
            title: "Projet 1",
            description: "Nina Carducci, photographe professionnelle, m'a confié une mission d'optimisation de son site web pour améliorer ses performances, son référencement SEO, ainsi que son référencement local et son accessibilité. En plus de ces optimisations, j'ai également été chargé de corriger des bugs dans la galerie d'images. Voici comment j'ai abordé ces défis:",
            probleme: `**Accélération du Site** :  J'ai optimisé les images, réduit la taille des fichiers CSS et JavaScript, et mis en place une bonne stratégie de mise en cache pour que le site se charge plus vite.`,
            probleme1: `**Amélioration du SEO** : J'ai retravaillé les balises HTML et intégré des mots-clés locaux pertinents afin d'améliorer la visibilité du site sur les moteurs de recherche.`,
            probleme2: `**Renforcement du Référencement Local** : J'ai optimisé la page Google My Business, ajouté des mentions locales dans le contenu et inscrit le site sur des annuaires locaux pour mieux cibler les recherches locales.`,
            probleme3: `**Augmentation de l'Accessibilité** : J'ai amélioré la navigation au clavier, ajouté des descriptions pour les images et vérifié les contrastes de couleur pour rendre le site accessible à tous.`,
            probleme4: `**Optimisation des Réseaux Sociaux** : J'ai ajouté des balises Open Graph et Twitter Cards pour améliorer l'apparence des partages du site sur les réseaux sociaux.`,
            probleme5: `**Correction des Bugs dans la Galerie** : J'ai réparé les erreurs de code et les problèmes de chargement dans la galerie d'images pour une meilleure expérience utilisateur.`,
            solution: `Ces améliorations ont considérablement boosté les performances, le référencement et l'expérience globale du site.`,
            source: "https://github.com/Hugo31620/Nina-Carducci?tab=readme-ov-file",
            image: Nina1
        },
        {
            title: "Projet 2",
            description: "J’ai réalisé la refonte du site web de Kasa, une entreprise leader en location d’appartements en France, en transitionnant de ASP.NET à une stack moderne avec React pour le front-end. Chargé de développer l’application front-end. Voici comment j'ai abordé ces défis:",
            probleme: `**Développement Front-End** : J’ai surmonté les défis d’intégration des composants React et de réactivité du design en étudiant minutieusement les maquettes Figma, en développant les composants selon les meilleures pratiques et en ajustant les styles pour assurer une expérience utilisateur optimale sur tous les appareils.`,
            probleme1: `**Gestion des Données** : En l'absence d'un back-end opérationnel, j’ai utilisé un fichier JSON pour simuler les données, ce qui m'a permis de développer et tester l’interface utilisateur tout en préparant le front-end pour une intégration future sans modifications majeures.`,
            probleme2: `**Respect des Guidelines** : Bien que Kasa recommande Create React App, j’ai opté pour Vite en raison de ses meilleures performances. J’ai ajusté le développement en conséquence, tout en respectant les normes de qualité et les meilleures pratiques de Kasa.`,
            probleme3: `**Exigences de Design et Fonctionnalités** : J’ai utilisé les maquettes Figma pour développer les fonctionnalités, en assurant la navigation circulaire dans la galerie d’images et en mettant en place une gestion intuitive des menus déroulants (Collapse) pour répondre aux exigences spécifiques.`,
            solution: `En surmontant ces défis, j’ai réussi à développer une application front-end fonctionnelle, conforme aux maquettes et aux exigences de Kasa, tout en respectant les normes de qualité élevées fixées pour le projet.`,
            source: "https://github.com/Hugo31620/Projet5",
            image: Back
        },
        
    ]
}