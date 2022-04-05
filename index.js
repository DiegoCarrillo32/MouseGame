
const GOAL = 10;
let listOfEnemy = [];
let totalEnemyKilled = 0;
// #follow {
//     border-radius: 50%;
//     background-color: blue;
//     width: 100px;
//     height: 100px;
//     position: absolute;
    
// }
document.getElementById("follow").style.borderRadius = '50%'
document.getElementById("follow").style.backgroundColor = 'blue'
document.getElementById("follow").style.width = '100px'
document.getElementById("follow").style.height = '100px'
document.getElementById("follow").style.position = 'absolute'



const mouseMove = ({ screenX, screenY }) => {

    document.getElementById("follow").style.top = `${screenY - 120}px`
    document.getElementById("follow").style.left = `${screenX - 50}px`

}

const mouseClick = ({ screenX, screenY }) => {

    listOfEnemy.forEach(({ yPos, xPos }, index) => {

        if (screenX < xPos + 100 && screenX > xPos - 100 && screenY < yPos + 100 && screenY > yPos - 100) {

            listOfEnemy.splice(index, 1)
            totalEnemyKilled++;
            document.getElementById(`enemy${yPos}`).remove()
            document.getElementById("ScoreCount").innerHTML = "Your score is: " + totalEnemyKilled + " Goal: 10"

        }
        if(totalEnemyKilled == GOAL){
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('click', mouseClick)
            document.getElementById("root").innerHTML = "<h1>GANASTE, RECARGA PARA JUGAR OTRA VEZ</h1>"
        }
    })
}
document.addEventListener('mousemove', mouseMove);
document.addEventListener('click', mouseClick)

setInterval(() => {
    if(totalEnemyKilled == GOAL) return;
    const yPos = Math.floor(Math.random() * (1000 - 50) + 50) - 120
    const xPos = Math.floor(Math.random() * (1000 - 50) + 50) - 50
    listOfEnemy.push({
        yPos, xPos
    })
    document.getElementById("root").innerHTML += `<div id='enemy${yPos}' style='width: 50px; height: 50px; position: absolute; display: flex; align-items: center; justify-content: center; background-color: red;  top:${yPos}px; left:${xPos}px; border-radius: 50%;' > >:) </div>`
}, 5000)


