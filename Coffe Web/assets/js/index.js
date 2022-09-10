const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listItemHeader = $$('.menu-bar button');

// Event scroll change navbar
function change_Navbar(){
    if (document.documentElement.scrollTop > 50) {
        $('.coffee-header').classList.add('dis-fixed');
            listItemHeader.forEach((item) => {
            $$('.nav-bar a').forEach((item) => {
                item.classList.add('color-a')
            });
        })
    } else {
        $('.coffee-header').classList.remove('dis-fixed');
            listItemHeader.forEach((item) => {
            $$('.nav-bar a').forEach((item) => {
                item.classList.remove('color-a')
            });
        })
    }
}

// Event scroll change navbar item
function navBar_item(){
    listItemHeader.forEach((item) => {
        item.classList.add('border-none');
        item.classList.remove('border-header');
    })

    if (document.documentElement.scrollTop < 500) {
        // Home
        listItemHeader[0].classList.add('border-header');
        listItemHeader[0].classList.remove('border-none');
    }
    else if (document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop < 1200) {
        // Service
        listItemHeader[2].classList.add('border-header');
        listItemHeader[2].classList.remove('border-none');
    } 
    else if (document.documentElement.scrollTop >= 1200 && document.documentElement.scrollTop < 2000) {
        // About
        listItemHeader[1].classList.add('border-header');
        listItemHeader[1].classList.remove('border-none');
    }
    else if (document.documentElement.scrollTop >= 2000 && document.documentElement.scrollTop < 2750) {
        // faqs
        listItemHeader[3].classList.add('border-header');
        listItemHeader[3].classList.remove('border-none');
    }
    else if (document.documentElement.scrollTop >= 2750) {
        // Contact
        listItemHeader[4].classList.add('border-header');
        listItemHeader[4].classList.remove('border-none');
    }
}

// Handle scroll
window.onscroll = function () {
    change_Navbar();
    navBar_item();
};

// Event click item header
function clickItemNavbar(index){
    if (listItemHeader[index] === listItemHeader[0]) {
        window.scroll(0, 0);
    }
    else if (listItemHeader[index] === listItemHeader[1]) {
        window.scroll(0, 1200);
    }
    else if (listItemHeader[index] === listItemHeader[2]) {
        window.scroll(0, 500);
    }
    else if (listItemHeader[index] === listItemHeader[3]) {
        window.scroll(0, 2000);
    }
    else if (listItemHeader[index] === listItemHeader[4]) {
        window.scroll(0, 2750);
    }
    
    listItemHeader[index].removeClass('border-none');
    listItemHeader[index].addClass('border-header');
}

listItemHeader.forEach((item, index) => {
    item.onclick = function() {
        $('.border-header').classList.add('border-none');
        $('.border-header').classList.remove('border-header');
        this.classList.add('border-header');
        this.classList.remove('border-none');
        clickItemNavbar(index);
    }
});

// Event click question and answer
const anSwers = $$('.item-answer');
const iCons = $$('.item_icon');
const itemIconAdds = $$('ion-icon[name=add-outline]');
const ques = $$('.question-item');
let stepIcon = 0;

iCons.forEach((iCon, inDex) => {
    iCon.onclick = function () {
        stepIcon = stepIcon ? 0 : 1;
        if (stepIcon === 0) {
            anSwers[inDex].classList.remove('item-active');
            anSwers[inDex].classList.add('item-answer');
            ques[inDex].classList.remove('change-color');
            iCon.classList.remove('change-color');
            itemIconAdds[inDex].name = 'add-outline';
        } else {
            anSwers[inDex].classList.add('item-active');
            anSwers[inDex].classList.remove('item-answer');
            ques[inDex].classList.add('change-color');
            iCon.classList.add('change-color');
            itemIconAdds[inDex].name = 'remove-outline';
        }
    }
});
