export async function getResult(url) {
    const apiData = await fetch(url);
    try {
        const apiJSON = await apiData.json();

        document.getElementById('results').innerHTML =
            `<p class="result"><strong>Polarity:</strong> ${apiJSON.polarity} (Confidence: ${(apiJSON.polarity_confidence * 100).toFixed(2)}%)</p>
            <p class="result"><strong>Subjectivity:</strong> ${apiJSON.subjectivity} (Confidence: ${(apiJSON.subjectivity_confidence * 100).toFixed(2)}%)</p>
            <p class="result"><strong>Text:</strong> ${apiJSON.text}</p>`;
    }
    catch (error) {
        console.log('error', error);
    }
}
