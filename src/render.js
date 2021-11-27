const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
}

function renderTemplate (container, component, place) {
  container.insertAdjacentHTML(place, component);
}

export {RenderPosition, renderTemplate};
