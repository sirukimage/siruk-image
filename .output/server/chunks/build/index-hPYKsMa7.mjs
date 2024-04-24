import { _ as __nuxt_component_0 } from './client-only-CNnwE-2c.mjs';
import { d as useState } from './server.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    ref(null);
    const username = ref("");
    ref(null);
    const imageLink = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><form method="post"><div class="flex justify-center"><div class="mt-8"><label for="image-title">USERNAME</label> <br><input autofocus id="image=title" name="image=title"${ssrRenderAttr("value", unref(username))} type="text"><div class="mt-3"><label for="image-uploader">UPLOAD IMAGE</label> <br><input accept="image/*" type="file" name="image-uploader" id="image-uploader"></div><div class="mt-3"><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="submit">SUBMIT</button></div><img${ssrRenderAttr("src", unref(imageLink))} alt=""><div class="mt-3"><a${ssrRenderAttr("href", unref(imageLink))} target="_blank">VIEW IMAGE</a></div></div></div></form><div class="absolute top-0 right-0">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-hPYKsMa7.mjs.map
