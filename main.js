const navItem = $("a")
const secAbout = $("#about")

$("nav").css("position","sticky")
$("*").css("scroll-behavior","smooth")

// ========================================================================
const btn1 = $("#btn-1")
const btn2 = $("#btn-2")
const btn3 = $("#btn-3")

btn1.click(function() {
    $("#textBtn1").slideToggle().css({
        animation: "none"
    })
    if (btn1.hasClass("btn")) {
        btn1.removeClass("btn")
        btn1.html("More Info")
    } else {
        btn1.addClass("btn")
        btn1.html("Less Info")
    }
})

btn2.click(function() {
    $("#textBtn2").slideToggle().css({
        animation: "none"
    })
    if (btn2.hasClass("btn")) {
        btn2.removeClass("btn")
        btn2.html("More Info")
    } else {
        btn2.addClass("btn")
        btn2.html("Less Info")
    }
})

btn3.click(function() {
    $("#textBtn3").slideToggle().css({
        animation: "none"
    })
    if (btn3.hasClass("btn")) {
        btn3.removeClass("btn")
        btn3.html("More Info")
    } else {
        btn3.addClass("btn")
        btn3.html("Less Info")
    }
})
// =========================================================================

function mousedown(el) {
    el.style.color = "grey"
}

function mouseup(el) {
    el.style.color = "black"
}

// navItem.eq(0).addClass("active")

// function mouseIn() {
//     navItem.eq(1).addClass("disabled").removeClass("active")
//     console.log("has change")
// }

// function mouseOut() {
//     navItem.eq(1).addClass("active").removeClass("disabled")
//     console.log("has change")
// }

// secAbout.addEventListener("mouseenter",function () {
//     navItem[0].addClass("disabled")
//     console.log("has change")
// })

// secAbout.mouseenter(function() {
//     navItem.eq(1).addClass("disabled").removeClass("active")
//     console.log("has change")
// })

// secAbout.mouseout(function() {
//     navItem.eq(1).addClass("active").removeClass("disabled")
//     console.log("has change")
// })


// const btn1 = document.getElementById("btn-1")

// btn1.addEventListener("click", function() {
//     if (btn1.style.backgroundColor = "rgb(255, 255, 255)") {
//         $("#textBtn1").slideToggle().css({
//             animation: "none"
//         })
//     } else {
//         console.log("gagal")
//     }
// })

// console.log(btn1.style.backgroundColor)

// btn2.click(function() {
//     // $("#textBtn2").slideToggle().css({
//     //     animation: "none"
//     // })
//     if ($("#btn2").css("backgroundColor") == "white") {
//         $("#textBtn2").slideToggle().css({
//             animation: "none"
//         })
//     } else {
//         console.log("gagal")
//     }
// })

// btn3.click(function() {
//     $("#textBtn3").slideToggle().css({
//         animation: "none"
//     })
// })