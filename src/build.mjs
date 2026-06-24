import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { variants } from './variants.mjs';

const tpl = readFileSync('src/template.css', 'utf8');

for (const v of variants) {
  const out = tpl.replace(/\{\{([^}]+)\}\}/g, (_, k) => {
    if (!(k in v.values)) throw new Error(`missing value '${k}' for variant '${v.suffix || 'tangerine'}'`);
    return v.values[k];
  });
  if (out.includes('{{')) throw new Error(`unsubstituted placeholder remains for variant '${v.suffix}'`);
  writeFileSync(`TangerineUI${v.suffix}.css`, out);
  mkdirSync(`mastodon/app/javascript/styles/${v.scssDir}`, { recursive: true });
  writeFileSync(`mastodon/app/javascript/styles/${v.scssDir}/${v.scssDir}.scss`, out);
  // Top-level entry point referenced by config/themes.yml. Without this wrapper
  // the theme is missing from styles/ and `rails assets:precompile` fails.
  writeFileSync(`mastodon/app/javascript/styles/${v.scssDir}.scss`, `@use 'application';\n@use '${v.scssDir}/${v.scssDir}';\n`);
  console.log(`built TangerineUI${v.suffix}.css (+ ${v.scssDir}.scss + ${v.scssDir}/${v.scssDir}.scss)`);
}
