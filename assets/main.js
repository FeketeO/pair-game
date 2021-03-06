(function () {
    const icons = [

        'fa-bell',
        'fa-anchor',
        'fa-plug',
        'fa-motorcycle',
        'fa-cogs',
    ];

    let points = 0;
    const getTheCards = (icons) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML =
            `<div class="card__front">
    <i class=" fa ${icons}"></i>
        </div>
        <div class="card__back">
    <img src="/assets/img/new-back2.jpg" alt="back">
        </div>`;
        return div;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shufífle...
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
        i ++;
        const card = getTheCards(icons)
        if (i < 6) {
            row1.appendChild(card);
        } else {
            row2.appendChild(card);
        }

    }
    let blockClicks = false;
    const cardClick = (ev) => {
        if (blockClicks) {
            return;
        }
        ev.currentTarget.classList.toggle('flipped');
        const flippedCards = document.querySelectorAll('.card.flipped');
        if (flippedCards.length > 1) {
            blockClicks = true;
            const to = setTimeout( () => {
                clearTimeout(to);
                blockClicks = false;
                document.querySelectorAll('.card').forEach( card => {
                    card.classList.remove('flipped');

            });
        }, 2000);
        checkPair();
    }
    };

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', cardClick);
    });

    const showPoints = (points) => {
        document.querySelector('.user-points').textContent = points;
    }

    const checkPair = () => {
        
            const firstCardIcon = document.querySelector('.card.flipped i');
            if (firstCardIcon) {
                const firstIconClass = firstCardIcon.className.split(' ');
                const pair = document.querySelectorAll(`.card.flipped .${firstIconClass.pop()}`);
                
                if (pair.length == 2 ) {
                        points ++;
                        showPoints(points);
                        document.querySelectorAll(`.card.flipped`).forEach(
                            card => card.classList.add('found'));
                }
            }


    }

})();