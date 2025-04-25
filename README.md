# Payload Blank Template
This template comes configured with the bare minimum to get started on anything you need.

## Quick Start - local setup
To spin up this template locally, follow these steps:

### Development
1. First run 'git clone https://github.com/Pblonghurst/payload.git'
cd payload if you have not done so already
2. `cd payload-site && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.
3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

example .env:
DATABASE_URI=mongodb://127.0.0.1/payload-site
PAYLOAD_SECRET=YOUR_SECRET_HERE
PAYLOAD_SEED=true

#### Docker (Optional)
If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.
To do so, follow these steps:
- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

### Docker
Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:
1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user
That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

### Users
this has been set up to seed the cms with users/events/pages if no users are present on start.  <br />
user logins:  <br />
user: 'owner@example.com' (owner)  <br />
user: 'staffOne@example.com' (staff)  <br />
user: 'staffTwo@example.com' (staff)  <br />
pasword(same for all users): 'changeme'

The two staff own a few events each, aswell as th owner being credited for a few. This can be seen in admin panel.

yoururl/admin to access admin panel

#### testing 
Using the seeded users you can test access accross the roles to verify access is correct.
Added pages will have their titles returned in the header nav and link to a page called 'events'.
'events' in the nav will also link to 'events'. 
The events page loops through the events added and displays them in a grid.


