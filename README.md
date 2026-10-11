# Telas Club – Tema Jellyfin

Tema para Jellyfin **10.11.x** com a paleta do `jellyfin-assinaturas` (azul `#00a4dc`, roxo `#aa5cc3`, fundo `#0f1524`).

## Deploy no jsDelivr

1. Crie um repositório público no GitHub (ex.: `SEU_USUARIO/jellyfin-theme`) e envie esta pasta:

   ```powershell
   cd jellyfin-theme
   git init
   git add .
   git commit -m "Tema Telas Club"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/jellyfin-theme.git
   git push -u origin main
   ```

2. Crie uma tag de versão (recomendado, o `@main` fica em cache por até 12h):

   ```powershell
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. A URL do jsDelivr fica:

   ```
   https://cdn.jsdelivr.net/gh/SEU_USUARIO/jellyfin-theme@v1.0.0/theme.css
   ```

   Para forçar atualização do cache: `https://purge.jsdelivr.net/gh/SEU_USUARIO/jellyfin-theme@main/theme.css`

## Instalação no Jellyfin

Painel → **Geral** → **CSS personalizado** e cole:

```css
@import url("https://cdn.jsdelivr.net/gh/SEU_USUARIO/jellyfin-theme@v1.0.0/theme.css");
```

Salve e recarregue o navegador (Ctrl+F5).

## Personalização

Todas as cores ficam nas variáveis `--tc-*` no topo de [theme.css](./theme.css).

## Validação

```powershell
npm run check
```
