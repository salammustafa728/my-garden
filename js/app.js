'use strict';

const formFlower = document.getElementById( 'flowerForm' );

const btnSave = document.getElementById( 'btnSave' );
const secForm = document.getElementById( 'formSec' );

function Flower( name,category,season ){
  this.name=name;
  this.img=`./img/${name}.jpeg`;
  this.category=category;
  this.season=season;
  Flower.all.push( this );
}

Flower.all=[];

Flower.prototype.render=function(){

  //   let ulE = document.createElement( 'ul' );
  //   secForm.appendChild( ulE );

  let tableFrm = document.createElement( 'table' );
  secForm.appendChild( tableFrm );

  let trE=document.createElement( 'tr' );
  tableFrm.appendChild( trE );

  //   for( let i=0;i<Flower.all.length;i++ ){

  let tdX = document.createElement( 'li' );
  trE.appendChild( tdX );
  tdX.textContent='x';

  let tdImg = document.createElement( 'li' );
  trE.appendChild( tdImg );
  tdImg.textContent=this.img;

  let tdName = document.createElement( 'li' );
  trE.appendChild( tdName );
  tdName.textContent=this.name;


  let tdSeason = document.createElement( 'li' );
  trE.appendChild( tdSeason );
  tdSeason.textContent=this.season;
  sdata();
//`${this.img}  ${this.name}  ${this.season}`;
};
function sdata(){
  localStorage.setItem( 'form',JSON.stringify( Flower.all ) );
}

function formHandler( event ){
  event.preventDefault();

  const flowerName = event.target.FlowerName.value;
  const selectItem = event.target.seleItem.value;
  const seas= event.target.season.value;

  let newflower = new Flower( flowerName,selectItem,seas );

  newflower.render();

}

function removFlower( event ){

  let removeFlo = event.target.id;
  for( let i=0;i<Flower.all.length;i++ ){
    if( Flower.all[i]===removeFlo ){

    }
    Flower.render();
  }
}
function clearD(){
    localStorage.clear();
}

function get(){
  let data = JSON.parse( localStorage.getItem( 'form' ) );
  if( data ){
    new Flower( data.name,data.img,data.season );
  }
}
get();
btnSave.addEventListener( 'submit',formHandler );
removFlower();
clearD();
