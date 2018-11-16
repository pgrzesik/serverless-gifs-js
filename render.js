module.exports = cat => `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
        <title>Serverless cats!</title>
    </head>
    <body>
      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title">
            Serverless cats!
          </h1>
          <img
            src="${cat.images.downsized.url}"
            alt="${cat.title}"
            height="${cat.images.downsized.height}"
            width="${cat.images.downsized.width}"
          />
          <p class="subtitle">Gifs of kittens are taken from GIPHY.com</p>
        </div>
      </section>
      </body>
    </html>`;
