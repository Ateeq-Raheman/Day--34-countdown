const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalmessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runanimation();

function resetdom() {
    counter.classList.remove("hide");
    finalmessage.classList.remove("show");

    nums.forEach((num) => {
        num.classList.value = "";
    });

    nums[0].classList.add("in");
}

function runanimation() {
    nums.forEach((num, idx) => {
        const nexttolast = nums.length - 1;

        num.addEventListener("animationend", (e) => {
            if (e.animationName === "goin" && idx !== nexttolast) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goout" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                counter.classList.add("hide");
                finalmessage.classList.add("show");
            }
        });
    });
}

replay.addEventListener("click", () => {
    resetdom();
    runanimation();
});
