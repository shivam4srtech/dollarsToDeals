$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 5
        },
        1160: {
            items: 8
        }
    }
})
// Review page onclick show contents
function unfold() {
    var x = document.getElementById("unfold");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
//*******************POP_UP COUPONS****************************
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

