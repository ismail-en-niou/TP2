function checkEnteri(event) {
    if (event.key==="Enter") {
        addContent();
    }
}

function addContent() {
    let box = document.getElementsByClassName("box");
    let input = document.getElementById('inp').value;
    box.style.backgroundColor += input ;
}