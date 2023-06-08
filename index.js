const seedColor = document.getElementById("seedcolor");
const colorPlateEl = document.getElementById("colorplate");
seedColor.addEventListener("change", (e) => {
  const colorValue = seedColor.value;
  const r = parseInt(colorValue.substring(1, 3), 16);
  const g = parseInt(colorValue.substring(3, 5), 16);
  const b = parseInt(colorValue.substring(5, 7), 16);
  const colorRGB = r.toString() + "," + g.toString() + "," + b.toString();
  getScheme(colorRGB);
});

function getScheme(color) {
  let count = document.getElementById("count").value;
  document.documentElement.style.setProperty("--var-count--", count);
  fetch(`https://www.thecolorapi.com/scheme?rgb=${color}&${count}`)
    .then((res) => res.json())
    .then((data) => {
      let colorschemes = {};
      for (i in data.colors) {
        colorschemes[data.colors[i].name.value] = data.colors[i].rgb.value;
      }
      render(colorschemes, count);
    });
}
// 取得顏色value 要往回設定HTML
function render(colorschemes, count) {
  let html = "";
  for (let i = 0; i < count; i++) {
    html += ` <figure>
        <div class="colorbox" id="colorbox${i}"> </div>    
        <figcaption id ="figcaption${i}">no value</figcaption>
        </figure>`;
  }

  colorPlateEl.innerHTML = html;
  let keys = Object.keys(colorschemes);
  console.log(keys);
  keys.forEach((key, index) => {
    document.getElementById(`colorbox${index}`).style.backgroundColor =
      colorschemes[key];
    document.getElementById(`figcaption${index}`).innerText = key;
  });
}
