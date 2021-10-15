<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" width="320"/></a>
</p>

## Technical results

File export of endpoints for insomina http client.
[Insomnia_2021-10-15.json.zip](https://github.com/phalcondroid/meli-adn-backend/files/7356210/Insomnia_2021-10-15.json.zip)

Project url:
`http://3.144.233.33:3000/`

#### Authentication endpoints 

JWT (Json web token, package) was implemented for this project.

#### login

url:
`/v1/auth`

<img width="1126" alt="Screen Shot 2021-10-15 at 4 38 06 PM" src="https://user-images.githubusercontent.com/13957703/137556722-ae881d87-7b17-4f46-8221-37a774c4beaf.png">

#### Unauthorized

missing token awt

<img width="1124" alt="Screen Shot 2021-10-15 at 5 04 14 PM" src="https://user-images.githubusercontent.com/13957703/137558488-e993b3cf-0acf-41fd-9635-4a8de879bb34.png">

Have to add in header the token bearer

<img width="801" alt="Screen Shot 2021-10-15 at 5 12 57 PM" src="https://user-images.githubusercontent.com/13957703/137559022-2eb27e15-f399-4ee3-b048-e6c1cba79935.png">

```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGkiLCJzdWIiOjIsImlhdCI6MTYzNDMzNTQwMiwiZXhwIjoxNjM0MzM1NDYyfQ.Vu8eoSiYdsVe9SlXAC3rRp2_NwJIpYI1jCwen424cqc"
}
```

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

#### Mutant adn

url:
`/v1/mutant`

<img width="937" alt="Screen Shot 2021-10-15 at 5 01 07 PM" src="https://user-images.githubusercontent.com/13957703/137558190-f8913624-062d-4cbe-9d7f-afc61166ea87.png">

<img width="1132" alt="Screen Shot 2021-10-15 at 5 04 58 PM" src="https://user-images.githubusercontent.com/13957703/137558456-39c0256d-6b08-47ec-ad4b-652cd233883e.png">

## Project Description

This project was created with NestJs framework based on expressJs and fastify, in this test was implemented clean architecture, jwt and mysql database connections.

## Project Struct

<img width="356" alt="assets" src="https://user-images.githubusercontent.com/13957703/137554883-b0ce63a9-0fae-4093-aff4-2ef4bfd56050.png">

#### Component

Components following the single responsability and S.O.L.I.D principles working as a unit of work component to handle some task, for example: auth, users, dna.

#### Controller Folder

Controlles in NestJS is a port of data, is just an interface to receive and send data to the client.

`dna.controllers.ts`

#### Manager File

The component manager is used as facade to interact or being used by other components, this ensures that all component functionalities are used only by through this facade component.

Manager get in charge of call to providers of functionalities with dependency injector, i mean, the services files.

`dna.manager.ts`

#### Models Folder

The model entities of working only for this component, have your own repository and data model.

#### Services Folder

This folder contains all business logic, all behaviour and functionalities for the component, services usually are called by manager or them selfs.

`validator.service.ts`


## Stay in touch

- Author - Julian Arturo Molina Castiblanco
- Email  - phalcondroid@gmail.com
