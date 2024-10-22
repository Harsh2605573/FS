const btnon = document.querySelector('#On');
const btnoff = document.querySelector('#Off');
let imgitem = document.querySelector('img');
function on(e) {
    imgitem.src='https://avatars.mds.yandex.net/i?id=af9758d82e599824241ab6317628161da70831eb-7663084-images-thumbs&n=13'
    console.log('btn on click');
}
function off(e) {
    imgitem.src='https://avatars.mds.yandex.net/i?id=d6993352b9a6e24879d2a134aae744fdd93099ce-9888116-images-thumbs&n=13'
    console.log('btn off click');
}

btnon.addEventListener('click',on);
btnoff.addEventListener('click',off);