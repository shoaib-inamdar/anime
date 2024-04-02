var crsr = document.querySelector(".cursor");
var a=document.querySelectorAll(".bottomnav>a")
// a.forEach((elem)=>{
    
//     elem.addEventListener("mouseenter",(e)=>{
//         e.addEventListener("mousemove",(dets)=>{
//             gsap.to(e,{
//                 top:dets.clientY+"px",
//             left:dets.clientX+"px",
//             opacity:1
//             })
//         })
//     })
// })
window.addEventListener("mousemove", function (dets) {
    gsap.to(crsr,{
        top:dets.clientY+"px",
        left:dets.clientX+"px",
        opacity:1
    })
  });
var linkarr=["html/goku.html","html/jjk.html"]
  var box=document.querySelectorAll(".box");
  box.forEach((ele) => {
      ele.addEventListener("click",(e)=>{
        if(ele.id=="aot"){
            window.location.href="html/aot.html"
        }
        else if(ele.id=="jjk"){
            window.location.href="html/jjk.html"
        }
        else if(ele.id=="db"){
            window.location.href="html/goku.html"
        }
        else if(ele.id=="naruto"){
            window.location.href="html/naruto.html"
        }
        else if(ele.id=="solo"){
            window.location.href="html/solo.html"
        }
        //   window.location.href=linkarr[e];
        // console.log("hello")
        console.log(ele)
        // console.log(NodeList.value)
      })
});