---
title: "NodeBud"
summary: "AI-powered mock interview coach. Webcam posture and eye-contact analysis plus voice scoring, all in the browser. Built at BroncoHacks 2026."
tags: ["nextjs", "typescript", "ai", "hackathon"]
image: "../../assets/projects/nodebud.png"
repo: "https://github.com/emilyytsai/NodeBud"
demo: "https://nodebud.vercel.app"
date: 2026-04-25
---

## Problem

Practicing for behavioral interviews is awkward. You can rehearse in front of a mirror, but you never get useful feedback on the parts that actually matter — whether you held eye contact, whether your posture read as confident, whether your answer rambled or stayed on the question. Built in 36 hours at BroncoHacks 2026.

## Approach

NodeBud (CareerPrep AI) runs a full mock interview in the browser. The user picks a role, answers prompts on camera, and gets per-question scoring plus aggregate feedback at the end. Three feedback channels run in parallel:

- **Posture and eye contact** — webcam analysis tracking whether the user is facing the camera and holding gaze
- **Voice answer scoring** — speech-to-text on the response, then evaluation against the question
- **Session history** — persistent progress across multiple practice runs

All processing happens locally — video never leaves the browser, which kept the privacy story simple for the demo.

## Tech

- **Next.js + TypeScript** — frontend and routing
- **React** — UI components and state
- **Browser ML APIs** — pose / face detection in-page
- **Vercel** — hosting

## Outcome

Shipped a working demo at the deadline with the three feedback channels wired end-to-end. The hard parts were timing — getting the webcam pipeline, the audio transcription, and the scoring loop to all stay in sync without freezing the page during a question. Most of the second night was profiling and trimming the model loads so the app stayed responsive on a typical laptop.
