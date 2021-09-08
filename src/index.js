console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", () => {
    addDogImage()
    addDogBreed()
});

function addDogImage(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(url => {
        const newImage = document.createElement("img");
        newImage.src = url;
        document.querySelector("#dog-image-container").append(newImage);
        });
    });
}

//Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function addDogBreed() {
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(data => checkBreeds(data));
};

function checkBreeds(data){
    for(dataBreed in data.message){
        const newDogBreed = document.createElement("li");
        newDogBreed.id = dataBreed;
        newDogBreed.className = "dog-names";
        newDogBreed.innerText = `${dataBreed}`;
        dogNameChange(newDogBreed);

        document.querySelector("#dog-breeds").append(newDogBreed);
        if (data.message[dataBreed].length !== 0){
            const subBreedCategory = document.createElement("ul");
            data.message[dataBreed].forEach(function(specificBreed) {
                const subBreedNames = document.createElement("li")
                subBreedNames.innerText = specificBreed;
                subBreedCategory.append(subBreedNames);
            });
            newDogBreed.append(subBreedCategory);
        }
    };
};

//Challenge 3
function dogNameChange(newDogBreed){
    newDogBreed.addEventListener('click', function() {
        if(newDogBreed.style.color !== "green"){
            newDogBreed.style.color = "green";
        } else{
            newDogBreed.style.color = "black";
        }
    });
};