
$(function addListItem(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const userText = $('.js-shopping-list-entry').val();

        $('.shopping-list').append(`<li><span class="shopping-item">${userText}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class = "shopping-item-delete"><span class= "button-label">delete</span></button></div>`); 
        
    })
})

$(function toggleCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find($('.shopping-item')).toggleClass("shopping-item__checked");
    })
})
// This was my first code to toggle the check. 
// $(function toggleCheck() {
//     $('.shopping-item-toggle').on('click', => {
//         $(this).closest(li).find($('.shopping-item')).toggleClass("shopping-item__checked");
//     })
// })

$(function removeItem(){
    $('.shopping-list').on('click','.shopping-item-delete', function(event) {
        $(this).closest('li').remove()
    })
})