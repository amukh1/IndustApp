function sendit() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://dis.amukh1.dev/new?sub=${document.getElementById('sub').value}&mes=${document.getElementById('mes').value}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}