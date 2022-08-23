function footballPlayer(event) {

    const playerName = document.getElementById(event);
    const playerNames = playerName.innerText

    const addName = document.getElementById('add-name')

    const li = document.createElement('li');
    li.innerText = playerNames;
    addName.appendChild(li);


}





document.getElementById('btn-foshua').addEventListener('click', function () {
    footballPlayer('foshua')

})
document.getElementById('btn-harry').addEventListener('click', function () {
    footballPlayer('harry')

})
document.getElementById('btn-messi').addEventListener('click', function () {
    footballPlayer('messi')
})
document.getElementById('btn-ronaldo').addEventListener('click', function () {
    footballPlayer('ronaldo')
})
document.getElementById('btn-trent').addEventListener('click', function () {
    footballPlayer('trent')
})
document.getElementById('btn-salah').addEventListener('click', function () {
    footballPlayer('salah')
})