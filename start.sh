#!/bin/bash

# Quick Start Script for Asmitha Explores Bookstore

echo "🚀 Starting Asmitha Explores Bookstore..."
echo ""

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed!"
    echo "Please install Java 17 or higher:"
    echo "  macOS: brew install openjdk@17"
    echo "  Or download from: https://adoptium.net/"
    exit 1
fi

# Check Java version
echo "✓ Java found: $(java -version 2>&1 | head -n 1)"

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "⚠️  Maven is not installed!"
    echo "Installing Maven via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install maven
    else
        echo "Please install Maven manually:"
        echo "  macOS: brew install maven"
        echo "  Or download from: https://maven.apache.org/download.cgi"
        exit 1
    fi
fi

echo "✓ Maven found: $(mvn -version | head -n 1)"
echo ""

# Build the project
echo "📦 Building the project..."
mvn clean install -DskipTests

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "🌟 Starting the application..."
    echo "📱 Open your browser to: http://localhost:8080"
    echo "Press Ctrl+C to stop the server"
    echo ""
    mvn spring-boot:run
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

