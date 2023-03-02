const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link')
const btn = document.querySelector('.btn-login-popup')
const closeOp = document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
  wrapper.classList.add('active');
})


loginLink.addEventListener('click',()=>{
  wrapper.classList.remove('active');
})

btn.addEventListener('click',()=>{
  wrapper.classList.add('active-popup');
})

closeOp.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
})
