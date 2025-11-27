#!/bin/bash
echo "Starting backend server..."
cd ../backend
uvicorn src.main:app --reload
