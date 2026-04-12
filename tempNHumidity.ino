#include <DHT11.h>
#define DHTPIN 2
DHT11 dht11(DHTPIN);
const int analogPin = A0;
//reads data from analog pin stationed at A0 which is the LM393 
void setup()
{
    Serial.begin(9600);
    Serial.println("DHT11 Sensor Test");
}

// Continuously checks temperature and humidity values and prints in serial monitor
void loop()
{
    int temperature = 0;
    int humidity = 0;

    int result = dht11.readTemperatureHumidity(temperature, humidity);
   int analogValue = analogRead(analogPin);
   //Analog pin reads light sensor value 
    if (result == 0)
    {
        Serial.print("Temperature: ");
        Serial.print(temperature);
        Serial.print(" °C\tHumidity: ");
        Serial.print(humidity);
        Serial.println(" %");
        Serial.print("Analog Light: ");
        Serial.print(analogValue);
        //prints value of analog light from the LM393 sensor
    }
    else
    {
        Serial.println(DHT11::getErrorString(result));
    }
}