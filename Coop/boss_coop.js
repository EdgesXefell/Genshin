//VARIABLES
const bleu = {
    DPS : ["Navia", "Neuvillette", "Kamisato Ayaka", "Clorinde", "Nilou",
        "Ganyu", "Yanfei", "Yoimiya", "Keqing", "Tartaglia", "Cyno"
    ],
    SUB : ["Xiangling", "Bennett", "Ganyu", "Kaedehara Kazuha", "Xingqiu",
        "Sangonomiya Kokomi", "Beidou", "Diona", "Fischl", "Furina", "Yun Jin",
        "Kuki Shinobu", "Shenhe", "Nahida", "Aether"
    ]
}

const bords = {
    DPS : ["Raiden Shogun", "Alhaitham", "Wanderer", "Xiao", "Arlecchino",
        "Wriosthesley", "Arataki Itto", "Kamisato Ayato", "Diluc", 
        "Hu Tao", "Lyney", "Keqing"
    ],
    SUB : ["Yelan", "Raiden Shogun", "Kuki Shinobu", "Zhongli", "Bennett",
        "Xiangling", "Lumine", "Yae Miko", "Xingqiu", "Faruzan", "Yun Jin", "Gorou",
    ]
}

const commun_sub = ["Xiangling", "Bennett", "Xingqiu", "Kuki Shinobu", "Fischl", "Yun Jin",
    "Beidou", "Diona"
];

const CoopBosses = Object.keys(weekly_bosses);

const p1 = bleu;
const p2 = bords;
const imgStyles = ["TCG_", "TCG", "icon", "card"];

//instanciate player 1 DPS
const dpsNameOne = document.getElementById("dps-one").getElementsByTagName("h2")[0];
const dpsImgFrameOne = document.getElementById("dps-one").getElementsByClassName("img-frame")[0];
const dpsImgOne = document.createElement("img"); //create element then append to parent
dpsImgOne.src = "";
dpsImgOne.alt = "";
dpsImgFrameOne.appendChild(dpsImgOne);

//instanciate player 1 SUB
const subNameOne = document.getElementById("sub-one").getElementsByTagName("h2")[0];
const subImgFrameOne = document.getElementById("sub-one").getElementsByClassName("img-frame")[0];
const subImgOne = document.createElement("img"); //create element then append to parent
subImgFrameOne.appendChild(subImgOne);

//instanciate player 2 DPS
const dpsNameTwo = document.getElementById("dps-two").getElementsByTagName("h2")[0];
const dpsImgFrameTwo = document.getElementById("dps-two").getElementsByClassName("img-frame")[0];
const dpsImgTwo = document.createElement("img"); //create element then append to parent
dpsImgFrameTwo.appendChild(dpsImgTwo);

//instanciate player 2 SUB
const subNameTwo = document.getElementById("sub-two").getElementsByTagName("h2")[0];
const subImgFrameTwo = document.getElementById("sub-two").getElementsByClassName("img-frame")[0];
const subImgTwo = document.createElement("img"); //create element then append to parent
subImgFrameTwo.appendChild(subImgTwo);

function generateBossCoop() {
    generateBoss();
    generatePlayer(1, p1);
    generatePlayer(2, p2);
}

//instanciate boss
const bossName = document.getElementById("boss").getElementsByTagName("h2")[0];
const bossImgFrame = document.getElementById("boss").getElementsByClassName("img-frame")[0];
const bossImg = document.createElement("img");
bossImgFrame.appendChild(bossImg);

function generateBoss() {
    const boss = CoopBosses[randint(CoopBosses.length)];
    const bossURL = weekly_bosses[boss]["avatar"];
    bossName.innerHTML = boss;
    bossImg.src = bossURL;
    bossImg.alt = boss;
}

function generatePlayer(playerNumber, player) {
    generateCharacter(playerNumber, player, "DPS");
    generateCharacter(playerNumber, player, "SUB");
}

function generateCharacter(playerNumber, player, characterType) {
    switch(playerNumber) {
        case 1 : //Player 1
            if ( characterType == "DPS" ) { //DPS
                randomizeCharacter(player, dpsNameOne, dpsImgOne, "DPS");
            } else { //SUB
                randomizeCharacter(player, subNameOne, subImgOne, "SUB");
            }
            break;
        case 2 : //Player 2
            if ( characterType == "DPS" ) { //DPS
                randomizeCharacter(player, dpsNameTwo, dpsImgTwo, "DPS");
            } else { //SUB
                randomizeCharacter(player, subNameTwo, subImgTwo, "SUB");
            }
            break;
    }
}

function randomizeCharacter(p, name, img, characterType) {
    const newCharacter = p[characterType][randint(p[characterType].length-1)];
    const characterImg = getImage(newCharacter);
    name.innerHTML = newCharacter;
    img.src = characterImg;
    img.alt = newCharacter;
    console.log(characterType, name, img)
}

function getImage(character) {
    for ( let imgStyle of imgStyles ) {
        if ( characters[character][imgStyle] != "" ) {
            return characters[character][imgStyle];
        }
    }
    /* DOES NOT WORK WITH RETURN, lambda ?
    imgStyles.forEach(imgStyle => {
        console.log(imgStyle, character, characters[character][imgStyle]);
        if ( characters[character][imgStyle] != "" ) {
            return characters[character][imgStyle];
        }
    });
    */
}

function randint(max) {
    return Math.floor(Math.random() * max);
}
