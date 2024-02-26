var myHeaders = new Headers();

function getResponse() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var raw = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": input.innerText
            }
        ],
        "safe_mode": false
    });
    input.innerText = '';
    output.innerText = '';
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://oa.api2d.net/v1/chat/completions", requestOptions)
        .then(response => response.text())
        .then(result => {
            output.innerText = JSON.parse(result)['choices'][0]['message']['content'];
            getLastTokens();
        })
        .catch(error => console.log('error', error));
}

function getLastTokens() {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    var tokens = document.getElementById('tokens');
    fetch("https://oa.api2d.net/dashboard/billing/credit_grants", requestOptions)
        .then(response => response.text())
        .then(result => tokens.innerText = JSON.parse(result)['total_available'])
        .catch(error => tokens.innerText = error);
}

function getKeyFromLocal() {
    const fs = require('fs');

    var result = "";
    try {
        const data = fs.readFileSync('./key.txt', 'utf8');
        result = data;
        // console.log(result);
    } catch (err) {
        console.error(err);
    }

    return result;
}

function assembleHeader() {
    var key = getKeyFromLocal();
    myHeaders.append("Authorization", "Bearer " + key);
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
}

document.addEventListener('DOMContentLoaded', function () {
    // read the token from the local storage (./key.txt)
    assembleHeader();
    var send = document.getElementById('send');
    send.addEventListener('click', function () {
        getResponse();
    })
    var refreshTokens = document.getElementById('refreshTokens');
    refreshTokens.addEventListener('click', function () {
        getLastTokens();
    })
});
