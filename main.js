// plus sing

const addIphone = document.getElementById('addIphone');
 addIphone.addEventListener('click',function(){
    updateElement('numberOfIphone');
    updateSpanTags('iphonePrice',1219);
    updateSpanTags('subtotal',1219);
    updateSpanTags('total',1219);
   
    taxAdd('tax',60);
    var total =getElementBySpanTag('total');
 
    total = total+60;

    document.getElementById('total').innerText = total;

 })
// minus sing

const subtract = document.getElementById('subtractIcon');
 subtract.addEventListener('click',function(){
    
      subtractionElement('numberOfIphone');
      subtractSpanTags('iphonePrice','numberOfIphone',1219);
      myFunction('subtotal',1219);
      myFunction('total',1219);
     
      taxSub('tax',60);

    var total =getElementBySpanTag('total');
 
    total = total-60;
    
    if(total < 1278) total = 1278;
    document.getElementById('total').innerText = total;
    
      
 })

 // add for iphone case
  const caseForIphone = document.getElementById('addIphoneCase');
   caseForIphone.addEventListener('click',function(){
          updateElement('numberOfIphoneCase');
          updateSpanTags('iphoneCasePrice',59);
          updateSpanTags('subtotal',59);
          updateSpanTags('total',59);
         
          taxAdd('tax',5);

   
   
    var total =getElementBySpanTag('total');
 
    total = total+5;

    document.getElementById('total').innerText = total;
    
   })



 // subtract for iphone case 
  const subtractCaseForIphone = document.getElementById('subtractIphoneCase');
   subtractCaseForIphone.addEventListener('click',function(){
        subtractionElement('numberOfIphoneCase');
        subtractSpanTags('iphoneCasePrice','numberOfIphoneCase',59);
         myFunction('subtotal',59);
         myFunction('total',59);
      
         taxSub('tax',5);

         
    var total =getElementBySpanTag('total');
 
    total = total-5;
      if(total < 1278) total = 1278;
    document.getElementById('total').innerText = total;
    
         
   })

   // images for x 

   const imageRemove = document.getElementById('remove');

   imageRemove.addEventListener('click',function(){
       removeAllValue('numberOfIphone','iphonePrice',1219);

   })

   const imagesForCase = document.getElementById('removeCase');

     imagesForCase.addEventListener('click',function(){
       removeAllValue('numberOfIphoneCase','iphoneCasePrice',59);
   })





   function removeAllValue(id1 , id2 ,number){
         var inputTagsVlaue = getElementById(id1);
       
         var priceOfIphones = getElementBySpanTag(id2);
          
         inputTagsVlaue = 1;
         priceOfIphones = number;
         document.getElementById(id1) .value = inputTagsVlaue;

        document.getElementById(id2).innerText = priceOfIphones;
   }


 function getElementById(id){
      const number = document.getElementById(id).value;

      const integerNumber = parseInt(number);

      return integerNumber;
 }

 function getElementBySpanTag(id){
      const number = document.getElementById(id).innerText;

      const integerNumber = parseFloat(number);

      return integerNumber;
 }


// update plus
 function updateElement(id){
      const validNumber = getElementById(id);

      const numberOflement = validNumber+1;

      document.getElementById(id).value = numberOflement;

 }
 // update minus
function subtractionElement(id){
      var validNumber = getElementById(id);

      var  numberOflement = validNumber;

      if(numberOflement > 1) numberOflement = numberOflement - 1;
    
      document.getElementById(id).value = numberOflement;

}

 function updateSpanTags(id1,number){
     var priceOfIphone =  getElementBySpanTag(id1);

     //var numberOfIphones = getElementById(id2);

     var price = priceOfIphone+number;

     document.getElementById(id1).innerText = price;


 }
 function subtractSpanTags(id1,id2,number){
     var priceOfIphone =  getElementBySpanTag(id1);

     var numberOfIphones = getElementById(id2);
     if(priceOfIphone > number)
     var price = priceOfIphone - number;
    if(numberOfIphones == 1) price = number;
     document.getElementById(id1).innerText = price;

 }

function myFunction(id ,number){
     var hello = document.getElementById(id).innerText;

      var price  = parseFloat(hello);

      price = price - number;
      
      if(price <= 1278 ) price = 1278;
      
      document.getElementById(id).innerText = price;
}

function taxAdd(id,number){

    var taxValue = document.getElementById(id).innerText;
    
    var tax = parseFloat(taxValue);

    tax = tax+number;

    document.getElementById(id).innerText = tax;

}

function taxSub(id ,number){

       var taxValue = document.getElementById(id).innerText;
    
      var tax = parseFloat(taxValue);

     tax = tax-number;

     if(tax <= 0) tax = 0;

     document.getElementById(id).innerText = tax;

}