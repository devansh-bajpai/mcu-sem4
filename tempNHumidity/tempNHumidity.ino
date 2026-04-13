#include <DHT11.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "maths is Cool";
const char* password = "12345678";

#define DHTPIN 2
DHT11 dht11(DHTPIN);
const int analogPin = A0;

void sendSensorData(float temp, float hum, int light) {
  if (WiFi.status() == WL_CONNECTED) {

    WiFiClient client;  // HTTP (not HTTPS)
    HTTPClient http;

    String url = "http://10.85.249.204:5001/getData";  // <-- change this

    http.begin(client, url);
    http.addHeader("Content-Type", "application/json");

    // Create JSON payload
    String json = "{";
    json += "\"temperature\":" + String(temp) + ",";
    json += "\"humidity\":" + String(hum) + ",";
    json += "\"light\":" + String(light);
    json += "}";

    int httpCode = http.POST(json);

    if (httpCode > 0) {
      Serial.printf("Response code: %d\n", httpCode);
      String response = http.getString();
      Serial.println(response);
    } else {
      Serial.printf("POST failed: %s\n", http.errorToString(httpCode).c_str());
    }

    http.end();
  }
}



//reads data from analog pin stationed at A0 which is the LM393
void setup() {
  Serial.begin(9600);
  Serial.println("DHT11 Sensor Test");

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Trying to connect...");
    delay(500);
  }
}

// Continuously checks temperature and humidity values and prints in serial monitor
void loop() {
  int temperature = 0;
  int humidity = 0;

  int result = dht11.readTemperatureHumidity(temperature, humidity);
  int analogValue = analogRead(analogPin);
  //Analog pin reads light sensor value
  if (result == 0) {
    // Serial.print("Temperature: ");
    // Serial.print(temperature);
    // Serial.print(" °C\tHumidity: ");
    // Serial.print(humidity);
    // Serial.println(" %");
    // Serial.print("Analog Light: ");
    // Serial.print(analogValue);
    //prints value of analog light from the LM393 sensor

    sendSensorData(temperature, humidity, analogValue);
    Serial.print("Sent data");
    delay(5000);
  } else {
    Serial.println(DHT11::getErrorString(result));
  }
}