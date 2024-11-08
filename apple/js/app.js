
// Function to send JSON data to Unity WebGL
function sendJsonDataToUnity(jsonData) {
    const unityInstance = UnityInstance;
if (unityInstance && unityInstance.Module) {
    unityInstance.Module.SendMessage('AppManager', 'ReceiveJsonDataFromWeb', jsonData);
    } else {
    console.error("Unity WebGL instance is not loaded yet.");
    }
}

// Example JSON data for login
const requestDataJson = `{
    "avatar": "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
"blocked": "ACTIVATE",
"date_of_birth": "2000-10-10",
"first_name": "Long",
"last_name": "Test",
"phone_number": "+84398765432",
"user_name": "LongTest",
"uuid": "123456789",
"referral_code": null
}`;

// Sending the JSON data to Unity WebGL
sendJsonDataToUnity(requestDataJson);