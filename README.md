This project is based on the PoolERM microservices project.  It is a standalone version meant to integrate into the pool microservice architecture.

For all functions to run properly please add ./web/src/scripts/protected.js
>> export default ApiKey = YourHereMapAPIKey;


##To run without Mockdata##
npm i
npm start

##To run with mock data##
cd proto
npm i
node .
[in a new terminal window targeting main project]:
npm i
npm start