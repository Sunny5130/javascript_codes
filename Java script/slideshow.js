< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > SlideShow < /title> <
style > < /style> < /
head >

    <
    body >
    <
    script >
    // let arr = [10, 20, 30, 40] //new array
    // arr[0]
    // // console.log(typeof arr)
    // console.log(Array.isArray(arr))
    let i = 0
let time = 2000 //milli seconds
let images = []
    //image list
images[0] = "https://images.unsplash.com/photo-1670932959430-42f073f76155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
images[1] = 'https://images.unsplash.com/photo-1670944662141-d3753516873c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
images[2] = "https://images.unsplash.com/photo-1670939474909-6b55ce99648f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
images[3] = 'https://images.unsplash.com/photo-1670889505554-c71ef4bc9fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'

function changeImage() {

    // console.dir(document)
    document.slide.src = images[i]

    if (i < images.length - 1) {
        i = i + 1
    } else {
        i = 0 //again start from starting point
    }
    console.log(i)
    setTimeout('changeImage()', time)

}

window.onload = changeImage <
    /script>


<
script >

    <
    /script> <
img name = "slide"
width = "600"
height = "400" / >

    <
    /body>

<
/html>