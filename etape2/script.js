// Utilisation du mode strict (slide 141)
"use strict";
// Fonction d'insertion d'une nouvelle ligne dans le tableau (slide 45)
function doInsertRowTable(num, nom, prenom, points) {
    // Retrouver un élément HTML par son identifiant (slide 61)
    const table = document.getElementById("table_persons");
    // Créer un nouvel élément HTML à partir de zéro (slide 104)
    const row = document.createElement("tr");
    // Modifier l'attribut class de l'élément HTML (slide 107)
    row.setAttribute("class", "row");
    // Créer les cinq éléments HTML td (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    // Modifier le contenu textuel des éléments avec innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // Créer un élément HTML input (slide 104)
    const checkbox = document.createElement("input");
    // Définir l'attribut type de l'élément (slide 107)
    checkbox.setAttribute("type", "checkbox");
    // Ajouter un élément enfant à la colonne (slide 103)
    col5.appendChild(checkbox);
    // Affecter les classes aux colonnes avec setAttribute (slide 107)
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