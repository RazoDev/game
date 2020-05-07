window.onload = () => {
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
        .then(res => res.json())
        .then(data => {
            // console.log(data.message)
            dogs(data)

        });
}

dogs = (data) => {

    for (let i in data.message) {
        console.log(i);

        dog.innerHTML += `<a href="detail.html">
        <img src="${data.message[i]}" alt="">
        <a>
        `
    }
}



getDog = () => {
    dog.innerHTML = "";
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
        .then(res => res.json())
        .then(data => {
            // console.log(data.message)
            dogs(data)

        });
}

dogs = (data) => {

    for (let i in data.message) {
        console.log(i);

        dog.innerHTML += `<a href="detail.html">
        <img src="${data.message[i]}" alt="">
        <a>
        `
    }
}




// modal

if (document.getElementById("btnModal")) {
    var modal = document.getElementById("tvesModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}