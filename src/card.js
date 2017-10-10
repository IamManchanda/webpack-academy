const createAndAppendCard = (header, body) => {
  const cardFragment = document.createDocumentFragment();
  const cardElement = document.createElement('div');
  const cardHeader = `<h2 class="card-header">${header}</h2>`;
  const cardBody = `<p class="card-body">${body}</p>`;

  cardElement.innerHTML = `
    <div class="card">
      ${cardHeader}
      ${cardBody}
    </div>
  `;

  cardFragment.appendChild(cardElement);
  document.body.appendChild(cardFragment);
};

export default createAndAppendCard;