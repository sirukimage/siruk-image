import { d as defineEventHandler, r as readMultipartFormData } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';

const images_post = defineEventHandler(async (ev) => {
  let token = {
    access_token: ""
  };
  const formData = await readMultipartFormData(ev);
  const fd = new FormData();
  let username;
  if (formData) {
    formData.forEach(async (ele) => {
      const name = ele.name;
      const buffer = ele.data;
      const filename = ele.filename;
      if (name) {
        if (name == "username") {
          username = ele.data.toString();
        } else {
          const blob = new Blob([buffer], { type: ele.type });
          fd.append(name, blob, filename);
        }
      }
    });
  }
  token = await $fetch(`/api/tokens/username/${username}`);
  if (token) {
    token == null ? void 0 : token.access_token;
    const imgurResponse = await $fetch("https://api.imgur.com/3/image", {
      method: "POST",
      body: fd,
      headers: {
        Authorization: `Bearer ${token.access_token}`
        // Authorization: `Client-ID 0333222b71a697f`,
      }
    });
    return imgurResponse;
  }
  throw Error("username not found.");
});

export { images_post as default };
//# sourceMappingURL=images.post.mjs.map
