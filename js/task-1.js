const categoriesAll = document.querySelector("#categories");
const categoriesItem = categoriesAll.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const elementsList = item.querySelectorAll("ul li").length;

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${elementsList}`);
    
});



