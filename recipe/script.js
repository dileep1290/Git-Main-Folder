// 
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";



const getItems = async ()=>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.meals);
    displayMenu(data.meals);
}

function displayMenu(data){
   
    const menuContainer = document.getElementById('items-container');
    menuContainer.innerHTML = "";
    if(data == null){
        menuContainer.innerHTML = "The Item You Are Searching Is Not In Our Database Sorry For This We Try to Get That Item Next Time."
    }
    data.forEach(element => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("ItemContainer");
        const image = document.createElement("img");
        image.src = element.strMealThumb;
        image.alt = element.strMeal;
        image.addEventListener("click", ()=>{
            let id= element.idMeal;
            localStorage.setItem("IdDeatils", JSON.stringify(id));
            window.location.href = "./eachpage.html"
        })
        const h3Tag = document.createElement("h3");
        h3Tag.innerHTML = element.strMeal;
        const pTag = document.createElement("p");
        pTag.innerHTML = element.strInstructions;
        if(pTag.innerHTML.length > 20){
            pTag.innerHTML = pTag.innerHTML.slice(0, 50) + "......";
        }
        else{
            pTag.innerHTML = element.strInstructions;
        }

        itemContainer.append(image, h3Tag, pTag)
        menuContainer.append(itemContainer);
    });

}

getItems();


// searching a Item 
// search functionality

const searchInput = document.getElementById("item-search");
searchInput.addEventListener("keydown", (event)=>{
   if(event.key === "Enter"){
    const inputValue = searchInput.value;
    const searchUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetchDataWithLetter(searchUrl);
   }
})

const fetchDataWithLetter = async (urlData)=>{
    const response = await fetch(urlData);
    const data = await response.json();
    console.log(data.meals);
    displayMenu(data.meals);
}

// search functionality based on area

// filter by area url = www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
// https://www.themealdb.com/api/json/v1/1/filter.php?a=american


const searchByArea = document.getElementById("Cat-Area");
searchByArea.addEventListener("keydown", (event)=>{
   if(event.key === "Enter"){
    const areaValue = searchByArea.value;
    const searchUrlA = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaValue}`;
    fetchDataWithArea(searchUrlA);
   }
})

const fetchDataWithArea = async (urlData)=>{
    const response = await fetch(urlData);
    const data = await response.json();
    console.log(data.meals);
    displayMenu(data.meals);
}

// search by alphbet
//  url = https://www.themealdb.com/api/json/v1/1/search.php?f=a
const searchByAlphbet = document.getElementById("Cat-1st-letter");
searchByAlphbet.addEventListener("keydown", (event)=>{
   if(event.key === "Enter"){
    const letterValue = searchByAlphbet.value;
    const searchUrlAl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letterValue}`;
    fetchDataWithAlphabet(searchUrlAl);
   }
})

const fetchDataWithAlphabet = async (urlData)=>{
    const response = await fetch(urlData);
    const data = await response.json();
    console.log(data.meals);
    displayMenu(data.meals);
}
// ṣearch by ingrediant
// url = https://www.themealdb.com/api/json/v1/1/list.php?c=list

// const searchBying = document.getElementById("Cat-Main-Ing");
// searchBying.addEventListener("keydown", (event)=>{
//    if(event.key === "Enter"){
//     const letterValue = searchBying.value;
//     const searchUrlAl = `https://www.themealdb.com/api/json/v1/1/list.php?c=${letterValue}`;
//     fetchDataWithing(searchUrlAl);
//    }
// })

// const fetchDataWithing = async (urlData)=>{
//     const response = await fetch(urlData);
//     const data = await response.json();
//     console.log(data.meals);
//     displayMenu(data.meals);
// }