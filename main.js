let showMenu = document.getElementById('showMenu');
let arr = [
  {
    id: 1,
    name: 'tallarines rojos',
    price: 20,
    isOffer: true
  },
  {
    id: 2,
    name: 'tallarines verdes',
    price: 30,
    isOffer: true
  },
  {
    id: 3,
    name: 'arroz con chancho',
    price: 20,
    isOffer: true
  },
  {
    id: 4,
    name: 'arroz chaufa',
    price: 25,
    isOffer: false
  },
  {
    id: 5,
    name: 'Rissoto',
    price: 30,
    isOffer: true
  },
  {
    id: 6,
    name: 'Salmon',
    price: 120,
    isOffer: false
  },
]
arr.map((iten) => showMenu.innerHTML += `<div>${iten.name}</div>`)
let menuOffer = []
function filterFun(){
  showMenu.innerHTML=""
  if (menuOffer.length === 0 ){
    menuOffer = arr.filter((val) => val.isOffer === true )
    menuOffer.map((iten) => showMenu.innerHTML += `<div>${iten.name}</div>`)
    console.log(menuOffer)
  }else{
    menuOffer = []
    arr.map((iten) => showMenu.innerHTML += `<div>${iten.name}</div>`)
  }
}

