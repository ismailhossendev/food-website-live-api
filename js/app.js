// api 
const mainApi = (code) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMain(data.meals));
}
// main section 
const displayMain = data => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = ``
    for (const food of data) {
        const foodIns = food.strInstructions.slice(0,100)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card h-100">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <h6 class="card-title">Catagory: ${food.strCategory}</h6>
          <p class="card-text">${foodIns}...</p>
          <button  class="btn btn-primary">Details</button>
        </div>
      </div>
        `
        mainContainer.appendChild(cardDiv)
    }
}

//  search sections 
mainApi("")
document.getElementById('src-btn').addEventListener('click', function () {
    const srcInput = document.getElementById('src-inp').value;
    mainApi(srcInput)
    document.getElementById('src-inp').value = "";
})

