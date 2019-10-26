function isNullOrUndefined(b){return(b===null)||(b===undefined)}function numberWithCommas(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function numberFormat(a,b){return Math.abs(Number(a))>=1000000000?b===0?parseFloat((Math.abs(Number(a))/1000000000).toFixed(2)):parseFloat((Math.abs(Number(a))/1000000000).toFixed(2))+" b":Math.abs(Number(a))>=1000000?b===0?parseFloat((Math.abs(Number(a))/1000000).toFixed(2)):parseFloat((Math.abs(Number(a))/1000000).toFixed(2))+" m":Math.abs(Number(a))>=1000?b===0?parseFloat((Math.abs(Number(a))/1000).toFixed(2)):parseFloat((Math.abs(Number(a))/1000).toFixed(2))+" k":Math.abs(Number(a))}function random(b,a){return Math.floor(Math.random()*(a-b+1))+b}function isCombat(){return window.location.href.indexOf("http://game.granbluefantasy.jp/#raid_multi/")>-1||window.location.href.indexOf("http://game.granbluefantasy.jp/#raid/")>-1}var simulateClick=function(f){try{var n=f.getBoundingClientRect(),d=n.top,o=n.left,k=random(n.bottom,n.top),j=random(n.right,n.left),c=(n.height+n.width)*0.1,m={bubbles:true,clientX:j,clientY:k},b=new MouseEvent("mouseover",{bubbles:true,clientX:o,clientY:d}),h=new MouseEvent("mousedown",m),a=new MouseEvent("mouseup",m),g=new MouseEvent("click",m);f.dispatchEvent(b);window.setTimeout(function(){f.dispatchEvent(h)},c);window.setTimeout(function(){f.dispatchEvent(a);f.dispatchEvent(g)},c*random(0.99,1.2))}catch(l){return}};function pCA(){if(!isCombat()){return null}var b=document.querySelector("div.btn-lock.lock1");var a=document.querySelector("div.btn-lock.lock0");!isNullOrUndefined(b)?simulateClick(b):null;!isNullOrUndefined(a)?simulateClick(a):null}function pResetBonus(){var a=document.querySelector("div.prt-bonus-reset-button.btn-bonus-reset.weapon");!isNullOrUndefined(a)?simulateClick(a):null}function pSpaceBar(d){var c=["div.btn-usual-ok","div.btn-usual-ok.btn-summon-use","div.btn-settle","div.btn-synthesis","div.btn-usual-text.exchange","div.btn-usual-text.buy","div.btn-evolution.active","div.btn-use-item","div.btn-follow-again","div.btn-usual-exchange","div.btn-move-division","div.btn-usual-close"];var b;var a=[];c.forEach(function(g,f){var e=document.querySelector(g);if(!isNullOrUndefined(e)){if(f===0){a.unshift(g)}else{a.push(g)}}});if(a.length>0){if(a[0]===c[0]&&!isNullOrUndefined(document.querySelector(a[0]))){b=document.querySelector(a[0]).className.includes("btn-usual-ok")?document.querySelector(a[0]):document.querySelectorAll(a[0])[1];console.log(b);console.log(document.querySelector(a[0]))}else{a.forEach(function(f,e){if(!isNullOrUndefined(document.querySelector(f))){b=document.querySelector(f)}else{if(f==="div.btn-evolution.active"){b=document.querySelector("#btn-evolution")}}})}}if(!isNullOrUndefined(b)){isNullOrUndefined(document.querySelector("div.onm-anim-mask"))?simulateClick(b):getComputedStyle(document.querySelector("div.onm-anim-mask")).getPropertyValue("display")==="none"?simulateClick(b):simulateClick(document.querySelector("div.onm-anim-mask"))}}function showSkillCD(){if(!isCombat()){return null}var b=document.querySelectorAll("[ability-id]");var c=[];for(i=0;i<=3;i++){var a={skills:[]};b.forEach(function(f,e){if(f.outerHTML===document.querySelector("div.btn-usual-ok.btn-ability-use").outerHTML){}else{if((f.outerHTML.includes("ability-character-num-"+(i+1))===true)){if(!isNullOrUndefined(f.getAttribute("ability-recast"))){a.skills.push(f.getAttribute("ability-recast"))}}}});c.push(a)}var d=[];document.querySelectorAll("div.prt-ability-state").forEach(function(f,e){if(e<=3){d.push(f)}});d.forEach(function(g,f){var e=0;document.querySelectorAll("div.prt-ability-state")[f].childNodes.forEach(function(h,k){if((k%2)===1){var j=c[f].skills[e];if(!isNullOrUndefined(j)){if(j==="0"){j=""}h.innerHTML='<p style="position: relative;color:black;font-weight:bold;font-size: 6px;text-align: center;top: -4px;text-shadow: 0 0 10px #ffffff, 0 0 10px #ffffff;">'+j+"</p>"}e++}})})}function showBossHP(){if(!isCombat()){return null}try{var b=stage.pJsnData.boss;var c=-1;document.querySelectorAll("div.prt-gauge-area")[0].childNodes.forEach(function(a,g){if(!isNullOrUndefined(a.className)&&a.classList.contains("prt-enemy-percent")){c++;var e=numberWithCommas(numberFormat(b.param[c].hp,1)+" / "+numberFormat(b.param[c].hpmax),1);var f=((b.param[c].hp/b.param[c].hpmax)*100).toFixed(1);var h=b.number;b.param.forEach(function(k,j){if(k.alive===0){h--}});if(h>1){a.childNodes[1].innerText=f+"%\n ("+e+")";a.childNodes[1].style.cssText="text-shadow: 0 0 1px #731400, 0 0 1px #731400, 0 0 1px #731400, 0 0 1px #731400, 0 0 2px #731400, 0 0 2px #731400, 0 0 2px #731400, 0 0 2px #731400; display: -webkit-box; margin: -34px 0 0 -20px; font-size:12px; width: 200px !important"}else{a.childNodes[1].innerText=f+"%	("+e+")";a.childNodes[1].style.cssText="text-shadow: 0 0 1px #731400, 0 0 1px #731400, 0 0 1px #731400, 0 0 1px #731400, 0 0 2px #731400, 0 0 2px #731400, 0 0 2px #731400, 0 0 2px #731400; display: -webkit-box; margin: -6px 0 0 70px; font-size:15px; width: 300px !important"}}})}catch(d){if(d instanceof ReferenceError){}}}var sSkill=[];var selectedCombatChara;document.addEventListener("click",function(a){if(isCombat()&&!isNullOrUndefined(a.target.parentNode)&&!isNullOrUndefined(a.target.parentNode.getAttribute("pos"))){selectedCombatChara=a.target.parentNode;setCharaSkill(selectedCombatChara.getAttribute("pos"))}});document.addEventListener("keydown",function(g){if(g.which===32){var f=false;document.querySelectorAll("textarea").forEach(function(h,e){if(isNullOrUndefined(h.getAttribute("disabled"))){f==true}});if(f){return true}else{g.preventDefault();g.stopPropagation()}}if(g.keyCode===32){pSpaceBar(g)}if(g.keyCode===67){pCA()}if(g.keyCode===82){pResetBonus()}if(g.key==="Escape"||g.key==="Esc"){var d=document.querySelectorAll("div.btn-command-back");if(d.length>0&&!isNullOrUndefined(d[0])){simulateClick(d[0])}}var b=[81,87,69,82];var c=[49,50,51,52];if(c.includes(g.keyCode)){if(!isCombat()){return null}var a=c.indexOf(g.keyCode);shortcutSelectChara(a)}if(b.includes(g.keyCode)){if(!isCombat()){return null}var a=b.indexOf(g.keyCode);shortcutSkill(a)}});function setCharaSkill(a){sSkill=[];document.querySelectorAll("div.prt-ability-list")[a].childNodes.forEach(function(c,b){if(!isNullOrUndefined(c.className)&&c.className.includes("btn-ability-")){sSkill.push(c)}})}function shortcutSelectChara(a){try{simulateClick(document.querySelectorAll("div.lis-character"+a+".btn-command-character")[0]);setCharaSkill(a)}catch(b){return null}}function shortcutSkill(a){try{if(sSkill[a].className.includes("btn-ability-available")){console.log(a);console.log(sSkill);simulateClick(sSkill[a])}}catch(b){return null}}var observer=new MutationObserver(function(a){try{showSkillCD();showBossHP()}catch(b){if(b instanceof ReferenceError){}}});var config={attributes:true,childList:true,characterData:true};var ready=function(){if(isCombat()){if(document.querySelectorAll("[ability-id]").length>0&&document.querySelectorAll("div.prt-gauge-area")[0].childNodes.length>0){document.querySelectorAll("[ability-id]").forEach(function(c,b){observer.observe(c,{attributes:true,childList:true,characterData:true})});document.querySelectorAll("[id^=enemy-hp]").forEach(function(c,b){observer.observe(c,{attributes:true,childList:true,characterData:true})});document.querySelectorAll("a").forEach(function(c,b){if(c.className.includes("enemy")){c.style.cssText="display: inline-block;cursor:pointer;"}});try{showSkillCD();showBossHP();return}catch(a){if(a instanceof ReferenceError){}}}}else{if(window.location.href==="http://game.granbluefantasy.jp/#item"&&document.querySelectorAll("div.lis-item.se").length>0){return}}window.requestAnimationFrame(ready)};window.requestAnimationFrame(ready);
