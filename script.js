function storeRecord(){
    car={
       brand:carbrand.value,
       price:carprice.value,
       key:carkey.value 
    }
    if(car.brand==''||car.price==''||car.key==''){
        alert('Please fill all the feilds')
    }
    else{
        if(car.key in localStorage){
            alert('Already exist')
        }
        else{
            alert('Car details added successfully')
            localStorage.setItem(car.key,JSON.stringify(car))
        
        }
    }
    

}

function reterive(){
     let key=ret.value
    let car=JSON.parse(localStorage.getItem(key))
    console.log(car);
    result.innerHTML =`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Car Brand : ${car.brand}</li>
      <li class="list-group-item">Car Price : ${car.price}</li>
      <li class="list-group-item">Car key : ${car.key}</li>
    </ul>
  </div>`
  
}

// function deleteRecord(){
//     let del_key=del.value
//     localStorage.removeItem(del_key)
//     console.log(remov);
    
//     alert('Details removed successfully')

   
   
// }

function clearRecord(){
    localStorage.clear()
}

function deleteRecords(){

    let deleteValue = document.getElementById('deleteValue').value;
    let carDetails = JSON.parse(localStorage.getItem(deleteValue));

    // console.log(carDetails)
    
    if (localStorage.getItem(deleteValue)) {
        localStorage.removeItem(deleteValue);
        alert("Item deleted successfully");
    } else {
        alert("Item with the provided key does not exist");
    }
}