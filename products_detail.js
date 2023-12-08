let products = document.querySelectorAll('.product');
let product_data = window.data;
products.forEach(function (product) {
    product_img = product.querySelector('img');
    product_img.addEventListener('click', function (event) {
        let product_item = event.target.parentElement;
        let product_name = product_item.querySelector('.title').innerText;
        for (let i = 0; i < product_data.length; i++) {
            if (product_data[i].title === product_name) {
                let newDiv = document.querySelector('.detail-container');
                console.log(newDiv);
                let div = `
                        <div class='detail-close-button'><span>x</span></div>
                        <div class="left-container">
                            <img src="${product_data[i].image}">
                            <div class="small-img">
                                <img src="${product_data[i].small_img1}">
                                <img src="${product_data[i].small_img2}">
                                <img src="${product_data[i].small_img3}">
                                <img src="${product_data[i].small_img4}">
                            </div>
                        </div>
                        <div class="right-container">
                            <h6>${product_data[i].title}</h6>
                            <h7>${product_data[i].price}đ</h7>
                            </br>
                            <button>MUA NGAY</button>
                            <p>Mô tả sản phẩm:</p>
                            </br>
                            <p>${product_data[i].describe_CPU}</p>
                            </br>
                            <p>${product_data[i].describe_RAM}</p>
                            </br>
                            <p>${product_data[i].describe_disk}</p>
                            </br>
                            <p>${product_data[i].describe_VGA}</p>
                        </div>
                `
                newDiv.innerHTML = div;
                newDiv.style.display = 'block';
                let close_button_detail = document.querySelector('.detail-close-button');
                close_button_detail.addEventListener('click', function () {
                    newDiv.style.display = 'none';
                })
                let button = newDiv.querySelector('.right-container button');
                button.addEventListener('click', function () {
                    addcart(product_data[i].image, product_data[i].title, product_data[i].price);
                    delete_cart();
                    input_change();
                })
                let small_imgs = document.querySelectorAll('.small-img img');
                let main_img = document.querySelector('.left-container img');
                small_imgs.forEach(function (small_img) {
                    small_img.addEventListener('click', function (event) {
                        main_img.src = event.target.src;
                    })
                })
            }
        }
    });
})

function addcart(product_img, product_name, product_price) {
    var addtr = document.createElement("tr");

    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productName = document.querySelectorAll(".title_cart");
        console.log(productName[i]);
        if (productName[i].innerHTML === product_name) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng.");
            return;
        }
    }

    var addcontent =
        `
        <td style="display: flex;align-items: center;"><img style="width:70px;" src="${product_img}" alt=""><span class="title_cart">${product_name}</span></td>
        <td><p><span class="prices">${product_price}</span></p></td>
        <td><input class="input_row" style="width:40px;outline: none;" type="number" value="1" min="1"></td>
        <td><span style="cursor:pointer" class="delete-button">XÓA</span></td>
    `
    addtr.innerHTML = addcontent;
    var carttable = document.querySelector("tbody");
    carttable.appendChild(addtr);
    cartTotal();

}

function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalALL = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice_text = cartItem[i].querySelector(".prices").innerText;
        var productPrice = productPrice_text.replaceAll('đ', '').replaceAll('.', '');
        var total_int = inputValue * productPrice;
        totalALL += total_int;
    }
    var total_cart = document.getElementsByClassName('price-total')[0];
    var total_cart_span = total_cart.querySelector('span');
    total_cart_span.innerText = totalALL.toLocaleString('de-DE');

    //add them vao phan gio hang (nav bar)
    var total_price_value = document.querySelector(".total-price-value");
    total_price_value.innerText = totalALL.toLocaleString('de-DE') + "đ";
}

function delete_cart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var delete_btn = document.querySelectorAll(".delete-button");
        delete_btn[i].addEventListener('click', function (event) {
            var cartDelete = event.target;
            var delete_container = cartDelete.parentElement.parentElement;
            delete_container.remove();
            cartTotal();
        })
    }
}

function input_change() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var input_number = document.querySelectorAll(".input_row");
        input_number[i].addEventListener('change', function (event) {
            cartTotal();
        })
    }
}


