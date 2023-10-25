let bus = " http://localhost:8080" + "/todos/"

fetch(bus)
.then(res => res.json())
.then(res => console.log(res))
let modal = document.querySelector(".modal")
let tablee = document.querySelector(".tablee")
let title_btn = document.querySelector(".title-btn")
let table = document.querySelector(".table")
let plitka = document.querySelector(".plitka")
let plitki = document.querySelector(".plitki")
function reload() {
    





 }
 
title_btn.onclick = () => {
    modal.style.display = "flex"
    modal.onclick = () => {
        modal.style.display = "none"
    }
}
plitka.onclick = () => {

    let plitkaa = document.createElement("div")
    let p_h1 = document.createElement("h1")
    let p_p = document.createElement("p")
    let p_dates = document.createElement("div")
    let p_span_date = document.createElement("span")
    let p_span_vremya = document.createElement("span")
    let p_vipolneno = document.createElement("div")
    let p_span_vipolneno = document.createElement("span")



    plitkaa.classList.add("plitkaa")
    p_h1.innerHTML = "Переписать проект на Vue 3"
    p_p.innerHTML = "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    p_dates.classList.add("dates")
    p_span_date.innerHTML = "21.01.21"
    p_span_vremya.innerHTML = "14:21"
    p_vipolneno.classList.add("vipolneno")
    p_span_vipolneno.innerHTML = "Не выполнено"

    plitki.append(plitkaa)
    plitkaa.append(p_h1,p_p,p_dates,p_vipolneno)
    p_dates.append(p_span_date,p_span_vremya)
    p_vipolneno.append(p_span_vipolneno)

    tablee.style.display = "none"
    plitki.style.display = "flex"
    table.onclick = () => {
        tablee.style.display = "block"
        plitki.style.display = "none"
        let box = document.createElement("div")
    let h1_box = document.createElement("div")
    let h3 = document.createElement("h3")
    let p_box = document.createElement("div")
    let p = document.createElement("p")
    let box_dates = document.createElement("div")
    let h3_dates = document.createElement("h3")
    let h3_vremya = document.createElement("h3")
    let h3_vipolneno = document.createElement("h3")
    let hr = document.createElement("hr")

    box.classList.add("box")
    h1_box.classList.add("h1-box")
    h3.innerHTML = "Перерисать проект на Vue 3"
    p_box.classList.add("p-box")
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Nulla obcaecati pariatur qui.  Fuga nostrum dolores alias vero <br> minus tempore tenetur porro molestiae?"
    box_dates.classList.add("box-dates")
    h3_dates.innerHTML = "21.01.21"
    h3_vremya.innerHTML = "14:31"
    h3_vipolneno.innerHTML = "Не Выполнено"
    hr.classList.add("hr")


    tablee.append(box)
    box.append(h1_box,p_box,box_dates)
    h1_box.append(h3)
    p_box.append(p)
    box_dates.append(h3_dates,h3_vipolneno,h3_vremya)
    tablee.append(hr)

    }
    }
