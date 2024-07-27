import { _ as __nuxt_component_0 } from './nuxt-link-BxPsWs1L.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-CNnwE-2c.mjs';
import { b as useRoute, a as useState } from './server.mjs';
import { ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
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
const url = "https://api.imgur.com/oauth2/authorize?client_id=b5397916875dde8&response_type=token&state=NEW_REGISTRATION";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const baseUrl = ref("");
    useColorMode();
    ref(null);
    const username = ref("");
    ref(null);
    const imageLink = ref(null);
    const disableButton = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><form method="post"><div class="flex justify-center"><div class="mt-8"><div class="mb-5"> Dont have username? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: url,
        style: { "border-bottom": "1px solid grey" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign In to Imgur `);
          } else {
            return [
              createTextVNode(" Sign In to Imgur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><label for="image-title">USERNAME</label> <br><input style="${ssrRenderStyle({ "border": "1px solid grey", "border-radius": "8px", "padding": "4px" })}" class="bg-transparent" autofocus id="image=title" name="image=title"${ssrRenderAttr("value", unref(username))} type="text"><div class="mt-3"><label for="image-uploader">UPLOAD IMAGE</label> <br><input accept="image/*" type="file" name="image-uploader" id="image-uploader"></div><div class="mt-3"><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" style="${ssrRenderStyle({ "border": "1px solid white" })}" type="submit"${ssrIncludeBooleanAttr(unref(disableButton)) ? " disabled" : ""}>${ssrInterpolate(unref(disableButton) ? "Uploading.." : "SUBMIT")}</button></div><img${ssrRenderAttr("src", unref(imageLink))} alt=""><div class="mt-3">`);
      if (unref(imageLink)) {
        _push(`<a${ssrRenderAttr("href", unref(imageLink))} target="_blank">VIEW IMAGE</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(route).query.username) {
        _push(`<div class="mt-32"><div class="text-2xl">READY TO CODE?</div><br><div> MAKE AN HTTP POST REQUEST TO </div><div>${ssrInterpolate(`${unref(baseUrl)}api/images`)}</div><br><div> will the following multi part form data: </div><div> -username: ${ssrInterpolate((_a = unref(route).query) == null ? void 0 : _a.username)} [string] </div><div> -image: ImageFile [Binary Large OBject (blob/binary)] </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form><div class="absolute top-0 right-0 p-3">`);
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
//# sourceMappingURL=index-COOJ7Q6P.mjs.map
