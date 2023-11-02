import standings from './standings.json'
document.addEventListener('DOMContentLoaded', ()=>{
        standings.students.forEach((x)=>{
            x.avatarUrl = `https://robohash.org/gd_leaderboard_${x.id}`
            x.totalScore = x.scores.reduce((a, c) => {
                return a + c
            },0)
        })
    standings.students = standings.students
        .sort((a, b) => b.totalScore - a.totalScore)

    var app = new Vue({
        el: '#studentsList',
        data: {
            students: standings.students
        }
    })

})


