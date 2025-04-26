# Whisper

gdm_whisper

GDM Back-end engineer test Project

## Description

Whisper is a microservice API server with the purpose to consume messages sent to the Contact Queue to the RabbitMQ  from [Forge API](http://github.com/LucasRodriguesOliveira/gdm_forge) and [Scribe API](http://github.com/LucasRodriguesOliveira/gdm_scribe) with details about the integration progress, then, connect with Web Sockets to the [Hall](http://github.com/LucasRodriguesOliveira/gdm_hall) to give the user a feasible and trustable source of feedback and allow the user to track the progress.

## Project Setup

Highly recommended to use docker for this project

```bash
$ docker compose up --build -d

$ docker logs --follow gdm_whisper-api-1
# Allow to see logs only about the application
```

At this point, probably you should see a error log stating that the application could not connect to the transport. That's fine, since the RabbitMQ Container takes a while to truly start and be available. Don't worry, the application itself will reconnect and keep working.

But, if you worry a lot...

Try this instead:

```bash
# only building the service and creating the container (also attaches the service to the container)
$ docker compose create --build

$ docker start gdm_whisper-rmq-1

$ docker logs --follow gdm_whisper-rmq-1
# and wait while it starts up
# or
# wait and periodically check the logs
$ docker logs --tail 50 gdm_whisper-rmq-1
```

With the RabbitMQ container up:

```bash
$ docker compose up -d
# or
$ docker start gdm_whisper-api-1

$ docker logs --follow gdm_whisper-api-1
```

And you're done! This project it's pretty straightforward, so you can check the other projects such as [Forge](https://github.com/LucasRodriguesOliveira/gdm_forge), [Scribe](https://github.com/LucasRodriguesOliveira/gdm_scribe) or [Hall](https://github.com/LucasRodriguesOliveira/gdm_hall)

## Resources

Most details can be found inside the GDM Project Documentation on Eraser

## License

Forge is [MIT licensed](https://github.com/LucasRodriguesOliveira/gdm_whisper/blob/master/LICENSE).

