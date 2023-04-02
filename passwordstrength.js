const password = document.querySelector(".passwordentry");
const background = document.querySelector(".backgroundimage");

password.addEventListener('input' , (e) =>{
    const input = e.target.value;
    var strength = 0;
    if(/\d/.test(input)){strength = strength + 10;}
    if(/^[A-Z]*/.test(input)){strength = strength + 10;}
    if(/^[a-z]*/.test(input)){strength = strength + 10;}
    if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input)){strength = strength + 10;}
    const l = input.length;
    if(l > 7){strength = strength + 10;}
    const blurvalue = 50 - strength;
    background.style.filter = `blur(${blurvalue}px)` 
})

