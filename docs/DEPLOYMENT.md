# Deployment Guide

This document outlines the steps to deploy the AI Supply Chain Platform.

## Backend Deployment

1.  Navigate to the `backend` directory.
2.  Run `pip install -r requirements.txt`.
3.  Run `uvicorn src.main:app --host 0.0.0.0 --port 8000`.

## Frontend Deployment

1.  Navigate to the `frontend` directory.
2.  Run `npm install`.
3.  Run `npm run build`.
4.  Serve the `build` directory.
