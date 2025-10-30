# Weather Now

## I have used Following technologies

* ReactJS
* Open-Meteo API (https://open-meteo.com/en/docs/geocoding-api) & (https://open-meteo.com/en/docs)
* CSS3

## First I have run the below commnd for create the react structure

```bash
npx create-react-app weather-now
```

## Then I have search the Open-Meteo Weather API in browser. i have choose the geo-code api (https://open-meteo.com/en/docs/geocoding-api)

```bash
curl https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
```

## Run & Access the App

```bash
# Open Command Prompt or git bash Terminal
npm install
npm start

# Access
http://localhost:3000
```