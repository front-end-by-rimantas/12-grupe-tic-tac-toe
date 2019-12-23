// import Figure from './Figure.js';

class TicTacToe {
    constructor(target) {
        this.DOM = document.querySelector(target);
        this.player = 'x';

        this.init();
    }

    init() {
        // uzdedam pradine klase stiliams
        this.DOM.classList.add('game');

        // sugeneruojame pradine zaidimo lenta
        let HTML = '';
        for ( let i=0; i<9; i++ ) {
            HTML += `<div class="cell"></div>`;
        }
        this.DOM.innerHTML = HTML;

        // uzregistruojame paspaudimu stebejima ant langeliu
        const cells = this.DOM.querySelectorAll('.cell');
        
        for ( let i=0; i<cells.length; i++ ) {
            const cell = cells[i];

            cell.addEventListener('click', () => {
                this.putPiece(i);
            });
        }
    }

    putPiece(index) {
        const cell = this.DOM.querySelector(`.cell:nth-of-type(${index+1})`);
        if ( cell.textContent !== '' ) {
            return;
        }
        cell.textContent = this.player;
        this.changePlayer();
    }

    changePlayer() {
        if ( this.player === 'x' ) {
            this.player = 'o';
        } else if ( this.player === 'o' ) {
            this.player = 'x';
        };
    }
}

const game = new TicTacToe('#app');