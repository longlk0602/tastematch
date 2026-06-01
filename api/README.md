# TasteMatch Golang Backend

Realtime WebSocket server for TasteMatch - a group decision-making app.

## Features

- WebSocket server for real-time communication
- In-memory room management with 4-character room codes
- Support for creating, joining, voting, and resetting rooms
- Automatic host transfer when host disconnects
- Auto-cleanup of empty rooms after 1 minute

## Build & Run

### Local Development

```bash
# Download dependencies
go mod download

# Run server (listens on :8787)
go run main.go
```

### Docker Build

```bash
# Build image
docker build -t tastematch-api .

# Run container
docker run -p 8787:8787 tastematch-api
```

### Production Build

```bash
bash build.sh
./server
```

## Environment Variables

- `PORT` - Server port (default: 8787)

## WebSocket Messages

### Client → Server

- `create`: Create a new room
  ```json
  {"t":"create","name":"John","deckIds":["item1","item2"]}
  ```

- `join`: Join an existing room
  ```json
  {"t":"join","code":"ABCD","name":"Jane"}
  ```

- `start`: Start voting phase (host only)
  ```json
  {"t":"start"}
  ```

- `vote`: Submit votes
  ```json
  {"t":"vote","votes":{"like":["id1","id2"],"pass":["id3"],"kill":["id4"]}}
  ```

- `reset`: Reset for new round (host only)
  ```json
  {"t":"reset"}
  ```

### Server → Client

- `hello`: Initial handshake with UID
  ```json
  {"t":"hello","uid":"abc123"}
  ```

- `joined`: Confirmation of room join
  ```json
  {"t":"joined","code":"ABCD","uid":"abc123"}
  ```

- `room`: Room state update (broadcast)
  ```json
  {"t":"room","room":{...}}
  ```

- `error`: Error message
  ```json
  {"t":"error","msg":"Không tìm thấy phòng này 🥲"}
  ```
