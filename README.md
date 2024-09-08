# Vue3 Micro Frontend

- Vue3
- Vite
- [Vite Module Federation](https://github.com/originjs/vite-plugin-federation)
- Vue Router
- Pinia
- Element Plus

## Running Demo

1. ```pnpm install```

2. ```pnpm build:remotes && pnpm serve:remotes```

3. run ```pnpm dev:hosts``` in another terminal

### Advanced Demo
We have added a Demo to show the combination of `Vite + Vue + Pinia + Vue Router + Element Plus`.

- HOST (team-red): [localhost:5001](http://localhost:5001/)
- REMOTE (team-blue): [localhost:5002](http://localhost:5002/)
- REMOTE (team-green): [localhost:5003](http://localhost:5003/)

Similarly, we can launch the Dev mode on the Host side for development.
- HOST (team-red): [localhost:5001](http://localhost:5001/)
```bash
cd packages/examples/vue3-advanced-demo/team-red
pnpm run dev
```
