window.onload = function() {



    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {

            const divParent = document.createElement("div")
            
            json.forEach(element => {
            
            const postDiv = document.createElement("div")
            postDiv.className = "post"

            const h3 = document.createElement("h3")
            h3.innerHTML = element.title
            h3.className = "header"

            const p = document.createElement("p")
            p.innerHTML = element.body
            p.className = "postContent"

            postDiv.appendChild(h3)
            postDiv.appendChild(p)

            divParent.appendChild(postDiv)

            });

            document.body.appendChild(divParent)

        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })

        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })

}