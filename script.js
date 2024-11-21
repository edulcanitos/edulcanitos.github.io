// Suponiendo que aquí obtendríamos noticias desde una API o archivo JSON

 

// Noticias para la sección de cards

const noticiasCards = [
    { titulo: "Avances en Inteligencia Artificial en 2040", contenido: "La IA ha alcanzado niveles de creatividad inimaginables hace apenas dos décadas...", url: "noticia1.html" },
    { titulo: "Economía global y el impacto de la criptomoneda universal", contenido: "La implementación de una moneda digital universal está cambiando la forma en que los países operan financieramente...", url: "noticia2.html" },
    { titulo: "Colonización de Marte: Primeros asentamientos permanentes", contenido: "La humanidad ha establecido su primera colonia autosuficiente en Marte, marcando un hito en la exploración espacial...", url: "noticia3.html" },
    { titulo: "Cambio climático: Soluciones para revertir el daño", contenido: "Las tecnologías de captura de carbono están permitiendo revertir los efectos del cambio climático...", url: "noticia4.html" },
    { titulo: "Cambio climático: Soluciones para revertir el daño", contenido: "Las tecnologías de captura de carbono están permitiendo revertir los efectos del cambio climático...", url: "noticia4.html" },{ titulo: "Cambio climático: Soluciones para revertir el daño", contenido: "Las tecnologías de captura de carbono están permitiendo revertir los efectos del cambio climático...", url: "noticia4.html" }
];

const cardsContainer = document.querySelector('.cards-container');

function cargarNoticiasCards() {
    noticiasCards.forEach(noticia => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <a href="${noticia.url}">
                <h3>${noticia.titulo}</h3>
                <p>${noticia.contenido}</p>
            </a>
        `;

        cardsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', cargarNoticiasCards);
