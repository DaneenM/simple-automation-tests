describe("Alle website registration page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
  });

  it("verifies verification input after joining Alle", async () => {
    await browser.url("registration/complete");
    const phoneNumberInput = await $("#phone-number");
    const joinButton = await $('//button[@type="submit"]');
    const verificationCodeInput = await $("#code");

    await phoneNumberInput.setValue("929-336-3505");
    await joinButton.waitForClickable({ timeout: 5000 });
    await joinButton.click();
    await verificationCodeInput.waitForDisplayed({ timeout: 5000 });
    const isInputDisplayed = await verificationCodeInput.isDisplayed();
    expect(isInputDisplayed).toEqual(true);
  });

  it("verifies error message when user enters invalid phone number", async () => {
    await browser.url("registration");
    const phoneNumberInput = await $("#phone-number");
    const submitButton = await $('//button[@type="submit"]');
    const phoneNumberErrorMessage = await $(
      '//*[@data-testid="phone-number-error"]'
    );

    await phoneNumberInput.setValue("777-777-7777");
    await submitButton.waitForClickable({ timeout: 5000 });
    await submitButton.click();
    const isErrorMessageDisplayed =
    await phoneNumberErrorMessage.waitForDisplayed({ timeout: 5000 });
    expect(isErrorMessageDisplayed).toEqual(true);
  });
});
