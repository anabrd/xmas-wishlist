function reader() {
    let title = document.getElementById("title").value;
    let item = document.getElementById("item").value;
    localStorage.setItem("title", title);
    localStorage.setItem("item", item);
    console.log(item);
    console.log(title);
}

function show() {
    let wishlist = document.getElementById("wishlist");
    let title1 = localStorage.getItem("title");
    let item1 = localStorage.getItem("item");
    wishlist.innerHTML += `<h2 class="wish">` + title1 + `</h2>`;
    wishlist.innerHTML += `<h3>` + item1 + `</h3>`;
    wishlist.innerHTML += `<button><a href="./index.html">Make Another Wish</a></button>`;
    console.log(item1);
    console.log(title1);
}