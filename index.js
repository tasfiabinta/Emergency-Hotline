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
  if (e.target.className.includes("call-btn")) {
    const cardCall = e.target;

    const serviceName = cardCall.parentNode.parentNode.children[1].innerText;

    const serviceNumber = cardCall.parentNode.parentNode.children[3].innerText;

    // console.log(serviceName, serviceNumber);

    const coinValue = getElement("coin-count").innerText;

    const newCoinValue = Number(coinValue) - 20;

    if (newCoinValue < 0) {
      alert("⚠️ Insufficient Coin. Need minimum 20 coins to make a call ⚠️");
      return;
    }
    alert("📞 Calling " + serviceName + " " + serviceNumber + "...");
    getElement("coin-count").innerText = Number(newCoinValue);
  }
});
