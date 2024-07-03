// Add to cart buttons section
var shopBtn = document.querySelectorAll('.shopBtn');
// console.log(shopBtn);

var badge = document.querySelector('.badge'); //to show badge over cart

let total = []; //array to save price and count of 8 items 

var product = document.querySelectorAll('.product');
var elements;

// console.log(product);
// var new_link = null;
var item_list;

for(let i=0; i<shopBtn.length; i++){ //i = 0
    var button = []
    //console.log(product[i]);
    shopBtn[i].addEventListener('click', e => {
        
        let item = document.querySelector(`#${e.target.id}`); //variable to get id of clicked item
    
        var price = parseFloat(item.previousElementSibling.lastChild.textContent.replace('$', '')); //to get price of item

        var new_link = item.parentElement.firstElementChild.getAttribute('src'); //to get img src of clicked item
        console.log(new_link);
        
        elements = createNodes();
        elements[0].src = new_link;
        elements[1].textContent = price;
        item_list = global(elements);

        badge.style.display = 'flex';
        badge.innerHTML++; //increase count of cart badge

        return item_list;
    })
}
console.log('Table output' ,global());

//function to dom modal table and adding table data
function global(elements){
    var table = document.querySelector('.table');
    console.log('inside function', elements);
    table.append(...elements);
    return table;
}

//function to create table row in modal
function createNodes(){
    let nodes = []; 

    for(let i=0; i<3; i++){ //create table data 3 columns
        var td = document.createElement('td');
        nodes[i] = td; //keep td 3 columns in array 
    }

    var td1_img = document.createElement('img'); 
    var td1_link = nodes[0].appendChild(td1_img); 

    // console.log(nodes);
    return nodes;
}

//when clicked add to cart, get img_link and price, add to modal page