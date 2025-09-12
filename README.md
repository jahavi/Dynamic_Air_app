# Dynamic Fly

## Task Details

The task is to make an Angular web app deployed to Firebase. Firebase hosting is free and should be straightforward to use. Feel free to reach out if you run into trouble here. The app should include some flavor of authentication. Dealer's choice - user/pass, google, encrypted link, something else, your call. It should deny access to the form unless authentication is successful.

Delivery should come with working credentials if applicable. Once authenticated, the user should be taken to a form where they enter flight details. Upon submission, the app should send a post request with the below specs and inform the user of their success (or failure). The UI should inform the user whether their request was successful and they should know they're done. Any additions or enhancements you want to make here are acceptable but not required.

The app should be placed in a github repo I can share with the team. \
URL: https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge <br>
Request header "token" should contain the value "WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh". 
Request header "candidate" should contain your name.\
Request payload should follow the below interface.\
 Comments are not required, but should be passed along if entered. Missing properties will cause the request to fail. \
Your arrivalDate can be in any format convertible to a Date object.

interface FlightInfoPayload { \
airline: string \
arrivalDate: string \
arrivalTime: string \
flightNumber: string \
numOfGuests: number \
comments?: string \
}

# Requirements

A modern Angular-based flight booking application with Firebase integration. This project demonstrates authentication, booking management, and dynamic UI components.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Quick Installation](#quick-installation)
- [Features](#features)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)

---

## Project Structure

```
project_flight_application-main/
├── angular.json
├── booking.html
├── firebase.json
├── package.json
├── README.md
├── tsconfig*.json
├── public/
│   ├── favicon.ico
│   └── dynamic-air/
│       ├── dynamic-air.jpeg
│       └── dynamic-air.png
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── app/
│       ├── app.config.ts
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.scss
│       ├── app.spec.ts
│       ├── app.ts
│       ├── loading.ts
│       ├── auth-service/
│       │   ├── firebase/
│       │   │   ├── firebase-auth-config.ts
│       │   │   ├── firebase-auth.spec.ts
│       │   │   ├── firebase-auth.ts
│       │   │   ├── firebase-config.ts
│       │   │   └── user-interface.ts
│       │   └── http/
│       │       ├── http-interceptor.ts
│       │       ├── http.spec.ts
│       │       └── http.ts
│       ├── baner/
│       │   ├── baner.html
│       │   ├── baner.scss
│       │   └── baner.ts
│       ├── booking/
│       │   └── booking/
│       │       ├── booking.html
│       │       ├── booking.scss
│       │       ├── booking.spec.ts
│       │       └── booking.ts
│       ├── login/
│       │   ├── login.html
│       │   ├── login.scss
│       │   ├── login.spec.ts
│       │   └── login.ts
│       └── router-gaurds/
│           └── login-guard.ts
│       └── assets/
│           ├── background.jpeg
│           ├── dynamic-air.jpeg
│           └── dynamic-air.png
```

---

## Quick Installation

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd project_flight_application-main
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Configure Firebase:**
   - Update `src/app/auth-service/firebase/firebase-config.ts` with your Firebase project credentials.
4. **Run the application:**
   ```powershell
   ng serve
   ```
   - Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## Firebase Hosting

This project uses Firebase Hosting to deploy the Angular application.

- **Live Site:**
   -https://dynamic-air-42a4c.web.app

---
## Features

- User authentication (Firebase)
- Flight booking management
- Dynamic banners and UI
- Route guards for protected pages

---

## Configuration

- **Firebase:**
  - Set up your Firebase project and update the config in `src/app/auth-service/firebase/firebase-config.ts`.
- **Environment:**
  - Node.js and npm required
  - Angular CLI (`npm install -g @angular/cli`)

---

## Usage

- Register/login to access booking features
- Book flights and view booking history
- Admin features (if implemented)

---

## Screenshots

**Login Screen**
<img width="1920" height="1080" alt="Screenshot 2025-09-12 180612" src="https://github.com/user-attachments/assets/96a6edab-0aeb-4ed9-87e3-eb3ce3dd917b" />
<img width="1920" height="1080" alt="Screenshot 2025-09-12 180706" src="https://github.com/user-attachments/assets/41084658-5517-48aa-9c4c-7711485f29aa" />
**Signup Screen**
<img width="1920" height="1080" alt="Screenshot 2025-09-12 181200" src="https://github.com/user-attachments/assets/72ae9ccf-2066-4f8e-ba80-50b1bc1b03db" />

**Booking Screen**
<img width="1920" height="1080" alt="Screenshot 2025-09-12 180815" src="https://github.com/user-attachments/assets/4ed8d285-0bce-4c64-88a6-564b9be67340" />

**Booking Sucess/Failure**
<img width="1920" height="1080" alt="Screenshot 2025-09-12 180831" src="https://github.com/user-attachments/assets/e2ff99b0-2b4c-4209-85f1-d40d52687152" />

**Logout**
<img width="1920" height="1080" alt="Screenshot 2025-09-12 180843" src="https://github.com/user-attachments/assets/f5d4b550-ede2-4db9-995e-19633df9776b" />

---

<!-- ## License

[MIT](LICENSE) -->
