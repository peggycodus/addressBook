$(document).ready(function() {
  $("form#new-contact-form").submit(function(event) {
    event.preventDefault();
    var newFirstName = $("input#new-first-name").val();
    var newLastName = $("input#new-last-name").val();
    var newAddress = $("input#new-address").val();
    var newContact = {firstName: newFirstName, lastName: newLastName, address: newAddress};

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

    $("ul#contact-name").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
    $(".contact-list").show();

    $(".contact").last().click(function() {
      $("#contactDetails h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $("#contactDetails").show();
    });

  });


});

