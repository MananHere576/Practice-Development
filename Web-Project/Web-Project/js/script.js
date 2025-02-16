function showLoginForm() {
    var loginContainer = document.getElementById("login-container");
    var catalogContainer = document.getElementById("catalog-container");

    loginContainer.style.display = "block";
    catalogContainer.style.display = "none";
}

function showCatalogPage() {
    var loginContainer = document.getElementById("login-container");
    var catalogContainer = document.getElementById("catalog-container");

    loginContainer.style.display = "none";
    catalogContainer.style.display = "block";
}

function showDescription() {
    var loginContainer = document.getElementById("login-container");
    var catalogContainer = document.getElementById("catalog-container");

    loginContainer.style.display = "none";
    catalogContainer.style.display = "none";
}

function showCategory(category) {
    document.querySelectorAll('.cse-container, .eee-container, .ece-container, .civil-container')
        .forEach(function (container) {
            container.style.display = 'none';
        });

    var categoryContainer = document.querySelector('.' + category + '-container');
    if (categoryContainer) {
        categoryContainer.style.display = 'block';
    }
}
