import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


describe('Compra en sauce Demo', () => {

    test('Iniciar Sesion', async({page}) => {

        let user = 'standard_user';
        let pw = 'secret_sauce';
        const productos = ['Sauce Labs Fleece Jacket', 'Sauce Labs Bike Light', 'Sauce Labs Onesie'];
    
        const userBox = page.getByPlaceholder('Username');
        const pwBox = page.getByPlaceholder('Password');
        const btnLogin = page.getByRole('button', { name: 'Login'})
        const txtTitle = page.locator('[data-test="title"]');
    
        await page.goto('https://www.saucedemo.com');
        await userBox.fill(user);
        await pwBox.fill(pw);
        await btnLogin.click();

        await page.waitForTimeout(3000);
        await expect(txtTitle).toBeVisible();
        await expect(txtTitle).toHaveText('Products');
        
        for(let producto of productos){
            let formattedProduct = producto.toLowerCase().replace(/\s+/g, '-');

            const btnAddCart = page.locator(`[data-test="add-to-cart-${formattedProduct}"]`);

            await btnAddCart.click();
        }

        await page.waitForTimeout(3000);
    })

})
