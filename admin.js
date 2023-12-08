function active_function(value) {
    let manage_tag = document.querySelectorAll('.manage');
    manage_tag.forEach(function (manage_tag_item) {
        if (manage_tag_item.innerText === value) {
            manage_tag_item.classList.add('active-admin');

        }
        else {
            manage_tag_item.classList.remove('active-admin');
        }
    }
    )
    let manage_container = document.querySelectorAll('.manage_container');
    manage_container.forEach(function (container) {
        if (container.id === value) {
            container.style.display = 'block';
        }
        else {
            container.style.display = 'none';
        }
    })
}

/////////////////////////////////////
///render///////////////////////////
// console.log(window.data); 
window.data = [
    {
        "number": "1",
        "image": "image/laptopASUS_zenbook14.webp",
        'small_img1': './ASUS Zenbook 14/back.jpg',
        'small_img2': './ASUS Zenbook 14/backside.jpg',
        'small_img3': './ASUS Zenbook 14/flat.jpg',
        'small_img4': './ASUS Zenbook 14/frontside.jpg',
        "title": "Laptop ASUS Zenbook 14 OLED UX3402VA KM068W",
        "price": "24.990.000",
        "category": "ASUS",
        'describe_CPU': 'CPU: Intel Core i5-1340P (upto 4.60 GHz, 12MB)',
        'describe_RAM': 'RAM: 16GB LPDDR5 on board',
        'describe_disk': 'Ổ cứng: 512GB M.2 NVMe™ PCIe® 4.0 SSD',
        'describe_VGA': 'VGA: Intel Iris Xe Graphics'
    },
    {
        "number": "2",
        "image": "./image/acer predator.webp",
        'small_img1': './Acer Predator Helios Neo/backside.jpg',
        'small_img2': './Acer Predator Helios Neo/edge.jpg',
        'small_img3': './Acer Predator Helios Neo/side.jpg',
        'small_img4': './Acer Predator Helios Neo/topside.jpg',
        "title": "Laptop gaming Acer Predator Helios Neo PHN16 71 779X",
        "price": "39.990.000",
        "category": "ACER",
        'describe_CPU': 'CPU: Intel Core i7-13700HX (upto 5.00 GHz, 30MB) ',
        'describe_RAM': 'RAM: 8GB DDR5 4800MHz (2 khe, Nâng cấp tối đa 32GB) ',
        'describe_disk': 'Ổ cứng: 512GB PCIe NVMe SED SSD (nâng cấp tối đa 2TB SSDPCIe Gen4, 16 Gb/s, NVMe)',
        'describe_VGA': 'VGA: NVIDIA GeForce RTX 4050 6GB'

    },
    {
        "number": "4",
        "image": "./Laptop HP Pavilion 15/main_img.webp",
        'small_img1': './Laptop HP Pavilion 15/backside.webp',
        'small_img2': './Laptop HP Pavilion 15/leftside.webp',
        'small_img3': './Laptop HP Pavilion 15/rightside.webp',
        'small_img4': './Laptop HP Pavilion 15/edge.webp',
        "title": "Laptop HP Pavilion 15-eg2035TX (6K781PA) (i5-1235U/RAM 8GB/512GB SSD)",
        "price": "16.990.000",
        "category": "HP",
        'describe_CPU': 'CPU: Intel Core i5-1235U',
        'describe_RAM': 'RAM: 2 x 4GB DDR4 3200MHz',
        'describe_disk': 'Ổ cứng:512GB SSD M.2 NVMe ',
        'describe_VGA': 'VGA: GeForce MX550 2GB GDDR6 / Intel Iris Xe Graphics'
    },
    {
        "number": "5",
        "image": "./MSI modern 15/main_img.jpg",
        'small_img1': './MSI modern 15/frontside.jpg',
        'small_img2': './MSI modern 15/rightside.jpg',
        'small_img3': './MSI modern 15/top.jpg',
        'small_img4': './MSI modern 15/backside.jpg',
        "title": "Laptop MSI Modern 14 C12MO-660VN (Intel Core i5-1235U 14 inch FHD)",
        "price": "13.490.000",
        "category": "MSI",
        'describe_CPU': 'CPU: Intel Core i5-1235U (tối đa 4.40 GHz, 12MB)',
        'describe_RAM': 'RAM: 16GB DDR4 3200MHz',
        'describe_disk': 'Ổ cứng: 512GB SSD',
        'describe_VGA': 'VGA: Intel Iris Xe Graphics'
    },
    {
        "number": "6",
        "image": "./Laptop Lenovo IdeaPad 3/main_img.jpg",
        'small_img1': './Laptop Lenovo IdeaPad 3/main_img.jpg',
        'small_img2': './Laptop Lenovo IdeaPad 3/flat.jpg',
        'small_img3': './Laptop Lenovo IdeaPad 3/side.jpg',
        'small_img4': './Laptop Lenovo IdeaPad 3/bottom.jpg',
        "title": "Laptop Lenovo IdeaPad 3 14ITL6 82H701QYVN",
        "price": "12.990.000",
        "category": "LENOVO",
        'describe_CPU': 'CPU: Intel Core i5-1155G7 (upto 4.50GHz, 8MB)',
        'describe_RAM': 'RAM: 16GB (8GB Soldered DDR4-3200 + 8GB SO-DIMM DDR4-3200)',
        'describe_disk': 'Ổ cứng: 512GB SSD M.2 2242 PCIe® 4.0x4 NVMe®',
        'describe_VGA': 'VGA: Integrated Intel® Iris® Xe Graphics'
    },
    {
        "number": "7",
        "image": "./Laptop Lenovo Yoga Slim 6/main_img.jpg",
        'small_img1': './Laptop Lenovo Yoga Slim 6/flat.jpg',
        'small_img2': './Laptop Lenovo Yoga Slim 6/rightside.jpg',
        'small_img3': './Laptop Lenovo Yoga Slim 6/leftside.jpg',
        'small_img4': './Laptop Lenovo Yoga Slim 6/top.jpg',
        "title": "Laptop Lenovo Yoga Slim 6 14IRH8 83E00008VN",
        "price": "23.990.000",
        "category": "LENOVO",
        'describe_CPU': 'CPU: Intel Core i7-13700H (up to 5.0GHz, 24MB)',
        'describe_RAM': 'RAM: 16GB Soldered LPDDR5x-5200',
        'describe_disk': 'Ổ cứng: 512GB SSD M.2 2242 PCIe® 4.0x4 NVMe',
        'describe_VGA': 'VGA: Integrated Intel Iris Xe Graphics'
    },
    {
        "number": "8",
        "image": "./Lenovo ThinkPad E14/main_img.jpg",
        'small_img1': './Lenovo ThinkPad E14/backside.jpg',
        'small_img2': './Lenovo ThinkPad E14/flat.jpg',
        'small_img3': './Lenovo ThinkPad E14/leftside.jpg',
        'small_img4': './Lenovo ThinkPad E14/rightside.jpg',
        "title": "Laptop Lenovo ThinkPad E14 Gen 5 21JK0069VA",
        "price": "20.390.000",
        "category": "LENOVO",
        'describe_CPU': 'CPU: Intel Core i5-1335U (upto 4.60 GHz, 12MB)',
        'describe_RAM': 'RAM: 8GB Soldered DDR4-3200 + 8GB SO-DIMM DDR4-3200 (tối đa 40GB)',
        'describe_disk': 'Ổ cứng: 512GB SSD M.2 2242 PCIe® 4.0x4 NVMe® Opal 2.0',
        'describe_VGA': 'VGA: Integrated Intel® Iris® Xe Graphics Functions as UHD Graphics'
    },
    {
        "number": "9",
        "image": "./Lenovo IdeaPad Slim 5/main_img.jpg",
        'small_img1': './Lenovo ThinkBook 14/flat.jpg',
        'small_img2': './Lenovo ThinkBook 14/pad.jpg',
        'small_img3': './Lenovo ThinkBook 14/top.jpg',
        'small_img4': './Lenovo ThinkBook 14/side.jpg',
        "title": "Laptop Lenovo IdeaPad Slim 5 16IAH8 83BG001XVN",
        "price": "19.190.000",
        "category": "LENOVO",
        'describe_CPU': 'CPU: Intel core i5 1240P up to 1.7GHz',
        'describe_RAM': 'RAM: 8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz',
        'describe_disk': 'Ổ cứng:Hỗ trợ thêm 1 khe cắm SSD M.2 PCIe mở rộng,512 GB SSD NVMe PCIe ',
        'describe_VGA': 'VGA: Card tích hợp Intel UHD'
    },
    {
        "number": "3",
        "image": "./dell inspiron t7430/main_img.jpg",
        'small_img1': './dell inspiron t7430/back.jpg',
        'small_img2': './dell inspiron t7430/backside.jpg',
        'small_img3': './dell inspiron t7430/backside_from_right.jpg',
        'small_img4': './dell inspiron t7430/top.jpg',
        "title": "Laptop Dell Inspiron T7430 N7430I58W1 Silver",
        "price": "16.490.000",
        "category": "DELL",
        'describe_CPU': 'CPU: Intel® Core™ i5-1335U (12 MB cache, 10 cores, 12 threads, up to 4.60 GHz Turbo)',
        'describe_RAM': 'RAM: 16GB LPDDR5 on boardRam: 8GB, LPDDR5, 4800 MHz',
        'describe_disk': 'Ổ cứng: 512GB M.2 PCIe NVMe SSD',
        'describe_VGA': 'Card đồ hoạ: Intel® Iris® Xe Graphics'
    },
    {
        "number": "10",
        "image": "./Asus Vivobook 14/main_img.jpg",
        'small_img1': './Asus Vivobook 14/main_img.jpg',
        'small_img2': './Asus Vivobook 14/backside.jpg',
        'small_img3': './Asus Vivobook 14/flat.jpg',
        'small_img4': './Asus Vivobook 14/flat2.jpg',
        "title": "Laptop Asus Vivobook 14 X1404VA-NK125W",
        "price": "13.590.000",
        "category": "ASUS",
        'describe_CPU': 'CPU: Intel Core i5-1335U (upto 4.60GHz, 12MB)',
        'describe_RAM': 'RAM: RAM 8GB DDR4 Onboard (Còn trống 1x DDR4 SO-DIMM slot)',
        'describe_disk': 'Ổ cứng: SSD 256GB M.2 NVMe™ PCIe® 4.0',
        'describe_VGA': 'VGA: Intel Iris Xe Graphics có điều kiện khi sử dụng Dual RAM'
    },
    {
        "number": "11",
        "image": "./ASUS TUF/main_img.jpg",
        'small_img1': './ASUS TUF/back.jpg',
        'small_img2': './ASUS TUF/pad.jpg',
        'small_img3': './ASUS TUF/side.jpg',
        'small_img4': './ASUS TUF/rightside.jpg',
        "title": "Laptop ASUS TUF Gaming F15 FX506HF HN014W",
        "price": "16.890.000",
        "category": "ASUS",
        'describe_CPU': 'CPU: Intel Core i5-11400H (upto 4.50GHz, 12MB)',
        'describe_RAM': 'RAM: 8GB DDR4 3200MHz (2x SO-DIMM socket, up to 32GB)',
        'describe_disk': 'Ổ cứng: 512GB M.2 NVMe™ PCIe 3.0 SSD',
        'describe_VGA': 'VGA: Intel Iris Xe Graphics'
    },
    {
        "number": "12",
        "image": "./Asus ROG/main_img.jpg",
        'small_img1': './Asus ROG/back.jpg',
        'small_img2': './Asus ROG/flat.jpg',
        'small_img3': './Asus ROG/front.jpg',
        'small_img4': './Asus ROG/top.jpg',
        "title": "Laptop Asus ROG Strix G16 G614JV N4261W",
        "price": "45.990.000",
        "category": "ASUS",
        'describe_CPU': 'CPU: Intel Core i9-13980HX (36MB, upto 5.6 GHz)',
        'describe_RAM': 'RAM: 16GB (1x16GB) DDR5 4800MHz (2x slots, up to 32GB)',
        'describe_disk': 'Ổ cứng: 1TB M.2 NVMe PCIe 4.0 SSD (Trống 1 slot M.2 NVMe, tối đã 4TB)',
        'describe_VGA': 'VGA: NVIDIA® GeForce RTX 4060 8GB GDDR6'
    }
]
// ==============================================================
// THONG KE 
let dataCart = JSON.parse(localStorage.getItem('order_bills'));

