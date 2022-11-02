$(() => {
const $mainSection = $('.main-section')
$mainSection.css("animation", "main-animation 0.5s ease")

const menuShow = () => {
    $mainSection.toggleClass('active');
}



    $('#menuButton').on('click', menuShow)
})

// const menuButton = document.querySelector("#menuButton")
// const mainSection = document.querySelector(".main-section")

// menuButton.addEventListener("click", () => {
//     mainSection.classList.toggle("active")
// })