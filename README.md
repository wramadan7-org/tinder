# Tinder App Service
#### A simple API for tinder app for like and dislike another user

## Quick Start

Install the dependencies:

```bash
npm run install
```

## Environment Variables

Create the environment variables in the root of project `.env` file. They come with these default values:

```bash
PORT=8080
NODE=development
# DATABASE
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tinder
# JSONWEBTOKEN
SECRET=your_secret
```

Export database the database in the file above.

## Information

If folder public\images\profiles\ in root is not exists, please create manual

## Commands

Running locally:

```bash
npm run dev
```

## Project Structure

```
@types\                 # Define variable for Request or Response on Express
dist\                   # Results of compiling typescript file
public\images\profiles\ # Files of the profile user
src\
 |--configs\            # Configuration database
 |--controllers\        # Route controllers
 |--helpers\            # Utility classes and functions
 |--interface\          # Custom the interface for variable type
 |--middlewares\        # Custom express middlewares
 |--models\             # Business logic and interaction with database
 |--routes\             # Routes
 |--validations\        # Request data validation schemas
 |--index.js            # Express app
```
