let boton = document.getElementById("boton");

const getUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";
            let response = await fetch(url);
            let data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};

let agregar = (e) => {
    e.preventDefault();
    
    let input = document.getElementById("input").value;
    let info = getUser();
    
    info.then((data) => {
        
        data.forEach((i) => {
            const inputMayuscula = input.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
            if(inputMayuscula == i.nombre){
                res.innerHTML = `<b>Resultados:</b>`
                nom.innerHTML = `<b>Comuna:</b> ${i.nombre}`
                reg.innerHTML = `<b>Región:</b> ${i.region}`;
                i.realtime.forEach((e) => {
                    valor.innerText = `* La concentración de la contaminación en el aire es de ${e.tableRow.value} ug/m3`
                    cal.innerText = `* La calidad del aire es ${e.tableRow.status}`
                    
                })
            }
        })
            }).catch((error) => {
                console.log("No se ha podido acceder a la API. Error: ", error.message)
            })
            limpiar()
}

let limpiar = () => {
    document.getElementById("input").value = ""
}

boton.addEventListener("click", agregar)