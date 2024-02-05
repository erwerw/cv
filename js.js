



 window.addEventListener("load",async(e)=>{
  
    var num = -1;
    for(let i = 0 ; i <= 100;i++){
        await sleep(0.01);
        if(i <= 100){
         document.querySelector(".progress").innerHTML = `  <div class="progress-bar" role="progressbar" style="width: ${i}%;" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">${i}%</div>`;         
        }
        if(i <=85){
         document.querySelector(".dd").innerHTML = `  <div class="progress-bar" role="progressbar" style="width: ${i}%;        background-image: linear-gradient(to right,rgb(255, 166, 0),rgb(255, 166, 0,60%));" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">${i}%</div>`;       
        }
        if(i<=50){
         document.querySelector(".py").innerHTML = `  <div class="progress-bar" role="progressbar" style="width: ${i}%;background-image: linear-gradient(to right,rgb(3, 117, 3),rgb(3, 117, 30,60%));" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">${i}%</div>`;       
        }
        if(i<=90){
         document.querySelector(".end").innerHTML = `  <div class="progress-bar" role="progressbar" style="width: ${i}%;        background-image: linear-gradient(to right,darkgreen,green);" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">${i}%</div>`;       
        }
        if(i <= 90){
        document.querySelector(".frontend").innerHTML = `  <div class="progress-bar" role="progressbar" style="width: ${i}%;        background-image: linear-gradient(to right,blue,aqua);" aria-valuenow="${i}" aria-valuemin="0" aria-valuemax="100">${i}%</div>`;      
        }

} // For

 }); // window

 async function sleep(ms){
     return new Promise(test => setTimeout(test, ms * 1000));
 }