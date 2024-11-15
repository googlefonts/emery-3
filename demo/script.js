weight.oninput = e =>
  demo.style.setProperty('--weight', e.target.value);
extenders.oninput = e =>
  demo.style.setProperty('--extenders', e.target.value);
sharpness.oninput = e =>
  demo.style.setProperty('--sharpness', e.target.value);
fontsize.oninput = e =>
  demo.style.setProperty('--fontsize', e.target.value + "pt");
