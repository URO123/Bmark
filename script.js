elItem = document.querySelector('.site-header__item0');
elList = document.querySelector('.sublist');
elItem.addEventListener('click', function(){
    elList.classList.toggle('open');
});

elItem1 = document.querySelector('.site-header__item1');
elList1 = document.querySelector('.sublist1');
elItem1.addEventListener('click', function(){
    elList1.classList.toggle('open');
});

elItem2 = document.querySelector('.site-header__item2');
elList2 = document.querySelector('.sublist2');
elItem2.addEventListener('click', function(){
    elList2.classList.toggle('open');
});