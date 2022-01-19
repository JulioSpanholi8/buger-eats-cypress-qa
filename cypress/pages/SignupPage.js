

class SignupPage {
    go() {
        cy.visit('/') //acessar o site baseUrl

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //bug - tem um espaço a mais
        //Checkpoint - Garantir se foi para a pagina certa
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name) //type - para preencher esse campo
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()    //clicar para buscar cep

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street) //verificar se condiz com a rua esperada
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click() //contém
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh) //funcao da biblioteca para upload
    }

    submit() {
        cy.get('form button[type=submit]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible') //combinacao de localizador
    }
}

export default new SignupPage;