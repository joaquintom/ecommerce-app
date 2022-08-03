

const instrumentos = [
    
        {

        id:0,
        marca: "Pearl",
        categoria: "bateria",
        img: "../image/cuadro.jpg",
        stock:5 ,
        initial:1

         },

        {

        id:1,
        marca: "ludwig",
        categoria: "bateria",
        img:"../image/cuadro.jpg",
        initial:1
    },

        {

        id:2,
        marca: "mapex",
        categoria: "bateria",
        img: "../image/cuadro.jpg",
        stock: 4,
        initial:1
    }


]


const getFetch = new Promise((resolve,reject) => {

    let condition = true //iniciacion con true
    if(condition){
        setTimeout(() => {
            resolve(instrumentos)
        }, 2000);
    }
    else{
        reject(console.log("No hay instrumentos"))
    }

})

export default getFetch;
