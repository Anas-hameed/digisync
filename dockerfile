FROM node
WORKDIR /app
RUN npm install -g pnpm
RUN npm install -g vite
COPY . /app/ 
RUN pnpm install
CMD ["pnpm", "run", "dev"]
# commad: docker run -it -p 5173:5173 --name fypFrontend frontend