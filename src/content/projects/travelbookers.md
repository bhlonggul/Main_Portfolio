---
title: "TravelBookers"
summary: "Collaborative React project — a car rental booking interface. Built with a small team."
tags: ["react", "javascript", "web", "collab"]
image: "../../assets/projects/travelbookers.png"
repo: "https://github.com/NGHades/TravelBookers"
date: 2025-05-15
order: 3
---

## Problem

A team class project to build the web presence for a (fictional) car rental company called Travel Bookers. The site needed to cover the full customer flow — browsing vehicles, filtering, favoriting, viewing details, checking out — plus an admin view for managing inventory and renter info.

The real problem behind the brief was working as a team on a shared frontend for the first time: agreeing on structure, splitting work, and merging without stepping on each other.

## Approach

We picked **React** as the framework and **Vite** as the build tool so the dev loop stayed fast across machines. Pages were broken into focused components (vehicle cards, filter bar, checkout form, admin table) so different team members could own different pieces of the UI without colliding.

The site is structured around four main flows:

- **Home** — vehicle grid with filters and a favorite toggle
- **Vehicle detail** — extended info for a selected car
- **Checkout** — a form to capture renter info
- **Admin** — view active renters, flag overdue vehicles, add new inventory

## Tech

- **React** — component model for the UI
- **Vite** — dev server and build tool
- **JavaScript** — application code
- **HTML / CSS** — layout and styling
- **Node.js + npm** — toolchain

Hosting was an open question at the time of writing — the plan was to try a cloud host first and fall back to local if it didn't pan out for the deadline.

## Outcome

A working multi-page React app covering the customer and admin flows from end to end, built collaboratively over a single semester. The UI hangs together and the four flows talk to each other; the gap is a real backend and database — everything is wired against in-memory or local data, so a future iteration would be picking a database and a host and turning the prototype into something that survives a refresh.

For me, the biggest takeaway was the team workflow itself: branching, code review, and component ownership turned out to be the parts that actually decided whether the project shipped on time.
