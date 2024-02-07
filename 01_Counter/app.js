const counter_val = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = Number(counter_val.textContent);

// function to update counter color
function checkCountColor() {

    switch(true) {
        case (count < 0):
            return 'red';
        case (count > 0):
            return 'green';
        case (count===0):
            return 'black';
    }

}

// main function
function main() {
    console.log(btns);
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            styles = e.currentTarget.classList
            if (styles.contains('decrease')){
                count -= 1;
            }
            else if (styles.contains('increase')) {
                count += 1;
            } else {
                count = 0;
            }
            counter_val.textContent = count;
            counter_val.style.color = checkCountColor();
        });
    });
}

main();
// event listener 