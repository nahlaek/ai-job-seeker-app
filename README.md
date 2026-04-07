# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.13.2 create --template minimal --types ts --add eslint prettier sveltekit-adapter="adapter:static" --no-download-check --install pnpm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Plan parameter mapping

The `/thank-you` page accepts a `?plan=` query parameter (`1`–`4`) that renders a personalised order summary. Each plan's display data is sourced from `PUBLIC_PLAN_{N}_*` environment variables defined in `.env` (see `.env.example` for the full list). To add a new plan, create six new env vars following the same naming pattern (`PUBLIC_PLAN_5_NAME`, `…_PRICE`, `…_CURRENCY`, `…_DELIVERY`, `…_FORMAT`, `…_DESCRIPTION`), add the corresponding key to the `plans` object in `src/routes/thank-you/+page.svelte`, and set the Tally form redirect URL (Form Settings > Respondent notifications > Redirect URL) to `/thank-you?plan=5`.
