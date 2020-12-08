(function () {
    const icons = [

        'fa-bell',
        'fa-anchor',
        'fa-plug',
        'fa-motorcycle',
        'fa-cogs',
    ];


    const getTheCards = (icons) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML =  
        `<div class="card__front">
    <i class=" fa ${icons}"></i>
        </div>
        <div class="card__back">
    <img src="pair-game/assets/img/BF.jpg" alt="back">
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
    const iconsArray = icons.concat(icons);
    shuffle(iconsArray);
    const row1 = document.querySelector('.row:nth-child(2)');
    const row2 = document.querySelector('.row:nth-child(3)');
    let i = 0;
    for (const icons of iconsArray) {
        i += 1;
        const card = getTheCards(icons)
        if (i < 6) {
            row1.appendChild(card);
        } else {
            row2.appendChild(card);
        }

    }

    const cardClick = (eve) => {
eve.currentTarget.classList.toggle('flipped');
 };

    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', cardClick);
    })

})();