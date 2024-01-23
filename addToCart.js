var addItemId=0;
function addToCart(item1)
{
    addItemId+=1;
var selectedItem=document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id',addItemId);
var img=document.createElement('img');
img.setAttribute('src',item.childern[0].currentSrc);
var cartItems=document.getElementById('pd');
selectedItem.append(img);
cartItems.append(selectedItem);
}