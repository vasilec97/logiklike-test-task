const { fetch: originalFetch } = window

window.fetch = async (...args) => {
  // eslint-disable-next-line prefer-const
  let [resource, config] = args

  resource = `${import.meta.env.VITE_LOGICLIKE_API}${resource}`

  const response = await originalFetch(resource, config)

  return response
}

export const $fetch = window.fetch