# TrophyBoard

## Development

```bash
# setup environment (for correct file permissions)
cp .env.example .env

# setup containers
docker compose up --build -d

# for dependency management, run npm commands in context of container
docker compose exec api bash

# npm i
# npm run dev   # and so on
```

