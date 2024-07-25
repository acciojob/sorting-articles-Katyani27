//your JS code here. If required.
 const articles = [
            "The Lord of the Rings",
            "A Game of Thrones",
            "Harry Potter and the Chamber of Secrets",
            "The Catcher in the Rye",
            "To Kill a Mockingbird",
            "1984",
            "The Great Gatsby",
            "Moby Dick",
            "The Hobbit",
            "A Tale of Two Cities",
            "The Hitchhiker's Guide to the Galaxy",
            "A Clash of Kings",
            "The Shining"
        ];

        // Function to sort articles ignoring "a, an, the"
        function sortArticles(articles) {
            return articles.sort((a, b) => {
                // Function to remove leading "a, an, the" and return the rest of the string
                const strip = str => str.replace(/^(a |an |the )/i, '');

                // Compare stripped titles
                const titleA = strip(a);
                const titleB = strip(b);
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
        }

        // Sort articles
        const sortedArticles = sortArticles(articles);

        // Display sorted articles in the list
        const bandList = document.getElementById('band');
        sortedArticles.forEach(article => {
            const listItem = document.createElement('li');
            listItem.textContent = article;
            bandList.appendChild(listItem);
        })