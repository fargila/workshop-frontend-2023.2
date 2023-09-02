const cardinfo = window.document.getElementById('cardinfo')
let pagina = 1;

async function buscarPersonagens() {

    cardinfo.innerHTML = ''
    fetch('https://swapi.dev/api/people/')
    .then(cardinfo => {return cardinfo.json()})
    .then(data=> {

            data.results.map((atributo)=>{

                cardinfo.innerHTML += 
                ` 
                <div class="carta">
                    <div class="div_foto_gal">
                        <img class="foto_gal" src="componentes/imagens_galeria/perso${pagina}.jpg" />
                    </div>
                    <div class="texto_gal">
                        <h1>Nome: ${atributo.name}</h1>
                        <p>Gordura: ${atributo.mass} kg</p>
                        <p>Cor do cabelo: ${atributo.hair_color}</p>
                        <p>Cor da pele: ${atributo.skin_color}</p>
                        <p>Óleos: ${atributo.eye_color}</p>
                        <p>Año del cumpleaños: ${atributo.birth_year}</p>
                        <p>Com que gênero esse personagem esse identifica: ${atributo.gender}</p>
                    </div>
                </div>

                `
                pagina++
            })        
    })
    .catch(error => cardinfo.innerHTML = '<h1>Erro no Fetch!</h1>')

};

buscarPersonagens();


