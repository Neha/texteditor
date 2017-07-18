var 
    $ = document,
    nameInput = $.getElementsByClassName('nameInput')[0],
    colorList = $.querySelectorAll('ul#colorList li'),
    clear = $.getElementById('clear'),
    btn = $.getElementById('download'),
    valName,
    fontFormat = $.querySelectorAll('ul#fontFormat li');

nameInput.addEventListener('blur',function(){ 
  if( (nameInput.value == '') || (nameInput.value == "enter your name") ){
    // Do nothing
  }
  else{
     var sizeInital = window.getComputedStyle(nameInput,null).getPropertyValue('font-size');
         sizeInital = parseInt(sizeInital);

//change color
for (var i = 0; i < colorList.length; i++){
  colorList[i].addEventListener('click',function(){
  var colorValue =  this.getAttribute('data-color');
      nameInput.style.color = colorValue;
  })
}

for (var i = 0; i < fontFormat.length; i++){
  fontFormat[i].addEventListener('click',function(){
  
  var fontFormat =  this.getAttribute('data-type'),
      fontWeight = $.getElementsByClassName('nameInput')[0].style.fontWeight,
      fontStyle =$.getElementsByClassName('nameInput')[0].style.fontStyle,
      textDecoration=$.getElementsByClassName('nameInput')[0].style.textDecoration;
    

    switch (fontFormat) {
      case 'fontIncrease' : 
        nameInput.style.fontSize = sizeInital + 2 + 'px';
        sizeInital = nameInput.style.fontSize;
        sizeInital = parseInt(sizeInital);
      break;

      case 'fontDecrease' : 
        nameInput.style.fontSize = sizeInital - 2 + 'px';
        sizeInital = nameInput.style.fontSize;
        sizeInital = parseInt(sizeInital);
      break;

      case 'italic' : 
        if(fontStyle == 'italic'){
          nameInput.style.fontStyle = '';
        }
        else{
          nameInput.style.fontStyle = 'italic';
        }
      break;
      
      case 'bold' : 
        if(fontWeight == 'bold') {
          nameInput.style.fontWeight = '';
        }
        else{
          nameInput.style.fontWeight = 'bold';
        }
      break;

      case 'underline' : 
       if(textDecoration == 'underline') {
            nameInput.style.textDecoration = '';
          }
          else{
            nameInput.style.textDecoration = 'underline';
          }
          
      break;
      case 'clear' : 
          nameInput.style = '';
          
          
      break;
    }

  
}
  btn.addEventListener('click',function(e){
      console.log(nameInput.getAttribute('style'));
    })
  })
}
});








    


