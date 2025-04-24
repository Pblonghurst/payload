# Payload Blank Template
This template comes configured with the bare minimum to get started on anything you need.

## Quick Start - local setup
To spin up this template locally, follow these steps:

### Development
1. First [clone the repo](#clone) if you have not done so already
2. `cd payload-site && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.
3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

this has been set up to seed the cms with users/events/pages if no users are present on start.  <br />
user logins:  <br />
user: 'owner@example.com' (owner)  <br />
user: 'staffOne@example.com' (satff)  <br />
user: 'staffTwo@example.com' (staff)  <br />
pasword(same for all users): 'changeme'

The two staff own a few events each, aswell as th owner being credited for a few. This can be seen in admin panel.

#### testing 
Using the seeded users I have tested access accross the roles to verify access is correct.
Added pages will have their titles returned in the header nav and link to a page called 'events'.
'events' in the nav will also link to 'events'. 
The events page loops through the events added and displays them in a grid.


