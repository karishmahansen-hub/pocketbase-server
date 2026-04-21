FROM debian:bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip -o pb.zip \
    && unzip pb.zip \
    && rm pb.zip

EXPOSE 10000

CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