let currarray = []
for (let i = 0; i < dataCart.length; i++) {
    if (dataCart[i].orderStatus == "Đang chờ xử lý") {
        dataTime = dataCart[i].orderTime;
        dataProduct = dataCart[i].orderDetails
        console.log(JSON.stringify(dataTime));
        for (let j = 0; j < dataProduct.length; j++) {
            dataProduct[j].time = dataTime;
            // console.log(dataProduct[j])
        }
        // console.log(dataProduct); 
        if (dataProduct) {

            currarray.push(...dataProduct)
        }
        console.log(currarray);
    }
}

function compareByQuantity(a, b) {
    return b.quantity - a.quantity;
}
currarray.sort(compareByQuantity)
// console.log(currarray)
// console.log(currarray.length)



showgallery(currarray)
// SEARCH THONG KE
let filterarray = [];
function showgallery(currarray) {
    document.querySelector('.products').innerText = "";
    for (let i = 0; i < currarray.length; i++) {
        let h3 = `
        <tr class="product id="thongkesanpham">
            <td style="width:25%">
            <div class="namethongke">${currarray[i].name}</div>
            <div class="des-contaner">
            </div>
            </td>
            <td style="width:35%;padding-right:8%">$ ${currarray[i].price} </td>
            <td style="width:35%;padding-right:18%">${currarray[i].quantity} </td>
            <td>$ ${currarray[i].quantity * currarray[i].price}</td>
        </tr>
            `
        document.querySelector('.products').innerHTML += h3;
    }
}
let search_static = document.querySelector('#myInput_searchbar');
let static_product = document.querySelector('#staticproduct');
let item = document.querySelector(".items");
let btn_static = document.querySelector(".searching-button-static");

