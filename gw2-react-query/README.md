# GW2 + React Query

Um app em **React + TypeScript** que consome a **API do Guild Wars 2** utilizando **@tanstack/react-query** para gerenciamento de dados.

## Funcionalidades
- Inserir e salvar sua **API Key** (localStorage).
- Exibir informações do **Token** (id, nome, permissões).
- Exibir informações da **Conta** (nome, id, world).
- Mostrar a **Carteira (Wallet)** com moedas, nomes, ícones e formatação de Coins.

## Tecnologias
- React + Vite + TypeScript  
- @tanstack/react-query + Devtools  
- fetch/axios (para chamadas HTTP)  
- CSS simples  

## Como rodar
    # instalar dependências
    npm install

    # iniciar em modo dev
    npm run dev

Abra no navegador: http://localhost:5173

## Estrutura básica
    src/
      App.tsx           # Layout principal
      hooks/useGw2.ts   # Hooks com React Query
      components/       # Componentes (cards, forms)
      store/apiKey.ts   # Persistência da API Key

## Observação
- A API do GW2 aceita o token via **query param `?access_token=...`** (recomendado para apps web).  
- A chave fica salva apenas no seu navegador, não é enviada a nenhum servidor externo.
