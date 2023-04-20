import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts"
import mdx from "lume/plugins/mdx.ts";

const site = lume();

site.use(jsx_preact());
site.use(code_highlight());
site.use(mdx());

export default site;
