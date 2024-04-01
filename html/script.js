Shery.imageEffect(".images",{
    style:5,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.033003300330033},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.85,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":0.55,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":1,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":1.04,"range":[0,2]},"noise_scale":{"value":0,"range":[0,100]}},
    gooey:true,
    // debug:true
})
// var elems=document.querySelectorAll(".elem")
// elems.forEach(function(elem){
//     var h1=elem.querySelectorAll("h1")
// var index=0;
// document.querySelector(".main")
// .addEventListener("click",()=>{
//     gsap.to(h1[index],{
//         top:"-100%",
//         ease:Expo.easeInOut,
//         duration:1,
//         onComplete:function(){
//             gsap.set(this._targets[0],{top:"0%"})
//         }
//     })
//     index=== h1.length-1?(index=0):index++;
//     gsap.to(h1[index],{
//         top:"-80%",
//         ease:Expo.easeInOut,
//         duration:1
//     })
// })
// })
function textAnimation(){
    const elems = document.querySelectorAll(".elem")

    elems.forEach(function(elem) {
        const h1s = elem.querySelectorAll("h1");
        let index = 0;
        let animating = false;
    document.querySelector("main").addEventListener("click", ()=> {
        if(!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                duration: 0.6,
                ease: Expo.easeInOut,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            })
            index === h1s.length-1 ? index=0 : index++;
            gsap.to(h1s[index], {
                top: "-=100%",
                duration: 0.6,
                ease: Expo.easeInOut
            })
        }
    })
    })
} 
textAnimation()