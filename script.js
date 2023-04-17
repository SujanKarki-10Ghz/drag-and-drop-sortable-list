const sortableList = document.querySelectorAll('.sortable-list');
const items = document.querySelectorAll('.item');

items.forEach(item =>{
    item.addEventListener("dragstart", ()=>{
        setTimeout(()=>{
            item.classList.add("dragging");
        }, 0)
    })
    item.addEventListener("dragend", ()=>{
        item.classList.remove("dragging");
    })
})
const initSortableList = (e)=>{
    e.preventDefault();
const draggingItem = sortableList.querySelector(".dragging");
    //getting all items except currently dragging and making array of them
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    //finding sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2;
    })

    //insert the dragging item before found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}
sortableList.addEventListener( "dragover", initSortableList);
sortableList.addEventListener("dragenter", (e)=>{
    e.preventDefault();
})