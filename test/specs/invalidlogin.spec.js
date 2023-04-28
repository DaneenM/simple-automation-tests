const { isDisplayed } = require("wd/lib/commands");

describe("Alle website login page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });
  it("verifies user cannot login with invalid credentials", async () => {
    await browser.url("https://alle.com/login");

    const loginPhoneNumberInput = await $(
      '//*[@data-testid="login-phone-number"]'
    );
    const loginPasswordInput = await $("#login-password");
    const loginSubmitBtn = await $('//*[@data-testid="submit"]');
    const errorMessagePhoneNumber = await $(
      '//*[@data-testid="phone-number-error"]'
    );
    const errorMessagePassword = await $('//*[@data-testid="password-error"]');

    await loginPhoneNumberInput.setValue("777-777-7777");
    browser.pause(5000);
    await loginPasswordInput.setValue("invalid-password");
    await loginSubmitBtn.waitForClickable({ timeout: 5000 });
    await loginSubmitBtn.click();
    await errorMessagePassword.waitForDisplayed({ timeout: 15000 });

    const isDisplayed = await errorMessagePhoneNumber.isDisplayed({
      timeout: 10000,
    });
    expect(isDisplayed).toEqual(true);
    const isDisplayedPwError = await errorMessagePassword.isDisplayed({
      timeout: 10000,
    });
    expect(isDisplayed).toEqual(true);
  });
});
