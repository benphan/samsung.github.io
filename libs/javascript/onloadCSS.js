function onloadCSS(ss,callback){var called;function newcb(){if(!called&&callback){called=!0;callback.call(ss)}}
if(ss.addEventListener){ss.addEventListener("load",newcb)}
if(ss.attachEvent){ss.attachEvent("onload",newcb)}
if("isApplicationInstalled" in navigator&&"onloadcssdefined" in ss){ss.onloadcssdefined(newcb)}}