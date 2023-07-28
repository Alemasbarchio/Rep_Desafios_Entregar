const nome = "Alessandro "; //variável exer 19 -1
let num1 = 4; //variável exer 19 -1
let num2 = 2; //variável exer 19 -1
let multiplica = 0;//variável exer 19 -1
multiplica = num1 * num2;

const resultadoListaSubDiv = document.getElementById("listaFuncaoSubDiv"); // <ul> lista recebe valores exercicio 19 função subtrair e dividir 
const listaFuncaoSubDiv = []; // array armazena resultados das funções

// inicio exer 19 -1
console.log("Resultado multiplicação exer 19 " + nome + multiplica);
const soma = (num1, num2) => num1 + num2; {
    let resultado = soma(4, 2);
    console.log(resultado);
    alert("Exercício 19: Visualizar soma aqui e multipicação e nome no console " + "soma é : " + resultado);

}
//  fim exer 19 -1



// inicio exer funções Sub Div
const subtração = (num1, num2) => num1 - num2; {
    num1 = 10;
    num2 = 2;
    if (num1 >= num2) {
        let resultado = subtração(num1, num2);
        listaFuncaoSubDiv.push(resultado);
        resultadoListaSubDiv.textContent = " Subtração = " + resultado;

    }
    else {

        resultadoListaSubDiv.textContent = "não é possivel subtrair"
    }

}

const dividirFuncao = (num1, num2) => num1 / num2; {
    num1 = 20;
    num2 = 2;
    if (num2 > 0) {

        let resultado = dividirFuncao(num1, num2);
        listaFuncaoSubDiv.push(resultado);
        const novoItem = document.createElement("li");
        resultadoListaSubDiv.appendChild(novoItem);
        novoItem.textContent = "Divisão = " + resultado;

    }
    else {
        const novoItem = document.createElement("li");
        resultadoListaSubDiv.appendChild(novoItem);
        novoItem.textContent = "não foi possível realizar a divisão"

    }

}

// fim exer funções Sub Div


// inicio exer função alimentos
const objetoListaAlimentos = () => {

    let fruta = {
        nome: "Banana",
        cor: "amarela",
        peso: "1kg",
        tipo: "Fruta"

    }

    let legumes = {
        nome: "Beterraba",
        cor: "vermelha",
        peso: "2kg",
        tipo: "Legume"

    }

    let verdura = {
        nome: "Alface",
        cor: "verde",
        peso: "200gr",
        tipo: "Verdura"

    }

    let proteina= {
        nome: "Frango",
        cor: "Branco",
        peso: "5kg",
        tipo: "proteina"

    }

    return [fruta, legumes, verdura,proteina];




};


const listaAlimentos = document.getElementById("listaObjetoAlimentos");
const classificarAlimentos = document.getElementById("classificarAlimentos");

Object.keys(objetoListaAlimentos()[0]).forEach(atributo => {
    const valorAtributo = objetoListaAlimentos()[0][atributo];
    const liElemento = document.createElement("li");
    listaAlimentos.appendChild(liElemento);
    liElemento.textContent = `${atributo}; ${valorAtributo}`;

 

})

Object.keys(objetoListaAlimentos()[1]).forEach(atributo => {
    const valorAtributo = objetoListaAlimentos()[1][atributo];
    const liElemento = document.createElement("li");
    listaAlimentos.appendChild(liElemento);
    liElemento.textContent = `${atributo}; ${valorAtributo}`;
})

Object.keys(objetoListaAlimentos()[2]).forEach(atributo => {
    const valorAtributo = objetoListaAlimentos()[2][atributo];
    const liElemento = document.createElement("li");
    listaAlimentos.appendChild(liElemento);
    liElemento.textContent = `${atributo}; ${valorAtributo}`;
})

Object.keys(objetoListaAlimentos()[3]).forEach(atributo => {
    const valorAtributo = objetoListaAlimentos()[3][atributo];
    const liElemento = document.createElement("li");
    listaAlimentos.appendChild(liElemento);
    liElemento.textContent = `${atributo}; ${valorAtributo}`;
})

// funcão nome de cada alimentos 

const resultado = objetoListaAlimentos();
resultado.forEach(alimento => {
    const liElemento = document.createElement("li");
    classificarAlimentos.appendChild(liElemento);
    liElemento.textContent = " alimentos  da lista :" + alimento.nome +"__" + "" + alimento.tipo;
      
});




   




