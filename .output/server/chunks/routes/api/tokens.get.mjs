import { d as defineEventHandler } from '../../runtime.mjs';
import { T as Token } from '../../_/itoken.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';

const tokens_get = defineEventHandler(async (ev) => {
  return await Token.find();
});

export { tokens_get as default };
//# sourceMappingURL=tokens.get.mjs.map
