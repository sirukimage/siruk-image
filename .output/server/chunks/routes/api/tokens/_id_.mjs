import { d as defineEventHandler } from '../../../runtime.mjs';
import { T as Token } from '../../../_/itoken.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';

const _id_ = defineEventHandler(async (ev) => {
  return await Token.find().where("account_username", "knurddev").findOne();
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
