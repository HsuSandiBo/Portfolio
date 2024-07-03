// class shoppingCart {
//     constructor()

//     cart;

//     saveCart();

//     obj;

//     addToCart();
// }

var shoppingCart = (function(){
    var cart = []; //to store a item with name, price, imglink, count

    //constructor function
    function Item(name, price, imglink, count){
        this.name = name;
        this.price = price;
        this.imglink = imglink;
        this.count = count;
    }

    //to store cart array in session 
    function saveCart(){ 
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart)) //stringify => array to JSON(object)
    }

    var obj = {}; //to store the cart with object's key

    // {name: 'rose2', price: 12, imglink: 'rose2.jpg'}

    //For Recommeneded Items Data Storing
    obj.recommendItemsData = function(prices){
        var allItems = [];
        // console.log(prices.flat(Infinity))
        for(i=0;i<prices.length;i++){ 
            var productList = []; //store details of each item
            for(j=0; j<prices[i][1].length; j++){ 
                productList.push([`${prices[i][0]}${j+1}`, prices[i][1][j], `${prices[i][0]}${j+1}.jpg`]) //rose
            }
            allItems.push(productList); //3D array 
        }
        // console.log(allItems.flat(1))
        return allItems;
    }
    
    //for add to cart button click
    obj.addToCart = function(name, price, imglink, count){
    //item => get img_link, price from clicked item
        for(var i in cart){
            //condition for clicked same items
            if(name === cart[i].name){
                // cart[i].imglink = imglink;
                cart[i].count++;
                //cart[item].price*
                saveCart();  //save output cart array in session
                return; 
            }
        }

        //create item object for new item
        var item = new Item(name, price, imglink, count);
        cart.push(item); 
        saveCart();
    }

    //to remove each item from cart
    obj.removeItemCart = function(name){
        for(var i in cart){ 
            //if condition for the clicked item name == cart[i].name
            if(name === cart[i].name){ 
                cart[i].count--; 
                if(cart[i].count === 0){ 
                    cart.splice(i, 0); 
                }
                break;
            }
        }
        saveCart(); 
    }

    //for Remove recommended item from cart
    obj.removeRecommendItemCart = function(name){
        for(var i in cart){
            if(name === cart[i].name){
                cart[i].count--;
                if(cart[i].count < 0){
                    cart[i].count = 0;
                }
                break;
            }
        }
        saveCart();
    }

    //Storing Final item list
    obj.listCart = function(){
        var itemList = [];
        for(var i in cart){ 
            var total = Number(cart[i].price * cart[i].count); 
            //copy all data of cart[i] in itemcopy
            itemCopy = {...cart[i],total}; //itemcopy => price, name, imglink, count

            itemList.push(itemCopy); 
        }
        return itemList; 
    }
    
    //Set count for each item
    obj.itemCount = function(name){
        var count = 0;
        for(var i in cart){
            if(name === cart[i].name){
                var count = cart[i].count;
            }
        }
        return count;
        saveCart()
    }

    //Get total count from clicked items and show on badge
    obj.totalCount = function(){
        var badgeCount = 0;
        for(i in cart){
            badgeCount += cart[i].count;
        }
        if(badgeCount === 0){
            badgeCount = '';
        }
        //console.log(badgeCount, typeof(badgeCount));
        return badgeCount;
    }

    //For subtotal of all clicked items 
    obj.subtotalCart = function(){
        var subtotal = 0;
        for(i in cart){
            subtotal += Number(cart[i].price * cart[i].count);
        }
        return subtotal;
    }
    return obj;
})();

//for recommended items list and show recommend function
//Prices Data 
var prices = {"rose" : [15,12,32,12,15,14,13,10,22,10,16,32,25,15,18], 
            "cactus" : [10,2,13,8,7,25,6,12,15,22],
            "flower" : [18,22,14,16,25,18,22,10],
            "plant"  : [12,22,25,14,16,20,16,10,18,22,24,10,16,12,20,23,18,32,25,10,12,9,24,22,16],
            "succ"   : [22,10,16,18,15,23,20,30,8,16,25,18],
            "bouq"   : [32,26,28,30,24,10,35,18,20,22],
            } 
var prices = Object.entries(prices)
// console.log(prices)
// showRecommendItems() //function call
// console.log(shoppingCart.recommendItemsData(prices), typeof(shoppingCart.recommendItemsData(prices)))
// console.log(typeof(shoppingCart.listCart()))

//click action for add to cart button
$(document).ready(function (){
    $(".shopBtn").click(function(event){ //DOM using jQuery
        event.preventDefault();
        console.log($(this));
        var name = $(this).data('name');
        var price = Number($(this).data('price'));
        var imglink = $(this).data('imglink');
        shoppingCart.addToCart(name, price, imglink, 1); //function call
        showCart(); //function call
    });
});

