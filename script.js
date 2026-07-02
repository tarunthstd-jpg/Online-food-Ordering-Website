function orderFood(){

let name = document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
let address = document.getElementById("address").value;

if(name=="" || mobile=="" || address==""){
    alert("Please fill all details");
    return;
}

if(mobile.length!=10){
    alert("Enter a valid 10-digit mobile number");
    return;
}

let total = 0;
let output = "";

output += "<h3>Customer : " + name + "</h3>";
output += "<p>Mobile : " + mobile + "</p>";
output += "<p>Address : " + address + "</p><hr>";

function addItem(checkId, qtyId, item, price){

if(document.getElementById(checkId).checked){

let qty = Number(document.getElementById(qtyId).value);

if(qty>0){

let subtotal = qty * price;

total += subtotal;

output += item + " x" + qty +
" = ₹" + subtotal + "<br>";

}

}

}

addItem("vegburger","vbqty","Veg Burger",120);
addItem("vegpizza","vpqty","Veg Pizza",250);
addItem("sandwich","sqty","Sandwich",90);
addItem("paneerroll","prqty","Paneer Roll",110);
addItem("noodles","nqty","Veg Noodles",140);
addItem("fries","fqty","French Fries",80);

addItem("chickenburger","cbqty","Chicken Burger",150);
addItem("chickenpizza","cpqty","Chicken Pizza",300);
addItem("chickenroll","crqty","Chicken Roll",170);
addItem("friedrice","frqty","Chicken Fried Rice",180);
addItem("wings","wqty","Chicken Wings",220);
addItem("shawarma","shqty","Shawarma",160);

addItem("juice","jqty","Juice",60);
addItem("coffee","coqty","Coffee",50);
addItem("milkshake","msqty","Milkshake",90);
addItem("tea","tqty","Tea",30);
addItem("lemon","lqty","Lemon Soda",40);
addItem("softdrink","sdqty","Soft Drink",45);

output += "<hr>";
output += "<h2>Grand Total = ₹" + total + "</h2>";
output += "<h3>Thank You for Ordering!</h3>";

document.getElementById("summary").innerHTML = output;

}
