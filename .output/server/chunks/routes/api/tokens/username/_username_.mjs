import { d as defineEventHandler } from '../../../../runtime.mjs';
import { T as Token } from '../../../../_/itoken.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';

const _username_ = defineEventHandler(async (ev) => {
  var _a;
  const username = (_a = ev.context.params) == null ? void 0 : _a.username;
  if (username) {
    const token = await Token.find().where("account_username", username).findOne();
    if (token)
      return token;
    else
      throw new Error("username does not exist");
  } else
    throw new Error("Username is requried");
});

export { _username_ as default };
//# sourceMappingURL=_username_.mjs.map
