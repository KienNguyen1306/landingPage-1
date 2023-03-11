var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "100089617087398");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v15.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "101066992894703");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v15.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// ========================== scoll reveal ===================================

ScrollReveal({
  reset: true,
  delay: 200,
  distance: "80px",
  duration: 2000,
});

ScrollReveal().reveal(".scroll-top", { origin: "top" });
ScrollReveal().reveal(".scroll-bottom", { origin: "bottom" });
ScrollReveal().reveal(".opacity", { scale: 0.85, distance: "0px" });
