let pronombres = ['the', 'our'];
let adjetivos = ['great', 'big'];
let sustantivos = ['jogger', 'racoon'];
let extensiones = ['.com', '.cl'];



for (let i = 0; i < pronombres.length; i++) {
    for (let z = 0; z < adjetivos.length; z++) {
        for (let x = 0; x < sustantivos.length; x++) {
            for (let c = 0; c < extensiones.length; c++) {
                console.log(pronombres[i] + adjetivos[z] + sustantivos[x] + extensiones[c]);
            }
        }
    }
}