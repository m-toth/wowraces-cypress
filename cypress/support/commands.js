Cypress.Commands.overwrite('request', (originalFn, ...args) => {
    if (Cypress.env('HIDE_XHR_LOGS')) {
      if (typeof args[0] === 'object') {
        args[0].log = false
      } else {
        args[1] = args[1] || {}
        args[1].log = false
      }
    }
    return originalFn(...args)
  })
  
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    if (Cypress.env('HIDE_XHR_LOGS')) {
      options = options || {}
      options.log = false
    }
    return originalFn(url, options)
  })