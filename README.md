# Tradies Platform
# resident-service


**Resident Management:** Add, edit, and delete resident records.

**Front-End**
React: A JavaScript library for building user interfaces.
Bootstrap: A front-end framework for developing responsive and mobile-first websites.
CSS: Custom styles, including background images and container designs, to enhance the user experience.

**Back-End**
Spring Boot: A Java framework used to create stand-alone, production-grade Spring-based applications.
H2 Database: An in-memory database used for development and testing.
RESTful API: APIs for CRUD operations on resident data.

**API Endpoints**

GET /api/residents: Retrieve a list of all residents.
POST /api/residents: Add a new resident.
PUT /api/residents/{id}: Update an existing resident's information.
DELETE /api/residents/{id}: Delete a resident.

## Description
This is a resident-service part for tradies-platform

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SpeedWagonClinic/tradies-platform.git
   cd tradies-platform

2. Run: docker-compose up --build    #when in resident-serviceGH

3. Access the service via:
Backend: http://localhost:8080/api/residents
Frontend: http://localhost:3000


