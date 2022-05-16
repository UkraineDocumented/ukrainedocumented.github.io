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

and include this in the `rollup.config.js` to import the plugin:

```bash
import json from '@rollup/plugin-json';

export default {
...
  plugins: [json()]
};
```

This project also utilizes Russell Goldenberg's **`Scrolly.svelte`** [component](https://svelte.dev/repl/3d3736e634c9404ea8ec2ef7b87e2053?version=3.42.4) and Connor Rothschild's Scrolly [tutorial](https://www.connorrothschild.com/post/svelte-scrollytelling#step-0a-understand-russells-ltscrolly-gt).

## Data

### Ukraine Witness

TODO INSERT BLURB HERE

First, we removed social media links for posts where privacy was a concern (a "Yes" in the `F_PRIVATE_INFO_VISABLE` column).

We then removed a few unneeded columns, for added simplicity: `I_PUBLIC_MAP_STATUS`, `F_PRIVATE INFO VISABLE`, `F_PRIVACY_DETAILS`, `E_VERIFIED_ANALYSIS_ARMS_AND_OR_MUNITION`, and `B_URL_OF_GEOLOCATION`.

We also renamed columns for readability:

- A_ENTRY_NUMBER &rarr; `id`
- B_TYPE &rarr; `media_type`
- C_TYPE_OF_AREA_AFFECTED &rarr; `area_type`
- D_LATITUDE & D_LONGITUDE &rarr; `lat` & `long`
- all other columns were shortened to one-word equivalents

Finally, we standardized the `date` entries: `mm/dd/yyyy`. Months and days of the month are two-digit, zero-padded, and the year is a four-digit year. This is necessary for the code to work.
