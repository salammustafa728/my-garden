'use strict';

const formFlower = document.getElementById( 'flowerForm' );

const btnSave = document.getElementById( 'btnSave' );
const tableE= document.getElementById( 'tableE' );
const secForm = document.getElementById( 'formSec' );
let imgArr=['Alstroemerias','Gardenias','Orchids','Peonies','Roses','Sunflowers','Tulips'];
const selectE = document.getElementById( 'flowers' );


function Flower( name,img,season ){
  this.name=name;
  this.img=`./img/${img}.jpeg`;
  this.season=season;
  Flower.all.push( this );
}

Flower.all=[];

Flower.prototype.render=function(){
  tableE.innerHTML='';
  //   let ulE = document.createElement( 'ul' );
  //   secForm.appendChild( ulE );

  // let tableFrm = document.createElement( 'table' );
  // secForm.appendChild( tableFrm );

  let trE=document.createElement( 'tr' );
  tableE.appendChild( trE );

  for( let i=0;i<Flower.all.length;i++ ){

    let tdX = document.createElement( 'li' );
    trE.appendChild( tdX );
    tdX.textContent='x';

    let tdName = document.createElement( 'li' );
    trE.appendChild( tdName );
    tdName.textContent=Flower.all[i].name;

    let tdImg = document.createElement( 'li' );
    trE.appendChild( tdImg );
    tdImg.textContent=Flower.all[i].img;

    let tdSeason = document.createElement( 'li' );
    trE.appendChild( tdSeason );
    tdSeason.textContent=Flower.all[i].season;

  }
  sdata();
//`${this.img}  ${this.name}  ${this.season}`;
};
function sdata(){
  localStorage.setItem( 'form',JSON.stringify( Flower.all ) );
}

function formHandler( event ){
  event.preventDefault();

  let flowerName = event.target;
  document.getElementById( 'flowerName' ).innerHTML=flowerName.flowerName;
  let imgE = event.target;
  document.getElementById( 'flowerName' ).innerHTML=imgE.imgE;
  let seas= event.target;
  document.getElementById( 'flowerName' ).innerHTML=seas.season;

  let newflower = new Flower( flowerName,imgE,seas );

  newflower.render();

}

for( let i=0; i<imgArr.length;i++ ){
  let optionE = imgArr[i];
  let opt = document.createElement( 'option' );

  opt.textContent= optionE;
  opt.value=optionE;
  selectE.appendChild( opt );

}

function removFlower( event ){

  let removeFlo = event.target.id;
  for( let i=0;i<Flower.all.length;i++ ){
    if( Flower.all[i]===removeFlo ){
      Flower.all[i].splice( removeFlo,1 );
    }
    Flower.render();
  }
  sdata();
  render();
}
function clearD(){
  localStorage.clear();
}

function get(){
  let data = JSON.parse( localStorage.getItem( 'form' ) );
  if( data ){
    for( let i=0;i<data.length;i++ ){
      new Flower( data[i].name,data[i].img,data[i].season );
    }

  }
}
get();
btnSave.addEventListener( 'click',formHandler );
removFlower();
clearD();
