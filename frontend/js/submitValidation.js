function validateInputs() {
  console.log("validating");
  var returnMessage = document.getElementById("form-messages");
  returnMessage.innerHTML = "";

  if (document.getElementById("name").value == "") {
    document
      .getElementById("name")
      .setAttribute("style", "border:1px solid #ff0000");
  } else {
    document.getElementById("name").removeAttribute("style");
  }

  if (document.getElementById("email").value == "") {
    document
      .getElementById("email")
      .setAttribute("style", "border:1px solid #ff0000");
  } else {
    document.getElementById("email").removeAttribute("style");
  }

  if (document.getElementById("msg").value == "") {
    document
      .getElementById("msg")
      .setAttribute("style", "border:1px solid #ff0000");
  } else {
    document.getElementById("msg").removeAttribute("style");
  }

  if (
    document.getElementById("name").value != "" &&
    document.getElementById("msg").value != "" &&
    document.getElementById("email").value != ""
  ) {
    returnMessage.innerHTML = "Sending...";
    Email.send({
      SecureToken: "9eb35bab-c5d2-4cd3-9329-87e51b49abe3",
      To: "ethic@ethichadebe.co.za",
      From: document.getElementById("email").value,
      Subject: "Message from: " + document.getElementById("name").value,
      Body: document.getElementById("msg").value,
    }).then((message) => (returnMessage.innerHTML = message));
  }
}
