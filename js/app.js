        (function () {
            if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var a = document.createElement("style");
                a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
                document.getElementsByTagName("head")[0].appendChild(a)
            }
        })();

        function readyFn(jQuery) {
            // Code to run when the document is ready.


            // Add smooth scrolling to all links
            $("a.scrolla").on('click', function (event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });


            // Uwaga na modyfikacje

            // Zdjęcia ustawianie wysokosci i szerokosci
            var zdjecieWzorcowe, zdjecieWzorcowePolowaWysokosci;
            // sprawdzam wysokosc dużego wzorcowego zdjecia
            var zdjecieWzorcowe = $(".three_photo_1").height();
            zdjecieWzorcowePolowaWysokosci = zdjecieWzorcowe / 2;
            // ustawiam wysokosc na podstawie wzorcowego zdjecia
            $('.three_photo_text').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.photo_box3_text').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.CoverImage').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.photo_box2 .photo_box2_text').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.photo_box2 .CoverImage').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.photox').css('height', zdjecieWzorcowePolowaWysokosci);
            $('.photox').css('width', zdjecieWzorcowePolowaWysokosci);
            $('.photoy').css('height', zdjecieWzorcowe);
            $('.photoy').css('width', zdjecieWzorcowePolowaWysokosci);


            // Slider
            var slideIndex = 0;
            showSlides();

            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
                setTimeout(showSlides, 8000); // Change image every 2 seconds
            }

            //Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            //Click event to scroll to top
            $('.scrollToTop').click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }

        $(document).ready(readyFn);
        // or:
        $(window).on("load", readyFn);
        // resize
        $(window).on("resize", readyFn);
