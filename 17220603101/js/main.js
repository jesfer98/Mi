function addClasses(...classes){

    classes.forEach(element =>{
    $("div#holaMundo").addClass(element);
    })
}


$(document).ready(() => {
  //  alert("hola mundo");



$.ajax({url:"../mock/data.json" }).done(data=>{let coment=data["_comment"];
console.info(`Comment ${coment}`)



let alumnos=data.alumnos;
console.info(`Alumnos ${alumnos}`)




//alumnos.forEach(element=>{console.info(element),$("div#holaMundo").append(`<ul><li>Nombre: ${element.nombre}</li><li>Edad: ${element.edad}</li><li>Semestre: ${element.semestre}</li></ul>`);})




let tiendas=data.tiendas;
console.info(`td ${tiendas}`)
tiendas.forEach(element=>{console.info(element);})

tiendas.forEach(element=>{$("div#hola2").append(`
<div class="container">
  <ul class="list-group">
    <div class="container">
    <li  class="list-group-item list-group-item-success">ID: ${element.id}</li>
    <li class="list-group-item list-group-item-primary">nombre: ${element.name}</li>
    <li  class="list-group-item list-group-item-secondary">brewery_type: ${element.brewery_type}</li>
    <div class="container">
      <li  class="list-group-item list-group-item-secondary">city: ${element.city}</li>
      <li  class="list-group-item list-group-item-secondary">state: ${element.state}</li>
      <li  class="list-group-item list-group-item-success">postal_code: ${element.postal_code}</li>
      <li  class="list-group-item list-group-item-secondary">country: ${element.country}</li>
      <li  class="list-group-item list-group-item-secondary">longitude: ${element.longitude}</li>
      <li  class="list-group-item list-group-item-secondary">latitude: ${element.latitude}</li>
      <li  class="list-group-item list-group-item-success">phone: ${element.phone}</li>
    </div>
    <div class="container">
      <li class="list-group-item list-group-item-primary">website: ${element.website_url}</li>
      <li  class="list-group-item list-group-item-secondary">updated_at: ${element.updated_at}</li></ul>
    </div>
   </div> 
</div><br>
`);})

});



let prom = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve("success");},3000 );

    reject("fail");

});

prom.then((msg)=>{console.log(msg);})
.catch((err)=>{console.log(err);})
addClasses("rojo","azul","negro");


if(true){
let x =5;
 
 let fun=(name)=>{console.log(`fun ${name}`);};
 fun("jpse");
}





});
