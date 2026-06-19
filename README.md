# Landing Page Kaspersky

Fluxo estatico para campanha de conscientizacao via QR Code.

- `index.html`: portal Wi-Fi inicial.
- `landing.html`: tela de alerta "Voce quase foi hackeado".

## Como alterar rapido

- Destino do botao do portal Wi-Fi: edite `href="landing.html"` em `index.html`.
- Audio do alerta: substitua `assets/Audio ITALO LP v2.MP3`.
- Fonte local: os arquivos estao em `fonts/` e sao carregados via `@font-face` em `styles.css`.
- URL "hackeada" do QR Code: configure no provedor de hospedagem/dominio apontando para `index.html`.
- Som de alerta: fica em `script.js`, usando o arquivo de audio local. Navegadores podem bloquear som automatico antes de qualquer interacao; nesse caso aparece o botao `Ativar alerta`.

## Como abrir

Abra `index.html` no navegador para testar o fluxo completo. Nao precisa de servidor para testar localmente.
