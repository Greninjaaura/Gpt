// Sample data for search results
const searchData = [
    { title: 'ChatGPT', description: 'ChatGPT is a conversational language model developed by OpenAI, operating on the GPT-3.5 architecture. It generates text responses based on user inputs, trained...', link: 'https://www.chatgpt.com' },
    { title: 'Web development', description: 'Web development involves creating and maintaining websites. Key points include front-end (user interface), back-end (server-side logic), and database management...', link: '#' },
    { title: 'Github', description: 'GitHub, Inc. is an AI-powered developer platform that allows developers to create, store, and manage their code. It uses Git software, providing the distributed version control of Git...', link: 'https://www.github.com' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    { title: 'Web development', description: ' ', link: '#' },
    // Add more objects as needed
];

function search() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    // Filter the data based on the search term
    const filteredResults = searchData.filter(result =>
        result.title.toLowerCase().includes(searchTerm) || result.description.toLowerCase().includes(searchTerm)
    );

    // Display the filtered results
    filteredResults.forEach(result => {
        const resultBox = document.createElement('div');
        resultBox.className = 'scrolling-box';

        const titleElement = document.createElement('h6');
        titleElement.style.fontSize = '20px';
        titleElement.textContent = result.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = result.description + `<div style="text-align: right; margin-top: 40px;">
            <a href="${result.link}" target="_blank" rel="noopener noreferrer" style="padding: 5px 10px; background-color: #FFFFFF; color: black; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Visit Site
            </a>
            </div>`;

        resultBox.appendChild(titleElement);
        resultBox.appendChild(descriptionElement);

        searchResultsContainer.appendChild(resultBox);

        // Add a horizontal line to separate search results
        const horizontalLine = document.createElement('hr');
        searchResultsContainer.appendChild(horizontalLine);
    });
}

// Example usage of search function when the button is clicked
document.getElementById('search-button').addEventListener('click', search);
