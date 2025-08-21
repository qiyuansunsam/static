
#!/bin/bash

echo "Starting static portfolio development server..."

# Function to check if port is in use (only if lsof is available)
check_port() {
    local port=$1
    local service=$2
    if command -v lsof &> /dev/null; then
        if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
            echo "Port $port is already in use by another process."
            echo "Killing process on port $port for $service..."
            kill -9 $(lsof -t -i:$port) 2>/dev/null || true
            sleep 2
        fi
    else
        echo "lsof not available, skipping port check"
    fi
}

# Check and free port 5173 (Vite default)
echo "Checking port 5173..."
check_port 5173 "client"

echo "Starting client development server..."
cd client
npm run dev &
CLIENT_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "Stopping development server..."
    kill $CLIENT_PID 2>/dev/null || true
    exit
}

# Trap cleanup function on script exit
trap cleanup EXIT INT TERM

echo "Development server started at http://localhost:5173"
echo "Press Ctrl+C to stop."
wait