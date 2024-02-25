import { test } from '@playwright/test';
import { Application } from '../../app';

test('Loggin with incorrect user', async ({ page }) => {
  const app = new Application(page);

  await app.home.open();
  await app.home.openLoginPage();
  await app.login.expectLoaded();
  await app.login.submitLoggin({
    accountName: 'AccountName>',
    agentName: '<agentName',
    password: ' shmasword!?=+@#',
  })

  await app.login.expectWarningMessage()
});
