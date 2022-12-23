function handleSubmit(event) {
    event.preventDefault()
    let userURL = document.getElementById('article-url').value;
    const data = {
        userURL
    }
    if (Client.checkUrl(userURL)) {
        fetch('http://localhost:8081/analyse', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert('URL is not valid!!')
    };
}

export { handleSubmit }