btn_static.addEventListener('click', function () {
    let text = search_static.value;
    filterarray = currarray.filter(function (a) {

        if ((a.time).includes(text)) {
            return a.time;
        }
        if ((a.name).includes(text)) {
            return a.name;
        }
    })
    console.log(filterarray)
    if (this.value == "") {
        showgallery(currarray)
    }
    else {
        if (filterarray == "") {
            console.log("không có sản phẩm");
            item.style.display = 'block';
            static_product.innerHTML = "";
        }
        else {
            console.log("có sản phẩm");
            showgallery(filterarray);
        }
    }

})
// ========================================================
function filterProduct(value) {
    let buttons = document.querySelectorAll(".filter-button");
    buttons.forEach(function (button) {

        if (value == button.innerText) {
            // console.log(button);
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
    var cards = document.querySelectorAll(".product");
    cards.forEach(function (card) {
        if (value == "ALL") {
            // card.classList.remove("hide");
            card.style.display = 'block';
        }
        else {
            if (card.id == value) {
                // card.classList.remove("hide");
                card.style.display = 'block';
            }
            else {
                // card.classList.add("hide");
                card.style.display = 'none';
            }
        }
    })

}


var searching_button = document.querySelector('.searching-button');
var searching_input = document.querySelector('input');

function searching_method() {
    var cards = document.querySelectorAll(".product");

    var elements = document.querySelectorAll(".title");

    var search_input = searching_button.parentElement.querySelector("input").value;
    // console.log(cards, elements, search_input);
    elements.forEach(function (element, index) {
        if (element.innerText.toLowerCase().includes(search_input.toLowerCase())) {
            // cards[index].classList.remove("hide");
            cards[index].style.display = "";


        }
        else {
            // cards[index].classList.add("hide");
            cards[index].style.display = "none";

        }
    })

}
searching_input.addEventListener('input', searching_method);
searching_button.addEventListener("click", searching_method);

function myFunction007() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("findbartag");
    if (input.value == "") {
        alert("Nhập ngày/tháng/năm của đơn hàng")
        input.focus;
    }
    filter = input.value.toUpperCase();
    table = document.getElementById("orderTableBody");
    tr = table.getElementsByTagName("tr");


    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }

            else {
                tr[i].style.display = "none";
            }
        }
    }
}

