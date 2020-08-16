//Change icon arccording to browser theme
var icon = document.getElementById('icon'); //or grab it by tagname etc

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    icon.href = "images/WhiteLogo.webp";
} else {
    icon.href = "images/BlackLogo.webp";
}