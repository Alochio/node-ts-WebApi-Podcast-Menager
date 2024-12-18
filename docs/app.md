# Nome do Aplicativo

Podcast Menager

### Descrição

Um app ao estilo Netflix, aonde possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias -[saúde, bodybuilder, mentalidade, humor, esporte]
- Filtrar episódios por nome de podcasts

## Como

### Feature

Listar os episódios podcasts em sessões de categorias

### Como implementar

GET: Retorna lista de episódios

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover:
      "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q/maxresdefault.jpg",

    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&ab_channel=FlowPodcast",
    categories: ["saúde", "bodybuilder", "esporte"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover:
      "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I&ab_channel=FlowPodcast",
    categories: ["esporte", "corrida"],
  },
];
```

GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast
