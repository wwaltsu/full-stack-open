describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset'  )
    const user = {
      name: 'abc',
      username: 'abc',
      password: 'abc'
    }
    
    cy.request('POST', 'http://localhost:3001/api/users/', user) 
    cy.visit('http://localhost:3000')
  })

  it('login form is shown', function() {
    cy.contains('login').click()
  })
  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('abc')
      cy.get('#password').type('abc')
      cy.get('#login-button').click()
  
      cy.contains('abc logged in')
    })

    it('fails with wrong credentials', function() {
      cy.contains('login').click()
      cy.get('#username').type('incorrect')
      cy.get('#password').type('incorrect')
      cy.get('#login-button').click()
  
      cy.get('.error')
        .should('contain', 'wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')
      cy.get('html').should('not.contain', 'incorrect')
    })
    it('A blog can be created', function() {
      cy.contains('login').click()  
      cy.get('#username').type('abc')
      cy.get('#password').type('abc')
      cy.get('#login-button').click()
      cy.contains('new blog').click()
      cy.get('#title').type('title')
      cy.get('#author').type('author')
      cy.get('#url').type('url')
      cy.get('#save-button').click()
    })
    it('A blog can be liked', function() {
      cy.contains('login').click()  
      cy.get('#username').type('abc')
      cy.get('#password').type('abc')
      cy.get('#login-button').click()
      cy.contains('new blog').click()
      cy.get('#title').type('title')
      cy.get('#author').type('author')
      cy.get('#url').type('url')
      cy.get('#save-button').click()
      cy.contains('show').click()
      cy.contains('like').click()
    })
    
    it('A user can remove a blog', () => { 
      cy.contains('login').click()  
      cy.get('#username').type('abc')
      cy.get('#password').type('abc')
      cy.get('#login-button').click()
      cy.contains('new blog').click()
      cy.get('#title').type('title')
      cy.get('#author').type('author')
      cy.get('#url').type('url')
      cy.get('#save-button').click()
      cy.contains('show').click()
      cy.contains('remove').click()
      cy.on('window:confirm', (str) => {
          expect(str).to.equal(`Are you sure to remove this blog by title author`)
      })
      cy.on('window:confirm', () => true);
      cy.contains('new blog').click()
      cy.reload()
      cy.get('html').should('not.contain','title')
    })
    
        })  
        it('Blogs are rendered by likes', () => {
          const user = {
            name: 'abc',
            username: 'abc',
            password: 'abc'
          }
          cy.login(user)
          const blog = { title: 'title', author: 'author', url: 'url',likes: 0 }
          const blog1 = { title: 'title', author: 'author', url: 'url',likes: 1 }
          const blog2 = { title: 'title', author: 'author', url: 'url',likes: 2 }
          
          cy.makeBlog([blog, blog1, blog2])
          cy.get('.showButton').then( buttons => {
            cy.wrap(buttons[0]).click()
            cy.wrap(buttons[1]).click()
            cy.wrap(buttons[2]).click()
          })
         cy.get('.blog').then( blogs => {
          
          cy.wrap(blogs[2]).contains('0 likes')
          cy.wrap(blogs[1]).contains('1 likes')
          cy.wrap(blogs[0]).contains('2 likes')
          
        })  
      })
    })
    
  
