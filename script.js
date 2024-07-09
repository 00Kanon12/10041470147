document.getElementById('linkForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    try {
        const link = await generateLink(email);
        displayLinkResult(link);
    } catch (error) {
        console.error('Error generating link:', error);
        displayLinkResult('Error generating link. Please try again.');
    }
});

async function generateLink(email) {
    const response = await fetch('https://generate-cookies.azurewebsites.net/api/generateOffice365Link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    const result = await response.json();
    return result.link;
}

function displayLinkResult(link) {
    const linkResultElement = document.getElementById('linkResult');
    linkResultElement.innerHTML = ''; // Clear previous content

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Your Office 365 link:';

    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.textContent = link;
    linkElement.target = '_blank';

    linkResultElement.appendChild(paragraph);
    linkResultElement.appendChild(linkElement);
}


async function generateLink(email) {
    const response = await fetch('https://generate-cookies.azurewebsites.net/api/generateOffice365Link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    const result = await response.json();
    return result.link;
}

async function handleGenerateLink() {
    const email = document.getElementById('emailInput').value;
    try {
        const link = await generateLink(email);
        document.getElementById('resultContainer').innerText = Generated ,$,{link};
    } catch (error) {
        console.error('Error generating link:', error);
        document.getElementById('resultContainer').innerText = 'Error generating link. Please try again.';
    }
}
