import {Token} from "./../models/itoken.model"
export default defineEventHandler(async (ev) => {
	return await Token.find()
})
