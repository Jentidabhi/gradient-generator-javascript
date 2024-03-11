(function () {
    let wrapperElm = document.querySelector('.gradient-generator-wrapper');
    let resultElem = document.querySelector('.output-screen-text');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    let myHax1 = '#00dbde';
    let myHax2 = '#fc00ff';

    const getHaxValues = () => {
        let haxValues = '0123456789abcdef';
        let colors = '#';
        for (i = 0; i <= 5; i++) {
            colors = colors + haxValues[Math.floor(Math.random() * 16)]
        }
        return colors;
    }

    const myColor1 = () => {
        myHax1 = getHaxValues();
        wrapperElm.style.backgroundImage = `linear-gradient(to right, ${myHax1} 0%, ${myHax2} 100%)`;
        resultElem.innerText = `background-image: linear-gradient(to right, ${myHax1} 0%, ${myHax2} 100%);`;
        btn1.innerText = myHax1;
    }

    const myColor2 = () => {
        myHax2 = getHaxValues();
        wrapperElm.style.backgroundImage = `linear-gradient(to right, ${myHax1} 0%, ${myHax2} 100%)`;
        resultElem.innerText = `background-image: linear-gradient(to right, ${myHax1} 0%, ${myHax2} 100%);`;
        btn2.innerText = myHax2;
    }

    const copyToClipboard = () => {
        let copyText = resultElem.innerText;
        navigator.clipboard.writeText(copyText);
        // Alert the copied text
        alert("Copied the text: " + copyText);
    }



    btn1.addEventListener('click', myColor1);
    btn2.addEventListener('click', myColor2);
    resultElem.addEventListener('click', copyToClipboard);
})();