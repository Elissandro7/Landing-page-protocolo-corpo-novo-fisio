# Protocolo Corpo Novo

Landing page do Protocolo Corpo Novo, publicada na Hostinger a partir deste repositório. Cada push na branch `main` atualiza o site.

## Ligar à Hostinger (uma vez)

1. No hPanel, abra **Sites > Gerenciar > Arquivos > Gerenciador de Arquivos** e deixe a pasta `public_html` vazia (apague o `default.php`). A Hostinger só implanta pelo Git em pasta vazia.
2. Abra **Avançado > GIT** e preencha:
   - Repositório: `https://github.com/Elissandro7/Landing-page-protocolo-corpo-novo-fisio.git`
   - Branch: `main`
   - Diretório: em branco (publica em `public_html`)
3. Clique em **Criar** e depois em **Implantar**.
4. Em **Implantação automática**, copie a URL do webhook. No GitHub: **Settings > Webhooks > Add webhook**, cole em *Payload URL*, *Content type* `application/json`, evento *Just the push event*, e salve.
5. Em **Segurança > SSL**, confirme que o certificado gratuito está ativo e ligue **Forçar HTTPS**.

## Alternativa: implantar como app Node.js

Se a Hostinger importar o repositório pelo fluxo de aplicativo Node.js (o que pede `package.json`), use:

- Comando de instalação: `npm install`
- Comando de build: `npm run build`
- Diretório de saída: `dist`

O `build.js` apenas copia `index.html`, `.htaccess`, `robots.txt` e `img/` para `dist/`; não há dependências.

## Editar

Use o agente `.claude/agents/criador-de-sites.md` e veja as pendências no `CLAUDE.md`.
