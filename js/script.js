document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderCards(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function renderCards(data) {
  const containerCard = document.querySelector(".container-card");
  containerCard.innerHTML = "";

  data.forEach((coffee) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-image">
        <img src="${coffee.image}" alt="${coffee.name}">
            </div>
            <div class="card-content">
                <div class="card-info">
                <h4>${coffee.name}</h4>
                <p class="price"> ${coffee.price}</p>
                </div>
                 <div class='sold-containe'>
                 <p class="rating">
                 <img src="${
                   coffee.votes ? "/images/Star_fill.svg" : "/images/Star.svg"
                 }" alt="Rating">
                        <span class="text"> ${coffee.rating ? coffee.rating : ""} </span>
                        <span>(${
                          coffee.votes ? coffee.votes : "No ratings"
                        } votes)</span>
                    </p>
                    ${
                      coffee.available ? "" : '<div class="sold">Sold out</div>'
                    }
                </div>
            </div>
        `;

    containerCard.appendChild(card);
  });
}
