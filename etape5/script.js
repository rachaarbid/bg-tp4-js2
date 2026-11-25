// Utilisation du mode strict (slide 141)
"use strict";
// Déclaration d'une variable avec let (slide 37)
let lignes = 0;
// Déclaration d'une variable avec let (slide 37)
let total_points = 0;
// Déclaration d'un tableau (slide 38)
// Déclaration d'objets littéraux avec leurs propriétés (slide 39)
// Création d'un tableau d'objets (slide 40)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 },
];
// Appel de la fonction init() (slide 45)
init();
// Définition de la fonction init() (slide 45)
function init() {
    // Parcourir les éléments du tableau avec une boucle for...of (slide 44)
    for (const person of persons) {
        // Accéder aux propriétés d'un objet (slide 39)
        // Appeler la fonction doInsert() (slide 45)
        doInsert(person.nom, person.prenom, person.points);
    }
}
// Définition de la fonction doInsert() avec ses paramètres (slide 45)
function doInsert(nom, prenom, points) {
    // Incrémenter le compteur avec l'opérateur ++ (slide 41)
    lignes++;
    // Ajouter les points au total avec l'opérateur += (slide 41)
    total_points += points;
    // Appeler la fonction doInsertRowTable() (slide 45)
    doInsertRowTable(lignes, nom, prenom, points);
    // Appeler la fonction update_summary() (slide 45)
    update_summary();
}
// Définition de la fonction doInsertRowTable() avec ses paramètres (slide 45)
function doInsertRowTable(num, nom, prenom, points) {
    // Récupérer un élément HTML par son identifiant (slide 61)
    const table = document.getElementById("table_persons");
    // Créer une nouvelle ligne HTML avec createElement() (slide 104)
    const row = document.createElement("tr");
    // Modifier un attribut HTML avec setAttribute() (slide 107)
    row.setAttribute("class", "row");
    // Créer les cinq colonnes HTML avec createElement() (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    // Modifier le contenu textuel avec innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // Créer un élément HTML input (slide 104)
    const checkbox = document.createElement("input");
    // Définir l'attribut type avec setAttribute() (slide 107)
    checkbox.setAttribute("type", "checkbox");
    // Ajouter un élément enfant avec appendChild() (slide 103)
    col5.appendChild(checkbox);
    // Affecter les classes aux colonnes avec setAttribute() (slide 107)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");
    // Ajouter les colonnes à la ligne avec append() (slide 98)
    row.append(col1, col2, col3, col4, col5);
    // Ajouter la ligne comme élément enfant du tableau (slide 103)
    table.appendChild(row);
}
// Définition de la fonction update_summary() (slide 45)
function update_summary() {
    // Récupérer un élément HTML par son identifiant (slide 61)
    const element_ligne = document.getElementById("p1");
    // Récupérer un élément HTML par son identifiant (slide 61)
    const element_point = document.getElementById("p3");
    // Modifier le contenu textuel avec innerText (slide 91)
    element_ligne.innerText = lignes + " ligne(s)";
    element_point.innerText = "Total point(s)= " + total_points;
}
// Définition de la fonction doNewData() (slide 45)
function doNewData() {
    // Récupérer les éléments HTML par leurs identifiants (slide 61)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");
    // Récupérer les valeurs des champs avec la propriété value (slide 93)
    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value);
    // Vérifier si les champs sont vides avec une condition if...else (slide 42)
    // Utiliser les opérateurs de comparaison et logiques (slide 41)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // Afficher un message avec alert() (slide 34)
        window.alert("Formulaire incomplet !");
    } else {
        // Appeler la fonction doInsert() avec les nouvelles données (slide 45)
        doInsert(nom, prenom, points);
        // Ajouter un nouvel objet à la fin du tableau avec push() (slide 38)
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });
        // Vider les champs en modifiant leur propriété value (slide 93)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
// Définition de la fonction consoleTableau() (slide 45)
function consoleTableau() {
    // Afficher le tableau persons dans la console avec console.log() (slide 33)
    console.log(persons);
}