document.getElementById('Calculate-total').addEventListener('click', function () {

    const manegerField = document.getElementById('maneger-field');
    const manegerFieldString = manegerField.value;
    const manegerFieldExpence = parseInt(manegerFieldString);

    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const coachFieldExpence = parseInt(coachFieldString);

    const manCoAndTotal = document.getElementById('sum');
    const manCoAndValueString = manCoAndTotal.innerText;
    const manCoAndValue = parseInt(manCoAndValueString);


    const perPlayer = document.getElementById('per-player-value');
    const perPlayerValueString = perPlayer.value;
    const perPlayerValue = parseInt(perPlayerValueString);

    const totalValue = perPlayerValue * 5



    const totalExpence = document.getElementById('total-expence');
    const expenceString = totalExpence.innerText;
    const expence = parseInt(expenceString);

    const setTotalValue = totalExpence.innerText = totalValue;
    // totalValue............


    const total = manegerFieldExpence + coachFieldExpence + setTotalValue;
    manCoAndTotal.innerText = total;



})