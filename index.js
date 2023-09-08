
const button = document.getElementById("btn");

function fetchAndDisplayRandomCarPicture() {

    const apiUrl = "https://api.unsplash.com/photos/random?client_id=4_RUVLB2w9U4kspjpUPhgpitjbLlPzPrfxYnCVLsFJY&query=car";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
        
            const container = document.querySelector(".container");

            const newCarPicture = document.createElement("img");

            newCarPicture.src = data.urls.regular;

            newCarPicture.classList.add("displayed-car-picture");

            const previousCarPicture = container.querySelector(".displayed-car-picture");
            if (previousCarPicture) {
                container.removeChild(previousCarPicture);
            }

            container.appendChild(newCarPicture);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

button.addEventListener("click", fetchAndDisplayRandomCarPicture);
