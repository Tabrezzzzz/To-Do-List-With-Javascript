const input = document.getElementById("input")
const list = document.getElementById("list")
const add = document.getElementById("add")
const completed = document.getElementById("completed")
const removeList = document.getElementById("remove")


add.addEventListener('click' , () => {
    if(input.value.trim() === ""){
        return alert('Please fill it properly')
    }
    else{
list.innerHTML += `<span class="d-flex justify-content-between align-items-center" style="width:800px">
<li id="task">${input.value}</li>
<div>
<button id="completed" class="btn btn-primary">Complete</button>
<button id="remove" class="btn btn-primary">Remove</button>
</div>
</span>`
    }

} )



list.addEventListener('click' , (e) => {
let parentEl = e.target.parentElement.parentElement

const buttonId = e.target.id

if(buttonId === "remove"){
parentEl.remove();
}
else if(buttonId === "completed"){
let firstList = parentEl.firstChild.nextElementSibling
  if(firstList.id === "task"){
 firstList.classList.toggle("text-decoration-line-through")
 firstList.classList.toggle("text-success")
 firstList.classList.toggle("border-success")

  }     
}
})
