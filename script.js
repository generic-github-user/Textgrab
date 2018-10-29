$.ajax({
      url: "url",
      success: function(data) {
            alert(data);
      },
      error: function() {
            alert("HTTP request was unsuccessful. Please try another URL.");
      }
});