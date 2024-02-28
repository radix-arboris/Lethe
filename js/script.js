// script.js
const newsSources = [
    {
        category: "Business",
        sources: [
            { name: "Financial Times", url: "https://www.ft.com/" },
            { name: "Bloomberg", url: "https://www.bloomberg.com/" },
            { name: "Yahoo Finance", url: "https://finance.yahoo.com/" },
            { name: "Wall Street Journal", url: "https://www.wsj.com/" },
            { name: "Fox Business", url: "https://www.foxbusiness.com/" }
        ]
    },
    {
        category: "Politics",
        sources: [
            { name: "EPOCH Times", url: "https://www.theepochtimes.com/" },
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" },
            { name: "The Hill", url: "https://thehill.com/" },
            { name: "Politico", url: "https://www.politico.com/" },
            { name: "Real Clear Politics", url: "https://www.realclearpolitics.com/" },
            { name: "The Guardian", url: "https://www.theguardian.com/us" },
            { name: "The Washington Post", url: "https://www.washingtonpost.com/" },
            { name: "The New York Times", url: "https://www.nytimes.com/section/politics" },
            { name: "Fox News", url: "https://www.foxnews.com/politics" },
            { name: "Breitbart", url: "https://www.breitbart.com/" },
            { name: "The Daily Wire", url: "https://www.dailywire.com/" },
            { name: "The Federalist", url: "https://thefederalist.com/" },
            { name: "Reuters", url: "https://www.reuters.com/" },
            { name: "CNBC", url: "https://www.cnbc.com/" },
        ]
    },
    {
        category: "Tech",
        sources: [
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" }
        ]
    },
    {
        category: "Cyber",
        sources: [
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" }
        ]
    },
    {
        category: "Healthcare",
        sources: [
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" }
        ]
    },
    {
        category: "Global Conflicts",
        sources: [
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" }
        ]
    },
    {
        category: "US Government",
        sources: [
            { name: "Whitehouse Statements", url: "https://www.whitehouse.gov/briefing-room/statements-releases/" },
            { name: "Congress Activity", url: "https://www.govtrack.us/congress/bills/" },
            { name: "Senate Activity", url: "https://www.senate.gov/legislative/bills_acts_laws.htm" },
            { name: "Court Activity", url: "https://www.justice.gov/blogs" },
        ]
    },
    {
        category: "Foreign Press",
        sources: [
            { name: "CNN Politics", url: "https://www.cnn.com/politics" },
            { name: "BBC Politics", url: "https://www.bbc.com/news/politics" }
        ]
    },
];

document.addEventListener("DOMContentLoaded", function() {
    const newsSourcesContainer = document.getElementById("newsSources");
    const menuBar = document.getElementById("menuBar");

    // Function to open all links in a category in new tabs
    function openCategoryLinks(categoryIndex) {
        const category = newsSources[categoryIndex];
        category.sources.forEach(source => {
            window.open(source.url, '_blank');
        });
    }

    // Populate menu bar with buttons and category headers
    newsSources.forEach((category, index) => {
        // Create menu bar button
        const menuButton = document.createElement("button");
        menuButton.textContent = category.category;
        menuButton.classList.add("menu_button"); // Adding menu_button class
        menuButton.addEventListener("click", function() {
            const categoryHeader = document.getElementById(`category-header-${index}`);
            const paddingTop = 20; // Adjust this value as needed
            const scrollOffset = categoryHeader.offsetTop - paddingTop;
            window.scrollTo({ top: scrollOffset, behavior: "smooth" });
        });
        menuBar.appendChild(menuButton);

        // Create category header (also a button)
        const categoryHeader = document.createElement("button");
        categoryHeader.textContent = category.category;
        categoryHeader.classList.add("category_header_button");
        categoryHeader.id = `category-header-${index}`;
        categoryHeader.addEventListener("click", function() {
            openCategoryLinks(index); // Open all links in the category
        });
        newsSourcesContainer.appendChild(categoryHeader);

        // Populate news sources section
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("grid-container");
        categoryContainer.id = `category-grid-${index}`;

        category.sources.forEach(source => {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            const button = document.createElement("button");
            button.classList.add("normal_button"); // Adding normal_button class
            button.innerHTML = `<span onclick="window.open('${source.url}')"><strong>${source.name}</strong></span>`;
            gridItem.appendChild(button);
            categoryContainer.appendChild(gridItem);
        });

        newsSourcesContainer.appendChild(categoryContainer);
    });
});

