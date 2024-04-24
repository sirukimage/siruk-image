import {Token} from "~/server/models/itoken.model"
export default defineEventHandler(async (ev) => {
	const username = ev.context.params?.username
	if (username) {
		const token = await Token.find()
			.where("account_username", username)
			.findOne()
		if (token) return token
		else throw new Error("username does not exist")
	} else throw new Error("Username is requried")
})
