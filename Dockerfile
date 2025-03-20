# ---- STAGE 1: Build ----
    FROM node:22.13.1-alpine AS builder
    WORKDIR /app
    
    # Instala pnpm globalmente
    RUN npm install -g pnpm@8.14.0
    
    # Copia apenas os arquivos de dependências
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --frozen-lockfile
    
    # Copia o restante do código
    COPY . .
    
    # Certifique-se de que a pasta dist é gerada corretamente
    RUN pnpm run build && ls -la dist/src/
    
    # ---- STAGE 2: Production ----
    FROM node:22.13.1-alpine
    WORKDIR /app
    
    # Instala PNPM globalmente
    RUN npm install -g pnpm@8.14.0
    
    # Copia arquivos de dependência para instalar só prod
    COPY package.json pnpm-lock.yaml ./
    RUN pnpm install --prod --frozen-lockfile
    
    # Copia o código compilado da 1ª fase
    COPY --from=builder /app/dist ./dist
    
    # Corrigir o CMD para rodar do local correto
    CMD ["node", "dist/src/main.js"]
    