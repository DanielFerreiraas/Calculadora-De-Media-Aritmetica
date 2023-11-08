const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const primeiraNota = Number(document.getElementById('primeiraNota').value);
    const segundaNota = Number(document.getElementById('segundaNota').value);

    const media = (((primeiraNota + segundaNota) / 2)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(media >= 7) {
        description = "Parabéns você foi aprovado!!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if(media < 7){
        description = "Infelizmente você foi reprovado!!";
    }
    value.textContent = media.replace('.', ',');
    document.getElementById('description').textContent = description

})