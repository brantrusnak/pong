!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/main.ts")}({"./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */function(e,t){let n,i,r=0,o=10,l=100,u={X:0,Y:0,radius:5};function f(e){e.clientY-l/2>0&&e.clientY+l/2<n.height&&(r=e.clientY)}function a(){i.clearRect(0,0,n.width,n.height),c(0,r),c(n.width-o,n.height/2),i.beginPath(),i.fillStyle="red",i.globalAlpha=.6,i.arc(u.X,u.Y,u.radius,0,2*Math.PI,!0),i.fill(),i.closePath(),i.fillStyle="limegreen",i.fillText((0).toString(),.25*n.width,300),i.fillText((0).toString(),.75*n.width,300),requestAnimationFrame(a)}function c(e,t){i.beginPath(),i.fillStyle="#fff",i.fillRect(e,t-l/2,o,l),i.stroke(),i.closePath()}window.onload=()=>{n=document.getElementById("game"),n.width=window.innerWidth-10,n.height=window.innerHeight-10,n.onmousemove=f,r=n.height/2,u.X=n.width/2,u.Y=n.height/2,i=n.getContext("2d"),i.globalAlpha=1,a()}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYW52YXMiLCJjb250ZXh0IiwicGxheWVyUGFkZGxlWSIsInBhZGRsZURpbWVuc2lvbnMiLCJiYWxsIiwiWCIsIlkiLCJyYWRpdXMiLCJ1cGRhdGVNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJjbGllbnRZIiwiaGVpZ2h0IiwiZHJhdyIsImNsZWFyUmVjdCIsIndpZHRoIiwiZHJhd1BhZGRsZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImdsb2JhbEFscGhhIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImZpbGxUZXh0IiwidG9TdHJpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmaWxsUmVjdCIsInN0cm9rZSIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvbm1vdXNlbW92ZSIsImdldENvbnRleHQiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0Ys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QUFZLE9BQ3BCaEIsRUFBUTBCLFNBQVN0QixFQUFHQyxFQUFLSCxFQUEwQixFQUFJQSxFQUF3QkEsR0FDL0VGLEVBQVEyQixTQUNSM0IsRUFBUXNCLFlBcENaTSxPQUFPQyxPQUFTLEtBQ1o5QixFQUFTK0IsU0FBU0MsZUFBZSxRQUNqQ2hDLEVBQU9jLE1BQVFlLE9BQU9JLFdBQWEsR0FDbkNqQyxFQUFPVyxPQUFTa0IsT0FBT0ssWUFBYyxHQUNyQ2xDLEVBQU9tQyxZQUFjM0IsRUFDckJOLEVBQWdCRixFQUFPVyxPQUFTLEVBQ2hDUCxFQUFLQyxFQUFJTCxFQUFPYyxNQUFRLEVBQ3hCVixFQUFLRSxFQUFJTixFQUFPVyxPQUFTLEVBQ3pCVixFQUFVRCxFQUFPb0MsV0FBVyxNQUM1Qm5DLEVBQVFpQixZQUFjLEVBQ3RCTiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImxldCBjYW52YXM7XG5sZXQgY29udGV4dDtcbmxldCBGUFMgPSA2MDtcbmxldCBwbGF5ZXJQYWRkbGVZID0gMDtcbmxldCBwYWRkbGVEaW1lbnNpb25zID0ge1xuICAgIHdpZHRoOiAxMCxcbiAgICBoZWlnaHQ6IDEwMFxufTtcbmxldCBwbGF5ZXJzY29yZSA9IDA7XG5sZXQgY29tcHV0ZXJzY29yZSA9IDA7XG5sZXQgYmFsbCA9IHtcbiAgICBYOiAwLFxuICAgIFk6IDAsXG4gICAgcmFkaXVzOiA1XG59O1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTA7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwO1xuICAgIGNhbnZhcy5vbm1vdXNlbW92ZSA9IHVwZGF0ZU1vdXNlUG9zaXRpb247XG4gICAgcGxheWVyUGFkZGxlWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIGJhbGwuWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgYmFsbC5ZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGRyYXcoKTtcbn07XG5mdW5jdGlvbiB1cGRhdGVNb3VzZVBvc2l0aW9uKGV2ZW50KSB7XG4gICAgLypcbiAgICAgICAgQ2hlY2sgaWYgdGhlIHBsYXllcidzIGN1cnJlbnQgbW91c2UgcG9zaXRpb24gKyBoYWxmIHRoZSBoZWlnaHQgb2YgdGhlIHBhZGRsZSBpcyBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIGNhbnZhcyBoZWlnaHQuXG4gICAgICAgIFByZXZlbnRzIHBhZGRsZSBmcm9tIG1vdmluZyBvdXQgb2Ygc2NyZWVuLlxuICAgICovXG4gICAgaWYgKGV2ZW50LmNsaWVudFkgLSAocGFkZGxlRGltZW5zaW9ucy5oZWlnaHQgLyAyKSA+IDAgJiYgZXZlbnQuY2xpZW50WSArIChwYWRkbGVEaW1lbnNpb25zLmhlaWdodCAvIDIpIDwgY2FudmFzLmhlaWdodCkge1xuICAgICAgICBwbGF5ZXJQYWRkbGVZID0gZXZlbnQuY2xpZW50WTtcbiAgICB9XG59XG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgLy8gUGxheWVyIFBhZGRsZVxuICAgIGRyYXdQYWRkbGUoMCwgcGxheWVyUGFkZGxlWSk7XG4gICAgLy8gQ29tcHV0ZXIgUGFkZGxlXG4gICAgZHJhd1BhZGRsZShjYW52YXMud2lkdGggLSBwYWRkbGVEaW1lbnNpb25zLndpZHRoLCBjYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgZHJhd0JhbGwoKTtcbiAgICBkcmF3U2NvcmUoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG5mdW5jdGlvbiBkcmF3UGFkZGxlKFgsIFkpIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoWCwgWSAtIChwYWRkbGVEaW1lbnNpb25zLmhlaWdodCAvIDIpLCBwYWRkbGVEaW1lbnNpb25zLndpZHRoLCBwYWRkbGVEaW1lbnNpb25zLmhlaWdodCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuZnVuY3Rpb24gZHJhd0JhbGwoKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjY7XG4gICAgY29udGV4dC5hcmMoYmFsbC5YLCBiYWxsLlksIGJhbGwucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cbmZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcbiAgICAvKlxuICAgICAgICBSZW5kZXIgc2NvcmVib2FyZCwgcGxheWVyIHNjb3JlIGlzIDI1JSAob2YgY2FudmFzIHdpZHRoKSBvZmZzZXQsIHNlY29uZCBpcyA3NSUuXG4gICAgKi9cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdsaW1lZ3JlZW4nO1xuICAgIGNvbnRleHQuZmlsbFRleHQocGxheWVyc2NvcmUudG9TdHJpbmcoKSwgY2FudmFzLndpZHRoICogMC4yNSwgMzAwKTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KGNvbXB1dGVyc2NvcmUudG9TdHJpbmcoKSwgY2FudmFzLndpZHRoICogMC43NSwgMzAwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=