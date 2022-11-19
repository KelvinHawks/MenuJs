const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 2,
    title: "buttermilk pancakes",
    category: "lunch",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 3,
    title: "buttermilk pancakes",
    category: "shakes",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 4,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 4,
    title: "buttermilk pancakes",
    category: "lunch",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},{
    id: 6,
    title: "buttermilk pancakes",
    category: "shakes",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},{
    id: 7,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 3,
    title: "buttermilk pancakes",
    category: "shakes",
    price: 149,
    img: "bugger.webp",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},]

const columnSection = document.querySelector('.column')

const btns = document.querySelectorAll('.filter-btn')


window.addEventListener('DOMContentLoaded', function(){
    //console.log("you will make it. Keep pushing");
    displayMenuItems(menu)
    //console.log(displayMenu);
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        //console.log(item);

        return `<div class="column">
                    <div class="row-1">
                        <div class="img">
                            <img src=${item.img} style="width: 140px;">
                        </div>
                        <div class="text">
                            <div class="header">
                                <div class="title"><h3>${item.title}</h3></div>
                                <div class="price"><h3>${'$' + item.price}</h3></div>
                            </div>
                            <hr>
                            <div class="para-graph">${item.paragraph}
                            </div>
                        </div>
                    </div>
                </div>`
    })
    displayMenu = displayMenu.join('')
    columnSection.innerHTML = displayMenu
    //console.log(displayMenu);
}

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem){

           if(menuItem.category === category){
            return menuItem
           }
        })
        if (category === 'all'){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }
    })
})
