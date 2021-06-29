console.log(isValidURL('https://www.baidu.com/'))

function isValidURL(url)
{
	return /\w+:\/\/.+/.test(url)
}
