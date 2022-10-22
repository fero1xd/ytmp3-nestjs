# YTMP3 NestJs

YTMP3 is an website where you can download youtube video's audio without **Advertisments!**

## Installation

Download the repository then

```bash
  yarn install && yarn start:dev
```

## API Reference

#### Get info about an video

```http
  GET /api/audio/:id
```

| Parameter | Type     | Description      |
| :-------- | :------- | :--------------- |
| `id`\*    | `string` | Youtube Video Id |

#### Download Audio

```http
  POST /api/audio/:id
```

| Parameter | Type     | Description      |
| :-------- | :------- | :--------------- |
| `id`\*    | `string` | Youtube Video Id |

## Customizing Rate Limit

Rate limit settings can be customized in Throttler Module located in app.module file.

## Authors

- [@fero1xd](https://www.github.com/fero1xd)

## License

[MIT](https://choosealicense.com/licenses/mit/)
