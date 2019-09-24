// See valid fetch options:
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
const defaults = {
  mode: 'cors'
}

/**
 * opts: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
 * opts.baseURL to override process.env.baseURL
 */
export default async function api(route: string, { ...opts }: any = {}): Promise<JSON | undefined> {
  let baseURL = 'https://jsonplaceholder.typicode.com'
  let url = route
  if (opts && opts.baseURL) {
    baseURL = opts.baseURL
    delete opts.baseURL
  }
  // only prepend baseURL if we are not already given one
  if (route.substring(0, 4) !== 'http') {
    url = `${baseURL}/${route}`
  }

  // Case where we dont have to prepend Base URL for xmlgw services as these are proxied
  if (opts && opts.serviceType && opts.serviceType === 'xmlgwservice') {
    url = `${route}`
    delete opts.serviceType
  }

  try {
    const options = { ...defaults, ...opts }
    const response = await window.fetch(url, options)
    return await response.json()
  } catch (e) {
    return Promise.reject(e)
  }
}
