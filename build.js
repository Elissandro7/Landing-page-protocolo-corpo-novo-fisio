// Copia os arquivos públicos do site para dist/ (usado pelo deploy Node.js da Hostinger).
// O site não tem build de verdade: o que está aqui vai ao ar como está.
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'dist');
const PUBLICOS = ['index.html', '.htaccess', 'robots.txt', 'img', 'videos'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const item of PUBLICOS) {
  const de = path.join(__dirname, item);
  if (fs.existsSync(de)) fs.cpSync(de, path.join(OUT, item), { recursive: true });
}
console.log('Site copiado para dist/:', fs.readdirSync(OUT).join(', '));
