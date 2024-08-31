document.addEventListener("scrollend", (event) => {
 document.getElementById("titulo").innerText = "";
document.getElementById("num").value = "";
 document.getElementById("corpo").innerText = "";
});

window.addEventListener("scroll", (event) => {
    
    if (document.documentElement.scrollTop === 0) {
    document.getElementById("titulo").innerText = "";
    document.getElementById("num").value = "";
    document.getElementById("corpo").innerText = "";
    }
    
});

function mostrar() {
    var num = document.getElementById("num").value;
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById("titulo").innerText = data.title;
        document.getElementById("corpo").innerText = data.body;
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}