---
title: "Algorithm Visualizer"
summary: "Benchmarking and visualization tool built in Python with Pygame. Runs nine sorting algorithms side-by-side so you can watch them race and compare performance."
tags: ["python", "pygame", "algorithms"]
image: "../../assets/projects/algo-viz.png"
repo: "https://github.com/Ryu-134/cpsc335-sorting-algoithm-analyzer"
date: 2025-09-01
---

## Problem

Sorting algorithms are usually taught with worst-case Big-O on a whiteboard, which makes them feel abstract. We wanted a way to actually *see* the difference between an O(n²) bubble sort and an O(n log n) merge sort — and to back the visual intuition with hard timing data on the same inputs.

## Approach

The repo splits into two complementary parts:

- A **benchmark suite** with stripped-down implementations of each algorithm, optimized for accurate timing (no animation overhead).
- A **visualization mode** built on top of matplotlib that animates the sort step by step, with keyboard navigation to scrub forward and back.

We ran every algorithm against three input shapes — random, already sorted, and reverse sorted — at sizes of 100, 1,000, and 10,000 elements. Results were dumped to a shared spreadsheet and plotted side-by-side.

## Tech

- **Python** — implementation language for all nine algorithms
- **matplotlib** — both for plotting comparison charts and animating the visualizer
- **Google Sheets** — raw timing data across trials and input sizes

The nine algorithms covered: Bubble, Insertion, Selection, Quick, Merge, Heap, Counting, Bucket, and Radix.

## Outcome

The numbers lined up neatly with theory. Quadratic sorts (Bubble, Insertion) were fine on small inputs and unusable past a few thousand elements. Divide-and-conquer sorts (Quick, Merge, Heap) scaled cleanly. Linear-time sorts (Counting, Bucket, Radix) won on large inputs but only because the inputs fit their assumptions about integer ranges and distribution.

For me, the bigger takeaway was how much faster the *visual* version cemented the difference. Watching merge sort fan out and re-merge versus bubble sort grinding one swap at a time made the asymptotic story click in a way the chart alone didn't.
