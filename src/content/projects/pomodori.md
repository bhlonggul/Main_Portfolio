---
title: "Pomodori"
summary: "Underwater-themed pomodoro productivity game built in C# / Unity for FullyHacks. Focus timer meets fish."
tags: ["unity", "c#", "hackathon", "game"]
image: "../../assets/projects/pomodori.png"
repo: "https://github.com/kuyakoy/fullyhacks_deepsea_game"
demo: "https://markerses.itch.io/domodori"
date: 2026-04-19
---

## Problem

Pomodoro timers are everywhere, but most of them are utilitarian — a clock and a buzzer. We wanted something that made finishing a focus block feel like *progress* in a small game world, the way Forest or Virtual Cottage do, but with a cozy underwater theme. Built in 24 hours for FullyHacks 2026 (April 18–19).

## Approach

The core loop is the standard pomodoro structure: focus → short break → focus → long break. Every completed focus block advances the player through a deep-sea environment, with art and music telegraphing the rhythm of the session. The break phases are quieter and gentler so the contrast actually feels like rest.

We scoped aggressively. Our first MVP was way too ambitious for a 24-hour build, so we cut features down to what we could finish well: the timer loop, the underwater scene, and the mood-shift between focus and break.

## Tech

- **Unity** — engine for the whole game
- **C#** — game logic and timer state machine
- **GitHub Desktop** — version control across the three-person team
- **Custom assets** — most pixel art and the soundtrack were made by the team during the event

Team: Marcos Garcia (programmer), Brian Hlonggul (programmer), Joshua Marquez (programmer + art + music).

## Outcome

Shipped a playable build to itch.io within the deadline, plus a video demo. It's intentionally small — closer to a vertical slice than a finished product — but it's a real working pomodoro timer wrapped in a real working game.

This was my first hackathon and my first real Unity project. Most of the 24 hours was spent learning the engine in place, which slowed early progress but paid off near the end when we started recognizing patterns and shipping features faster. If we picked it up again, the obvious next steps are progressive boss-fights between sessions and a small cosmetic shop on the break screen.
