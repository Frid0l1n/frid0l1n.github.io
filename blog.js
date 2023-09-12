// Get the "blog-card-title" element from the first HTML page
var blogCardTitle = document.getElementById("blog-card");

// Get the "articles" container from the second HTML page
var articlesContainer = document.querySelector(".articles");

// Check if both elements exist before moving the title
if (blogCardTitle && articlesContainer) {
    // Clone the "blog-card-title" element
    var clonedTitle = blogCardTitle.cloneNode(true);

    // Append the cloned title to the "articles" container in the second page
    articlesContainer.appendChild(clonedTitle);
} else {
    console.log("Elements not found.");
}