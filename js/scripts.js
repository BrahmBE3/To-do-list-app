//JQuery liberary Javascript
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  // when there is no input value alert message on the top will appear asking to write something for the list
  if (inputValue === ''){
    alert("Write something in the given space!");
  } else {
    $('#list').append(li);// value written will be added to the list
  }

  // added item in the list will be striked out
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("click", crossOut)

  //  Adding delete button
  let deleteButton = $("<button>X</button>");
  deleteButton.addClass("crossOutButton");
  li.append(deleteButton);// delete button is added

  // clicking on the the item will be deleted from the #list
  function deleteListItem() {
      li.addClass("delete"); //class "delete" is added
  }
  deleteButton.on("click", deleteListItem);

  //  item sortment
 $('#list').sortable();
}
