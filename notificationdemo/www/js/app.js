document.addEventListener("deviceready", init, false);

function init() {
  document.querySelector("#alertTest").addEventListener("touchend",
    function() {
      navigator.notification.alert(
          "This is a test...", null, "Alert Test", "OK!");
    }, false);

  document.querySelector("#confirmTest").addEventListener("touchend",
    function() {
      function youConfirmed(idx) {
        navigator.notification.alert(
            "You clicked button " + idx + "!", null);
      }

      navigator.notification.confirm(
          "Cordova is meh.", youConfirmed,
          "Confirm This", ["Yes", "No", "Maybe"]);
    }, false);

  document.querySelector("#promptTest").addEventListener("touchend",
    function() {
      function promptAnswer(answer) {
        navigator.notification.alert(
            "You said: " + answer.input1, null);
      }

      navigator.notification.prompt(
          "Why, oh god why?", promptAnswer,
          "Question", ["Ok"], "Masochism");
    }, false);

  document.querySelector("#beepTest").addEventListener("touchend",
    function() {
      navigator.notification.beep(2);
    }, false);
}
