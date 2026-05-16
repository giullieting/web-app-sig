# Posicionamento Digital — Guia estratégico

Landing page estática do trabalho acadêmico sobre **posicionamento digital**, integrante do ciclo de seminários da disciplina **Sistemas de Informações Gerenciais (SIG)** na **UFBA**: conceito, fundamentos, estratégias, métricas, ferramentas, referências e tendências.

## Estrutura do projeto

| Caminho | Descrição |
|--------|-------------|
| `main.html` | Página principal (marcação HTML) |
| `css/styles.css` | Estilos e responsividade |
| `js/main.js` | Entrada dos scripts (ES modules) |
| `js/modules/` | `nav-highlight.js`, `scroll-reveal.js` |
| `assets/images/` | Fotos e imagens do projeto |
| `netlify.toml` | Configuração de deploy na Netlify |

## Como abrir localmente

O JavaScript usa **módulos ES** (`type="module"`). Abrir o arquivo direto (`file://`) pode bloquear os imports. Prefira servir a pasta por HTTP, por exemplo:

```bash
cd /caminho/para/web-app-sig-main
npx --yes serve .
```

Depois acesse o endereço indicado no terminal (geralmente `http://localhost:3000/main.html`) ou use a raiz conforme o servidor.

Alternativa: extensão **Live Server** no VS Code/Cursor apontando para a pasta do projeto.

## Deploy (Netlify)

- **Publish directory:** raiz do repositório (`.`).
- O arquivo `netlify.toml` redireciona `/` para `/main.html` com status 200, para a URL principal abrir o guia mesmo sem `index.html`.

Conecte o repositório na Netlify ou faça deploy manual da pasta; mantenha `main.html`, `css/`, `js/` e `assets/` na mesma estrutura.

## Créditos

Conteúdo e organização acadêmica vinculados ao **TIEMFOCO / SIG · UFBA**. Links de YouTube e Instagram do projeto estão na própria página.

---

© 2026 — uso acadêmico e divulgação do seminário.