//for clicking plus sign in div button
$('.check_out').on('click', '.plus', function(e){
    shoppingCart.addToCart($(this).data('name'));
    showCart();
    $(`input[data-name="${$(this).data('name')}"]`).val(shoppingCart.itemCount($(this).data('name'))); //show in HTML 
}); 

//for clicking minus sign in div button
$('.check_out').on('click', '.minus', function(e){
    shoppingCart.removeItemCart($(this).data('name')); 
    showCart();
    $(`input[data-name="${$(this).data('name')}"]`).val(shoppingCart.itemCount($(this).data('name')));
})

var recommendItemsCount = $('.item').map(item => Number($('.item')[item].childNodes[3].value)); //To store value of recommended items(6)  
//Click action for increase, decrease buttons
for(i=0;i<recommendItemsCount.length;i++){
    $(`.${prices[i][0]}Shop`).on('click', '.increase', function(){
        var name = $(this).data('name')
        var price = $(this).data('price')
        var imglink = $(this).data('imglink')
        shoppingCart.addToCart(name, price, imglink, 1)
        var itemsList = shoppingCart.listCart() //data 
        for(var j in itemsList){
            $(`input[data-name=${itemsList[j].name}]`).val(itemsList[j].count)
        }
        showCart()
    })

    $(`.${prices[i][0]}Shop`).on('click', '.decrease', function(){
        var name = $(this).data('name')
        shoppingCart.removeRecommendItemCart(name)
        var itemsList = shoppingCart.listCart() //data 
        console.log(itemsList)
        for(j of itemsList){
            $(`input[data-name=${j.name}]`).val(j.count)
        }
        showCart()
    })
}

showRecommendItems()

/* Functions For Show Items */
//only display in modal(HTML) for all recommended items 
function showRecommendItems(){
    const recommendItems = shoppingCart.recommendItemsData(prices) //recommendItems length => 80
    // var listItems = shoppingCart.listCart() //ListCart => 88
    var showItems = ""
    for(var j of recommendItems){ 
        var showItems = "<tr><th class='ps-4'>Item</th><th>Price</th><th class='ps-3'>Quantity</th></tr>";  
        index = recommendItems.indexOf(j)
        for(var i of j){
            showItems += "<tr>"
                        + "<td><img src='images/" + i[2] + "'></td>"
                        + "<td>" + i[1] + "</td>"
                        + "<td><div class='btn border border-danger border-opacity-75' style='width:100px;'>"
                        + "<button class='decrease border-0 bg-light' style='width: 25px;' data-name='" + i[0] + "' data-imglink='" + i[2] + "' + data-price='" + i[1] + "'>-</button>"
                        + "<input type='text' class='unit border-0 ps-2' style='width: 25px;' data-name='" + i[0] + "' value='0'>"
                        + "<button class='increase border-0 bg-light' style='width: 25px;' data-name='" + i[0] + "' data-imglink='" + i[2] + "' + data-price='" + i[1] + "'>+</button>"
                        + "</div></td>"
        }
    $(`.${prices[index][0]}Shop`).html(showItems); 
}}

//to show cart in modal page 
function showCart(){
    //to show clicked items in modal, function call listCart 
    var itemList = shoppingCart.listCart(); //listcart => final cart
    console.log(itemList)
    //Create table row nodes for showing clicked items
    var nodes = "<tr><th class='ps-4'>Item</th><th>Price</th><th class='ps-3'>Quantity</th><th></th><th>Total</th></tr>"

    for(var tr in itemList){ 
        if(itemList[tr].count > 0){
            nodes += "<tr>"
                    + "<td><img src=images/" + itemList[tr].imglink + "></td>"
                    + "<td>" + itemList[tr].price + "</td>"
                    + "<td><div class='btn border border-danger border-opacity-75' style='width:100px;'>"
                    + "<button class='minus border-0 bg-light' style='width: 25px;' data-name='" + itemList[tr].name + "' data-imglink='" + itemList[tr].imglink + "' data-value='" + itemList[tr].count + "'>-</button>"
                    + "<input type='text' class='border-0 ps-2' style='width: 25px;' data-name='" + itemList[tr].name + "'value='"+ itemList[tr].count +"'>"
                    + "<button class='plus border-0 bg-light' style='width: 25px;' data-name='" + itemList[tr].name + "' data-imglink='" + itemList[tr].imglink + "' data-value='" + itemList[tr].count + "'>+</button>"
                    + "</div></td>"
                    + "<td><span> = </span></td>"
                    + "<td>" + itemList[tr].total + "</td>"
                    + "</tr>"
        } 
        $('.check_out').html(nodes);
        $('.subtotal').html(shoppingCart.subtotalCart());
        $('.badge').html(shoppingCart.totalCount());
    }
}