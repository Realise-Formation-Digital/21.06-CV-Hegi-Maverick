
var listcomplet = [1,2,3,4,5,6] //je veux les numéro paire dans cette liste
var listpair = []//je veux sauvegarder les numéro paire venant de la listcomplet

for (let p = 0; p<listcomplet.length; p++) { //boucle pour analyser, se déplacer dans la liste
    var resultat = listcomplet[p]/2 // je prend la valeur de la position actuelle et je vais la diviser par deux et je stock la valeur dans la variable resultat
    if (Number.isInteger(resultat) ){//je teste si la valeurs trouvé est un entier
        listpair.push(listcomplet[p])//je pousse la valeur de la liste ou j'ai vérifé que c'est paire
    }
}

console.log(listpair)

