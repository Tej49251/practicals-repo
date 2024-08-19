// assets/js/search.js

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('#search');
    const resultsDiv = document.querySelector('#results');

    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const query = searchInput.value.toLowerCase();

            if (query.length < 3) {
                alert('Please enter at least 3 characters to search.');
                return;
            }

            // Simulating search results (in a real app, this would be an API call)
            const results = [
                { title: 'Practical 1 - Subject Name', url: 'practicals/year1/subject1/practical1.html' },
                { title: 'Practical 2 - Subject Name', url: 'practicals/year2/subject2/practical2.html' },
                // Add more simulated results
            ];

            const filteredResults = results.filter(result => result.title.toLowerCase().includes(query));

            // Clear previous results
            resultsDiv.innerHTML = '';

            if (filteredResults.length > 0) {
                filteredResults.forEach(result => {
                    const resultCard = document.createElement('div');
                    resultCard.className = 'card mb-3';
                    resultCard.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${result.title}</h5>
                            <a href="${result.url}" class="btn btn-primary">View Practical</a>
                        </div>
                    `;
                    resultsDiv.appendChild(resultCard);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            }
        });
    }
});
