var typed = new Typed(".multiple",{
    strings:["Bem-vindo","Lute, Acredite, Conquiste, Perca, Deseje."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


let quantidade = document.querySelector("#quantidadeId")
let contagemItens = 0;

let money = document.querySelector("#moneyId")
let soma = 0;

// let dinheiroDentro = 0;


let ul = document.querySelector(".classeUl")
const sectionCard = document.querySelector(`.main-cards`)

function renderProducts(list) {
    for (let i = 0; i < list.length; i++) {

        let li = document.createElement("li")
        let imgImg = document.createElement("img")
        let h2Name = document.createElement("h2")
        let pDescripition = document.createElement("p")
        let h4Valor = document.createElement("h4")
        let buttonAddc = document.createElement("button")
        let p2Tag = document.createElement("p")

        li.id = `${list[i].id}`
        // li.classList.add("card-products")

        imgImg.src = list[i].img
        imgImg.id = `imgImg`

        h2Name.innerHTML = list[i].nameItem
        pDescripition.innerHTML = list[i].description
        h4Valor.innerHTML = `R$${list[i].value}`

        buttonAddc.innerHTML = `Adicionar ao Carrinho`
        buttonAddc.classList.add(`ProductButton`)
        buttonAddc.id = `${list[i].id}`

        p2Tag.innerHTML = list[i].tag
        p2Tag.classList = `tag`
        p2Tag.id = `textoTag`
        pDescripition.classList = `descripstion`

        sectionCard.appendChild(ul)
        ul.appendChild(li)
        li.appendChild(imgImg)
        li.appendChild(p2Tag)
        li.appendChild(h2Name)
        li.appendChild(pDescripition)
        li.appendChild(h4Valor)
        li.appendChild(buttonAddc)

        buttonAddc.addEventListener(`click`, function (e) {
            let idElemnto = e.target.id
            // console.log(idElemnto)
            // "1"
            let id = parseInt(idElemnto)
            // console.log(id)
            // 1
            let verification = verifyCard(id)
            // console.log(verification)
            // false

            // se tirar o if ele add mais de uma vez o mesmo produto
            if (verification == false) {

                produtos[i].quantidade += 1


                contagemItens++
                quantidade.innerHTML = `${contagemItens}`

                soma += produtos[i].value
                document.querySelector("#moneyId").innerHTML = `R$ ${soma.toFixed(2)}`

                let product = procuraItem(id)
                // console.log(product)
                // let product = searchProducts(id)

                let elementCart = removeCardList(product)
                // console.log(elementCart)

                document.querySelector(".cart-empty").style.display = "none"
                document.querySelector('.cart-list').appendChild(elementCart)

                document.querySelector(".cart-products").style.background = "url(areaDaloja.png)"
                // document.querySelector(".cart-products").style.background= "none"

            } else {
                alert("Item já Add.");

            }
        })


    }
}
renderProducts(produtos)

function procuraItem(id) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            return produtos[i]
        }
    }
}

//    .addEventListener("onload",function){


//    }



