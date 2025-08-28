function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//heart number increment

const heartBtns = document.getElementsByClassName("heart-btns");

for (const btn of heartBtns) {
  btn.addEventListener("click", function () {
    const heartValue = getElement("heart").innerText;

    const newHeartValue = Number(heartValue) + 1;
    getElement("heart").innerText = Number(newHeartValue);
  });
}
