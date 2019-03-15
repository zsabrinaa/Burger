$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("redevour");

    var devouredState = {
      devour: devoured
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      name: $("#yum").val().trim()

    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {

        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");


    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {


        location.reload();
      }
    );
  });
});
