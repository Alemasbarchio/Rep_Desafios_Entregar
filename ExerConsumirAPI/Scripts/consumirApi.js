const btnListar = document.getElementById("btnJogar");
const cards_Sc = document.getElementById("cards-sc");
const viewPoints = document.getElementById("view-points")

let deckId;
let somaTotalCards = 0;
const fetchAPi = (value) => {



  fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

    .then((res) => res.json())
    .then((data) => {
      deckId = (data.deck_id);
      console.log(deckId);

    });
}

btnListar.onclick = () => {
  const cardUrl = fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json())
    .then((data) => {
      const cardDetails = (data.cards[0]);
      const imgElemento = document.createElement("img");
      imgElemento.src = cardDetails.image;
      cards_Sc.appendChild(imgElemento);
      imgElemento.image = + cardDetails.image;
      console.log(imgElemento);

      if (cardDetails.value === "KING" || cardDetails.value === "QUEEN" || cardDetails.value === "JACK") {
        somaTotalCards += 10;

      }
      else {
        somaTotalCards += parseInt(cardDetails.value);

      }
      viewPoints.textContent = somaTotalCards;

      if (somaTotalCards == 21) {
        viewPoints = somaTotalCards + "Você ganhou"

      }

      if (somaTotalCards > 21) {

        viewPoints.textContent = somaTotalCards + " Você Perdeu"
        btnListar.style.display = "none";

      }

    })


}
fetchAPi();


