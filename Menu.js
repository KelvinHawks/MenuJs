const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 213,
    img: "index.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 2,
    title: "stair fair",
    category: "supper",
    price: 147,
    img: "bugger1.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 3,
    title: "Havard health",
    category: "shakes",
    price: 159,
    img: "bugger3.avif",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 4,
    title: "Best Bee",
    category: "breakfast",
    price: 135,
    img: "bugger10.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 4,
    title: "Traditional Mexican",
    category: "lunch",
    price: 120,
    img: "bugger5.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},{
    id: 6,
    title: "shutters tock",
    category: "shakes",
    price: 180,
    img: "bugger6.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},{
    id: 7,
    title: "Chaat masala",
    category: "breakfast",
    price: 160,
    img: "bugger9.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
},
{
    id: 3,
    title: "Filipino food",
    category: "shakes",
    price: 200,
    img: "bugger8.jpg",
    paragraph: `I'm baby woke milkshk wolf bitters live edge
                blue bottle, hammock freegan copper mug whatever cold pressed`
}
]

const columnSection = document.querySelector('.column')

const buttonsBtn = document.querySelector(".buttons")

/*const btns = document.querySelectorAll('.filter-btn')*/


window.addEventListener('DOMContentLoaded', function(){
    //console.log("you will make it. Keep pushing");
    displayMenuItems(menu)
    //console.log(displayMenu);
    const categories = menu.reduce(function (value, item){
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value
    },
    ['all'])
    displayMenuButtons()
    /*const categoryBtns = categories.map(function(category){
        return `
        <button class="filter-btn" data-id="${category}">${category}</button>`
    }).join("")
    buttonsBtn.innerHTML = categoryBtns
    const btns = document.querySelectorAll('.filter-btn')
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
    })*/
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

/*btns.forEach(function(btn){
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
})*/
function displayMenuButtons(){
    const categories = menu.reduce(function (value, item){
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value
    },
    ['all'])
    const categoryBtns = categories.map(function(category){
        return `
        <button class="filter-btn" data-id="${category}">${category}</button>`
    }).join("")
    buttonsBtn.innerHTML = categoryBtns
    const btns = document.querySelectorAll('.filter-btn')
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
}
