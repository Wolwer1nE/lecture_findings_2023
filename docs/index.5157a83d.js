function e(e){return e&&e.__esModule?e.default:e}var s={};s=JSON.parse('{"students":[{"name":"Михаил Л.","id":1,"scores":[18]},{"name":"Сергей Г.","id":2,"scores":[9]},{"name":"Егор","id":3,"scores":[9]},{"name":"Сергей С.","id":4,"scores":[9]},{"name":"Анастасия","id":5,"scores":[10]},{"name":"Иван","id":6,"scores":[16]},{"name":"Денис","id":7,"scores":[11]},{"name":"Луспарон","id":8,"scores":[6]},{"name":"Андрей","id":9,"scores":[11]},{"name":"Ли","id":10,"scores":[12]}]}'),document.addEventListener("DOMContentLoaded",()=>{/*@__PURE__*/e(s).students.forEach(e=>{e.avatarUrl=`https://robohash.org/gd_leaderboard_${e.id}`,e.totalScore=e.scores.reduce((e,s)=>e+s,0)}),/*@__PURE__*/e(s).students=/*@__PURE__*/e(s).students.sort((e,s)=>s.totalScore-e.totalScore),new Vue({el:"#studentsList",data:{students:/*@__PURE__*/e(s).students}})});//# sourceMappingURL=index.5157a83d.js.map

//# sourceMappingURL=index.5157a83d.js.map