let product_datas = JSON.parse(localStorage.getItem('product'));
let user_mange_container = document.querySelector('.product_manage_container');
let table_user = user_mange_container.querySelector('section table');
let table_tbody = table_user.querySelector('tbody');
for (let i = 0; i < product_datas.length; i++) {
    let newtr = `
        <tr>
            <th style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;"><img style="width:30px;height:30px;" src='${product_datas[i].image}'><span>${product_datas[i].title}</span></th>
            <th style="border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${product_datas[i].price}</th>
            <th class="delete-row-btn" onclick="delete_function(event,${product_datas[i].number})" style="border-top:1px solid black;padding:5px 0px;cursor:pointer;background-color:gray;">XÓA</th>
        </tr>
    `
    table_tbody.innerHTML += newtr;
}
// xử lí xóa sản phẩm
// delete_btns.forEach(function(btn){
//     btn.addEventListener('click',function(event){
//         let row_delete=event.target;
//         let row=row_delete.parentElement;
//         let products=document.querySelectorAll('.product');
//         console.log(products);
//         row.remove();
//         let row_name=row.querySelector('tr th span').innerText;
//         products.forEach(function(product){
//             let product_name=product.querySelector('.des-contaner .title').innerText;
//             console.log(product_name);
//             if(product_name===row_name){
//                 product.remove();
//             }
//         })

