# Whisper

gdm_whisper

GDM Back-end engineer test Project

![Static Badge](https://img.shields.io/badge/Converage-0%25-green)

## Description

Whisper is a microservice API server with the purpose to consume messages sent to the Contact Queue to the RabbitMQ  from [Forge API](http://github.com/LucasRodriguesOliveira/gdm_forge) and [Scribe API](http://github.com/LucasRodriguesOliveira/gdm_scribe) with details about the integration progress, then, connect with Web Sockets to the [Hall](http://github.com/LucasRodriguesOliveira/gdm_hall) to give the user a feasible and trustable source of feedback and allow the user to track the progress.

## Project Setup

Highly recommended to use docker for this project

```bash
$ docker compose up --build -d
# Allow to see logs only about the application
$ docker logs --follow gdm_whisper-api-1
```

At this point, probably you should see a error log stating that the application could not connect to the transport. That's fine, since the RabbitMQ Container takes a while to truly start and be available. Don't worry, the application itself will reconnect and keep working.

## Tests

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Resources

Most details can be found inside the GDM Project Documentation on Eraser

## License

Forge is [MIT licensed](https://github.com/LucasRodriguesOliveira/gdm_whisper/blob/master/LICENSE).

