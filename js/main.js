window.addEventListener('load',init);

let apiUrl = 'http://localhost/magazinee/webservice/';
let section;
let arrayTheLA = [];


function init(){
    section = document.getElementById('Characters');
    section.addEventListener('click', buttonClickHandler);

    getTheLA();

    if (typeof window.localStorage === "undefined"){
        console.error('Local storage is not available in your browser');
        return;
    } else if (localStorage.getItem('id') !== null){
        arrayTheLA = JSON.parse(localStorage.getItem('id'));
    }
}

function getTheLA() {
    fetch(apiUrl)
        .then((response)=> {
            if (!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Success)
        .catch(Error);
}

function Success(data) {
    console.log(data);
    for (let TheLA of data) {
        let div = document.createElement('div');
        div.classList.add('TheLA');
        if (arrayTheLA.includes(`${TheLA.id}`)){
            div.classList.add("fav");
        }
        div.innerHTML = '<h1>' + TheLA.name + '<h1>'
        section.appendChild(div);
        let image = document.createElement('image');
        image.src = TheLA.image;
        div.appendChild(image);

        let $detail = document.createElement('button');
        $detail.classList.add('info');
        $detail.addEventListener('click', addItem);
        $detail.id = TheLA.id;
        $detail.innerHTML = 'information'
        div.appendChild($detail);

        let $favorite = document.createElement('button');
        $favorite.classList.add('Favorite');
        $favorite.id = TheLA.id;
        $favorite.dataset.id = TheLA.id;
        $favorite.dataset.fav = 'Favorite';
        $favorite.innerHTML = 'Favorite';
        if (arrayTheLA.includes(`${TheLA.id}`)){
            $favorite.innerHTML = "Your Favorite";
        }
        div.appendChild($favorite);
    }

}

function Error(data) {
    console.log(data);
}

function addItem(e) {
    let all = document.getElementById('CharDetails');
    let temporary = document.getElementById('box');
    if (temporary){
        all.removeChild(temporary);
    }

    let section = document.createElement('section');
    section.id = 'box';
    all.appendChild(section);
    let clickedItem = e.target.id;
    let url = apiUrl + '?id=' + clickedItem;

    fetch(url)
        .then((response)=>{
            if (!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(Success2)
        .catch(Error);
}

function Success2(data) {
    let section = document.getElementById('box');
    section.innerHTML = '<h1>Fighting styles</h1>' + data.FightingStyles + '<h1>extra</h1>'+ data.extra;
}

function buttonClickHandler(e) {
    let target = e.target;
    if (e.target.nodeName !== 'BUTTON'){
        return;
    }
    if (target.dataset.fav === 'Favorite'){
        favoriteHandler(e);
    }
}

function favoriteHandler(e) {
    let target = e.target;
    let id = target.dataset.id;

    if (target.parentElement.classList.contains('fav')){
        target.parentElement.classList.remove('fav');
        let itemPosition = arrayTheLA.indexOf(`${id}`);
        arrayTheLA.splice(itemPosition, 1);
        localStorage.setItem('id', JSON.stringify(arrayTheLA));
        target.innerHTML = "Favorite";
    } else {
        target.parentElement.classList.add('fav');
        arrayTheLA.push(id);
        localStorage.setItem('id', JSON.stringify(arrayTheLA));
        target.innerHTML = "Your Favorite";
    }
}