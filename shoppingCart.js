const product_item = document.querySelectorAll(".product");
document.addEventListener('DOMContentLoaded', function(){
    // the code
    //make AJAX request when button is clicked
    var buttons = document.querySelectorAll(".cart_button");
    // console.log("button ne: ",buttons);
  });
const btn=document.querySelectorAll(".cart_button");

btn.forEach(function(button,index){
    button.addEventListener('click',function(event){
        var btnItem = event.target;
        var product=btnItem.parentElement.parentElement.parentElement;
        var product_img=product.querySelector("img").src;
        var product_name =product.querySelector(".title").innerText;
        var product_price=product.querySelector(".price").innerText;
       addcart(product_img,product_name,product_price);
       delete_cart();
       input_change();
    })
})

function addcart(product_img,product_name,product_price){
    var addtr=document.createElement("tr");

    var cartItem=document.querySelectorAll("tbody tr");
    for(var i=0;i<cartItem.length;i++){
        var productName=document.querySelectorAll(".title_cart");
        console.log(productName[i]);
        if(productName[i].innerHTML===product_name){
            alert("Sản phẩm của bạn đã có trong giỏ hàng.");
            return;
        }
    }

    var addcontent=
    `
        <td style="display: flex;align-items: center;"><img style="width:70px;" src="${product_img}" alt=""><span class="title_cart">${product_name}</span></td>
        <td><p><span class="prices">${product_price}</span></p></td>
        <td><input class="input_row" style="width:40px;outline: none;" type="number" value="1" min="1"></td>
        <td><span style="cursor:pointer" class="delete-button">XÓA</span></td>
    `
    addtr.innerHTML=addcontent;
    var carttable=document.querySelector("tbody");
    carttable.appendChild(addtr);
    cartTotal();

}



function cartTotal(){
    var cartItem=document.querySelectorAll("tbody tr");
    var totalALL=0;
    for(var i=0;i<cartItem.length;i++){
        var inputValue=cartItem[i].querySelector("input").value;
        var productPrice_text=cartItem[i].querySelector(".prices").innerText;
        var productPrice=productPrice_text.replaceAll('đ','').replaceAll('.','');
        var total_int=inputValue*productPrice;
        totalALL+=total_int;
    }
    var total_cart=document.getElementsByClassName('price-total')[0];
    var total_cart_span=total_cart.querySelector('span');
    total_cart_span.innerText=totalALL.toLocaleString('de-DE');

    //add them vao phan gio hang (nav bar)
    var total_price_value=document.querySelector(".total-price-value");
    total_price_value.innerText=totalALL.toLocaleString('de-DE')+"đ";
}


function delete_cart(){
    var cartItem=document.querySelectorAll("tbody tr");
    for(var i=0;i<cartItem.length;i++){
        var delete_btn=document.querySelectorAll(".delete-button");
        delete_btn[i].addEventListener('click',function(event){
            var cartDelete=event.target;
            var delete_container=cartDelete.parentElement.parentElement;
            delete_container.remove();
            cartTotal();
        })
    }
}

function input_change(){
    var cartItem=document.querySelectorAll("tbody tr");
    for(var i=0;i<cartItem.length;i++){
        var input_number=document.querySelectorAll(".input_row");
        input_number[i].addEventListener('change',function(event){
            cartTotal();
        })
    }
}

const addtocart_popup=document.querySelector("#addtocart");
const cart_container=document.querySelector(".cart");
addtocart_popup.addEventListener('click',function(){
    cart_container.style.right="0";
})

const close_button_cart=document.querySelector(".close-button-cart");
close_button_cart.addEventListener('click',function(){
    cart_container.style.right="-100%";
})