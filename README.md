
# StreamIt

StreamIt, your ultimate streaming destination, offers an exclusive and captivating experience for movie and series enthusiasts. Unlike typical clone apps, StreamIt sets itself apart by curating a remarkable collection of the latest movies and series available exclusively within its extensive database. To embark on a cinematic journey, users simply need to register and log in, unlocking a world of entertainment at their fingertips. StreamIt ensures a seamless and engaging platform, delivering a personalized streaming adventure without relying on external APIs. Immerse yourself in an unparalleled streaming experience with StreamIt—where unique content and a user-friendly interface redefine how you indulge in your favorite movies and series.


## Demo

![c53b4259-d1d7-490d-b59a-5e878e70d528](https://github.com/MADDUVX/StreamIt/assets/118983432/e503dd3a-8a43-47ca-a6b1-42662f5e6d54)



## Important Notes

- At the time of Logging or Registering using vercel deployement link, click the SignIn and Finish button two times, as the connection for mongoDB atlas instance takes 10-30 sec which gives 504 error at first click. So please click the button SignIn/Finish two times 

- Admin dahsboard is only available to admins so normal users cannnot access it. To access admin dashboard use following temporary credentials to login

```bash
Email : adminuser@gmail.com
password: Adminuser!123
```
- Please don't delete data related to movies,series and users from admin dashboard

- The movies and series that are shown in StreamIt are fetched from author's cloud database. So inorder to run this project locally, one needs to follow below points:

```bash
1.Enter u'r own MONGODB atlas database url and a random secret key for jwt sign and verification of accesstoken
2.Use the end point /auth/register to register as admin so u can acess admin dashboard
3. As mentioned above stremit uses mongo database data to fetch data, so one should add their own movies, series list either by using admin dashboard or using api's present in movies route

```

- Some of the features of StreamIt are still under development, so you cannnot use those features.
```bash
Examples:
1. Acessing profile and Settings options on homepage
2. Search bar for searching movies or series
3. Updating user, movies, series data using admin dashboard

```

## Authors

- [@MVSaiKumar](https://github.com/MADDUVX)


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Environment Variables

To run the Back End project, you will need to add the following environment variables to your .env file

`MONGO_URL`- MongoDB atlas url with db name

`SECRET_KEY`- Any random key, which will be used by jwt


## Features

- User Authentication
- Admin Dashboard for admins
- Admin can add/delete movies, users, movielist





## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/MADDUVX/StreamIt.git
```

Go to the project directory

```bash
  cd Back End/Front End
```

Install dependencies

```bash
  npm install
```

Back End Start the server

```bash
  npm run start
```
Front End 

```bash
  npm run dev
```

## Tech Stack

**Client:** React, Javascript, CSS, MaterialUI

**Server:** Node, Express, JWT, JOI

![StreamIt](https://github.com/MADDUVX/StreamIt/assets/118983432/1a856342-8997-4c3c-833a-add4646884ac)

## Screenshots

Home Screen

![StreamIt home screen](https://github.com/MADDUVX/StreamIt/assets/118983432/38d55882-3f9a-4ae3-9d53-8d03a8724e4c)

Admin Dashboard Home Screen displaying user Analytics and latest users

![Admin Dashboard](https://github.com/MADDUVX/StreamIt/assets/118983432/8b159704-2a19-4cee-a080-cbfc36895f50)

Enter movie/series details and click on create to add movie to database

![Add Movies](https://github.com/MADDUVX/StreamIt/assets/118983432/52a94aa9-4036-4482-876a-05990fef8505)

Displays list of movies available

![Movies](https://github.com/MADDUVX/StreamIt/assets/118983432/c37b359a-ad2f-401e-b96a-a40d0e2262a5)

Displays list of users available
![Users](https://github.com/MADDUVX/StreamIt/assets/118983432/daf60903-4a04-44f0-8365-112b386a85c4)

Admin can create movies/series list according to genre which gets displayed in the app

![AddList](https://github.com/MADDUVX/StreamIt/assets/118983432/b88f1a42-801c-4674-af31-8aa05e2e98f4)

Displays customized movies/series list that are created

![ListofMovies](https://github.com/MADDUVX/StreamIt/assets/118983432/079d5fea-cf41-4baf-badb-7f8853f7d6f0)


