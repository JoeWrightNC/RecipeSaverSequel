$(function() {
  
  $(".change-tried").on("click", function(event) {
    var id = $(this).data("id");
    var newTried = $(this).data("newTried");

    var newTriedState = {
      tried: newTried
    };

    $.ajax("/api/recipes/" + id, {
      type: "PUT",
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    if ($.trim($("#rn").val()) === "" || $.trim($("#ru").val()) === "") {
      alert('you did not fill out a field');
      return false;
    } else {
      var userId = $("#addRecipeBtn").data("id");
      var newRecipe = {
        recipeName: $("#rn").val().trim(),
        recipeURL: $("#ru").val().trim(),
        userId: userId
      };
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(
        function() {
          location.reload();
        }
      );
    };
  });


  $(".delete-recipe").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/recipes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".addPageLoad").on("click", function(event) {
    $("#lander").slideUp(1200);
    $("#triedPage").slideUp(400);
    $("#toTryPage").slideUp(400)
    $("#addOne").slideDown(1200);
  })

  $(".toTryPageLoad").on("click", function(event) {
    $("#lander").slideUp(400);
    $("#triedPage").slideUp(400);
    $("#addOne").slideUp(400);
    $("#toTryPage").slideDown(400)
  })

  $(".triedPageLoad").on("click", function(event) {
    $("#lander").slideUp(400);
    $("#addOne").slideUp(400);
    $("#toTryPage").slideUp(400);
    $("#triedPage").slideDown(400);
  })
});
