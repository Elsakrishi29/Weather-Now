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

## Run & Access the App (Local Testing)

```bash
# Open Command Prompt or git bash Terminal
npm install
npm start

# Access
http://localhost:3000
```

## Run the application using stackblitz

```bash
cd /home/projects/aoniqgnjap.github
cd weather-now
npm install

npm start

# Its automatically redirect by https://aoniqgnjapgithub-mojh--3000--cf284e50.local-credentialless.webcontainer.io/
```