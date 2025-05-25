console.log("User");
let textarea = document.getElementById("send_textarea");
let username = document.getElementById("send_username_textarea");
let sendButton = document.getElementById("send_button");

sendButton.onclick = function () {
  let content = textarea.value;
  let name = textarea.value ? username.value : "Anonymous";
  client.from("firstSetUp").insert({ content, name }).then();
  textarea.value = "";
  username.value = "";
};
