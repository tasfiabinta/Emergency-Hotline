function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//heart icon functionalities

const heartBtns = document.getElementsByClassName("heart-btns");

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    const heartValue = getElement("heart").innerText;

    const newHeartValue = Number(heartValue) + 1;
    getElement("heart").innerText = Number(newHeartValue);
  });
}

//card functionalities

getElement("call-box").addEventListener("click", function (e) {
  const cardCall = e.target.closest(".call-btn");
  if (cardCall) {
    const serviceName = cardCall.parentNode.parentNode.children[1].innerText;

    const serviceNumber = cardCall.parentNode.parentNode.children[3].innerText;

    const date = new Date().toLocaleTimeString(undefined, { hour12: true });

    // console.log(serviceName, serviceNumber);

    const coinValue = getElement("coin-count").innerText;

    const newCoinValue = Number(coinValue) - 20;

    if (newCoinValue < 0) {
      alert("⚠️ Insufficient Coin. Need minimum 20 coins to make a call ⚠️");
      return;
    }
    alert("📞 Calling " + serviceName + " " + serviceNumber + "...");
    getElement("coin-count").innerText = Number(newCoinValue);

    const callHistory = getElement("history-container");

    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
                  <div
                class="flex justify-between items-center p-3 bg-[#fafafa] mx-3 rounded-lg mb-4 gap-3"
              >
                <div>
                  <h1 class="font-bold">${serviceName}</h1>
                  <p class="font-semibold text-[#5c5c5c]">${serviceNumber}</p>
                </div>
                <div>
                  <p >${date}</p>
                </div>
              </div>

    `;
    callHistory.appendChild(newHistory);
  }
});

//clear history

document.getElementById("clear-history").addEventListener("click", function () {
  const callHistory = getElement("history-container");
  callHistory.innerHTML = "";
});

//copy
// copy-btn

getElement("call-box").addEventListener("click", function (e) {
  const cardCopy = e.target.closest(".copy-btn");

  if (cardCopy) {
    const serviceNumber2 = cardCopy.parentNode.parentNode.children[3].innerText;

    const copyNumber = serviceNumber2;

    const copyValue = getElement("copy-value").innerText;

    const newCopyValue = Number(copyValue) + 1;

    getElement("copy-value").innerText = newCopyValue;

    navigator.clipboard
      .writeText(copyNumber)
      .then(() => {
        alert("Number is copied: " + serviceNumber2);
      })

      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
});
