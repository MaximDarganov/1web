window.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
});

function calculate() {
  let firstProduct = Number(document.getElementById('firstProduct').value);
  let firstLot = Number(document.getElementById('firstLot').value);
  let secondProduct = Number(document.getElementById('secondProduct').value);
  let secondLot = Number(document.getElementById('secondLot').value);

  let re = new RegExp(/^[0-9]+$/i);
  if (
    !(
      re.test(firstProduct) &&
      re.test(firstLot) &&
      re.test(secondProduct) &&
      re.test(secondLot)
    )
  ) {
    alert('Нужно писать число!');
  } else if (firstProduct == '') {
    alert('вы не указали цену 1 товару');
  } else if (firstLot == '') {
    alert('вы не указали кол-во 1 товара');
  } else if (secondProduct == '') {
    alert('вы не указали цену 2 товару');
  } else if (secondLot == '') {
    alert('вы не указали кол-во 2 товара');
  } else {
    const cost = firstProduct * firstLot + secondProduct * secondLot;
    document.getElementById('cost').innerHTML =
      'Стоимость равна: ' + cost + ' Руб.';
  }
}
