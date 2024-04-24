import { d as defineEventHandler, a as readBody } from '../../runtime.mjs';
import { T as Token } from '../../_/itoken.model.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'mongoose';
import 'node:fs';
import 'node:url';

const tokens_post = defineEventHandler(async (ev) => {
  const tokenData = await readBody(ev);
  const tokenInfo = await Token.findOneAndUpdate(
    { account_username: tokenData.account_username },
    tokenData,
    // Update with new token data
    { upsert: true, new: true }
    // Create if none exists, return updated doc
  );
  return tokenInfo;
});

export { tokens_post as default };
//# sourceMappingURL=tokens.post.mjs.map
