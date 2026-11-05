# Protocolo Corpo Novo: site

Landing page de venda do Protocolo Corpo Novo, curso em videoaulas do fisioterapeuta Leonardo Feltrin. Site estático publicado na Hostinger pelo Git: um push na branch `main` coloca a alteração no ar.

Para criar ou editar páginas, use o agente `criador-de-sites` (`.claude/agents/criador-de-sites.md`), que traz as regras de layout, conteúdo e publicação.

## Arquivos

- `index.html`: a página inteira (HTML, CSS e JS no mesmo arquivo).
- `img/`: fotos do site, com caminho relativo.
- `videos/`: depoimentos em MP4 (H.264 720x1280, ~5–10 MB cada); a capa de cada um fica em `img/capa-*.webp`.
- `.htaccess`: cache, compressão e bloqueio de arquivos internos.
- `robots.txt`: libera indexação.
- `package.json` e `build.js`: só para o deploy Node.js da Hostinger; o build copia os arquivos públicos para `dist/`. Se criar um arquivo público novo na raiz, inclua-o na lista `PUBLICOS` do `build.js`.

## Oferta e pacotes

- Bronze R$ 34,90: módulo Emagrecimento, Ganho de Massa e Alta Performance (iniciante, intermediário, avançado).
- Prata R$ 67,99: tudo do Bronze + Método Barriga Negativa (LPF).
- Ouro R$ 97,90 no lançamento (normal R$ 149,90): tudo do Prata + módulo Alívio de Dores + bônus Comunidade exclusiva. É o pacote que a página empurra.

## Dados da empresa

- WhatsApp: +55 54 99616-0904, botão fixo (`#wa`) com mensagem pronta; balão "Tem alguma dúvida?" aparece após 8 s ou 35% de rolagem, some em 10 s e volta aos 5 min.
- CNPJ 49.693.570/0001-01 (sem razão social na página). Contato: fisioterapiaepilatesvida@gmail.com.
- Pagamento: Pix, cartão em até 12x, Apple Pay, Google Pay, PicPay, dois cartões ou cartão + Pix. Acesso imediato após a confirmação e vitalício.

## Pendências conhecidas

- Links de checkout: `CHECKOUT_BRONZE`, `CHECKOUT_PRATA`. O Ouro já usa a Cakto: https://pay.cakto.com.br/4qeu6do_1283008 (12x de R$ 10,20 ou R$ 97,90 à vista).
- Antes/depois: 4 pares em `img/antes-N.webp` e `img/depois-N.webp`, sem nomes (12, 52, 78 e 30 semanas). Os vídeos de depoimento (Cladis, Marcilene, Elias) já estão no site. As fotos do Leonardo já estão em `img/leonardo-hero.webp` e `img/leonardo-perfil.webp`.
- Data de fim da oferta: `FIM_OFERTA` no script do final do `index.html`.
