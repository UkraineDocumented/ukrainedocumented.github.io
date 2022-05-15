# Building News Apps

Spring 2022
Christopher Giles and Elena Shao

## Set-Up

### Svelte

This project uses a template for [Svelte](https://svelte.dev) apps, which lives at https://github.com/sveltejs/template.

To create a new project based on the Svelte starter template using [degit](https://github.com/Rich-Harris/degit), make sure to have Node installed and then run:

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

and install the dependencies...

```bash
cd svelte-app
npm install
```

and then start [Rollup](https://rollupjs.org) and navigate to [localhost:8080](http://localhost:8080):

```bash
npm run dev
```

### Additional requirements

Install the d3 dependencies in the project folder:

```bash
npm install d3
npm install @types/d3
```

Install the [JSON rollup plugin](https://github.com/rollup/plugins/tree/master/packages/json):

```bash
npm install @rollup/plugin-json --save-dev
```

And include this in the `rollup.config.js` to import the plugin:

```bash
import json from '@rollup/plugin-json';

export default {
...
  plugins: [json()]
};
```

### Scrolly starter

This project also utilizes Russell Goldenberg's **`Scrolly.svelte`** [component](https://svelte.dev/repl/3d3736e634c9404ea8ec2ef7b87e2053?version=3.42.4) and Connor Rothschild's Scrolly [tutorial](https://www.connorrothschild.com/post/svelte-scrollytelling#step-0a-understand-russells-ltscrolly-gt).

```

```
