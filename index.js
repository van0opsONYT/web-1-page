
document.querySelector('#started_btn').disabled = true;

document.querySelector('#email_input').onkeyup = () =>{
   document.querySelector('#started_btn').disabled = false;
 }


document.querySelector('#started_btn').addEventListener('click', () => {

alert('Please check your email');

});



const TEXT = document.createElement('p');
TEXT.style.color = 'white';
TEXT.style.fontSize = '14px';
TEXT.style.margin = '0  0 -0.6rem -9rem';
TEXT.innerHTML =  "Please check your email" ;

document.querySelector('#sign_up_btn').disabled = true;

document.querySelector('#email_input2').onkeyup = () =>{
   document.querySelector('#sign_up_btn').disabled = false;
 }

 document.querySelector('#sign_up_btn').addEventListener('click', () => {

   document.querySelector('#check').append(TEXT);
   });