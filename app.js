$(() => {
const $mainSection = $('.main-section')
const $menuButton = $('#menuButton')
const $leftButton = $('<button>').attr('class','button').attr('id','back').text('Back')
const $rightButton = $('<button>').attr('class','button').attr('id','next').text('Next')


const menuShow = () => {
    $mainSection.toggleClass('active') //toggle so that when toggled, move into menu div.
    $menuButton.toggleClass('active')
    directionalButton()
    $leftButton.toggleClass('active')
    $rightButton.toggleClass('active')
}
const directionalButton = () => {
    $leftButton.insertBefore($mainSection)
    $rightButton.appendTo('.everything')
}



// const backToNormal = () => {
//     // $mainSection.removeClass('active')
//     // $menuButton.removeClass('active')
//     // $buttons.removeClass('active')
// }

    $('#menuButton').on('click', menuShow)
})