const { expect, browser, $, driver } = require("@wdio/globals");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await driver.pause(1000);
    await $("~mobile-input").addValue("11111");
    await $("~mobile-input").addValue("33333");
    await $(
      '//XCUIElementTypeApplication[@name="Independa Companion"]/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther'
    ).click();
    await $("~login-button").click();
    await $("~otp-input").setValue("33333");
    await $("~settings").click();

    await driver.pause(1000);
    await $("~dana-test").click();
    await $('//XCUIElementTypeOther[@name="dana-test"]').click();

    await $("~dana-test-ws").click();
    await $('//XCUIElementTypeStaticText[@name="Start Assessment"]').click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    let userAnswers = [1, 2, 3, 4, 5];

    let choices1 = [
      "Feeling great",
      "Feeling good",
      "A little stressed",
      "Definitely stressed",
      "Stressed out",
    ];

    let choices2 = [
      "LevelOneCircle",
      "LevelTwoCircle",
      "LevelThreeCircle",
      "LevelFourCircle",
      "LevelFiveCircle",
    ];

    let choices4 = [
      "LevelOneFace",
      "LevelTwoFace",
      "LevelThreeFace",
      "LevelFourFace",
      "LevelFiveFace",
    ];

    await $(`//XCUIElementTypeStaticText[@name="${choices1[0]}"]`).click();
    // await $('//XCUIElementTypeStaticText[@name="Feeling good"]').click();
    // await $('//XCUIElementTypeStaticText[@name="A little stressed"]').click();
    // await $('//XCUIElementTypeStaticText[@name="Definitely stressed"]').click();
    // await $('//XCUIElementTypeStaticText[@name="Stressed out"]').click();

    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${choices2[1]}"]`).click();

    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${choices2[2]}"]`).click();

    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $(`//XCUIElementTypeImage[@name="${choices4[3]}"]`).click();

    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    await $('//XCUIElementTypeStaticText[@name="OK"]').click();

    // await $("~dana-test-brain_vital").click();
    // await $('//XCUIElementTypeStaticText[@name="Next"]').click();
    // await $('//XCUIElementTypeStaticText[@name="Start Assessment"]').click();
    // await $("~Target Image").click();
    // await $('//XCUIElementTypeButton[@name="Continue"]').click();
    // await $("~PracticeTarget").click();
  });
});
