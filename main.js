const flavour = [
    {
        id: 1,
        name: 'Fior di latte',
        ricetta: 'Latte, panna, zucchero, addensanti',
        allergeni: 'lattosio',
        image: 'https://www.my-personaltrainer.it/2022/09/08/latte-e-salute_900x760.jpeg'

    },
    {
        id: 2,
        name: 'Crema alla vaniglia',
        ricetta: 'Latte, panna, uovo, zucchero, addensanti, vaniglia',
        allergeni: 'lattosio, uovo',
        image: 'https://rivistanatura.com/wp-content/uploads/2016/03/vaniglia-770x470.jpg'

    },
    {
        id: 3,
        name: 'Pistacchio',
        ricetta: 'Latte, panna, uovo, zucchero, sciroppo di glucosio, pasta di pistacchio, addensanti',
        allergeni: 'lattosio, uovo, frutta a guscio',
        image: 'https://farmacialoreto.it/image/cache/data/blog2/blog4/14303-1120x444.jpg'

    },
    {
        id: 4,
        name: 'Nocciola',
        ricetta: 'Latte, panna, uovo, zucchero, sciroppo di glucosio, pasta di nocciola, addensanti',
        allergeni: 'lattosio, uovo, frutta a guscio',
        image: 'https://www.my-personaltrainer.it/2021/10/27/nocciole-orig.jpeg'

    },
    {
        id: 5,
        name: 'Cioccolato',
        ricetta: 'Latte, panna, uovo, zucchero, sciroppo di glucosio, cacao, addensanti',
        allergeni: 'lattosio, uovo, frutta a guscio',
        image: 'https://polisg.b-cdn.net/wp-content/uploads/2017/03/la-storia-del-cioccolato-poliambulatorio-san-gaetano.jpg'

    },
    {
        id: 6,
        name: 'Limone',
        ricetta: 'Acqua, limone, zucchero, addensanti',
        allergeni: '',
        image: 'https://www.my-personaltrainer.it/2019/11/18/limoni_900x760.jpeg'

    },
    {
        id: 7,
        name: 'Fragola',
        ricetta: 'Acqua, fragole, zucchero, addensanti',
        allergeni: '',
        image: 'https://www.azienda-bonato.com/wp-content/uploads/2021/02/fragola-4-stagioni-800x600-png.png'

    },
    {
        id: 8,
        name: 'Frutti di bosco',
        ricetta: 'Acqua, Frutti di bosco, zucchero, addensanti',
        allergeni: '',
        image: 'https://www.vivaigabbianelli.it/modules/smartblog/images/26-single-default.jpg'

    },
];
//-- Global Variables

const domCreation = document.querySelector('main');


flavour.forEach(element => {
    const domFlavourElements = `
            <div id = '${element.id}' class="layout2">
                <div class="product">
                <h2>${element.name}</h2>
                <img src="${element.image}" alt="">
                </div>                
                <div class="tagspace">
                    <span class="tagelement">${element.allergeni}</span>
                </div>
            </div>
        `;
    console.log(domFlavourElements);
    domCreation.innerHTML += domFlavourElements;



});



