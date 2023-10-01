const button = document.querySelector("button");
const eyedropper = new EyeDropper();
const showColor = document.querySelector("#hexValue");

button.addEventListener("click", async () => {
  const color = await eyedropper.open();
  showColor.textContent = color.sRGBHex;
  console.log(color.sRGBHex);
  let text = document.getElementById('hexValue').innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error(err);
  }
});

