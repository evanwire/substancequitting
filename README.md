# Addictions Anonymous

## Check out the project demo on dev post
https://devpost.com/software/addictions-anonymous

## Inspiration
When I saw the different tracks, I knew I wanted to either build something related to health or public good, since I have no experience building projects in either of those areas. My first thought was that everyone was probably going to perform analysis of COVID-19 data, so I wanted to stray away from COVID for this project. I began thinking of other epidemics that currently face the world, and I realized that vaping has become a real issue. Vaping has become "trendy," and thus it is a hard challenge to tackle.

My thoughts then shifted to a broader view. Due to COVID, there likely is not many, if any, in person AA and NA meetings occurring. Thus I decided to build Addictions Anonymous to help fill that void

## What it does
I leveraged a completely anonymous registration process (users do not provide their names) to ensure total anonymity. I then wanted to replicate the feel of an AA meeting, so I built group-chat functionality. I also wanted people to be able to track their progress, so there is a progress tab where people can track how much money they have saved and review why they originally realized they wanted to quit their addiction. There is also an accountability partner feature where each user is assigned a random, anonymous accountability partner that could act as a sponsor. 

## How I built it
I built this using React.js, Firebase Authentication and a Firestore database. I used bootstrap for most of the frontend, and an amazing tool called bootswatch which gives prebuilt color themes for bootstrap components. 

## Challenges I ran into
I had a lot of trouble getting the hang of Firebase. I had never used it before and have had no experience with NoSql databases, and it took more googling than I am willing to admit before I discovered that everything is structured like JSON. Firebase's authentification tools also threw me for a loop for a while, but I saw an amazing Medium article that gave me a good basis to build on.

## Accomplishments that I'm proud of
I am proud that I actually completed this project. Originally I had a partner but he had something come up within the first hour, so I had to build this solo. I feel as though I was able to implement a relatively robust suite of features for only one night of coding. I am also proud of the fact that I made a decent UI/UX. I have always had a preference towards backend coding, so I am proud of my simplistic, minimalist layout.

## What I learned
I learned that Firebase is an amazing tool and I fully intend to leverage it in future projects. I also learned a lot more about the nooks and crannies of React, such as hooks. I also feel as though I learned a great deal about how to design cleaner UI/UX's.

## What's next for Addictions Anonymous
I hope to add Goals, which would award medals and points based on how long a user has not used whatever substance they were addicted to. I also would like to clean up the code and sort out the dependencies, which are, admittedly, a mess. I would also like to take a deeper look at the Firebase authentification suite and clean up the user registration functionality and add a "Forgot my password" link.
