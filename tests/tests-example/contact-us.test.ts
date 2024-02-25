import { test } from '@playwright/test';
import { Application } from '../../app';

test('test', async ({ page }) => {
  const app = new Application(page);

  await app.contactus.open();
  await app.contactus.submitContactUsForm({
    firstName: 'RandomName',
    lastName: 'RandomLastName',
    email: 'randomemail@gmail.com',
    phoneNumber: '0680408435',
    hotelName: 'Ukraina',
    message: 'test message'
  })

  await app.contactus.expectContactUsFormSubmitted()
});
