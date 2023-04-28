const { isDisplayed } = require("wd/lib/commands");

describe("Alle website login page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });

  it("verifies user can successfully login into Alle", async () => {
    await browser.url("https://alle.com/login");

    const loginPhoneNumberInput = await $(
      '//*[@data-testid="login-phone-number"]'
    );
    const loginPasswordInput = await $("#login-password");
    const loginSubmitBtn = await $('//*[@data-testid="submit"]');
    const successfulDashboardGreeting = await $(
      '//*[@data-testid="dashboard-greeting"]'
    );
    //Will add phone number and password when testing live"
    await loginPhoneNumberInput.setValue("");
    await loginPasswordInput.setValue("");
    await loginSubmitBtn.waitForClickable({ timeout: 5000 });
    await loginSubmitBtn.click();
    await successfulDashboardGreeting.waitForDisplayed({ timeout: 10000 });
    const isDisplayed = await successfulDashboardGreeting.isDisplayed();
    expect(isDisplayed).toEqual(true);
  });
});
