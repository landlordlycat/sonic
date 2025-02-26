FROM golang:1.19.3-alpine as builder

RUN apk --no-cache add git ca-certificates gcc g++ upx

WORKDIR /go/src/github.com/go-sonic/

RUN git clone --recursive --depth 1 https://github.com/go-sonic/sonic.git

WORKDIR /go/src/github.com/go-sonic/sonic

ENV GOPROXY=https://goproxy.cn
RUN CGO_ENABLED=1 GOOS=linux go build -o sonic -ldflags="-s -w" -trimpath . && \
    upx  sonic -o upx_sonic && \
    mv -f upx_sonic sonic

RUN mkdir -p /app/conf && \
    mkdir /app/resources && \
    cp -r /go/src/github.com/go-sonic/sonic/sonic /app/ && \
    cp -r /go/src/github.com/go-sonic/sonic/conf /app/conf && \
    cp -r /go/src/github.com/go-sonic/sonic/resources /app/ && \
    cp /go/src/github.com/go-sonic/sonic/scripts/docker_init.sh /app/

FROM alpine:latest as prod

COPY --from=builder /app/ /app/

VOLUME /sonic
EXPOSE 8080

WORKDIR /sonic
CMD /app/docker_init.sh && /app/sonic -config /sonic/conf/config.yaml