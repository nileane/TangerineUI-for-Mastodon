import { readFileSync, writeFileSync } from 'node:fs';
import { variants } from './variants.mjs';

const tpl = readFileSync('src/template.css', 'utf8');

for (const v of variants) {
  const out = tpl.replace(/\{\{([^}]+)\}\}/g, (_, k) => {
    if (!(k in v.values)) throw new Error(`missing value '${k}' for variant '${v.suffix || 'tangerine'}'`);
    return v.values[k];
  });
  if (out.includes('{{')) throw new Error(`unsubstituted placeholder remains for variant '${v.suffix}'`);
  writeFileSync(`TangerineUI${v.suffix}.css`, out);
  writeFileSync(`mastodon/app/javascript/styles/${v.scssDir}/${v.scssDir}.scss`, out);
  console.log(`built TangerineUI${v.suffix}.css (+ ${v.scssDir}.scss)`);
}
