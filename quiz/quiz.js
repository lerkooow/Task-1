"use strict";

function numOfProd() {
    function e(e) {
        e = (e = +$(".prod_left_val").html() - e) < 5 ? 5 : e;
        $(".prod_left_val").html(e);
    }

    setTimeout(function () {
        e(2);
        setInterval(function () {
            e(Math.floor(2 * Math.random()) + 2);
        }, 1e3 * (Math.floor(5 * Math.random()) + 20));
    }, 2e3);
}

(function () {
    let o, l = 0, n = 1200;
    function c() {
        --n;
        let e = Math.floor(n / 60),
            t = n - 60 * e;

        if (e == 0 && t == 0) clearInterval(o);

        t = t >= 10 ? t : "0" + t;
        e = e >= 10 ? e : "0" + e;

        document.querySelector("#mins").innerHTML = e;
        document.querySelector("#secs").innerHTML = t;
    }

    const e = document.querySelectorAll(".quiz_option"),
        t = document.querySelectorAll(".quiz_step"),
        r = document.querySelectorAll(".quiz_num"),
        i = document.querySelectorAll(".quiz_form form input");
    let s = false;

    e.forEach(e => {
        e.addEventListener("click", () => {
            if (!s) {
                s = true;
                l < 3 ? l++ : l = 3;
                e.classList.add("active");

                setTimeout(() => {
                    t.forEach((quizStep, index) => {
                        if (index == l) {
                            quizStep.style.display = "block";
                            setTimeout(() => {
                                quizStep.classList.add("active");
                            }, 400);

                            if (l == 3) {
                                document.querySelector(".quiz_nums").style.display = "none";
                                document.querySelector(".quiz_title").style.display = "none";
                                document.querySelector(".order_title").style.display = "block";
                                o = setInterval(c, 1000);

                                setTimeout(() => {
                                    setTimeout(() => {
                                        var e = $("#roulette"),
                                            scrollTop = $(e).offset().top;
                                        $("body,html").animate({ scrollTop: scrollTop }, 777);
                                    }, 200);
                                }, 400);
                            } else {
                                r[l].classList.add("active");
                            }
                        } else {
                            quizStep.classList.remove("active");
                            setTimeout(() => {
                                quizStep.style.display = "none";
                            }, 400);
                        }
                    });

                    s = false;
                }, 400);

                displaySelectedElementText(e, l);
            }
        });
    });

    i.forEach(input => {
        input.addEventListener("focus", () => {
            input.classList.add("active");
        });
    });

    $("a").click(function (e) {
        e.preventDefault();
        var scrollTo = $("#roulette").offset().top;
        $("body,html").animate({ scrollTop: scrollTo }, 777);
    });

    numOfProd();

    let comment = document.querySelector('input[name="extra[comment]"]');

    function displaySelectedElementText(element, count) {
        comment.value += `${count}.${element.closest(".quiz_step").querySelector(".quiz_question").textContent.trim().replace(/^[0-9]+\. /, "")}:${element.textContent.trim()};`;
    }
})();