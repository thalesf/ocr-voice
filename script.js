/*Regular Express Url Validator*/
function UrlValidator(url) {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
    var regex = new RegExp(expression);
    var urlString = "" + url;

    if (urlString.match(regex)) {
        return true;
    } else {
        return false;
    }
}
/*Run Tesseract */
function readImage(url) {
    let textarea = document.getElementById('result');
    Tesseract.recognize(url)
        .then(function (result) {
            let textarea = document.getElementById('result');
            let node = document.createTextNode(result.text);
            textarea.appendChild(node);
        }).progress(function (progress) {
            let total = (progress["progress"] * 100);
            total = Math.round(total, -1);
            let progressbar = document.querySelector('.progress-bar');
            progressbar.setAttribute('aria-valuenow', total);
            progressbar.style.width = total + "%";
            progressbar.textContent = total + "%";
        });
}


send.onclick = function () {
    let url = document.getElementById('link').value;
    if (UrlValidator(url) === true)
        readImage(url);
    else
        console.log("Invalid Url");
}

run.onclick = function () {
    let text = document.getElementById('result').value;
    responsiveVoice.setDefaultVoice("US English Female");
    responsiveVoice.speak(text);
}