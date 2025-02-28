const subject = ["Le succès","La créativité","Le courage","L'innovation", "La persévérance","Le bonheur","La sagesse","L'aventure",    "Le changement",    "L'inspiration",    "La détermination",    "L'optimisme",    "La passion",    "La curiosité",    "L'authenticité",    "La résilience",    "L'empathie",    "L'ambition",    "La gratitude",    "L'intuition"];
const action= ["est la clé de", "ouvre la porte à",    "transforme",    "illumine",    "défie",    "nourrit",    "révèle",    "façonne",    "inspire",    "transcende",    "catalyse",    "amplifie",    "enrichit",    "propulse",    "réinvente",    "cultive",   "déclenche",    "harmonise",    "libère",    "dynamise"];
const qualities = ["la réussite personnelle.","un avenir meilleur.","les obstacles en opportunités.","notre perception du monde.","les limites du possible.","l'épanouissement de l'âme.","le potentiel caché en chacun.","la manière dont nous vivons.","les frontières de la connaissance.","notre compréhension de la vie.","la croissance intérieure.","l'excellence humaine.","les horizons de l'imagination.","la quête de sens.","l'harmonie avec soi-même.","la réalisation de nos rêves.","la transformation positive.","l'équilibre entre corps et esprit.","l'innovation constante.","l'évolution personnelle et collective."]

const returnPart = (part) => {
    return part[Math.floor(Math.random() * part.length)];
}

const phraseConstructor = ()=>{
    const phrase=[];
    phrase.push(returnPart(subject));
    //let actionChoosed = returnPart(action);
    let actionChoosed = "est la clé de";
    let qualitiesChoosed = returnPart(qualities);

    if (actionChoosed.endsWith(" de")){
        const firstWord = qualitiesChoosed.split(' ')[0].toLowerCase();
        switch (firstWord){
            case "la":
                actionChoosed = actionChoosed.slice(0, -2) + "de la";
                qualitiesChoosed = qualitiesChoosed.slice(3);
                break;
            case "le":
                actionChoosed = actionChoosed.slice(0, -2) + "du";
                qualitiesChoosed = qualitiesChoosed.slice(3);
                break;
            case "les":
                actionChoosed = actionChoosed.slice(0, -2) + "des";
                qualitiesChoosed = qualitiesChoosed.slice(4);
                break;
            case "l'":
                actionChoosed = actionChoosed.slice(0, -2) + "de l'";
                qualitiesChoosed = qualitiesChoosed.slice(2);
                break;
            case "un":
            case "une":
                actionChoosed = actionChoosed.slice(0, -2) + "d'";
                break;
            default:
                break;
        }
    }
    phrase.push(actionChoosed);
    phrase.push(qualitiesChoosed);
    return phrase.join(" ");
}
console.log("Ton message inspirant:")
console.log(phraseConstructor());