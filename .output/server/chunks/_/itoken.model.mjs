import { Schema, model } from 'mongoose';

const TokenSchema = new Schema({
  access_token: String,
  expires_in: String,
  token_type: String,
  refresh_token: String,
  account_username: {
    type: String,
    unique: true
  },
  account_id: String
});
const Token = model("Token", TokenSchema);

export { Token as T };
//# sourceMappingURL=itoken.model.mjs.map