//     })
// })



//////////////////////////////////////////////////////////////////////
////////////////////THÊM SẢN PHẨM//////////////////////////////////////
let addproduct = document.querySelector('.addproduct');
let img = addproduct.querySelector('img');
let input = addproduct.querySelector('input');

input.addEventListener('change', function () {
    img.src = URL.createObjectURL(input.files[0]);
})



let addproduct_btn = document.querySelector('.product_manage_container button');
addproduct_btn.addEventListener('click', function () {
    let addproduct_container = document.querySelector('.addproduct');
    addproduct_container.style.display = 'block';
})

let close_btn = document.querySelector('.addproduct span');
// console.log(close_btn);
close_btn.addEventListener('click', function () {
    document.querySelector('.addproduct').style.display = 'none';
})

//xử lí thêm sản phẩm////////
let add_btn = addproduct.querySelector('button');
add_btn.addEventListener('click', function () {
    let product_name_input = addproduct.querySelector('.product_name_input').value;
    let img = addproduct.querySelector('img');
    let imgsrc = img.src;
    let input_file = addproduct.querySelector('.input_file').value;
    let price_admin_input = addproduct.querySelector('.price_admin_input').value;
    addproduct_service(imgsrc, product_name_input, price_admin_input);
})


function addproduct_service(input_file, product_name_input, price_admin_input) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    let newtr = `
        <tr>
        <th style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;"><img style="width:30px;height:30px;" src='${input_file}'><span>${product_name_input}</span></th>
        <th style="border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${price_admin_input}</th>
        <th class="delete-row-btn" onclick="delete_function(event,${productArray.length})" style="border-top:1px solid black;padding:5px 0px;cursor:pointer;background-color:gray;">XÓA</th>
        </tr>
    `
    table_tbody.innerHTML += newtr;
    var product_temp = {
        number: productArray.length,
        image: input_file,
        title: product_name_input,
        price: price_admin_input
    }
    productArray.unshift(product_temp);
    localStorage.setItem('product', JSON.stringify(productArray));
}
//xử lí sửa sản phẩm

