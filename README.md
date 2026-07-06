# Landing Page Kaspersky

Landing page estatica para campanha de conscientizacao via QR Code.

- `index.html`: entrada principal usada pelo QR Code, com a tela de confirmação antes do alerta.
- `landing.html`: landing final independente, mantida para compatibilidade com URLs antigas.

## Como alterar rapido

- Destino do botao "Comprar agora": edite o link `https://kas.pr/h1my` em `index.html` e `landing.html`.
- Audio do alerta: substitua `assets/Audio ITALO LP v2.MP3`.
- Fonte local: os arquivos estao em `fonts/` e sao carregados via `@font-face` em `styles.css`.
- URL "hackeada" do QR Code: configure no provedor de hospedagem/dominio apontando para `index.html`.
- Som de alerta: fica em `script.js`, usando o arquivo de audio local. Navegadores podem bloquear som automatico antes de qualquer interacao.
- O clique na confirmacao do `index.html` inicia o audio e revela a landing no mesmo documento para preservar a permissao de reproducao no iOS e Android.

## Como abrir

Abra `index.html` no navegador para testar. Nao precisa de servidor local.
