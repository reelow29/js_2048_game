!function(){var t,e={};function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function a(t,e){if(t){if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,e)}}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=new((t=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.score=0,this.status="idle",this.initialState=t,this.state=this.copyState(this.initialState)}return t=[{key:"copyState",value:function(t){return t.map(function(t){return n(t)})}},{key:"addRandomTile",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)0===this.state[e][r]&&t.push([e,r]);if(t.length>0){var n,s=Math.floor(Math.random()*t.length),i=function(t){if(Array.isArray(t))return t}(n=t[s])||function(t,e){var r,a,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var s=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(s.push(r.value),2!==s.length);i=!0);}catch(t){o=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return s}}(n,2)||a(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=i[0],u=i[1];this.state[o][u]=.9>Math.random()?2:4}}},{key:"moveLeft",value:function(){"playing"===this.status&&this.move("left")&&(this.addRandomTile(),this.checkGameState())}},{key:"moveRight",value:function(){"playing"===this.status&&this.move("right")&&(this.addRandomTile(),this.checkGameState())}},{key:"moveUp",value:function(){"playing"===this.status&&this.move("up")&&(this.addRandomTile(),this.checkGameState())}},{key:"moveDown",value:function(){"playing"===this.status&&this.move("down")&&(this.addRandomTile(),this.checkGameState())}},{key:"move",value:function(t){var e=this,r=this.copyState(this.state),a=function(t){for(var r=t.filter(function(t){return 0!==t}),a=0;a<r.length-1;a++)r[a]===r[a+1]&&(r[a]*=2,r[a+1]=0,e.score+=r[a]);return r.filter(function(t){return 0!==t})},s=function(t){for(var e=a(t);e.length<4;)e.push(0);return e},i=function(t){for(var e=a(n(t).reverse());e.length<4;)e.push(0);return e.reverse()},o=function(t){return t.map(function(t){return s(t)})},u=function(t){return t.map(function(t){return i(t)})};switch(t){case"left":this.state=o(this.state);break;case"right":this.state=u(this.state);break;case"up":this.state=this.transposeState(o(this.transposeState(this.state)));break;case"down":this.state=this.transposeState(u(this.transposeState(this.state)))}return!this.areStatesEqual(this.state,r)}},{key:"checkGameState",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(2048===this.state[t][e]){this.status="win";return}this.hasEmptyCells()||this.canCombine()||(this.status="lose")}},{key:"hasEmptyCells",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.state[t][e])return!0;return!1}},{key:"canCombine",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++){var r=this.state[t][e];if(e<3&&r===this.state[t][e+1]||t<3&&r===this.state[t+1][e])return!0}return!1}},{key:"transposeState",value:function(t){for(var e=[],r=0;r<4;r++){e[r]=[];for(var a=0;a<4;a++)e[r].push(t[a][r])}return e}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){"idle"===this.status&&(this.status="playing",this.addRandomTile(),this.addRandomTile())}},{key:"restart",value:function(){this.state=this.copyState(this.initialState),this.score=0,this.status="idle"}},{key:"areStatesEqual",value:function(t,e){for(var r=0;r<4;r++)for(var a=0;a<4;a++)if(t[r][a]!==e[r][a])return!1;return!0}}],function(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(e.prototype,t),e}())&&t.__esModule?t.default:t),i=document.querySelectorAll(".field-cell"),o=document.querySelector(".button.start");function u(){for(var t=0,e=s.getState(),r=0;r<4;r++)for(var a=0;a<4;a++){var n=i[t];n.className="field-cell",e[r][a]?(n.textContent=e[r][a],n.classList.add("field-cell--".concat(e[r][a]))):n.textContent="",t++}document.querySelector(".game-score").textContent=s.getScore();var o=s.getStatus();"win"===o?document.querySelector(".message-win").classList.remove("hidden"):"lose"===o&&document.querySelector(".message-lose").classList.remove("hidden")}document.addEventListener("keydown",function(t){if("playing"===s.getStatus()){switch(t.key){case"ArrowLeft":s.moveLeft();break;case"ArrowRight":s.moveRight();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}u()}}),o.addEventListener("click",function(){"button restart"===o.className&&s.restart(),s.start(),u(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),o.textContent="Restart",o.className="button restart"})}();
//# sourceMappingURL=index.136d88bb.js.map
