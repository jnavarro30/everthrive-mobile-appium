import axios from "axios";

export const login = async () => {
  await $("~mobile-input").addValue("11");
  await $("~mobile-input").addValue("111");
  await $("~mobile-input").addValue("33333");
  await $(
    '//XCUIElementTypeApplication[@name="Independa Companion"]/XCUIElementTypeWindow[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther'
  ).click();
  await $("~login-button").click();
  await $("~otp-input").setValue("33333");
};

export const getCheckInData = async () => {
  const userId = "12345";

  try {
    const response = await axios.get(
      `https://your-api-server.com/users/${userId}`
    );

    console.log("✅ API Response:", response.data);

    if (response.data.checkedIn) {
      const questions = response.data.questions || [];
      const answers = response.data.answers || [];

      return {
        questions,
        answers,
      };
    } else {
      console.log("❌ User is not checked in.");
      throw new Error("User is not checked in.");
    }
  } catch (error) {
    console.error("❌ API request failed:", error.message);
    throw error;
  }
};
