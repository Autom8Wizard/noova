import { test } from '@playwright/test';
import { Application } from '../../app';

test('Contact us form check', async ({ page }) => {
  const app = new Application(page);

  await app.login.open();
  await app.login.submitLoggin({
    accountName: 'AccountName>',
    agentName: '<agentName',
    password: ' shmasword!?=+@#',
  })

  await app.login.expectWarningMessage()
});
