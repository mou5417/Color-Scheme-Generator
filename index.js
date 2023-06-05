
const seedColor = document.getElementById("seedcolor")
seedColor.addEventListener("change",(e)=>{
    const colorValue = seedColor.value
    const r =parseInt(colorValue.substring(1,2), 16)
    const g =parseInt(colorValue.substring(3,2), 16)
    const b =parseInt(colorValue.substring(5,2), 16)
    const colorRGB= r.toString()+","+g.toString()+","+b.toString()
   
    getScheme(colorRGB)
})


function getScheme(color){
    fetch(`https://www.thecolorapi.com/scheme?rgb=${color}&count=2`)
    .then(res=>res.json())
    .then(data =>{
        for(i in data.colors)
        {
            let colorscheme={}
            Object.assign(colorscheme, data.colors[i].rgb)
            console.log("rgb is " +colorscheme.value)
        }
        console.log(data)
    })
}
// 取得顏色value 要往回設定HTML