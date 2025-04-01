function searchAndEmbed() {
    // Get the search keyword
    const keyword = document.getElementById('searchKeyword').value.trim();
    if (keyword === '') {
        alert('Please enter a search keyword!');
        return;
    }

    // Create the Google search URL with the entered keyword
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(keyword)}`;

    // Set the iframe src to the search URL
    document.getElementById('embedIframe').src = searchUrl;
    document.getElementById('embedIframe') = searchUrl;
}