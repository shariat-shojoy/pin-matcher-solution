function getpin(){
    var pin=  Math.round(Math.random()*10000)
  var pinstring=pin+'';
  if(pinstring.length==4){
        return pin;
  }
  else{
      return getpin();
  } 
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const mainpin=getpin();
    document.getElementById('input-pin').value=mainpin;
  
})
document.getElementById('key-pad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const calcinput =document.getElementById('typed-number');
    if(isNaN(number)){
        if(number=='C'){
            calcinput.value='';
        }
    }
    else{
        const previousNumber= calcinput.value;
        const newNumber= previousNumber+number;
        calcinput.value=newNumber;
    }
})
document.getElementById('submit-btn').addEventListener('click',function(){
    const pinGenerate=document.getElementById('input-pin').value
    const calcinput=document.getElementById('typed-number').value
    const successmessage=document.getElementById('success')
    const errormessage=document.getElementById('errore')
    if(pinGenerate==calcinput){
        successmessage.style.display='block'
        errormessage.style.display='none'
    }
    else{
        successmessage.style.display='none'
        errormessage.style.display='block' 
    }
})