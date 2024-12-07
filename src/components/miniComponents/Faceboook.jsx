import React, { useEffect } from "react";

const FacebookMsg = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1304410247406246",
        xfbml: true,
        version: "v17.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id="463424306856020"
      theme_color="#0084ff"
      minimized="true"
    ></div>
  );
};

export default FacebookMsg;
