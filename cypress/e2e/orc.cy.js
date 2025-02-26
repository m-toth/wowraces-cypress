describe('Teste de navegação no site World of Warcraft', () => {

  it('- Dado que acessei o site do World of Warcraft\n- E clico em Informações do Jogo > Raças', () => {
    
    // Intercepta todas as requisições do tipo xhr e fetch e não exibe no console
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.visit('https://worldofwarcraft.blizzard.com/pt-br/')
    cy.get('blz-button')
      .should('contain.text', 'Assine já!')

    cy.get('#blz-nav-wow-game-info')
      .shadow()
      .find('div.nav-link-text')
      .should('contain.text', 'Informações do jogo')
    cy.get('#blz-nav-wow-game-info')
      .shadow()
      .find('button')
      .click()

    cy.get('#blz-nav-wow-races')
      .shadow()
      .find('div.nav-link-text')
      .should('contain.text', 'Raças')
    cy.get('#blz-nav-wow-races')
      .shadow()
      .find('a')
      .click()

    // Método alternativo de validar e clicar em Informações do Jogo > Raças sem passar pelo Shadow DOM
    // cy.get('#blz-nav-wow-game-info')
    //   .should('have.attr', 'text', 'Informações do jogo').click()
    // cy.get('#blz-nav-wow-races')
    //   .should('have.attr', 'text', 'Raças').click()

    cy.url().should('include', '/game/races')
    cy.get('h1.font-semp-xxxLarge-white.margin-none').should('contain.text', 'Habitantes de Azeroth')
    cy.get('h1.margin-none.font-semp-large-white.text-upper').should('contain.text', 'Pela Aliança')
    cy.get('h1.margin-none.font-semp-large-white.text-upper').should('contain.text', 'Pela Horda')
    cy.get('h1.margin-none.font-semp-large-white.text-upper').should('contain.text', 'Raças aliadas')
  })

  it('- Quando clico em Orc\n- Então valido que a página que fala dos Orcs está sendo apresentada', () => {

    // Intercepta todas as requisições do tipo xhr e fetch e não exibe no console
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.visit('https://worldofwarcraft.blizzard.com/pt-br/game/races')
    let logoHorda = 'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt2f2ccd276a041b46/616da56e67ad6d1042a4dbab/VGJ2XT8PAJL31531171276190.png'
    
    cy.contains('div.RaceTile-name', 'Orc')
      .parents('a[href="/game/races/orc"]')
      .should('exist')
      .click()
  
    cy.url().should('include', '/game/races/orc')
    cy.get('.padding-top-double-large.padding-bottom-double-huge.margin-top-large')
      .find('.Art-image')
      .should('have.attr', 'data-background-image', logoHorda)
    cy.get('h1.font-semp-xxxLarge-white.margin-none').should('contain.text', 'Orc')
    cy.get('h4').should('contain.text', 'Cidade-sede: Orgrimmar')
  })

})