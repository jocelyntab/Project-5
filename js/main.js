const imageLinks$ = $("a");
const searchInput$ = $("#searchInput");

searchInput$.on("keyup", function () {
  const searchText = $(this).val().toLowerCase();
  imageLinks$.each(function () {
    const captionText = $(this).data("caption").trim().toLowerCase();
    if (captionText.indexOf(searchText) > -1) {
      $(this).closest(".column").show();
    } else {
      $(this).closest(".column").hide();
    }
  });
});
