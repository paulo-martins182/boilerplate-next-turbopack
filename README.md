
# 🚀 Next.js Boilerplate – Modern Frontend Setup

Boilerplate profissional baseado em **Next.js 15 App Router**, configurado com ferramentas modernas e padrões utilizados por grandes empresas para acelerar a criação de aplicações frontend escaláveis, tipadas e com design consistente.

---

## 🔧 Tecnologias e Ferramentas

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide Icons
- React Hook Form + Zod
- ESLint + Prettier
- Husky + Commitlint + Commitizen
- Storybook
- Jest + React Testing Library
- GitHub Actions

---

## 📦 Como rodar o projeto

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor local:

```bash
pnpm dev
```

Gere a build de produção:

```bash
pnpm build
```

Verifique o lint:

```bash
pnpm lint
```

Execute o Prettier:

```bash
pnpm format
```

## 🧪 Testes

```bash
pnpm test
```

## 🔐 Commits padronizados

Realizar commit padronizado:

```bash
pnpm commit
```

---

## 📁 Estrutura de pastas

```bash
src/
├── app/            # Páginas com App Router
├── components/  
│   ├── ui/         # Componentes reutilizáveis (Shadcn UI)
│   └── stories/    # Componentes com Storybook
├── lib/            # Funções auxiliares e helpers
├── hooks/          # Custom hooks
├── styles/         # Estilos globais
├── schemas/        # Schemas Zod para validação
```

---

## ⚙️ GitHub Actions CI/CD

Este boilerplate já está integrado ao GitHub Actions para:

Rodar lint e testes a cada push

Validar commits

Verificar build de produção

Certifique-se de ativar o Actions no seu repositório após subir ao GitHub.

```bash

# .github/workflows/ci.yml (exemplo incluso no repositório)

```

![CI](https://github.com/paulo-martins182/boilerplate-next-turbopack/actions/workflows/ci.yml/badge.svg)

---

## ✅ Features implementadas

- [x] - App Router com layout padrão

- [x] - Tailwind com tema customizável

- [x] - Integração com ShadCN UI

- [x] - Formulário com React Hook Form + Zod

- [x] - Storybook com suporte a temas

- [x] - Padronização com ESLint, Prettier e Commitlint

- [x] - Lucide Icons

- [x] - Testes com Jest e RTL

- [x] - Automação com GitHub Actions

---

## 🧭 Futuras Features (em planejamento)

- [ ] - Integração com CMS (Strapi / Sanity)

- [ ] - Suporte a temas dinâmicos (dark/light)

- [ ] - Criação de CLI para geração de componentes com Plop

- [ ] - Adição de Jest

- [ ] - PWA + Lighthouse otimizado

---

## 🧠 Como contribuir?

Fork este repositório

Crie uma branch com sua feature: git checkout -b feat/nova-feature

Commit com padrão: pnpm commit

Push: git push origin feat/nova-feature

Abra um PR ✨

## 🖖 Licença

MIT © Paulo Martin

### 🧠 Dica Extra: Automação para atualização no GitHub

Crie um script simples no `package.json` para facilitar o push:

```json
"scripts": {
  "push": "git add . && git commit && git push"
}
```

Ou, mais completo com cz:

```json
"scripts": {
  "commit": "cz",
  "push": "git add . && pnpm commit && git push"
}
```
