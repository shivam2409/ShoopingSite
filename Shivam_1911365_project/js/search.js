function search() {
  var input = document.querySelector('#myInp');
  var items = document.querySelectorAll('.boxx h3');

  for (let i = 0; i < items.length; i++) {

    if (!items[i].innerText.toUpperCase().includes(input.value.toUpperCase())) {
      items[i].parentElement.style.display = "none";
    } else {
      items[i].parentElement.style.display = "block";
    }
  }
}
// cart
let buttons = document.querySelectorAll('.button');
let items = document.querySelector('.cart .items');

buttons.forEach((btn) => {

  btn.onclick = () => {
    let name = btn.parentElement.querySelector('h3').innerText;
    let price = btn.parentElement.querySelector('p').innerText;
    const item = `        
        <tr>
        <td><span>${name}</span></td>
        <td><span>${price}</span></td>
        <td><button class="band"></button></td>
        </tr>
    `;

    console.log(item);

    items.innerHTML += item;

    // remove
    let removeBtns = document.querySelectorAll('.band');

    removeBtns.forEach(btn=>{
      btn.onclick = ()=>{
        console.log(btn);
        
        btn.parentElement.parentElement.remove();
      }
    });
  }
})

document.querySelector('#makepayment').onclick = (event)=>{
  event.preventDefault();
  document.querySelector('.cart').style.display = 'none';
  document.querySelector('.faq').style.display = 'block';
}

//done
// document.querySelector('#done').onclick=()=>{
//   event.preventDefault();
//   alert('Item Purchase Successfully!!!!!!!!');
// }

//FAQ=PAyment

let mypay = document.querySelector('#right1');
mypay.onclick = function (e) {
  e.preventDefault();
  if (document.querySelector('.cart').style.display === "none") {
    document.querySelector('.cart').style.display = "block";
  }
  else {
    document.querySelector('.cart').style.display = "none";
  }
  // document.querySelector('.loda').style.filter = 'blur(10px)';
}
//payment
//cardnumber
document.querySelector('#cardNum').onkeyup = () => {
  let Card = document.querySelector('#cardNum').value;
  let Cardreg = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
  if (!Cardreg.test(Card)) {
      document.querySelector('#cardNum').style.color = 'red';
  }
  else {
      document.querySelector('#cardNum').style.color = 'green';
  }
}
//cvv
document.querySelector('#cvvNum').onkeyup = () => {
  let security = document.querySelector('#cvvNum').value;
  let securityreg = /^[0-9]{3}$/;
  if (!securityreg.test(security)) {
      document.querySelector('#cvvNum').style.color = 'red';
  }
  else {
      document.querySelector('#cvvNum').style.color = 'green';
  }
}
//postalcode
document.querySelector('#pCode').onkeyup = () => {
  let postal = document.querySelector('#pCode').value;
  let postalreg = /^[0-9]{3}$/;
  if (!postalreg.test(postal)) {
      document.querySelector('#pCode').style.color = 'red';
  }
  else {
      document.querySelector('#pCode').style.color = 'green';
  }
}

//name
document.querySelector('#userName').onkeyup = () => {
  let name = document.querySelector('#userName').value;
  let namereg = /[A-Z]{1}[a-z]{2,15}\s[A-Z]{1}[a-z]{2,15}$/;
  if (!namereg.test(name)) {
      document.querySelector('#userName').style.color = 'red';
  }
  else {
      document.querySelector('#userName').style.color = 'green';
  }
}

//deliveryNAme
document.querySelector('#sName').onkeyup = () => {
  let sName = document.querySelector('#sName').value;
  let sNamereg = /[A-Z]{1}[a-z]{2,15}\s[A-Z]{1}[a-z]{2,15}$/;
  if (!sNamereg.test(sName)) {
      document.querySelector('#sName').style.color = 'red';
  }
  else {
      document.querySelector('#sName').style.color = 'green';
  }
}

//postalcode
document.querySelector('#pCode').onkeyup = () => {
  let postal = document.querySelector('#pCode').value;
  let postalreg =/[A-Z][0-9][A-Z]\s[0-9][A-Z][0-9]$/;
  if (!postalreg.test(postal)) {
      document.querySelector('#pCode').style.color = 'red';
  }
  else {
      document.querySelector('#pCode').style.color = 'green';
    }
}


let clof=document.querySelector('#closeForm');

clof.onclick = function () {
  document.querySelector('.faq').style.display = "none";
  // document.querySelector('.loda').style.filter = '';   
}
