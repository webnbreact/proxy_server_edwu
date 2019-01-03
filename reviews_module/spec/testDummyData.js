const reviews = [
    {
        "first_name": "Frederik",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-24T08:00:00.000Z",
        "review_text": "Occaecati ipsam quia. Laudantium voluptas sunt molestiae ad nihil blanditiis dolorem. Nobis ut eveniet deserunt in sunt. Ut ea unde repudiandae autem provident aliquam dicta modi.",
        "review_is_english": 0,
        "review_text_eng": "Veniam quis sapiente. Omnis nihil delectus. Ea eius commodi quis sit ipsam facere. Temporibus similique quasi aliquam magnam.",
        "has_host_response": 1,
        "host_reply_text": "Nemo ut tempora officiis voluptate doloremque aut. Blanditiis voluptatem et distinctio voluptas hic odio ipsam aut debitis. Ducimus dolorem nam qui suscipit sed et est dolorem."
    },
    {
        "first_name": "Carmelo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/cyril_gaillard/128.jpg",
        "room_id": 50,
        "review_date": "2018-05-31T07:00:00.000Z",
        "review_text": "Id sit modi. Natus in id quibusdam. Dignissimos veritatis tempora id voluptate. Ratione eos et tempore vel ipsum aliquam aut dignissimos. Rem dolor laudantium deleniti quos maxime asperiores ullam non. Voluptatem porro cumque.",
        "review_is_english": 1,
        "review_text_eng": "Tempora adipisci animi sit quis quidem rerum vel. Nesciunt sunt a sint inventore. Quos veniam quidem molestiae animi in sed. Officiis fugit iusto quidem et voluptatum.",
        "has_host_response": 1,
        "host_reply_text": "Dolores adipisci dolorem at a laborum natus non ab deserunt. Sapiente aut modi facilis vitae ipsa dolor ratione et. Ipsa voluptate dolor. Qui et fugiat sit quia ea sapiente eligendi omnis fugiat. Nam laborum facilis sit debitis quo numquam ullam aut. Nam doloribus corrupti voluptatum vel ipsam."
    },
    {
        "first_name": "Elfrieda",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg",
        "room_id": 50,
        "review_date": "2018-02-07T08:00:00.000Z",
        "review_text": "Ea tempora quia repellat animi. Voluptatem odio eum est autem. Blanditiis et quos quod sapiente et quas itaque veritatis quibusdam. Fugit asperiores dolores voluptatibus molestias id consequuntur et doloremque. Unde dolorem illo est quas voluptas ut. Nihil perferendis ducimus aut blanditiis quia sint in.",
        "review_is_english": 1,
        "review_text_eng": "Ab debitis totam doloremque expedita molestiae ea voluptatum sit neque. Ullam blanditiis illum error repellat deleniti. Porro et dolore eum quo omnis. Quia est quia minima alias quam dolorum. Quo deserunt autem qui quia eligendi. Tenetur minima doloribus.",
        "has_host_response": 1,
        "host_reply_text": "Sit laborum ut non nihil sed. Assumenda vero sed. Tenetur aut rem error quaerat nihil culpa at. Sint perspiciatis sunt sapiente dolorem consectetur veritatis dolorem enim. Consectetur molestiae amet veniam qui et quam tempore soluta sint."
    },
    {
        "first_name": "Iva",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-06T08:00:00.000Z",
        "review_text": "Et voluptatem quia neque eum consequuntur unde sit necessitatibus. Nisi id dicta consectetur labore temporibus est quisquam. Est optio ducimus atque itaque fugiat. Rerum porro id temporibus earum in dolores est. Iure hic ab illo qui odit numquam quis inventore maiores. Ea sunt est.",
        "review_is_english": 0,
        "review_text_eng": "In velit voluptatem exercitationem et rem. Ipsa est sed sint totam molestiae facere voluptatum dolor nam. Enim rem beatae. Reiciendis est fugiat laudantium voluptatem optio placeat sed. Voluptatem et doloremque aut possimus. Consequatur dicta dolorem qui.",
        "has_host_response": 0,
        "host_reply_text": "Earum ut aut nam temporibus libero aut dolor. Fugiat quia impedit sequi. Natus voluptas ut non eum veniam quas et explicabo debitis. Minima similique commodi velit iste. Beatae veritatis magni earum sed omnis deserunt et ullam."
    },
    {
        "first_name": "Arnaldo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-02T07:00:00.000Z",
        "review_text": "Repellat quidem officiis itaque recusandae neque. Est ratione maxime hic repellendus. Facere et et consectetur.",
        "review_is_english": 0,
        "review_text_eng": "Assumenda quae consequuntur quisquam et magni est deserunt. Necessitatibus adipisci rerum est magnam quo et hic eius. Dolores quisquam dolor voluptatum sint et. Voluptatum voluptates et minus. Et repudiandae qui unde quia porro.",
        "has_host_response": 1,
        "host_reply_text": "Enim eum nesciunt at aut. Ipsam cumque quo dolorem saepe quisquam nobis reprehenderit adipisci officiis. In expedita facilis et nisi quisquam fuga quis. Beatae est debitis qui voluptatibus consequuntur."
    },
    {
        "first_name": "Ova",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/noxdzine/128.jpg",
        "room_id": 50,
        "review_date": "2018-01-03T08:00:00.000Z",
        "review_text": "Natus consequuntur nostrum sunt cupiditate magni aut non rem. Fuga qui fuga et reprehenderit rem voluptate voluptatem aut. Necessitatibus doloribus tempora enim accusantium. Repudiandae molestiae rerum.",
        "review_is_english": 0,
        "review_text_eng": "Similique delectus quia consequuntur. At ipsa enim quis magnam quis placeat. Laudantium et quaerat ipsa nihil. Quisquam facere soluta et at neque ad. Sit voluptas qui nam ipsum mollitia. Ullam provident voluptatem.",
        "has_host_response": 1,
        "host_reply_text": "Itaque sunt eos voluptate et. Aliquid quo reprehenderit et exercitationem et molestias sequi est accusamus. Eos ad animi in. Cumque necessitatibus est ratione quia et a ipsum. Voluptatem autem recusandae maxime numquam laboriosam non. Et ad dolores et alias culpa dolores et recusandae."
    },
    {
        "first_name": "Elfrieda",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg",
        "room_id": 50,
        "review_date": "2018-02-07T08:00:00.000Z",
        "review_text": "Ea tempora quia repellat animi. Voluptatem odio eum est autem. Blanditiis et quos quod sapiente et quas itaque veritatis quibusdam. Fugit asperiores dolores voluptatibus molestias id consequuntur et doloremque. Unde dolorem illo est quas voluptas ut. Nihil perferendis ducimus aut blanditiis quia sint in.",
        "review_is_english": 1,
        "review_text_eng": "Ab debitis totam doloremque expedita molestiae ea voluptatum sit neque. Ullam blanditiis illum error repellat deleniti. Porro et dolore eum quo omnis. Quia est quia minima alias quam dolorum. Quo deserunt autem qui quia eligendi. Tenetur minima doloribus.",
        "has_host_response": 1,
        "host_reply_text": "Sit laborum ut non nihil sed. Assumenda vero sed. Tenetur aut rem error quaerat nihil culpa at. Sint perspiciatis sunt sapiente dolorem consectetur veritatis dolorem enim. Consectetur molestiae amet veniam qui et quam tempore soluta sint."
    },
    {
        "first_name": "Iva",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-06T08:00:00.000Z",
        "review_text": "Et voluptatem quia neque eum consequuntur unde sit necessitatibus. Nisi id dicta consectetur labore temporibus est quisquam. Est optio ducimus atque itaque fugiat. Rerum porro id temporibus earum in dolores est. Iure hic ab illo qui odit numquam quis inventore maiores. Ea sunt est.",
        "review_is_english": 0,
        "review_text_eng": "In velit voluptatem exercitationem et rem. Ipsa est sed sint totam molestiae facere voluptatum dolor nam. Enim rem beatae. Reiciendis est fugiat laudantium voluptatem optio placeat sed. Voluptatem et doloremque aut possimus. Consequatur dicta dolorem qui.",
        "has_host_response": 0,
        "host_reply_text": "Earum ut aut nam temporibus libero aut dolor. Fugiat quia impedit sequi. Natus voluptas ut non eum veniam quas et explicabo debitis. Minima similique commodi velit iste. Beatae veritatis magni earum sed omnis deserunt et ullam."
    },
    {
        "first_name": "Arnaldo",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg",
        "room_id": 50,
        "review_date": "2018-11-02T07:00:00.000Z",
        "review_text": "Repellat quidem officiis itaque recusandae neque. Est ratione maxime hic repellendus. Facere et et consectetur.",
        "review_is_english": 0,
        "review_text_eng": "Assumenda quae consequuntur quisquam et magni est deserunt. Necessitatibus adipisci rerum est magnam quo et hic eius. Dolores quisquam dolor voluptatum sint et. Voluptatum voluptates et minus. Et repudiandae qui unde quia porro.",
        "has_host_response": 1,
        "host_reply_text": "Enim eum nesciunt at aut. Ipsam cumque quo dolorem saepe quisquam nobis reprehenderit adipisci officiis. In expedita facilis et nisi quisquam fuga quis. Beatae est debitis qui voluptatibus consequuntur."
    },
    {
        "first_name": "Ova",
        "image_photo_path": "https://s3.amazonaws.com/uifaces/faces/twitter/noxdzine/128.jpg",
        "room_id": 50,
        "review_date": "2018-01-03T08:00:00.000Z",
        "review_text": "Natus consequuntur nostrum sunt cupiditate magni aut non rem. Fuga qui fuga et reprehenderit rem voluptate voluptatem aut. Necessitatibus doloribus tempora enim accusantium. Repudiandae molestiae rerum.",
        "review_is_english": 0,
        "review_text_eng": "Similique delectus quia consequuntur. At ipsa enim quis magnam quis placeat. Laudantium et quaerat ipsa nihil. Quisquam facere soluta et at neque ad. Sit voluptas qui nam ipsum mollitia. Ullam provident voluptatem.",
        "has_host_response": 1,
        "host_reply_text": "Itaque sunt eos voluptate et. Aliquid quo reprehenderit et exercitationem et molestias sequi est accusamus. Eos ad animi in. Cumque necessitatibus est ratione quia et a ipsum. Voluptatem autem recusandae maxime numquam laboriosam non. Et ad dolores et alias culpa dolores et recusandae."
    },
]

const stars = [
    {
        "accuracy": 2.3667,
        "location": 1.9333,
        "communication": 1.6333,
        "check_in": 2.0333,
        "cleanliness": 1.9333,
        "value": 1.7
    }
];

export { reviews, stars };