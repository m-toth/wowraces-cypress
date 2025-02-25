import 'cypress-plugin-api'

// Workaround para o "ResizeObserver loop error" e outros erros que não impedem o teste de continuar
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications') || 
        err.message.includes('ResizeObserver loop limit exceeded') ||
        err.message.includes('Failed to load because no supported source was found')) {
      return false;
    }
})