export function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('name').value;
    let result = document.getElementById('results');

    if (formText == "") {
        result.innerHTML = '<p class="result">Do not leave the form empty!</p>';
    }
    else if (formText.length < 20) {
        result.innerHTML = '<p class="result">Text should be more than 20 characters for more accurate results!</p>';
    }
    else {
        fetch('http://localhost:8081/posting', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ formText })
        })
            .then(() => {
                Client.getResult('http://localhost:8081/getting');
            })
    }
}