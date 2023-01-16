const text = document.getElementById("load-text");
const loading = document.getElementById("loading");

let amount_period = 0;
const interval = window.setInterval(function (){
    text.textContent = `loading${'.'.repeat(amount_period)}`;
    amount_period === 3 ? amount_period = 0 : amount_period++;
}, 1000);

window.onload = function(){
    clearInterval(interval);
    window.setTimeout(function(){text.textContent = "complete!";}, 1000)
    window.setTimeout(function(){loading.classList.add("hide");}, 2000);
    window.setTimeout(function(){document.body.classList.remove("scroll_lock");}, 3500);
}
