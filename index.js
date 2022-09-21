
const btn = document.querySelectorAll("button") // this element contains more than 1 DOMs.
const content = document.querySelectorAll(".content")
let count = 1
btn.forEach(function (button) {
    button.addEventListener("click", function () {
        // button.lastElementChild.style.display = "block";
        count++;
        if (count % 2 == 0) {
            button.lastElementChild.style.display = "block";
            console.log(count);
        }
        else {
            console.log(count);
            button.lastElementChild.style.display = "none";
        }
        window.addEventListener('mouseup', function (event) {
            button.lastElementChild.style.display = "none";
            console.log(count);

        })

    });


});
