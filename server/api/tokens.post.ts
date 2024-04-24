import {Token} from "~/server/models/itoken.model"
export default defineEventHandler(async (ev) => {
	const tokenData = await readBody(ev)

	const tokenInfo = await Token.findOneAndUpdate(
		{account_username: tokenData.account_username},
		tokenData, // Update with new token data
		{upsert: true, new: true}, // Create if none exists, return updated doc
	)

	return tokenInfo
	// return await Token.create(tokenData)
})
