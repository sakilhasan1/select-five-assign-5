document.getElementById('btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player-value');
    const perPlayerValueString = perPlayer.value;
    const perPlayerValue = parseInt(perPlayerValueString);

    const totalValue = perPlayerValue * 5



    const totalExpence = document.getElementById('total-expence');
    const expenceString = totalExpence.innerText;
    const expence = parseInt(expenceString);

    const setTotalValue = totalExpence.innerText = totalValue;

})