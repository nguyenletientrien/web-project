let thispage =1 ;
let limit =8 ;
let list = document.querySelectorAll(".product");

function loadItem(){
    let beginGet = limit * (thispage-1);
    let endGet = limit*thispage-1;
    list.forEach(function(item,key){
        if(key>=beginGet && key<=endGet){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    listPage();
}

function listPage(){
    let count= Math.ceil(list.length/limit);
    let Page_container=document.querySelector('.listPage');
    // console.log(Page_container);
    Page_container.innerHTML='';  
    if(thispage!=1){
         let prev =document.createElement('li');
         prev.innerText='PREV';
         prev.setAttribute('onclick',"changePage("+(thispage-1)+")");
         Page_container.appendChild(prev);
         
    }




    for(i = 1 ; i<=count;i++){
        let newPage = document.createElement('li');
        newPage.innerText=i;
        if(i==thispage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick',"changePage("+i+")");
        var page_span= document.querySelector('.listPage');
        // console.log(page_span);
        page_span.appendChild(newPage);
    }

    if(thispage != count){
        let next=document.createElement('li');
        next.innerText='NEXT';
        next.setAttribute('onclick',"changePage("+(thispage+1)+")");
       Page_container.appendChild(next);
    }
}



function changePage(i){
    thispage=i;
    loadItem();
}




loadItem();