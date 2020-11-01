﻿
const item = document.getElementById('main'); //récupération id=main
let listeProduits = 'http://localhost:3000/api/cameras' // création de la variable pour relier à l'API

fetch(listeProduits).then(response => {
    if(response.ok) {
    return response.json()
} else {
    Promise.reject(response.status);
};

    })
    .then(data => {
        data.forEach(objet => {
            let prixProduit = objet.price / 100; // On divise le prix dans le tableau par 100 pour obtenir le bon prix

            // on ajoute les informations des appareils dans le HTML
            item.innerHTML += `
                <div class="card card-body col-12 col-md-6 col-lg-4 mx-auto m-2">
                    <img alt="${objet.name}" class="img-fluid" src="${objet.imageUrl}">
                    <h2 class="text-center">${objet.name}</h2>
                    <p class="text-center">${prixProduit.toFixed(2)} €</p>
                    <a href="produit.html?id=${objet._id}" class="btn-outline-info text-center">Afficher l'appareil</a>
                </div>
                `;

        });

    }).catch(function(error) {
  console.log('Il y a eu un problème avec l\'appel de l\'API : ' + error.message);
  });