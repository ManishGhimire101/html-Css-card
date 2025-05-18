function createCard(
  name,
  descreption,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  amount
) {
  let html = `<div class="container">
      <div class="sub_card">
        <img class="card_img" src="images/image.png" alt="card image" />
        <h2>${name}</h2>
        <p class="paragraph">${descreption}</p>
        <ul>
          <li>${feature1}</li>
          <li>${feature2}</li>
          <li>${feature3}</li>
          <li>${feature4}</li>
          <li>${feature5}</li>
        </ul>
        <button class="btn">${amount}Buy Now</button>
      </div>
    </div>`;
  document.querySelector(".container").innerHTML += html;
}
createCard(
  "Premium Plan",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "$10"
);
createCard(
  "Normal Plan",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "$10"
);

createCard(
  "Basic Plan",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "free of cost",
  "$10"
);


