const getData = JSON.parse(localStorage.getItem("IdDeatils"));
console.log(getData);
const apiUrl = `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${getData}`;

//  

const fetchData = async ()=>{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.meals[0]);
        displayData(data.meals[0]);
    }
    catch(error){
        console.log("Error whrn Fetching the Data from api", error);
    }
}
fetchData();

function displayData(data){
    let titleid = document.getElementById("title");
    titleid.innerHTML = data.strMeal;
    let mainContainer = document.getElementById("itemContainer");
    let container = document.createElement("div");
    container.classList.add("container")
    let image = document.createElement("img");
    image.src = data.strMealThumb;
    image.alt = data.strMeal;
    let h3Tag = document.createElement("h3");
    h3Tag.innerHTML = data.strMeal;
    let pTag = document.createElement("p");
    pTag.innerHTML = data.strInstructions;
    if(pTag.innerHTML.length > 100){
        pTag.innerHTML = pTag.innerHTML.slice(0, 100) + "......";
    }
    else{
        pTag.innerHTML = data.strInstructions;
    };
    container.append(image, h3Tag, pTag);
    mainContainer.append(container);
}