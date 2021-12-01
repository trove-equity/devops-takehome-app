# Devops Takehome app

## MySQL
MySQL table: `ping_pong`

Table columns:
 - `id`
 - `value`


## App
Env variables:
 - `DATABASE_NAME`
 - `DATABASE_HOST`
 - `DATABASE_PORT`
 - `DATABASE_USERNAME`
 - `DATABASE_PASSWORD`
 
 App runs on port: **3000**
 To start the app: `node index.js`
 
 ### Endpoints
 #### `/ping`
 Should return `{"ping": "pong"}`
 
 #### `/pong`
 Should return `{"pong": "ping"}`
