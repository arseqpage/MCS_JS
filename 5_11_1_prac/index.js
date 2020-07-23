

function rap() {
    // let newSchool = [
    //     [
    //         ['1', '2', '3'],
    //         ['4', '5', '6']
    //     ],
    //     [
    //         ['7', '8', '9'],
    //         ['10', '11', '12']
    //     ]
    // ]

    let newSchool = [
        [
            ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
            ['Sonny Digital', 'Metro Boomin', '12Hunna']
        ],
        [
            ['Yung Lean', 'Ecco2K', 'Bladee'],
            ['Whitearmor', 'PJ Beats', 'Yung Gud']
        ]
    ]

    let out = '';
    let out2 = '';
    for (let i = 0; i < newSchool.length; i++) {
        out += newSchool[i] + ' ';


        // for (let k = 0; k <= out[i].length; k++) {
        //     out2 += out[k];
        //     console.log(out2);
        // }
    } console.log(out);

    // let out1 = '';

    // for (key in newSchool) {
    //     out += newSchool[key];


    //     console.log(newSchool[key]);
    // }
}

document.querySelector('.btn-1').onclick = rap;
