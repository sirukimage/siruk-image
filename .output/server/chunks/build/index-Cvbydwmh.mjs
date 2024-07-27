import { _ as __nuxt_component_0 } from './client-only-CNnwE-2c.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const url = "https://api.imgur.com/oauth2/authorize?client_id=b5397916875dde8&response_type=token&state=NEW_REGISTRATION";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tokenData = ref({
      access_token: "",
      expires_in: "",
      token_type: "",
      refresh_token: "",
      account_username: "",
      account_id: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<a${ssrRenderAttr("href", url)}></a><div class="flex justify-center text-3xl"> USERNAME: ${ssrInterpolate(unref(tokenData).account_username)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/token/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cvbydwmh.mjs.map
