function fetchshowdata() {
    const categories = ["laptop", "tablets"]

    categories.map(async (categories) => {
        const container = document.getElementById(categories)

        const response = await fetch('https://dummyjson.com/products/categories')
        const data = await response.json()

        data.products.map((item) => {
            container.innerHTML +=
            <div class="card">
                <img src=${item.thumbnail} alt=${item.title}></img>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-detail">
                    <h4>${item.price}</h4>
                    <button>Buy</button>
                </div>
            </div>
        })
    })
}