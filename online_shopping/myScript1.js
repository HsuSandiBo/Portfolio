// Add to cart buttons section
var shopBtn = document.querySelectorAll('.shopBtn');
console.log(shopBtn);

var badge = document.querySelector('.badge'); //to show badge over cart

// var subtotal = document.querySelector('#subtotal').lastElementChild;

let total = []; //array to save price and count of 8 items 
// let item_data = [img => [], price => [0]*8, quantity => [0]*8];
// console.log(item_data);
var imgLinks = [];
var img_list = [];
let price_list = [];
let quantity_list = [];
// let quantity_list = []; //to save price that got from button click
// let imgLinks = []; //array to save images of 8 items

function itemInfo(new_link, price, i){
    // console.log(new_link, typeof(new_link));
    if(imgLinks.includes(new_link)){
        // console.log(i);
        quantity_list[i]++;
        price_list[i] *= quantity_list[i];
        imgLinks[i] = new_link;
    }else{
        // console.log(i);
        quantity_list[i] = 1;
        price_list[i] = price;
        imgLinks[i] = new_link;
    }
    // console.log(imgLinks);
    return imgLinks;
}
var table = document.querySelector('.table');
// console.log(table);
var product = document.querySelectorAll('.product');
console.log(product);
var new_link = null;
for(let i=0; i<shopBtn.length; i++){ //i = 0
    var button = []
    console.log(product[i]);
    shopBtn[i].addEventListener('click', e => {
        //var button = []; //array to save price and count of each item
        // console.log(e.target.id);
        // let btn = true; //button clicked = true
        
        let item = document.querySelector(`#${e.target.id}`); //variable to get id of clicked item
    
        var price = parseFloat(item.previousElementSibling.lastChild.textContent.replace('$', '')); //to get price of item
        // console.log(price, typeof(price));

        real_price = price; //assign to real_price to use outside of the loop

        new_link = item.parentElement.firstElementChild.getAttribute('src'); //to get img src of clicked item
        // console.log(new_link, typeof(new_link));

        //img array => [0,1,2,3,4,5,6,7] => img => [] => img_link
        //(existed img == new img) => price += price; quantity++
        
        //function call
        // img_list = itemInfo(new_link, price, i);
        // console.log(img_list);
        var elements = createNodes();
        elements[0].src = new_link;
        var item_list = global(elements);

        badge.style.display = 'flex';
        badge.innerHTML++; //increase count of cart badge

        //for add to cart
        button[0] = price;
        button[1] = 2;
        total[i] = button; 

        return elements;
        // console.log(button);
        // console.log(real_price);
    })
    console.log(new_link);
}
// console.log(img_list);
// console.log(imgLinks);
console.log(price_list, quantity_list);
console.log(elements);
//For item row 
// var item_row = document.createElement('tr');
// for(let i=0;i<new_element[0].length; i++){
//     item_row.appendChild(new_element[0][i]);
// }
// table.appendChild(item_row);
function global(elements){
    console.log(elements);
}

console.log(elements);
function createNodes(){
    let nodes = []; 

    for(let i=0; i<3; i++){ //create table data 3 columns
        var td = document.createElement('td');
        nodes[i] = td; //keep td 3 columns in array 
    }

    var td1_img = document.createElement('img'); 
    var td1_link = nodes[0].appendChild(td1_img); 

    console.log(nodes);
    return nodes;
}

console.log(createNodes());
// var photo_src;
// var item_info = null; 

// function getImg(){
//     // For td1 img link
//     item_info = []; 
//     item_info[0] = product[0].firstElementChild.getAttribute('src');
//     item_info[1] = parseFloat(product[0].children[1].lastChild.textContent.replace('$', ''));

//     return item_info;
// };

// console.log(item_info);
// // console.log(getImg());

// // td1_link.src = getImg();
// table.append(...nodes);
// console.log(table);
// console.log(img_link);
// console.log(count, price);

//Actions when clicked add to cart button 
// first time => clicked button => img, price, div 
// second time => existed img?, price*count, div -> only count++

//increase count 
//when clicked add to cart button, div -> + , checkout div -> + => count++

//Actions when clicked Checkout icon
// add to cart clicked data => img ,price, div => show in checkout
//To show add to cart Modal page in html
// var new_element = imgLinks.map(_link => { 
//     // let nodes = []; 
    
//     // for(let i=0; i<3; i++){ //create table data 3 columns
//     //     var td = document.createElement('td');
//     //     nodes[i] = td; //keep td 3 columns in array 
//     // }
    
//     // // For td1 img link
//     // var td1_img = document.createElement('img'); 
//     // var td1_link = nodes[0].appendChild(td1_img); 
//     // td1_link.src = img_link;

//     // For td2 count value
//     nodes[1].textContent = `$${button[0]}`;

