var base64 = function base64(type, data) {
	if (data.args.length > 2) {
		switch (data.args[1].toLocaleLowerCase()) {
			case "decode":
				try {
					return {
						handler: "internal",
						data: `\`\`\`\n${Buffer.from(data.args[2], "base64").toString('utf8')}\n\`\`\``
					}
				} catch (ex) {
					return {
						handler: "internal",
						data: `Invalid Base64!`
					}
				}
				break;
			case "encode":
				return {
					handler: "internal",
					data: `\`\`\`\n${Buffer.from(data.args[2]).toString('base64')}\n\`\`\``
				}
				break;
			default:
				return {
					handler: "internal",
					data: "Invalid mode!"
				}
		}
	} else {
		return {
			handler: "internal",
			data: "Invalid arguments!"
		}
	}
}

module.exports = {
	base64: base64
}

var base32 = function base32(type, data) {
	if (data.args.length > 2) {
		switch (data.args[1].toLocaleLowerCase()) {
			case "decode":
				try {
					return {
						handler: "internal",
						data: `\`\`\`\n${Buffer.from(data.args[2], "base32").toString('utf8')}\n\`\`\``
					}
				} catch (ex) {
					return {
						handler: "internal",
						data: `Invalid Base32!`
					}
				}
				break;
			case "encode":
				return {
					handler: "internal",
					data: `\`\`\`\n${Buffer.from(data.args[2]).toString('base32')}\n\`\`\``
				}
				break;
			default:
				return {
					handler: "internal",
					data: "Invalid mode!"
				}
		}
	} else {
		return {
			handler: "internal",
			data: "Invalid arguments!"
		}
	}
}

module.exports = {
	base32: base32
}