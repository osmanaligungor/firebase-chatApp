// Kullanıcıya özel renk üreten fonksiyon
function generateColor(id, name) {
  // id ve name birleştirilerek hash değeri oluştur
  const input = `${id}-${name}`;
  let hash = 0;

  // Basit bir hash fonksiyonu
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // 32 bit'e indirgenmiş bir hash
  }

  // Hash değerinden renk oluştur (RGB formatında)
  let r = (hash >> 16) & 0xff;
  let g = (hash >> 8) & 0xff;
  let b = hash & 0xff;

  // Rengi hex formatına dönüştür
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default generateColor;
