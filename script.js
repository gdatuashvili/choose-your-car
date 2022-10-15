const mercedesOption = document.querySelector('#mercedesOption');
const cadillacOption = document.querySelector('#cadillacOption');

const selectElement = document.querySelector('#selectElement');



selectElement.addEventListener('change', (event) => {
    if (event.target.value == 'mercedes') {
        function showMercedes() {
            const result = document.querySelector('#result');
            result.setAttribute('class', 'car');
            result.innerHTML = `<img src="./img/mercedes.jpg" alt="" class="carIMG">`;
        }
        showMercedes();
    } else if (event.target.value == 'cadillac') {
        function showCadillac() {
            result.setAttribute('class', 'car');
            result.innerHTML = `<img src="./img/cadillac.jpg" alt="" class="carIMG">`;

        }
        showCadillac();
    } else {
        function showBMW() {
            result.setAttribute('class', 'car');
            result.innerHTML = `<img src="./img/bmw.jpg" alt="" class="carIMG">`;
        }
        showBMW();
    }
});