let fix_product_btn = document.querySelector('.fixproduct button');
let product_found_name = document.querySelector('#find_product');
let vitri = 0;
product_found_name.addEventListener('change', function (event) {
    var productArray = JSON.parse(localStorage.getItem('product'));
    let showProductFound = document.querySelector('.showProductFound');
    // console.log("event target value la: ", event.target.value);
    for (let i = 0; i < productArray.length; i++) {
        if (event.target.value === productArray[i].title) {
            showProductFound.innerHTML = `
                <div style="width:80px;height:80px;">
                <img style="width:100%;heigth:100%;text-align:left;" src="${productArray[i].image}">
                </div>
                <div style="text-align:left">TÊN SẢN PHẨM: ${productArray[i].title}</div>
                <div style="text-align:left">GIÁ: ${productArray[i].price}</div>
            `
            vitri = i;
        }
    }
})
let fix_input_file = document.querySelector('.fixproduct .input_file');
// console.log(fix_input_file);
var img_of_fix;
fix_input_file.addEventListener('change', function () {
    img_of_fix = window.URL.createObjectURL(new Blob(input.files[0], { type: "application/zip" })).replaceAll('blob:', '');
    // console.log("img_of_fix: ", img_of_fix)
})
fix_product_btn.addEventListener('click', function (event) {
    let fix_input_file = event.target.parentElement.querySelector('.input_file');
    let price_change_input = event.target.parentElement.querySelector('.price_admin_input').value;
    let title_change_input = event.target.parentElement.querySelector('.product_name_input').value;
    var productArray = JSON.parse(localStorage.getItem('product'));


    productArray[vitri].title = title_change_input;
    productArray[vitri].price = price_change_input;
    productArray[vitri].image = img_of_fix;

    localStorage.setItem('product', JSON.stringify(productArray));
})

// var product_data_local = [];
// for (let i = 0; i < window.data.length; i++) {
//     localStorage.setItem(i, JSON.stringify(window.data[i]));
//     product_data_local[i] = JSON.parse(localStorage.getItem(i));
// }

//console.log(product_data_local);


function delete_function(event, productiddelete) {
    // alert('BẠN CÓ CHẮC MUỐN XÓA SẢN PHẨM NÀY?');
    let row_delete = event.target;
    let row = row_delete.parentElement;
    let row_name = row.querySelector('th span').innerText;
    if (confirm('BẠN CÓ CHẮC MUỐN XÓA SẢN PHẨM NÀY?') == true) {
        row.remove();
    }
    else {
        return;
    }
    var productArray = JSON.parse(localStorage.getItem('product'));
    // console.log("xuat trong ham xoa; ", productArray);
    // console.log(productArray[0]);
    // console.log("number cua phan tu dau tien:", productArray[0].number)
    // console.log("id delete la:", productiddelete);
    // console.log("type cua iddelette:", typeof (productiddelete));
    // console.log('type cua arry[0]: ', typeof (productArray[0].number));
    for (var i = 0; i < productArray.length; i++) {

        if (productiddelete === Number(productArray[i].number)) {
            productArray.splice(i, 1);
            // console.log("if dung", productiddelete);
        }
    }
    // console.log(productArray.length);
    localStorage.setItem('product', JSON.stringify(productArray));
}

///////////////////////////////////////////////////////////////////
////////////////SỬA SẢN PHẨM//////////////////////////////////////
let fix_btn_popup = document.querySelector('.fix_btn');
fix_btn_popup.addEventListener('click', function () {
    document.querySelector('.fixproduct').style.display = 'block';
})
let fix_close = document.querySelector('.fixproduct span');
fix_close.addEventListener('click', function () {
    document.querySelector('.fixproduct').style.display = 'none';
})


let find_prodcut_select = document.querySelector('#find_product');
for (let i = 0; i < product_datas.length; i++) {
    newtr = `<option>${product_datas[i].title}</option>`
    find_prodcut_select.innerHTML += newtr;
}

// console.log(document.querySelector('.products'));



///////////////////////////////////////////////////////////////////
/////////////////////////RENDER_USER///////////////////////////////

let render_users = JSON.parse(localStorage.getItem('users'));
let userTableBody = document.getElementById('userTableBody');
// console.log(render_users);
for (let i = 0; i < render_users.length; i++) {
    let newtr = `
    <tr>
        <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_users[i].accountcode}</td>
        <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_users[i].username}</td>
        <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_users[i].name}</td>
        <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_users[i].email}</td>
        <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_users[i].phone_num}</td>
    </tr>
    `;
    userTableBody.innerHTML += newtr;
}

// let render_orders = JSON.parse(localStorage.getItem('order_bills')) || [];
// let orderTable = document.getElementById('orderTableBody');

// for (let i = 0; i < render_orders.length; i++) {
//     const orderDetailsString = render_orders[i].orderDetails.map(detail => {
//         return `${detail.name} x${detail.quantity}`;
//     }).join(', ');

//     let newtr = `
//         <tr>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].orderCode}</td>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].userCode}</td>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">
//             <div class="orddrts">
//             ${orderDetailsString}
//             </div>
//             <div class="orddt">

