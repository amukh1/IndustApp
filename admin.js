let last = 'default,def'

let b = setInterval(update, 1000);

function update() {
    console.log('update')

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        console.log(xhr.responseText)
        if(last !== xhr.responseText && xhr.responseText) {
            last = xhr.responseText
            // document.getElementById('sub').value = last.split(',')[0]
            // document.getElementById('mes').value = last.split(',')[1]
            const box = document.createElement("div");
            document.getElementById('messages').appendChild(box);
            box.classList.add('message');
            const sub = document.createElement("div");
            box.appendChild(sub);
            sub.classList.add('messagesub');
            sub.innerHTML = `Subject: ${xhr.responseText.split(',')[0]}`

            const mes = document.createElement("div");
            box.appendChild(mes);
            mes.classList.add('messagem');
            mes.innerHTML = `Message: ${xhr.responseText.split(',')[1]}`
        }
    }

    xhr.open("GET", `https://dis.amukh1.dev/get`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}