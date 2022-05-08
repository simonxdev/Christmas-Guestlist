const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
const addtolist = document.getElementById("input")
const btnremovelast = document.getElementById("btnremovelast")
const btnremoveevil = document.getElementById("btnremoveevil")

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
function gustList(){
    guestList.innerHTML = ""
for(let i = 0;i < guests.length; i++){
    guestList.innerHTML += `
                        <li>${guests[i]}</li>
                        `
    }
}
gustList()

btn.addEventListener("click", function(){
    if (addtolist.value){
        guests.push(addtolist.value)
        gustList()
    }
})

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

btnremovelast.addEventListener("click", function(){
        guests.pop()
        gustList()
})

btnremoveevil.addEventListener("click", function(){
        for (let i = 0;i < guests.length;i++){
            if (guests[i] == "Evil Relative"){
                guests.splice(i, 1)
                gustList()
            }
        }
})
