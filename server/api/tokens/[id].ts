import {Token} from "~/server/models/itoken.model"
export default defineEventHandler(async (ev) => {
	return await Token.find().where("account_username", "knurddev").findOne()
})
