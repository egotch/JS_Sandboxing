const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const swap_btn = document.getElementById("swap_btn");
const btn_color = document.querySelector(".color");


/**
 * 
 * @returns 
 */
function getRandomIndex() {
    return Math.floor(Math.random() * hex.length);
}

/**
 * Update document body background color
 * 
 * Build random hex color valut from the "hex" array
 */
function update_doc_color_hex() {

    // Inintiate the hex color value
    hex_color = '#'

    // Build the hex color
    while (hex_color.length < 7) {
        //Get random index in hex array
        let index = getRandomIndex();
        hex_color += hex[index];
    }

    // update the document
    document.body.style.backgroundColor = hex_color;
    // update the text content of the button
    btn_color.textContent = hex_color;
    
}

// Add event listener for button press
swap_btn.addEventListener("click", update_doc_color_hex);
