
function generateQR(itemId) {
  const qrContainer = document.getElementById('qr');
  qrContainer.innerHTML = '';
  const qr = new QRCode(qrContainer, {
    text: window.location.origin + '/museum-ar-gallery/item.html?id=' + itemId,
    width: 128,
    height: 128
  });
}
