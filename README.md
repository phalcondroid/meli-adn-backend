<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" width="320"/></a>
</p>

## Technical results

Endpoint definitions for Insomnia HTTP client
[meli_insomnia.json.zip](https://github.com/phalcondroid/meli-adn-backend/files/7359474/meli_insomnia.json.zip)

## Insomnia client
<img width="934" alt="Screen Shot 2021-10-15 at 5 42 14 PM" src="https://user-images.githubusercontent.com/13957703/137561777-0ed84770-d071-4513-b0c7-aabbc3492771.png">

Project url:
`http://3.128.79.253:3000/`

## Authentication endpoints 

I used JWT (Json web token, package) to authenticate endpoints.

#### login

url:
`http://3.128.79.253:3000/v1/auth`

<img width="1126" alt="Screen Shot 2021-10-15 at 4 38 06 PM" src="https://user-images.githubusercontent.com/13957703/137556722-ae881d87-7b17-4f46-8221-37a774c4beaf.png">

###### request
```json
{
    "username": "meli",
    "password": "123"
}
```

###### response:
```json
{
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGkiLCJzdWIiOjIsImlhdCI6MTYzNDMzMzg2MCwiZXhwIjoxNjM0MzMzOTIwfQ.sAvXS0lOcDlApZw4iZ2nfO3sQfWpjq2nGyhp15aMN_0",
    "user": {
      "id": 2,
      "username": "meli",
      "password": "hidden",
      "status": 1,
      "createdAt": "2021-10-14T07:15:59.000Z",
      "updatedAt": "2021-10-14T07:15:59.000Z"
    }
  },
  "statusCode": 201,
  "message": "OK",
  "timestamp": "2021-10-15T21:37:40.503Z",
  "path": "/v1/auth"
}
```

## Unauthorized

If the JWT token is missing the service will return an unauthorized 401 status:

<img width="1124" alt="Screen Shot 2021-10-15 at 5 04 14 PM" src="https://user-images.githubusercontent.com/13957703/137558488-e993b3cf-0acf-41fd-9635-4a8de879bb34.png">

To fix this the JWT header must be included:

<img width="801" alt="Screen Shot 2021-10-15 at 5 12 57 PM" src="https://user-images.githubusercontent.com/13957703/137559022-2eb27e15-f399-4ee3-b048-e6c1cba79935.png">

```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGkiLCJzdWIiOjIsImlhdCI6MTYzNDMzNTQwMiwiZXhwIjoxNjM0MzM1NDYyfQ.Vu8eoSiYdsVe9SlXAC3rRp2_NwJIpYI1jCwen424cqc"
}
```

## Mutant endpoint

##### IS MUTANT payload

POST: `http://3.128.79.253:3000/v1/mutant`

<img width="1132" alt="Screen Shot 2021-10-15 at 5 04 58 PM" src="https://user-images.githubusercontent.com/13957703/137558456-39c0256d-6b08-47ec-ad4b-652cd233883e.png">

##### request 

```json
{
    "dna": [
	"ATGCGA",
	"CAGTGC",
	"TTATGT",
	"AGAAGG",
	"CCCCTA",
	"TCACTG"
    ]
}
```

##### response

```json
{
  "data": {
    "isMutant": true
  },
  "statusCode": 201,
  "message": "OK",
  "timestamp": "2021-10-15T22:12:51.388Z",
  "path": "/v1/mutant"
}
```

#### IS HUMAN payload

POST: `http://3.128.79.253:3000/v1/mutant`

<img width="990" alt="Screen Shot 2021-10-15 at 5 17 59 PM" src="https://user-images.githubusercontent.com/13957703/137559350-efcce16a-b755-4add-9bbd-a2ebb66ec26d.png">

##### request

```json
{
    "dna": [
	"TTGCGA",
	"CAGTGC",
	"TTATTT",
	"AGAAGG",
	"CCCCTA",
	"TCACTG"
    ]
}
````

##### response

```json
{
  "data": {
    "isMutant": false
  },
  "statusCode": 403,
  "timestamp": "2021-10-15T22:17:54.244Z",
  "path": "/v1/mutant"
}
````

## STATS

GET: `http://3.128.79.253:3000/v1/mutant`

<img width="877" alt="Screen Shot 2021-10-15 at 5 23 54 PM" src="https://user-images.githubusercontent.com/13957703/137560138-60d7a606-1edf-417b-b585-a58126436e84.png">

###### response
```javascript
{
  "data": {
    "count_human_dna": 3,
    "count_mutant_dna": 4,
    "ratio": 1.3333333333333333
  },
  "statusCode": 200,
  "message": "OK",
  "timestamp": "2021-10-15T22:20:04.534Z",
  "path": "/v1/mutant"
}
```

## DATABASE mysql

![mei_db](https://user-images.githubusercontent.com/13957703/137559577-1c15f346-bd21-41b0-a180-74ca370d4311.png)

<img width="938" alt="Screen Shot 2021-10-15 at 5 21 32 PM" src="https://user-images.githubusercontent.com/13957703/137559610-b621877f-b336-4b73-a4e3-011f7b9b2346.png">


## Project Description

The project was created using NestJs framework (which is based on ExpressJs and Fastify),a clean architecture, JWT and MySQL database connections.

## Project Struct

<img width="356" alt="assets" src="https://user-images.githubusercontent.com/13957703/137554883-b0ce63a9-0fae-4093-aff4-2ef4bfd56050.png">

#### Components

I organized the different modules in components. These follow one of the S.O.L.I.D principles, the single responsability, each one addresses a specific and unique task, for instance: auth, users, dna, etc.

#### Controllers Folder

Controllers in NestJS work as bridge to manage incoming data, they're just interfaces to receive and send data to the clients.

`dna.controllers.ts`

#### Manager File

The component's manager is used as a facade to interact with internal classes and being used by other components without exposing the internal functionality of each component.This ensures that all component functionalities are used only by through this facade component.

The manager is in charge of calling providers of functionalities with dependency injection, i mean, the services files.

`dna.manager.ts`

#### Models Folder

The models folders contain entities and providers. Entities describe the data model
and the providers repositories allows to list them externally.

#### Services Folder

This folder contains all business logic, all behaviour and functionalities for the component, services are usuallycalled by manager or themselves.

`validator.service.ts`

## Debug in console

<img width="890" alt="Screen Shot 2021-10-15 at 5 30 44 PM" src="https://user-images.githubusercontent.com/13957703/137561182-a80806a3-83a0-444d-930f-4fa1dae7b3cb.png">

## Stay in touch

- Author - Julian Arturo Molina Castiblanco
- Email  - phalcondroid@gmail.com
