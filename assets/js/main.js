let input = document.querySelector('#password');
let showBtn = document.querySelector('#showBtn');
let indicator = document.querySelector('.indicator');
let weak = document.querySelector('.weak');
let medium = document.querySelector('.medium');
let strong = document.querySelector('.strong');
let text = document.querySelector('.text');
let regExpWeak = /[a-z]/; //alphabit
let regExpMedium = /\d+/; //digit
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/; //spical cherector
input.addEventListener('keyup', triger);

function triger(e){
    if(input.value != ""){
        indicator.style.display = 'block';
        showBtn.style.display = 'block';
        indicator.style.display = 'flex';
        if(input.value.length <= 3 && (input.value.match(regExpWeak)) || (input.value.match(regExpMedium)) || (input.value.match(regExpStrong))){
            no = 1;
        }
        if(input.value.length >= 6 && ((input.value.match(regExpWeak)) && (input.value.match(regExpMedium))) || ((input.value.match(regExpWeak)) && (input.value.match(regExpStrong)))|| ((input.value.match(regExpMedium)) && (input.value.match(regExpStrong)))){
            no = 2;
        }
        if(input.value.length >= 6 && (input.value.match(regExpWeak)) && (input.value.match(regExpMedium)) && (input.value.match(regExpStrong))){
            no = 3;
        }
        if(no == 1){
            weak.classList.add('active');
            text.textContent = "Password is Week";
            text.style.color = "#ff0000";
            text.style.textAlign = "center";
        }
        else{
            weak.classList.remove('active');
        }
        if(no == 2){
            weak.classList.add('active');
            medium.classList.add('active');
            text.textContent = "Password is Medium";
            text.style.color = "orange";
        }
        else{
            medium.classList.remove('active');
        }
        if(no == 3){
            weak.classList.add('active');
            medium.classList.add('active');
            strong.classList.add('active');
            text.textContent = "Password is Strong";
            text.style.color = "green";
        }
        else{
            strong.classList.remove('active');
        }
        // console.log(no);
        showBtn.onclick = function(){
            if(input.type == 'password'){
                input.type = 'text';
                showBtn.textContent = 'HIDE';
                showBtn.style.color = '#ff0000';
            }
            else{
                input.type = 'password';
                showBtn.textContent = 'SHOW';
                showBtn.style.color = '#00ff00';
            }
        }
    }
    else{
        indicator.style.display = 'none';
        showBtn.style.display = 'none';
        text.textContent = "";
    }

}