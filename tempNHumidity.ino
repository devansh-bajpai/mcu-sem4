#include <DHT11.h>
#define DHTPIN 2
DHT11 dht11(DHTPIN);

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

    if (result == 0)
    {
        Serial.print("Temperature: ");
        Serial.print(temperature);
        Serial.print(" °C\tHumidity: ");
        Serial.print(humidity);
        Serial.println(" %");
    }
    else
    {
        Serial.println(DHT11::getErrorString(result));
    }
}