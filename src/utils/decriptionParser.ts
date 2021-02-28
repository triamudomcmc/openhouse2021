export const parseDecription = async (rawHTML: string): Promise<string> => {
  let html = rawHTML
  let parsedHTML = rawHTML
  const igcount = (rawHTML.match(/@/g) || []).length

  for (let i = 0; i < igcount; i++) {
    console.log(html.split('@', 2)[1].split('<', 2)[0].trim())
    const username = html.split('@', 2)[1].split('<', 2)[0].trim()
    const identifier = `@${username}`
    const linkElement = `<a class="hover:text-pink-200" target="_blank" href="https://www.instagram.com/${username}/">${identifier}</a>`
    parsedHTML = parsedHTML.replace(identifier, linkElement)
    html = html.substring(html.indexOf(identifier)).replace(identifier, '')
  }

  return parsedHTML
}
