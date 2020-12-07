(function () {
    const pics = [

        'war',
        'winter',
        'fog',
        'bridge',
        'street',
    ];


    const getTheCards = (pics) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.insertAdjacentHTML = `<div class="card__front">
    <img "${pics}" alt="no bonus">
</div>
<div class="card__back">
<img src="img/BF.jpg" alt="backface">
</div>
</div>`;
        return div;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    // show cards
    const picsArray = pics.concat(pics);
    shuffle(picsArray);
    const row1 = document.querySelector('.row:nth-child(2)');
    const row2 = document.querySelector('.row:nth-child(3)');
    let i = 0;
    for (const pics of picsArray) {
        i += 1;
        const card = getTheCards(pics)
        if (i < 6) {
            row1.appendChild(card);
        } else {
            row2.appendChild(card);
        }

    }
})();