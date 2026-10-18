---
title: "Turtle Racer"
subtitle: "Team project / Systems"
summary: "An educational undersea racer where marine-life knowledge powers your speed."
intro: >-
  A shipped educational game. I built the background systems that generate
  questions, control the race, manage speed, and stream the level.
role: "Systems Programmer"
focus: "Race systems · Level streaming"
tools:
  - Systems Design
  - Programming
cover: ./cover.jpg
coverAlt: "Turtle Racer gameplay with question UI and an underwater turtle."
gallery:
  - src: ./trench.jpg
    alt: "Turtle swimming through an underwater trench."
    caption: "Trench run."
  - src: ./eating.jpg
    alt: "Turtle eating plants in Turtle Racer."
    caption: "Eating plants."
  - src: ./collection.jpg
    alt: "Turtle racer with a collection counter."
    caption: "Collection progress."
  - src: ./arch.jpg
    alt: "Turtle approaching a rock arch underwater."
    caption: "Rock arch."
videos:
  - title: "Turtle Racer Trailer"
    youtubeId: "i3uaGGF0M8Y"
    poster: ./trench.jpg
    posterAlt: "Turtle swimming through an underwater trench."
links:
  - label: "View on Steam"
    url: "https://store.steampowered.com/app/2225130/Turtle_Racer/"
systems:
  - name: "Question generation"
    detail: >-
      Pulls random questions and answers from a database that can be edited
      during the game's lifecycle, then shows them live as the player progresses.
  - name: "Race state control"
    detail: >-
      Dynamically increases or decreases opponent speed to make the race feel
      like a real rival is alongside the player.
  - name: "Player speed manager"
    detail: >-
      Increments and decrements player speed when buffs or debuffs are applied.
  - name: "Level streaming"
    detail: >-
      Tags level components with unique keywords and loads or unloads them based
      on the player's location to keep performance steady.
order: 5
---
