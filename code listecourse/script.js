// Fonction pour ajouter un élément à la liste en supprimant les doublons
function ajouterElement() {
    var input = document.getElementById('inputItem');
    var valeur = input.value.trim(); // Récupérer la valeur de l'input en supprimant les espaces inutiles

    if (valeur === '') {
        alert('Veuillez entrer un élément');
        return;
    }

    var liste = document.getElementById('maListe');
    var elements = liste.getElementsByTagName('li');

    // Vérifier si l'élément est déjà présent dans la liste
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent === valeur) {
            alert('Cet élément est déjà présent dans la liste');
            input.value = ''; // Effacer le contenu de l'input
            return;
        }
    }

    // Ajouter l'élément à la liste
    var nouvelElement = document.createElement('li');
    nouvelElement.textContent = valeur;
    liste.appendChild(nouvelElement);
    input.value = ''; // Effacer le contenu de l'input
}
