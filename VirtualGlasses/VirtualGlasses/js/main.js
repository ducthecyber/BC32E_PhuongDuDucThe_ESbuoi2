let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
console.log(dataGlasses[3]);

const tryMe = (a) => {
    // document.querySelector('#virtualEye').src = picture 
    console.log('dđ3333');
    let linkImg = ''
    linkImg = dataGlasses[a].virtualImg
    let photo = '';
    photo += `
        <img src="${linkImg}" alt="" width="100" height="100"/>
    `
    document.querySelector('#virtual').innerHTML = photo;

    //THÔNG TIN
    let info = '';
    info +=`
        <div>
            <span class="text-light font-weight-bold text-uppercase">${dataGlasses[a].brand}
            </span>
            <span>${dataGlasses[a].color}
            </span>
        </div>    
        <span class="bg-danger text-light">
        ${dataGlasses[a].price}
        </span>
        <p class="text-light mt-2">
        ${dataGlasses[a].description}
        </p>
    `
    document.querySelector('#glassesInfo').innerHTML =  info;
}

const glassModel = () => {
    // const [g0, g1, g2, g3, g4, g5, g6, g7, g8, g9] = dataGlasses;
    let content = '';
    for (let i = 0; i < dataGlasses.length; i++) {
        content += `
        <button style="background:transparent; border:none; outline:none" "cursor:pointer" 
        onclick="tryMe('${dataGlasses[i]}')">

            <img src="${dataGlasses[i].src}" alt="..." height="150" width="150"/>

        </button>
        `;
    }
    document.querySelector('#vglassesList').innerHTML = content;
}

window.onload = glassModel()