//     // For td3 div button
//     var td3_div = document.createElement('div');
//     var div_btn1 = document.createElement('button');
//     div_btn1.classList = "border-0 bg-light";
//     div_btn1.style = "width: 30px;";
//     div_btn1.textContent = '-';
//     var div_input = document.createElement('input');
//     div_input.classList = "border-0 ps-2";
//     div_input.style = "width: 30px;";
//     div_input.value = '1';
//     var div_btn2 = document.createElement('button');
//     div_btn2.classList = "border-0 bg-light";
//     div_btn2.style = "width: 30px;";
//     div_btn2.textContent = '+';
//     td3_div.appendChild(div_btn1);
//     td3_div.appendChild(div_input);
//     td3_div.appendChild(div_btn2);
//     nodes[2].appendChild(td3_div);

//     return nodes;
// }
// );

// var table = document.querySelector('.table');
// console.log(table);

// console.log('without index' + new_element); 
// console.log(new_element[0]); //[0] => img,price,div
// table.append(...new_element[0]);
// console.log(table);

// For item row 
// var item_row = document.createElement('tr');
// for(let i=0;i<new_element[0].length; i++){
//     item_row.appendChild(new_element[0][i]);
// }
// table.appendChild(item_row);

// // For subtotal row
// var subtotal_row = document.createElement('tr');
// subtotal_row.id = 'subtotal';
// subtotal_row.textContent = 'Subtotal : ';
// table.appendChild(subtotal_row);
// console.log(table);

// shop.firstElementChild.firstChild.src = imgLinks[i]; //assigning img src to modal image src in html
// shop.children[1].textContent = `$${button[0]}`; //assigning price into modal price in html 
// shop.lastElementChild.getElementsByTagName('input')[0].value = button[1]; //assigning count into modal count in html
// subtotal.textContent = `$${button[0]}`;

/* button 0 click => price and count => keep in array variable => $array['button 0'] => [price, count] 
button0 = [];
button0['price'] = price;
button0['count'] = count;
$total = [];
$total[0] => button0;
$array[] => ['button 0'], ['button 0'] => [price, count] */
// console.log(real_price);
// var clickBtns = shop.lastElementChild.getElementsByTagName('button');

// clickBtns[0].addEventListener('click', e => {
//     button[1]<1 ? button[1] = 1 : button[1] = button[1]; //count 0 => 0 < 1 => 1 => -- 0
//     button[1]--; //3-- => 2
//     shop.lastElementChild.getElementsByTagName('input')[0].value = button[1]; //show in modal input value //2
//     button[0] -= real_price; //18 => - 2 => real_price
//     button[0]<0 ? button[0] = 0 : button[0] = button[0]; //0 button clicked -> get -1 => -1<0 => 0  
//     shop.children[1].textContent = `$${button[0]}`;
//     subtotal.textContent = `$${button[0]}`;

//     badge.innerHTML--;
//     // console.log(count);
// })

// clickBtns[1].addEventListener('click', e => { 
//     button[1]++; //click + => 0 => 1 => 2 => 3, 4....
//     shop.lastElementChild.getElementsByTagName('input')[0].value = button[1]; //show in modal input value
//     button[0] += real_price; //18 => + 2 => real_price
//     shop.children[1].textContent = `$${button[0]}`;
//     subtotal.textContent = `$${button[0]}`;

//     badge.innerHTML++;
// })



// var quantity = document.querySelector('.quantity').getElementsByTagName('button');
// console.log(quantity);
// var input = document.querySelector('.quantity input');
// console.log(input);
// var cost = document.querySelector('#cost');
// console.log(cost);

// quantity[0].addEventListener('click', e => {
//     // console.log(e.target.parentElement.parentElement.previousElementSibling.textContent);
//     var fee = parseFloat(e.target.parentElement.parentElement.previousElementSibling.textContent.replace('$', ''));
//     // console.log(fee);
//     var input = e.target.parentElement.getElementsByTagName('input')[0];
//     var cost = e.target.parentElement.parentElement.previousElementSibling;

//     input.value<1 ? input.value = 1 : input.value = input.value;
//     input.value--;
//     fee -= fee;
//     cost.innerHTML = `$${fee}`;
//     console.log(fee);

//     badge.innerHTML<1 ? badge.innerHTML = 1 : badge.innerHTML = badge.innerHTML;
//     badge.innerHTML--;
// })

// quantity[1].addEventListener('click', e => {
//     var fee = parseFloat(e.target.parentElement.parentElement.previousElementSibling.textContent.replace('$', '')); //fee = 10
//     var input = e.target.parentElement.getElementsByTagName('input')[0];
//     var cost = e.target.parentElement.parentElement.previousElementSibling;
    
//     input.value++;
//     fee += fee;
//     cost.innerHTML = `$${fee}`;
//     console.log(fee);

//     badge.innerHTML++;
// })