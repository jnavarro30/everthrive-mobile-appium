import axios from 'axios';

export const login = async () => {
  await $('~mobile-input').addValue('11');
  await $('~mobile-input').addValue('111');
  await $('~mobile-input').addValue('33333');
  await $('//XCUIElementTypeApplication[@name="Independa Companion"]/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther').click();
  await $('~login-button').click();
  await $('~otp-input').setValue('33333');
};

export const getDailyCheckInAnswers = async () => {
  try {
    // const token = mainStore().userDetails.token;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE3ODEsIm9pZCI6MTg1LCJwZXJtIjpbMSw4LDksMTMsMTUsMjUsMjYsMzBdLCJkIjoiMjAyMzA0MTAiLCJpYXQiOjE3NTU5MDAwNzV9.Ae_wdEyMZEoi4sND2_1yfu5VWJteIMYu8F5n6vr_aXU';

    const res = await axios.get('https://api-stage.independa.com/ever-thrive/daily-checkin', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('getDailyCheckInAnswers res', res.data);
    const answers = res.data.data.answers;
    return answers;
  } catch (error) {
    console.error(error);
  }
};
