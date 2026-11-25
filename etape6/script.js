// Utilisation du mode strict (slide 141)
"use strict";
// Déclaration d'une variable avec let (slide 37)
let lignes = 0;
// Déclaration d'une variable avec let (slide 37)
let total_points = 0;
// Déclaration d'un tableau d'objets avec let car il sera réaffecté (slides 37, 38, 39 et 40)
let persons = [
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
    // Événement de saisie sur le champ de recherche (slide 139)
    document.getElementById("search_persons").addEventListener("input", searchPersons);
    // Événement de changement sur la case Tout sélectionner (slide 139)
    document.getElementById("select_all").addEventListener("change", selectAll);
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
    // Appliquer le filtre de recherche à la nouvelle ligne
    searchPersons();
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
    // Modification par double-clic sur Nom, Prénom et Points (slide 139)
    col2.addEventListener("dblclick", function () {
        editCell(col2, "nom");
    });
    col3.addEventListener("dblclick", function () {
        editCell(col3, "prenom");
    });
    col4.addEventListener("dblclick", function () {
        editCell(col4, "points");
    });
    // Mettre à jour la case Tout sélectionner lors d'un changement (slide 139)
    checkbox.addEventListener("change", updateSelectAll);
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
// Définition de la fonction deleteRow() (slide 45)
function deleteRow() {
    // Étape 1 : si le tableau est vide, afficher une alerte et sortir (slides 42 et 34)
    if (lignes === 0) {
        window.alert("Le tableau est vide !");
        return;
    }
    // Étape 2 : récupérer le tableau et les cases cochées des lignes (slides 61 et 76)
    const table = document.getElementById("table_persons");
    const checkboxes = table.querySelectorAll(".row .col_chkbox input:checked");
    // Étape 3 : si aucune case n'est cochée, afficher une alerte et sortir (slides 42 et 34)
    if (checkboxes.length === 0) {
        window.alert("Sélectionnez au moins une ligne !");
        return;
    }
    // Étape 4 : demander une confirmation, si Annuler, quitter la fonction
    if (!window.confirm("Voulez-vous supprimer les lignes sélectionnées ?")) {
        return;
    }
    // Étape 5 : récupérer toutes les lignes du tableau (slide 76)
    const rows = table.querySelectorAll(".row");
    // Tableau des positions des lignes supprimées (slide 38)
    const deleted = [];
    // Étape 6 : parcourir les lignes avec une boucle for (slide 44)
    for (let i = 0; i < rows.length; i++) {
        // Accéder aux éléments enfants de la ligne avec children (slide 89)
        const checkbox = rows[i].children[4].children[0];
        // Vérifier si la case est cochée et si la ligne est visible (slides 42 et 95)
        if (checkbox.checked && rows[i].style.display !== "none") {
            // Soustraire les points de la 4e cellule du total (slides 41 et 91)
            total_points -= parseInt(rows[i].children[3].innerText);
            // Décrémenter le nombre de lignes (slide 41)
            lignes--;
            // Mémoriser la position de la ligne supprimée (slide 38)
            deleted.push(i);
            // Supprimer la ligne du DOM avec remove() (slide 100)
            rows[i].remove();
        }
    }
    // Supprimer les mêmes entrées du tableau persons avec filter et includes (slide 38)
    persons = persons.filter(function (person, i) {
        return !deleted.includes(i);
    });
    // Renuméroter la colonne N° des lignes restantes (slides 44 et 91)
    const remaining = table.querySelectorAll(".row");
    for (let i = 0; i < remaining.length; i++) {
        remaining[i].children[0].innerText = i + 1;
    }
    // Décocher la case Tout sélectionner (slide 93)
    document.getElementById("select_all").checked = false;
    // Étape 7 : mettre à jour le résumé et afficher un message de succès (slides 45 et 34)
    update_summary();
    window.alert("Suppression effectuée avec succès !");
}
// FONCTIONNALITÉ SUPPLÉMENTAIRE 1 : modification d'une cellule 
// Définition de la fonction editCell() (slide 45)
function editCell(cell, property) {
    // Ne pas créer un deuxième champ si la cellule contient déjà un input (slides 89 et 42)
    if (cell.children.length > 0) {
        return;
    }
    // Retrouver la position de la ligne parente avec parentNode (slide 89)
    const row = cell.parentNode;
    const rows = document.querySelectorAll("#table_persons .row");
    let index = 0;
    // Parcourir les lignes pour trouver la position de la ligne (slide 44)
    for (let i = 0; i < rows.length; i++) {
        if (rows[i] === row) {
            index = i;
        }
    }
    // Récupérer l'ancienne valeur dans le tableau persons (slide 39)
    const oldValue = persons[index][property];
    // Créer un champ de saisie (slide 104)
    const input = document.createElement("input");
    // Définir le type du champ avec setAttribute() et une condition (slides 107 et 42)
    if (property === "points") {
        input.setAttribute("type", "number");
    } else {
        input.setAttribute("type", "text");
    }
    // Afficher l'ancienne valeur dans le champ avec value (slide 93)
    input.value = oldValue;
    // Affecter la classe CSS au champ (slide 107)
    input.setAttribute("class", "edit_field");
    // Remplacer le contenu de la cellule par le champ (slides 91 et 103)
    cell.innerText = "";
    cell.appendChild(input);
    // Valider avec Entrée ou annuler avec Échap grâce à keydown et e.key (slide 139)
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            let newValue = input.value;
            // Vérifier que la nouvelle valeur est valide (slides 42 et 41)
            if (newValue === "" || (property === "points" && Number.isNaN(parseInt(newValue)))) {
                window.alert("Valeur incorrecte !");
                return;
            }
            // Convertir les points en nombre entier
            if (property === "points") {
                newValue = parseInt(newValue);
                // Corriger le total des points (slide 41)
                total_points = total_points - oldValue + newValue;
                update_summary();
            }
            // Modifier la propriété dans le tableau persons (slide 39)
            persons[index][property] = newValue;
            // Afficher la nouvelle valeur dans la cellule (slide 91)
            cell.innerText = newValue;
        }
        if (e.key === "Escape") {
            // Annuler la modification : remettre l'ancienne valeur (slide 91)
            cell.innerText = oldValue;
        }
    });
}
// FONCTIONNALITÉ SUPPLÉMENTAIRE 2 : recherche par nom ou prénom 
// Définition de la fonction searchPersons() (slide 45)
function searchPersons() {
    // Récupérer le champ de recherche (slide 61)
    const search = document.getElementById("search_persons");
    const value = search.value.toLowerCase();
    // Récupérer toutes les lignes du tableau (slide 76)
    const rows = document.querySelectorAll("#table_persons .row");
    // Parcourir les lignes avec une boucle for...of (slide 44)
    for (const row of rows) {
        // Lire le nom et le prénom dans les cellules avec children et innerText (slides 89 et 91)
        const nom = row.children[1].innerText.toLowerCase();
        const prenom = row.children[2].innerText.toLowerCase();
        // Afficher ou masquer la ligne avec includes et la propriété style (slides 38 et 95)
        if (nom.includes(value) || prenom.includes(value)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
    // Mettre à jour la case Tout sélectionner
    updateSelectAll();
}
// FONCTIONNALITÉ SUPPLÉMENTAIRE 3 : tout sélectionner 
// Définition de la fonction selectAll() (slide 45)
function selectAll() {
    // Lire l'état de la case principale (slide 93)
    const checked = document.getElementById("select_all").checked;
    // Récupérer toutes les lignes du tableau (slide 76)
    const rows = document.querySelectorAll("#table_persons .row");
    // Parcourir les lignes avec une boucle for...of (slide 44)
    for (const row of rows) {
        // Cocher ou décocher seulement les lignes visibles (slides 42 et 95)
        if (row.style.display !== "none") {
            row.children[4].children[0].checked = checked;
        }
    }
}
// Définition de la fonction updateSelectAll() (slide 45)
function updateSelectAll() {
    // Récupérer toutes les lignes du tableau (slide 76)
    const rows = document.querySelectorAll("#table_persons .row");
    let visible = 0;
    let selected = 0;
    // Parcourir les lignes avec une boucle for...of (slide 44)
    for (const row of rows) {
        if (row.style.display !== "none") {
            // Compter les lignes visibles avec l'opérateur ++ (slide 41)
            visible++;
            if (row.children[4].children[0].checked) {
                selected++;
            }
        }
    }
    // Cocher la case principale si toutes les lignes visibles sont cochées (slides 41 et 93)
    document.getElementById("select_all").checked = visible > 0 && visible === selected;
}