function removeCardList(list) {




    let li = document.createElement("li")
    let div = document.createElement("div")
    div.classList = `Coisas-no-carrinho`
    let imgImg = document.createElement("img")
    let h2Name = document.createElement("h2")
    let h4Valor = document.createElement("h4")

    // let input = document.createElement("input")
    // input.innerHTML = `number`
    let buttonAddr = document.createElement("button")

    //     <div class="cart--item--qtarea">
    //     <button class="cart--item-qtmenos">-</button>
    //     <div class="cart--item--qt">1</div>
    //     <button class="cart--item-qtmais">+</button>
    // </div>
    let divQnt = document.createElement("div")
    divQnt.classList = `colocarEmLinha`
    let buttonMenos = document.createElement("button")
    buttonMenos.innerHTML = `-`
    buttonMenos.classList = `menos`
    let h3QntItems = document.createElement("h3")
    h3QntItems.innerHTML = 1
    h3QntItems.classList = `QntItems`
    let buttonMais = document.createElement("button")
    buttonMais.innerHTML = `+`
    buttonMais.classList = `mais`

    divQnt.append(h4Valor, buttonMenos, h3QntItems, buttonMais)
    // divQnt.appendChild(h4Valor)
    // divQnt.appendChild(buttonMenos)
    // divQnt.appendChild(h3QntItems)
    // divQnt.appendChild(buttonMais)

    li.id = `c_${list.id}`
    li.classList.add("cartaooNoCarrinho")
    imgImg.src = list.img
    imgImg.id = `imgImg`
    imgImg.classList = `imagemnoCarrinho`
    h2Name.innerHTML = list.nameItem
    h4Valor.innerHTML = ` R$${list.value}`
    buttonAddr.id = `newbutton`
    buttonAddr.classList.add(`productButton`)
    buttonAddr.innerHTML = `Remover do carrinho`

    sectionCard.appendChild(ul)
    ul.appendChild(li)
    li.append(imgImg, h2Name, buttonAddr, div)
    div.append(h2Name, divQnt, buttonAddr)

    let contagemDentro = 1;

    buttonMais.addEventListener("click", function (e) {
        contagemItens++
        contagemDentro++
        // dinheiroDentro++

        // console.log(dinheiroDentro)

        quantidade.innerHTML = `${contagemItens}`
        // h3QntItems.innerHTML = `${contagemItens}`
        h3QntItems.innerHTML = `${contagemDentro}`

        // parseInt(h3QntItems)
        // h3QntItems+=1

        // console.log(h3QntItems.innerHTML)
        // console.log(typeof (h3QntItems.innerHTML))
        // console.log(parseInt(h3QntItems.innerHTML))

        // let listP = e.composedPath()
        // console.log(listP)

        soma += list.value
        document.querySelector("#moneyId").innerHTML = `R$ ${soma.toFixed(2)}`
    })

    buttonMenos.addEventListener("click", function (e) {
        contagemItens--
        contagemDentro--
        // dinheiroDentro--
        quantidade.innerHTML = `${contagemItens}`
        h3QntItems.innerHTML = `${contagemDentro}`

        soma -= list.value
        document.querySelector("#moneyId").innerHTML = `R$ ${soma.toFixed(2)}`

        // let listP = e.composedPath()
        // listP[3].remove()
        // console.log(listP)
        // [3]li #c_4
        // console.log(typeof (h3QntItems.innerHTML))

        if (h3QntItems.innerHTML == 0) {
            let listP = e.composedPath()
            listP[3].remove()
        }
        // listP[3].id.remove()

        if (contagemItens === 0) {
            let listP = e.composedPath()
            listP[3].remove()
            document.querySelector(".cart-empty").style.display = "flex"
        }

    })

    buttonAddr.addEventListener("click", function (e) {

        contagemItens -= contagemDentro
        quantidade.innerHTML = `${contagemItens}`

        // contagemDentro--
        // h3QntItems.innerHTML = `${contagemDentro}`
        // dinheiroDentro*=list.value
        // console.log(dinheiroDentro)

        // soma-=dinheiroDentro 
        // console.log(soma)

        // let somaT = h3QntItems*h4Valor
        // soma -= contagemDentro
        // soma -= somaT
        soma -= list.value * contagemDentro
        document.querySelector("#moneyId").innerHTML = `R$ ${soma.toFixed(2)}`
        let listP = e.composedPath()
        listP[2].remove()

        if (contagemItens === 0) {
            document.querySelector(".cart-empty").style.display = "flex"
            document.querySelector(".cart-products").style.background = "none"
        }

    })



    return li
}

function verifyCard(id) {
    let verifyC = document.querySelector(`#c_` + id)
    if (verifyC == null) {
        return false
    } else {
        return true
    }
}

function verificacaoBarraDePesquisa(id) {
    let verifyC = document.querySelector(`#c_` + id)
    if (verifyC == null) {
        return false
    } else {
        return true
    }
}
// console.log(verificacaoBarraDePesquisa())
// console.log(verifyCard())


// function search() {
//     let arr = []
//     let meuInput = document.querySelector(".search-input")
//     let buttonP = document.querySelector(".search-button")
//     buttonP.addEventListener("click", function () {
//         for (let i = 0; i < produtos.length; i++) {
//             if (produtos[i].nameItem === meuInput.value) {
//                 arr.push(produtos[i])
//                 ul.innerHTML = ""
//                 renderProducts(arr)
//             }
//         }
//     })
// }
// search()

// function search() {
//     let arr = []
//     let fomateString = ""

//     let meuInput = document.querySelector(".search-input")
//     let buttonP = document.querySelector(".search-button")
//     buttonP.addEventListener("click", function () {
//         for (let i = 0; i < produtos.length; i++) {
//             fomateString = produtos[i].nameItem.toString().toLowerCase();

//             // if (produtos[i].nameItem === meuInput.value) {
//             //     arr.push(produtos[i])
//             //     ul.innerHTML = ""
//             //     renderProducts(arr)
//             // }

//             if (produtos[i].nameItem === meuInput.value ||fomateString === meuInput.value ) {
//                 arr.push(produtos[i])
//                 ul.innerHTML = ""
//                 renderProducts(arr)
//             }
//         }
//     })
// }
// search()

