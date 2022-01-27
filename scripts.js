
function newItem () {

//addetion of new item.
   let li = $("<li></li>");
   let inputValue = $("#input").val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
   }

 // crossout item
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.on("dblclick",crossOut);

 // deletion button X
   let button = $("<crossOutButton>X</crossOutButton");
 	li.append(button);


   function deleteListItem(){
 		li.classList.add("delete")
 	}
 //record
   $('#list').sortable();

}
