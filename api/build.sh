#!/bin/bash
set -e

echo "📦 Downloading Go dependencies..."
go mod download

echo "🔨 Building server..."
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server .

echo "✅ Build complete! Run with: ./server"
