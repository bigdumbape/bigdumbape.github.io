document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.example.com/research')
        .then(response => response.json())
        .then(data => {
            const researchList = document.getElementById('research-list');
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                researchList.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching research:', error));
});

