const { expect, browser, $, driver } = require("@wdio/globals");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await driver.pause(1000);
    await $("~mobile-input").addValue("11");
    await $("~mobile-input").addValue("111");
    await $("~mobile-input").addValue("33333");
    await $(
      '//XCUIElementTypeApplication[@name="Independa Companion"]/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther'
    ).click();
    await $("~login-button").click();
    await $("~otp-input").setValue("33333");
    await driver.pause(1000);
    await $("~settings").click();

    await driver.pause(1000);
    const danaTest = await $("~dana-test");
    await danaTest.click();
    // await $('//XCUIElementTypeOther[@name="dana-test"]').click();
    // await driver.touchAction({ action: "tap", element: danaTest });

    await $("~dana-test-ws").click();
    await $('//XCUIElementTypeStaticText[@name="Start Assessment"]').click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    let userAnswers = [1, 2, 3, 4, 5];

    let moodChoices = [
      "Feeling great",
      "Feeling good",
      "A little stressed",
      "Definitely stressed",
      "Stressed out",
    ];

    let circleChoices = [
      "LevelOneCircle",
      "LevelTwoCircle",
      "LevelThreeCircle",
      "LevelFourCircle",
      "LevelFiveCircle",
    ];

    let faceChoices = [
      "LevelOneFace",
      "LevelTwoFace",
      "LevelThreeFace",
      "LevelFourFace",
      "LevelFiveFace",
    ];

    await $(`//XCUIElementTypeStaticText[@name="${moodChoices[0]}"]`).click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${circleChoices[1]}"]`).click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${circleChoices[2]}"]`).click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${faceChoices[3]}"]`).click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();
    await $('//XCUIElementTypeStaticText[@name="OK"]').click();
  });
});
