$(() => {
const $mainSection = $('.main-section')
const $menuButton = $('#menuButton')
const $leftButton = $('<button>').attr('class','button').attr('id','back').text('Back')
const $rightButton = $('<button>').attr('class','button').attr('id','next').text('Next')
const $job1Detail = $('#job1Detail')
const $job2Detail = $('#job2Detail')
const $job3Detail = $('#job3Detail')
const $job4Detail = $('#job4Detail')
const $job5Detail = $('#job5Detail')



const menuShow = () => {
    $mainSection.toggleClass('active') //toggle so that when toggled, move into menu div.
    $menuButton.toggleClass('active')
    directionalButton()
    $leftButton.toggleClass('active')
    $rightButton.toggleClass('active')
}
const directionalButton = () => {
    $rightButton.insertBefore($mainSection)
    $leftButton.appendTo('.everything')
}

const show1Details = () => {
    if($job1Detail.css("display")==="none"){
        $job1Detail.css("display","block")
        $job1Detail.css("color","white")
    }else {
        $job1Detail.css("display","none")
    }
}

const show2Details = () => {
    if($job2Detail.css("display")==="none"){
        $job2Detail.css("display","block")
        $job2Detail.css("color","white")
    }else {
        $job2Detail.css("display","none")
    }
}

const show3Details = () => {
    if($job3Detail.css("display")==="none"){
        $job3Detail.css("display","block")
        $job3Detail.css("color","white")
    }else {
        $job3Detail.css("display","none")
    }
}

const show4Details = () => {
    if($job4Detail.css("display")==="none"){
        $job4Detail.css("display","block")
        $job4Detail.css("color","white")
    }else {
        $job4Detail.css("display","none")
    }
}

const show5Details = () => {
    if($job5Detail.css("display")==="none"){
        $job5Detail.css("display","block")
        $job5Detail.css("color","white")
    }else {
        $job5Detail.css("display","none")
    }
}
// const backToNormal = () => {
//     // $mainSection.removeClass('active')
//     // $menuButton.removeClass('active')
//     // $buttons.removeClass('active')
// }

    $('#menuButton').on('click', menuShow)
    $('#job1Click').on('click', show1Details)
    $('#job2Click').on('click', show2Details)
    $('#job3Click').on('click', show3Details)
    $('#job4Click').on('click', show4Details)
    $('#job5Click').on('click', show5Details)
})