# FATE Football ~ Case Study

This repository contains the public case-study website for **FATE Football (Fantasy AI Technical Engine)**, an independent machine-learning and decision-support project for fantasy football.

**Live Deployment Link: https://fate-case-study.vercel.app/**

 The model itself is proprietary.

## What FATE Is

FATE is an end-to-end fantasy-football decision system designed to do more than generate weekly point projections. It combines statistical modeling, simulation, live league context, and roster optimization through three primary layers:

1. **Statistical Projections** - position-aware models estimate player opportunity and expected fantasy production using historical and current pregame information.
2. **Game Simulation Fusion** - Monte Carlo simulation converts point estimates into outcome distributions while preserving football and team-opportunity constraints.
3. **General Manager** - league rules, rosters, ownership, and matchup context are used to generate lineup, waiver, trade, and league-level recommendations.

The historical workflow spans **2010–2025**, covering approximately **83,825 NFL offensive player-week observations** across 16 seasons, with roughly **500 candidate pregame features** before fold-specific pruning. FATE also uses a separate DST modeling path and supplemental rookie-prior data such as draft capital, Combine information, and college production where available.

The system is evaluated using leakage-safe, chronological walk-forward testing. In the current documented benchmark, FATE achieved **5.101 aggregate MAE** versus approximately **5.19 for the ESPN projection benchmark**, while also tracking ranking and decision-quality metrics.

## Proprietary Model Notice

The underlying **FATE model and production system are proprietary and are not included in this repository**.

This public case study does **not** provide the complete source code, model implementation, training pipeline, feature-engineering logic, calibration system, simulation engine, General Manager decision logic, trained model artifacts, private league data, or other internal implementation details required to reproduce FATE.

The material published here is intended to demonstrate the project's architecture, engineering approach, validation methodology, and resulting product experience without releasing the proprietary system itself.

## Data and Integrations

FATE's internal workflow integrates multiple football and league-data sources, including historical NFL statistics, schedules, player and roster information, participation data, injuries, draft and Combine information, college-production inputs for rookie priors, and ESPN fantasy-league state.

Those ingestion and processing systems are part of the proprietary FATE implementation and are not distributed with this website repository.

## Deployment

The case-study site is designed for static deployment and can be hosted through **Vercel**, with the site files maintained in GitHub.

## Project Status

FATE is an independently developed portfolio and research project. It is not affiliated with, endorsed by, or operated by ESPN, the NFL, or any other third-party data provider referenced in the case study.

## Author

**Alexander Tolan-Hoechst**  
GitHub: https://github.com/AlexT-H  
LinkedIn: https://linkedin.com/in/alex-t-h
