const { expect, browser, $, driver } = require('@wdio/globals');
import axios from 'axios';
import { login, getCheckInData } from '../helpers/utils.js';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await driver.pause(1000);
    await login();
    await $('~settings').click();
    await driver.pause(1000);
    const danaTest = await $('~dana-test');
    await danaTest.click();
    // await $('//XCUIElementTypeOther[@name="dana-test"]').click();
    // await driver.touchAction({ action: "tap", element: danaTest });

    await $('~dana-test-ws').click();
    await $('//XCUIElementTypeStaticText[@name="Start Assessment"]').click();
    await $('//XCUIElementTypeStaticText[@name="Next"]').click();

    const checkInData = await getCheckInData();
    const { questions, answers } = checkInData;
    let userAnswers = [1, 2, 3, 4, 5];

    let moodChoices = ['Feeling great', 'Feeling good', 'A little stressed', 'Definitely stressed', 'Stressed out'];
    let circleChoices = ['LevelOneCircle', 'LevelTwoCircle', 'LevelThreeCircle', 'LevelFourCircle', 'LevelFiveCircle'];

    let faceChoices = ['LevelOneFace', 'LevelTwoFace', 'LevelThreeFace', 'LevelFourFace', 'LevelFiveFace'];

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
