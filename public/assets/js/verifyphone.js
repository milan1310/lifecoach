function getIp(callback) {
    fetch("https://ipinfo.io/json?token=334c5c886b240b", {
      headers: { Accept: "application/json" },
    })
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: "in",
        };
      })
      .then((resp) => callback(resp.country));
  }


  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const verfiedNumber = document.getElementById('number');
  const region = document.getElementById('region');
  getIp(c => {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
    region.value = regionNamesInEnglish.of(c);

  });

  document.querySelector("#phone").addEventListener("input", (e) => {
    const phoneNumber = phoneInput.getNumber();
    verfiedNumber.value = phoneNumber
  });