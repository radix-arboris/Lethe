const webURLs = {
    business: [
        ["Bloomberg", "https://rss.app/feeds/JRU5pgMf9g1l8fyc.xml"],
        ["Bloomberg (TWT)", "https://rss.app/feeds/JRU5pgMf9g1l8fyc.xml"],
    ],
    politics: [
        ["Tucker Carlson (TWT)", "https://rss.app/feeds/6wcii1gaYqMffLzO.xml"],
    ],
    government: [
        ["US Cybercom", "https://rss.app/feeds/w0tvwoTC4BO39iVe.xml"],
    ]
};

function openPopup(feedName, feedURL) {
    const popupWindow = window.open('', '_blank', 'width=800,height=600');

    // Load the RSS feed using the provided embedding code
    popupWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${feedName}</title>
            <script src="https://widget.rss.app/v1/feed.js" type="text/javascript" async></script>
        </head>
        <body>
            <h2>${feedName}</h2>
            <div id="rssapp-root"></div>
            <script>
                document.getElementById('rssapp-root').innerHTML = '<rssapp-feed id="${feedURL.replace('https://rss.app/feeds/', '').replace('.xml', '')}"></rssapp-feed>';
            </script>
        </body>
        </html>
    `);
}


// Create menu bar dynamically
const menuBarDiv = document.getElementById('menuBar');
Object.keys(webURLs).forEach(category => {
    const menuItem = document.createElement('button');
    menuItem.textContent = category;
    menuItem.className = 'menu_button';
    menuItem.onclick = () => displayCategory(category);
    menuBarDiv.appendChild(menuItem);
});

// Create buttons dynamically based on webURLs categories
const newsSourcesDiv = document.getElementById('newsSources');

function displayCategory(category) {
    newsSourcesDiv.innerHTML = ''; // Clear existing buttons

    const categoryDiv = document.createElement('div');
    categoryDiv.innerHTML = `<h3>${category}</h3>`;
    categoryDiv.className = 'grid-container';
    newsSourcesDiv.appendChild(categoryDiv);

    webURLs[category].forEach(entry => {
        const button = document.createElement('button');
        button.textContent = entry[0];
        button.className = 'normal_button';
        button.onclick = () => openPopup(entry[0], entry[1]);
        categoryDiv.appendChild(button);
    });
}
