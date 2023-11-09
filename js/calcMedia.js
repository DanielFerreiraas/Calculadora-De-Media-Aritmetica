const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const primeiraNota = Number(document.getElementById('primeiraNota').value);
    const segundaNota = Number(document.getElementById('segundaNota').value);
    const terceiraNota = Number(document.getElementById('terceiraNota').value);
    const quartaNota = Number(document.getElementById('quartaNota').value);

    const media = (((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(media >= 6) {
        description = "Parabéns você foi aprovado!!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if(media < 6){
        description = "Infelizmente você foi reprovado!!";
    }
    value.textContent = media.replace('.', ',');
    document.getElementById('description').textContent = description

})