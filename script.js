function label_create(tagname, attr1, attr1value, content) {
  var data1 = document.createElement(tagname);
  data1.setAttribute(attr1, attr1value);
  data1.innerHTML = content;
  return data1;
}
function input_create(tagname, attr1, attr1value, attr2, attr2value) {
  var data2 = document.createElement(tagname);
  data2.setAttribute(attr1, attr1value);
  data2.setAttribute(attr2, attr2value);
  return data2;
}
function break_create(tagname) {
  var data3 = document.createElement(tagname);
  return data3;
}
function button_create(tagname, attr1, attr1value, attr2, attr2value, content) {
  var data4 = document.createElement(tagname);
  data4.setAttribute(attr1, attr1value);
  data4.setAttribute(attr2, attr2value);
  data4.innerHTML = content;
  return data4;
}
function submit() {
  var firstName = document.getElementById("firstname").value;
  var middleName = document.getElementById("middlename").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(`
    FirstName:${firstName}
    MiddleName:${middleName}
    LastNmae:${lastName}
    Email:${email}
    Password:${password}`);
}

var label_create1 = label_create("label", "for", "firstname", "First Name");
var break_create1 = break_create("br");
var input_create1 = input_create("input", "type", "text", "id", "firstname");
var break_create2 = break_create("br");
var label_create2 = label_create("label", "for", "middle", "Middle Name");
var break_create3 = break_create("br");
var input_create2 = input_create("input", "type", "text", "id", "middlename");
var break_create4 = break_create("br");
var label_create3 = label_create("label", "for", "lastname", "Last Name");
var break_create5 = break_create("br");
var input_create3 = input_create("input", "type", "text", "id", "lastname");
var break_create6 = break_create("br");
var label_create4 = label_create("label", "for", "email", "Email");
var break_create7 = break_create("br");
var input_create4 = input_create("input", "type", "email", "id", "email");
var break_create8 = break_create("br");
var label_create5 = label_create("label", "for", "password", "Password");
var break_create9 = break_create("br");
var input_create5 = input_create("input", "type", "password", "id", "password");
var break_create10 = break_create("br");
var button_create1 = button_create(
  "button",
  "type",
  "button",
  "onclick",
  "submit()",
  "Submit"
);

document.body.append(
  label_create1,
  break_create1,
  input_create1,
  break_create2,
  label_create2,
  break_create3,
  input_create2,
  break_create4,
  label_create3,
  break_create5,
  input_create3,
  break_create6,
  label_create4,
  break_create7,
  input_create4,
  break_create8,
  label_create5,
  break_create9,
  input_create5,
  break_create10,
  button_create1
);
