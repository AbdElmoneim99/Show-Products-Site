var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCateg = document.getElementById("productCateg");
var productDesc = document.getElementById("productDesc");
var productCount = document.getElementById("productCount");
var productContainer = [];
var change = "Add product";
var Bedo;
function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    categ: productCateg.value,
    desc: productDesc.value,
    count: productCount.value,
  };
  if (change === "Add product") {
    if (product.count > 1) {
      for (var i = 0; i < product.count; i++) {
        productContainer.push(product);
      }
    } else {
      productContainer.push(product);
    }
  } else {
    productContainer[Bedo] = product;
    change = "Add product";
    AddProduct.innerHTML = "Add Product";
  }

  displayProduct();
  emptyInput();
}

function displayProduct() {
  var cartoona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartoona += `
         <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].categ}</td>
            <td>${productContainer[i].desc}</td>
            <td> 
            <button class="btn btn-danger " onclick="deleteRow(${i})" >
                Delete
            </button>
            </td>
          <td> 
            <button class="btn btn-warning" onclick="updatedata(${i})">
                Update
            </button>
            </td>
         </tr> 
        `;
  }
  document.getElementById("tBody").innerHTML = cartoona;
}

function updatedata(i) {
  productName.value = productContainer[i].name;
  productPrice.value = productContainer[i].price;
  productCateg.value = productContainer[i].categ;
  productDesc.value = productContainer[i].desc;
  productCount.value = productContainer[i].count;
  AddProduct.innerHTML = "Update";
  change = "Update";
  Bedo = i;
  scroll({ top: 0, behavior: "smooth" });
}

function emptyInput() {
  productName.value = null;
  productPrice.value = null;
  productCateg.value = null;
  productDesc.value = null;
  productCount.value = null;
}

function deleteAll() {
  productContainer.splice(0);
  displayProduct();
}

function deleteRow(i) {
  productContainer.splice(i, 1);
  displayProduct();
}
