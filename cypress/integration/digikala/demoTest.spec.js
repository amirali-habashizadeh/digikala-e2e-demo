describe("Demo Test of DigiKala", () => {

    it('Login with correct phoneNumber & password',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('09368880172');
        cy.get('.c-login__form-action').click();

        cy.waitFor('.c-login__form-header');
        cy.get('.c-login__form-header').should('contain', 'رمز عبور را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('Qwert123@');
        cy.get('.o-btn--contained-red-lg').click();

        cy.waitFor('.c-navi-new-list__category--main');
        cy.get('.c-navi-new-list__category--main').should('contain', 'دسته‌بندی کالاها');
        cy.visit("/users/logout/");
    });

    it('Login with correct phoneNumber & worng password',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('09368880172');
        cy.get('.c-login__form-action').click();

        cy.waitFor('.c-login__form-header');
        cy.get('.c-login__form-header').should('contain', 'رمز عبور را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('123456789');
        cy.get('.o-btn--contained-red-lg').click();

        cy.get('.c-navi-new-list__category--main').should('not.contain', 'دسته‌بندی کالاها');
    });

    it('Login with correct email & password',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('amirali.hz.1378@gmail.com');
        cy.get('.c-login__form-action').click();

        cy.waitFor('.c-login__form-header');
        cy.get('.c-login__form-header').should('contain', 'رمز عبور را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('Qwert123@');
        cy.get('.o-btn--contained-red-lg').click();

        cy.waitFor('.c-navi-new-list__category--main');
        cy.get('.c-navi-new-list__category--main').should('contain', 'دسته‌بندی کالاها');
        cy.visit("/users/logout/");
    });

    it('Login with correct email but do not register',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('habashizadehamirali@gmail.com');
        cy.get('.c-login__form-action').click();

        cy.get('.c-login__form-header').should('not.contain', 'رمز عبور را وارد کنید');
    });

    it('Login with correct phoneNumber but do not register & check password',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('09388145943');
        cy.get('.c-login__form-action').click();

        cy.waitFor('.c-login__form-header');
        cy.get('.c-login__form-header').should('contain', 'کد تایید را وارد نمایید');
        cy.get('.c-login__otp-input').type('11111');
        cy.get('.o-btn--contained-red-lg').click();

        cy.get('.js-send-otp-confirm-code').should('contain', 'دریافت مجدد کد تایید')
    });

    it('Login with wrong email',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('amirali12346789sdf.com');
        cy.get('.c-login__form-action').click();

        cy.get('.o-form__error').should('contain', 'شماره موبایل یا ایمیل نادرست است');
    });

    it('Login with wrong phoneNumber',  () => {
        cy.visit("/users/login-register/");
        cy.waitFor('.c-login__opt-mobile-message');

        cy.get('.c-login__opt-mobile-message')
            .should('contain', 'شماره موبایل یا پست الکترونیک  خود را وارد کنید');
        cy.get('.o-form__field.js-input-field').type('08000000000');
        cy.get('.c-login__form-action').click();

        cy.get('.o-form__error').should('contain', 'شماره موبایل یا ایمیل نادرست است');
    });
});