"use strict";$((function(){$("#elem-1-block-1").mouseover((function(){var e=document.querySelector("#elem-1-block-1").getBoundingClientRect();document.querySelector("main").clientWidth>1200?$(".moving-stick-block-1").css("margin-left","60px"):$(".moving-stick-block-1").css("margin-left",e.left+14+"px")})),$("#elem-1-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left",uw/2+"px")})),$("#elem-2-block-1").mouseover((function(){var e=document.querySelector("#elem-2-block-1").getBoundingClientRect();document.querySelector("main").clientWidth>1200?$(".moving-stick-block-1").css("margin-left","415px"):$(".moving-stick-block-1").css("margin-left",e.left+14+"px")})),$("#elem-2-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left",uw/2+"px")})),$("#elem-3-block-1").mouseover((function(){var e=document.querySelector("#elem-3-block-1").getBoundingClientRect(),t=document.querySelector("main"),o=document.querySelector("#elem-3-block-1"),l=t.clientWidth,n=o.clientWidth;l>1200?$(".moving-stick-block-1").css("margin-left","759px"):$(".moving-stick-block-1").css("margin-left",e.left+n/2-12+"px")})),$("#elem-3-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left",uw/2+"px")})),$("#elem-4-block-1").mouseover((function(){var e=document.querySelector("#elem-4-block-1").getBoundingClientRect(),t=document.querySelector("main"),o=document.querySelector("#elem-4-block-1"),l=t.clientWidth,n=o.clientWidth,i=l-e.left-n;$(".moving-stick-block-1").css("margin-left",e.left-i+n/2+"px")})),$("#elem-4-block-1").mouseout((function(){$(".moving-stick-block-1").css("margin-left",uw/2+"px")}))}));var e=document.querySelectorAll(".anim");if(e.length>0){var t=function(t){for(var l=0;l<e.length;l++){var n=e[l],i=n.offsetHeight,c=o(n).top,r=window.innerHeight-i/4;i>window.innerHeight&&(r=window.innerHeight-window.innerHeight/4),scrollY>c-r&&scrollY<c+i?n.classList.add("animate__animated"):n.classList.remove("animate__animated")}},o=function(e){var t=e.getBoundingClientRect(),o=e.offsetX||document.documentElement.scrollLeft,l=e.offsetY||document.documentElement.scrollTop;return{top:t.top+l,left:t.left+o}};window.addEventListener("scroll",t),t()}document.querySelector(".item__time").style.setProperty("--animate-delay","0.3s"),document.querySelector(".item__email").style.setProperty("--animate-delay","0.4s"),document.querySelector(".phone-block").style.setProperty("--animate-delay","0.4s"),document.querySelector(".icons").style.setProperty("--animate-delay","0.3s"),document.querySelector(".main-text-in-block-1").style.setProperty("--animate-delay","0.5s"),document.querySelector(".links__block__1__a2").style.setProperty("--animate-delay","0.8s"),document.querySelector(".links__block__1__a3").style.setProperty("--animate-delay","0.6s"),document.querySelector(".line-block-1").style.setProperty("--animate-delay","1.2s"),document.querySelector(".moving-stick-block-1").style.setProperty("--animate-delay","1.2s"),document.getElementById("elem-1-block-1").style.setProperty("--animate-delay","1.3s"),document.getElementById("elem-2-block-1").style.setProperty("--animate-delay","1.4s"),document.getElementById("elem-3-block-1").style.setProperty("--animate-delay","1.5s"),document.getElementById("elem-4-block-1").style.setProperty("--animate-delay","1.6s"),$(document).ready((function(){document.getElementById("back");$(".navbar-toggler").click((function(e){$(".header").toggleClass("flag"),$(".navbar-toggler").toggleClass("menu-active")})),$(".gallery").slick({dots:!1,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,adaptiveHeight:!0,prevArrow:!1,nextArrow:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!1,adaptiveHeight:!0,prevArrow:!1,nextArrow:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,adaptiveHeight:!0,prevArrow:!1,nextArrow:!1,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,adaptiveHeight:!0,prevArrow:!1,nextArrow:!1,slidesToScroll:1}}]})}));