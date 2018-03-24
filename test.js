// document.addEventListener('DOMContentLoaded', function(){
//     var app = document.getElementById('todo-app');
//     var items = app.getElementsByClassName('item');

//     // Attach event listener to each item
//     for(var i = 0; i < items.length; i++){
//         (function(x, item){
//             item.addEventListener('click', function () {
//                 alert('You click ' + item.textContent);
//             });
//         }(i, items[i]));
//     }
// });


// document.addEventListener('DOMContentLoaded', function(){
//     var app = document.getElementById('todo-app');

//     // Attach event listener to whole container
//     app.addEventListener('click', function(e){
//         console.log(e);
//         if(e.target && e.target.nodeName === 'LI'){
//             var item = e.target;
//             alert('You click on item ' + item.textContent);
//         }
//     });
// });