//             </div>
//             </td>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].orderTime}</td>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].orderStatus}</td>
//             <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">
//             <div>
//             <input type="checkbox" data-toggle="switchbutton" checked data-width="125" checked data-onlabel="Pending" data-offlabel="Completed" data-onstyle="success" data-offstyle="danger">      
//             </td>
//         </tr>
//         `;
//     orderTable.innerHTML += newtr;

// }

let render_orders = JSON.parse(localStorage.getItem('order_bills')) || [];
let orderTable = document.getElementById('orderTableBody');


for (let i = 0; i < render_orders.length; i++) {
    const orderDetailsString = render_orders[i].orderDetails.map(detail => {
        return `${detail.name} x${detail.quantity}`;
    }).join(', ');

    let newtr = `
        <tr>
            <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].orderCode}</td>
            <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].userCode}</td>
            <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">
                <button class="details-button" data-order-index="${i}">Chi tiết đơn hàng</button>
            </td>
            <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;">${render_orders[i].orderTime}</td>
            <td style="text-align:left;border-top:1px solid black;border-right: 1px solid black;padding:5px 0px;, display: flex;justify-content: center;">
            <div>
             <input type="checkbox" data-toggle="switchbutton" checked data-width="125" checked data-onlabel="Pending" data-offlabel="Completed" data-onstyle="success" data-offstyle="danger">      
             </td>
        </tr>
    `;
    orderTable.innerHTML += newtr;
}


let openDetailsContainer = null; // Track the currently open details container

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('details-button')) {
        const orderIndex = event.target.getAttribute('data-order-index');
        const orderDetails = render_orders[orderIndex].orderDetails;

        // Close the currently open details container
        if (openDetailsContainer) {
            openDetailsContainer.style.display = 'none';
        }

        // Create a div to hold the detailed information
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details-container');
        detailsDiv.style.position = 'fixed';
        detailsDiv.style.top = '50%';
        detailsDiv.style.left = '50%';
        detailsDiv.style.transform = 'translate(-50%, -50%)';
        detailsDiv.style.backgroundColor = '#fff';
        detailsDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        detailsDiv.style.padding = '20px';
        detailsDiv.style.zIndex = '1000';
        detailsDiv.style.maxWidth = '80%';

        // Create a close button
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', function () {
            // Close the details container when the close button is clicked
            detailsDiv.style.display = 'none';
            openDetailsContainer = null; // Reset the currently open container
        });

        detailsDiv.appendChild(closeButton);

        // Create a table inside the div
        const detailsTable = document.createElement('table');
        detailsTable.style.width = '100%';
        detailsTable.style.borderCollapse = 'collapse';
        detailsTable.style.border = '1px solid #ddd'; // Add border to the table

        detailsTable.innerHTML = `
            <thead>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px;">Sản phẩm</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Số lượng</th>
                    <th style="border: 1px solid #ddd; padding: 8px 10px;">Giá</th>
                </tr>
            </thead>
            <tbody>
                ${orderDetails.map(detail => `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${detail.name}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${detail.quantity}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${detail.price * detail.quantity}0.000  đ</td>
                    </tr>
                `).join('')}
                <tr>
                    <td colspan="2" style="border: 1px solid #ddd; text-align: right; padding: 8px;">Tổng giá:</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${calculateTotalPrice(orderDetails)}0.000  đ</td>
                </tr>
            </tbody>
        `;

        // Append the table to the div
        detailsDiv.appendChild(detailsTable);

        // Append the div to the document body
        document.body.appendChild(detailsDiv);

        // Set a higher z-index for the details container
        detailsDiv.style.zIndex = '1000';

        // Show the details container
        detailsDiv.style.display = 'block';

        // Update the currently open details container
        openDetailsContainer = detailsDiv;
    }
});

function calculateTotalPrice(orderDetails) {
    const totalPrice = orderDetails.reduce((total, detail) => total + detail.price * detail.quantity, 0);

    // Round the total price to 3 decimal places (adjust as needed)
    const roundedTotalPrice = Number(totalPrice.toFixed(3));

    return roundedTotalPrice;
}


// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}



