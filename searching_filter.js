
function filterProduct(value){
    let buttons=document.querySelectorAll(".filter-button");
    buttons.forEach(function(button){

        if(value==button.innerText){
            console.log(button);
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    var cards=document.querySelectorAll(".product");
    cards.forEach(function(card){
        if(value=="ALL" ){
            // card.classList.remove("hide");
            card.style.display='block';
        }
        else{
            if(card.id==value ){
                // card.classList.remove("hide");
                card.style.display='block';
            }
            else{
                // card.classList.add("hide");
                card.style.display='none';
            }
        }
    })

}


var searching_button=document.querySelector('.searching-button');
var searching_input=searching_button.parentElement.querySelector('input');

function searching_method(){
    var cards=document.querySelectorAll(".product");

    var elements=document.querySelectorAll(".title");
    
    var search_input=searching_button.parentElement.querySelector("input").value;
    console.log(cards,elements,search_input);
    elements.forEach(function(element,index){
        if(element.innerText.toLowerCase().includes(search_input.toLowerCase())){
            // cards[index].classList.remove("hide");
            cards[index].style.display="block";
            
        }
        else{
            // cards[index].classList.add("hide");
            cards[index].style.display="none";
        }
    })
    
}
searching_input.addEventListener('input',searching_method);
searching_button.addEventListener("click",searching_method);


/////////////////TÌM KIẾM NÂNG CAO (advance searching)////////////////////////////////
let search_container = document.querySelector('.advance-search');
let min_input=search_container.querySelector('.min input');
let min_input_value=0;
let confirm_button = search_container.querySelector('.min-max-confirm');

min_input.addEventListener('input',function(event){
     min_input_value=event.target.value;
})

let max_input=search_container.querySelector('.max input');
let max_input_value=0;
max_input.addEventListener('change',function(event){
    max_input_value=event.target.value;
})

function check_gia(min , max){
    let products = document.querySelectorAll('.product');
    let prices = document.querySelectorAll('.price');
    prices.forEach(function(price_item,index){
        let price_string=price_item.innerText;
        let price_number=price_string.replaceAll('đ','');
        console.log(min,max);
        if(min==0 && max==0){
            return;
         }
        else if(min==0 && max!=0){
            if(price_number<=max){
                products[index].style.display='block';
            }
            else{
                products[index].style.display='none';
            }
        }
        else if(max==0 && min!=0){
            if(price_number>=min){
                products[index].style.display='block';
            }
            else{
                products[index].style.display='none';
            }
        }   
        else{
        if(price_number>=min && price_number<=max){
            products[index].style.display='block';
        }
        else{
            products[index].style.display='none';
        }
    }
    })
}



confirm_button.addEventListener('click',function(){
    check_gia(min_input_value,max_input_value);
})

///////////////////////////////////////////////////////////////////////////
function filterProduct_advance(value){
    let select_container=document.querySelector('#select-type');
    let select_item=select_container.querySelectorAll('option');
    select_item.forEach(function(button){
        console.log(button);
        if(value==button.innerText){
            console.log(value);
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });
    var cards=document.querySelectorAll(".product");
    cards.forEach(function(card){
        if(value=="ALL" ){
            // card.classList.remove("hide");
            card.style.display='block';
        }
        else{
            if(card.id==value ){
                // card.classList.remove("hide");
                card.style.display='block';
            }
            else{
                // card.classList.add("hide");
                card.style.display='none';
            }
        }
    })

}


let nav_input=document.querySelector('.responsive-icon');
console.log(nav_input);
nav_input.addEventListener('click',function(){
    let searching_container=document.querySelector('.searching-for-ipad');
    console.log(searching_container);
    searching_container.style.display='block';
}
)



let select_category=document.querySelector('.advance-search div select ');
select_category.addEventListener('change',function(event){
    filterProduct(event.target.value);
})