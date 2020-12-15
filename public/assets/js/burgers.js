// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    
    $(".change-state").on("click", function (event) {

      const id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(function () {
        console.log("Yumm!");

        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#burger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("New burger ready to be devoured!");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  