//I USED JQUERY TO SMOOTH PAGE SCROLL
$(function(){
    $('li a').click(function(event) {
        event.preventDefault(); 
        var href = $(this).attr('href'); 
        var offSetTop = $(href).offset().top; 
        $('html, body').animate({ 
            'scrollTop': offSetTop 
        }, 'slow'); 
    });
});

// 
var email = document.getElementById('email')
email.addEventListener('blur', function() {
    if(email.value == ""){
        email.style.borderColor = 'hsl(0, 100%, 63%)'
        msgerror.style.color = 'hsl(0, 100%, 63%)'
        msgerror.style.display = 'block'
        msgerror.innerHTML = 'Please enter a valid email address'
    }else if(!email.checkValidity()){
        email.style.borderColor = 'hsl(0, 100%, 63%)'
        msgerror.style.color = 'hsl(0, 100%, 63%)'
        msgerror.style.display = 'block'
        msgerror.innerHTML = 'Please enter a valid email address'
    }else{
        msgerror.style.display = 'none'
        email.style.borderColor = 'rgb(118, 118, 118)'
    }
})

var msgerror = document.getElementById('msg-error')

var btn = document.querySelector('.btn-form')
btn.addEventListener('click', function() {
    if(email.value == ""){
        email.style.borderColor = 'hsl(0, 100%, 63%)'
        msgerror.style.color = 'hsl(0, 100%, 63%)'
        msgerror.style.display = 'block'
        msgerror.innerHTML = 'Please enter a valid email address'
    }else if(!email.checkValidity()){
        email.style.borderColor = 'hsl(0, 100%, 63%)'
        msgerror.style.color = 'hsl(0, 100%, 63%)'
        msgerror.style.display = 'block'
        msgerror.innerHTML = 'Please enter a valid email address'
    }else{
        msgerror.style.display = 'block'
        email.style.borderColor = 'hsl(130, 55%, 57%)'
        msgerror.style.color = 'hsl(130, 55%, 57%)'
        msgerror.innerHTML = 'Valide Email'
    }

})

//I USED JQUERY TO HIDE ADN SHOW NAVBAR

$(document).ready(function () {
    $(window).resize(function() {
        var vpWidth = $(window).width();

        if(vpWidth <= 750) {
            
            $('.icon').show()
            $('.text-nav').hide()
           
            if($('.icon').hasClass('close')){
                $('.icon').removeClass('close')
                $('.text-nav').hide()
            }

            $('header .text-nav ul li a').click(function() {
                $('.icon').removeClass('close')
                $('.text-nav').hide()
            })
        }else if(vpWidth > 751 ){
            $('.icon').hide()
            $('.text-nav').show()

            $('header .text-nav ul li a').click(function() {
                $('.icon').removeClass('close')
                $('.text-nav').show()
            })
        }
    })
    
    $('.icon').click(function() {
        $(".icon").toggleClass("close")
        $('.text-nav').toggle()
    })
})