# ELO — como abrir no VS Code e publicar na Vercel

## 1. Abrir no VS Code
1. Instale o **Node.js** (versão LTS) em https://nodejs.org, se ainda não tiver.
2. Abra o VS Code → **Arquivo → Abrir Pasta…** → escolha a pasta `codigo-fonte`.
3. Abra o terminal do VS Code (**Terminal → Novo Terminal**) e rode:

```bash
npm install
npm run dev
```

4. Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para testar a versão final, como ela vai ficar publicada:

```bash
npm run build
npm run preview
```

## 2. Publicar na Vercel (jeito mais fácil: pelo GitHub)
1. Crie uma conta gratuita em https://vercel.com (pode entrar com a conta do GitHub).
2. Crie um repositório no GitHub e envie esta pasta. No terminal do VS Code:

```bash
git init
git add .
git commit -m "ELO - versão inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

   (A pasta `node_modules` não sobe, porque o `.gitignore` já a ignora.)
3. Na Vercel: **Add New… → Project** → escolha o repositório → **Import**.
4. A Vercel reconhece o **Vite** sozinha. Confira estes campos e clique em **Deploy**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Ao terminar, a Vercel mostra o link do site (algo como `https://seu-projeto.vercel.app`). Esse é o link que vai para o QR Code e para a descrição do vídeo.

## 2b. Alternativa sem GitHub (pelo terminal)
```bash
npm install -g vercel
vercel login
vercel          # primeira publicação (teste)
vercel --prod   # publicação final
```

## 3. Depois de publicar
- Toda vez que você alterar o código e enviar para o GitHub (`git add . && git commit -m "ajuste" && git push`), a Vercel publica de novo sozinha.
- Para gerar o QR Code, cole o link do site em um gerador gratuito de QR Code.
- Antes de gravar o vídeo, abra o link publicado e confira se tudo funciona (busca, painel de acessibilidade, guia).

## 4. Se der erro
- `npm install` falhou: confira se o Node.js está instalado (`node -v`).
- Erro no build da Vercel: rode `npm run build` no seu computador e leia a mensagem; ela aponta o arquivo e a linha.
