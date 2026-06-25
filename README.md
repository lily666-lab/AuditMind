# AuditMind

AuditMind is an AI audit workflow assistant prototype for portfolio and interview demos.

The public version is a safe online showcase. It presents the product landing page, workflow screens, local-first privacy positioning, RAG/citation concept, audit workbench, sampling center, template management, and confirmation center planning.

The full local demo keeps sensitive capabilities on the user's machine:

- Local knowledge-base retrieval
- AI answer summarization through a private `.env` API key
- Audit file parsing
- Excel workpaper copy export
- Template-based workpaper generation

The online showcase does not upload real audit materials, expose API keys, or process confidential client files.

## Local Demo

Run the local server:

```bash
node server.js
```

Open:

```text
http://localhost:4173/
```

## Public Showcase

The public deployment can be hosted as a static site using:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `data/`
- `.nojekyll`

In the public environment, backend-only functions show a demo-mode notice instead of calling local APIs.
