(function() {
  let deferredPrompt;
  self.addEventListener("appinstalled", evt => {
    //console.log("the app was installed");
  });

  self.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();

    deferredPrompt = event;

    document.querySelector("#installBtn").addEventListener("click", event => {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult === "accepted") {
          //   console.log("User accepted the A2HS prompt");
        } else {
          // console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });

    // self.addEventListener("beforeinstallprompt", evt => {
    //   evt.userChoice.then(choice => {
    //     var message =
    //       choice.outcome === "dismissed" ? "User cancelled" : "User installed";

    //     console.log(message);
    //   });
    // });

    // self.addEventListener("beforeinstallprompt", evt => {
    //   evt.preventDefault();
    //   const promptEvt = evt;
    //   if (promptEvt !== undefined) {
    //     promptEvt.prompt();

    //     promptEvt.userChoice.then(choice => {
    //       console.log("User choice", choice.outcome);
    //     });
    //   }

    return false;
  });
})();
