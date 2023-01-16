// 読み込みが完了したら 
// 1秒後にテキストをcomplete!に変える
// 2秒後に要素を隠し始める(詳細なアニメーションの遅延等はCSS)
// 3.5秒後にスクロールロックを外す

window.onload = function(){
    window.setTimeout(function(){document.getElementById("load-text").textContent = "complete!";}, 1000)
    window.setTimeout(function(){document.getElementById("loading").classList.add("hide");}, 2000);
    window.setTimeout(function(){document.body.classList.remove("scroll_lock");}, 3500);
}
