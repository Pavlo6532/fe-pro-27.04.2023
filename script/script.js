const buyButton = document.getElementById("buy-button");
const orderContainer = document.getElementById("order-container");

buyButton.addEventListener("click", function () {
  buyButton.classList.add("hidden");

  const orderFormContainer = document.createElement("div");
  orderFormContainer.classList.add("order-form-container");

  const orderFormHeading = document.createElement("h2");
  orderFormHeading.textContent = "Форма оформлення замовлення";
  orderFormContainer.appendChild(orderFormHeading);

  const orderForm = document.createElement("form");
  orderForm.classList.add("order-form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "ПІБ покупця:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.required = true;
  orderForm.appendChild(nameLabel);
  orderForm.appendChild(nameInput);

  const cityLabel = document.createElement("label");
  cityLabel.textContent = "Місто:";
  const citySelect = document.createElement("select");
  citySelect.id = "city";
  citySelect.required = true;
  const cityOption1 = document.createElement("option");
  cityOption1.value = "Київ";
  cityOption1.textContent = "Київ";
  const cityOption2 = document.createElement("option");
  cityOption2.value = "Харків";
  cityOption2.textContent = "Харків";
  const cityOption3 = document.createElement("option");
  cityOption3.value = "Одеса";
  cityOption3.textContent = "Одеса";

  citySelect.appendChild(cityOption1);
  citySelect.appendChild(cityOption2);
  citySelect.appendChild(cityOption3);
  orderForm.appendChild(cityLabel);
  orderForm.appendChild(citySelect);

  const postOfficeLabel = document.createElement("label");
  postOfficeLabel.textContent = "Склад Нової пошти:";
  const postOfficeInput = document.createElement("input");
  postOfficeInput.type = "text";
  postOfficeInput.id = "post-office";
  postOfficeInput.required = true;
  orderForm.appendChild(postOfficeLabel);
  orderForm.appendChild(postOfficeInput);

  const paymentMethodLabel = document.createElement("label");
  paymentMethodLabel.textContent = "Спосіб оплати:";
  const paymentMethodSelect = document.createElement("select");
  paymentMethodSelect.id = "payment-method";
  paymentMethodSelect.required = true;
  const paymentMethodOption1 = document.createElement("option");
  paymentMethodOption1.value = "cash-on-delivery";
  paymentMethodOption1.textContent = "Післяоплата";
  const paymentMethodOption2 = document.createElement("option");
  paymentMethodOption2.value = "credit-card";
  paymentMethodOption2.textContent = "Оплата банківською карткою";
  paymentMethodSelect.appendChild(paymentMethodOption1);
  paymentMethodSelect.appendChild(paymentMethodOption2);
  orderForm.appendChild(paymentMethodLabel);
  orderForm.appendChild(paymentMethodSelect);

  const quantityLabel = document.createElement("label");
  quantityLabel.textContent = "Кількість продукції:";
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.id = "quantity";
  quantityInput.required = true;
  orderForm.appendChild(quantityLabel);
  orderForm.appendChild(quantityInput);

  const commentLabel = document.createElement("label");
  commentLabel.textContent = "Коментар до замовлення:";
  const commentTextarea = document.createElement("textarea");
  commentTextarea.id = "comment";
  orderForm.appendChild(commentLabel);
  orderForm.appendChild(commentTextarea);

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Підтвердити замовлення";
  orderForm.appendChild(submitButton);

  orderFormContainer.appendChild(orderForm);

  const orderSummaryContainer = document.createElement("div");
  orderSummaryContainer.id = "order-summary-container";
  orderFormContainer.appendChild(orderSummaryContainer);

  orderFormContainer.appendChild(orderForm);
  orderContainer.appendChild(orderFormContainer);
});

document.addEventListener("submit", function (event) {
  const form = event.target;
  if (form.classList.contains("order-form")) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const postOffice = document.getElementById("post-office").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;

    if (
      name === "" ||
      city === "" ||
      postOffice === "" ||
      paymentMethod === "" ||
      quantity === ""
    ) {
      alert("Будь ласка, заповніть усі обов'язкові поля.");
    } else {
      const orderSummaryContainer = document.createElement("div");
      orderSummaryContainer.classList.add("order-summary-container");

      const orderSummary = `
        ПІБ покупця: ${name}
        Місто: ${city}
        Склад Нової пошти: ${postOffice}
        Спосіб оплати: ${paymentMethod}
        Кількість продукції: ${quantity}
        Коментар: ${comment}
      `;

      orderSummaryContainer.textContent = orderSummary;

      while (orderContainer.firstChild) {
        orderContainer.firstChild.remove();
      }

      orderContainer.appendChild(orderSummaryContainer);
    }
  }
});