//////////////////////////////////////////////////////

function searchProducts(serarchTerm) {
    let searchItems = []
    let fomateString = ""
    for (let i = 0; i < produtos.length; i++) {
        fomateString = produtos[i].nameItem.toString().toLowerCase();
        if (fomateString.includes(serarchTerm)) {
            searchItems.push(produtos[i]);
        }
    }
    return searchItems;
}
// console.log(searchProducts())

// const searchInput = document.querySelector(".search-input")
// const searchBtn = document.querySelector(".search-button")

// searchBtn.addEventListener("click", function () {
//     let searchTerm = searchInput.value;
//     let formatedString = searchTerm.toString().toLowerCase()
//     const searchedProducts = searchProducts(formatedString)
//     console.log(searchedProducts)

//     removeCardList()
//     // console.log(removeCardList())

//     renderProducts(searchProducts)
//     // console.log(renderProducts(searchProducts))

//     searchInput.value = ""
// })

let arr = []

function search() {

    let fomateString = ""
    let meuInput = document.querySelector(".search-input")

    let buttonP = document.querySelector(".search-button")


    buttonP.addEventListener("click", function (e) {
        ul.innerHTML = ""
        let searchTerm = meuInput.value;
        // console.log(searchTerm)

        let formatedString = searchTerm.toString().toLowerCase()
        // console.log(formatedString)

        const searchedProducts = searchProducts(formatedString)
        // console.log(searchedProducts)

        arr = []
        for (let i = 0; i < produtos.length; i++) {

            // let verification = verificacaoBarraDePesquisa(produtos[i].id)
            // console.log(verification)

            // let idElemnto = e.target.id
            // console.log(idElemnto)
            // let id = parseInt(idElemnto)
            // console.log(id)
            // let verification = verifyCard(id)
            // console.log(verification)

            fomateString = produtos[i].nameItem.toString().toLowerCase();
            if (fomateString.includes(formatedString)) {
                // arr.splice(i, 1)
                // arr.pop()

                arr.push(produtos[i]);
                console.log(arr[i])
                // console.log(arr)
                ul.innerHTML = ""
                renderProducts(arr)
            } else {
                // alert("n achamos")
                // alert.remove()
                // confirm("confirme")
                // headerFilter3(produtos)

            }
            // if(formatedString != produtos[i].nameItem){
            //     alert("Item não encontrado")
            // }



        }

        // for (let i = 0; i < produtos.length; i++) {
        //     fomateString = produtos[i].nameItem.toString().toLowerCase();

        //     if (produtos[i].nameItem === meuInput.value || fomateString === meuInput.value) {
        //         arr.push(produtos[i])
        //         ul.innerHTML = ""
        //         renderProducts(arr)
        //     }
        // }
    })

    // let buttonAddc = document.querySelectorAll(".ProductButton")
    // console.log(buttonAddc)
    
    // buttonAddc.addEventListener("click",function(){
    //     console.log("clicoo")
    // })


}
search()




// searchInput.addEventListener("change", function (e) {
//     let seachTerm = e.target.value;
//     let formatedString = seachTerm.toString().toLowerCase();
//     const searchedProducts = searchProducts(formatedString)
//     console.log(searchedProducts) tras só o array que eu colocar !!

//     removeCardList()
//     console.log(removeCardList())
//     renderProducts(searchedProducts)
//     console.log(renderProducts(searchedProducts))

// })

function headerFilter(arr) {
    let lista = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag == `Kimono`) {
            
            // console.log(arr[i].tag[0])
            // console.log(arr[i].tag)


            lista.push(arr[i])
            ul.innerHTML = ""

        }
    }

    renderProducts(lista)
}

// headerFilter(produtos, "Kimono")


function headerFilter2(arr) {
    let lista = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag != `Kimono`) {
            lista.push(arr[i])
            ul.innerHTML = ""

        }
    }

    renderProducts(lista)
}
// headerFilter2(produtos)

function headerFilter3(arr) {
    let lista = []
    for (let i = 0; i < arr.length; i++) {

        lista.push(arr[i])
        ul.innerHTML = ""

    }

    renderProducts(lista)
}
// headerFilter3(produtos)

document.querySelector('#Kimono').addEventListener('click', function (e) {
    headerFilter(produtos)
})
document.querySelector('#luva').addEventListener('click', function (e) {
    // let listP = e.composedPath()
    // console.log(listP)
    // listP[5].remove()

    // headerFilter(produtos, "Luva")
    // headerFilter(produtos, "Caneleira")

    headerFilter2(produtos)
})
document.querySelector('#all').addEventListener('click', function (e) {

    headerFilter3(produtos)
})