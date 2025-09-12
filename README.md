# project_flight_application

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
