$(() => {
const $mainSection = $('.main-section')
const $menuButton = $('#menuButton')
const $leftButton = $('<button>').attr('class','button').attr('id','previous').text('Back')
const $rightButton = $('<button>').attr('class','button').attr('id','next').text('Next')
const $job1Detail = $('#job1Detail')
const $job2Detail = $('#job2Detail')
const $job3Detail = $('#job3Detail')
const $job4Detail = $('#job4Detail')
const $job5Detail = $('#job5Detail')
const $audioDetail = $('#audioDetail')
const $videoDetail = $('#videoDetail')
const $codingDetail = $('#codingDetail')
const $image = $('#image')



const menuShow = () => {
    $mainSection.toggleClass('active') //toggle so that when toggled, move into menu div.
    $menuButton.toggleClass('active')
    directionalButton()
    $leftButton.toggleClass('active')
    $rightButton.toggleClass('active')
    $image.toggleClass('active')
    imagesAppear()
}
const directionalButton = () => {
    $rightButton.insertBefore($mainSection)
    $leftButton.appendTo('.everything')
}



const imagesAppear = () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'flex')
}
let numOfImages = $('.carousel-images').children().length - 1
let currentImgIndex = 0



    //the next image button
const goNext = () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
    } else {
        currentImgIndex = 0
    }
    
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'flex')
    }
   
const goPrevious = () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

    if(currentImgIndex > 0) {
        currentImgIndex --
    } else {
         currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'flex')
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

const audioDetail = () => {
    if($audioDetail.css("display")==="none"){
        $audioDetail.css("display","block")
        $audioDetail.css("color","white")
    }else {
        $audioDetail.css("display","none")
    }
}

const videoDetail = () => {
    if($videoDetail.css("display")==="none"){
        $videoDetail.css("display","block")
        $videoDetail.css("color","white")
    }else {
        $videoDetail.css("display","none")
    }
}

const codingDetail = () => {
    if($codingDetail.css("display")==="none"){
        $codingDetail.css("display","block")
        $codingDetail.css("color","white")
    }else {
        $codingDetail.css("display","none")
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
    $('.audioButton').on('click', audioDetail)
    $('.videoButton').on('click', videoDetail)
    $('.codingButton').on('click', codingDetail)
    $rightButton.on('click', goNext)
    $leftButton.on('click', goPrevious)
})