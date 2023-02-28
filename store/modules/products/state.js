const state = {
  activeProduct: null,
  search: "",
  products: [
    {
      id: 1,
      title: "Night City Cruising in GTA Vice City Definitive Edition",
      name: "Gta Channel",
      cover: "https://i.ytimg.com/vi/RfJIhNURUc8/maxresdefault.jpg",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENYuQApXunBHXyeolCeySCpvx_2CjNhcIsmxohmFbIVvXtfvE_LDBSeb1OhiNyVKV07E&usqp=CAU",
      views: "121k ნახვა",
      categoryId: 7
    },
    {
      id: 2,
      title: "ერისიონი ყაზბეგური",
      name: "Erision Channel",
      cover:
        "https://cdn.imedi.ge/new/V/2105/30/38/39/VURVEX1QQka5SCrp9gCxYQ/sample-20210517_230324-flv_snapshot_17-32_-2021-05-17_23-23-31.jpg",
      photo:
        "https://upload.wikimedia.org/wikipedia/ka/1/13/%E1%83%94%E1%83%A0%E1%83%98%E1%83%A1%E1%83%98%E1%83%9D%E1%83%9C%E1%83%98%E1%83%A1_%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D.png",
      views: "115k ნახვა",
      categoryId: 10
    },
    {
      id: 3,
      title: "ნართები ყაზბეგური",
      name: "Dance Georgia",
      cover: "https://i.ytimg.com/vi/t2vST0nt_ns/maxresdefault.jpg",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Georgian_dance_3.jpg",
      views: "101k ნახვა",
      categoryId: 9
    },
    {
      id: 4,
      title: "სუხიშვილები ცდო",
      name: "sukhishvili Channel",
      cover: "https://i.ytimg.com/vi/ANwmys5SaQY/maxresdefault.jpg",
      photo:
        "https://ge.igotoworld.com/frontend/webcontent/websites/1/images/gallery/40925_370x246_bycetxgxzmvbpotdnclmzbjbhfzi.jpg",
      views: "122k ნახვა",
      categoryId: 9
    },
    {
      id: 5,
      title: "Gustavo Santaolalla - Babel (Otnicka Remix)",
      name: "Music Channel",
      cover:
        "https://i.ytimg.com/vi/q7QyKLN25EY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGIgYihiMA8=&rs=AOn4CLALFbhEhoh_QockAtXLfRt2Y25j7A",
      photo: "https://www.zong.com.pk/assets/images/music/channel_hero_sm.jpg",
      views: "199k ნახვა",
      categoryId: 3
    },
    {
      id: 6,
      title: "Naruto Shippuden - Tragic (Anigam3 Remix) [SM Release]",
      name: "Anime Channel",
      cover: "https://i.ytimg.com/vi/oabl6jc0xJo/maxresdefault.jpg",
      photo:
        "https://i.pinimg.com/originals/1a/2d/1a/1a2d1a737e96a3565e4b78468f2430d3.jpg",
      views: "124k ნახვა",
      categoryId: 2
    },
    {
      id: 7,
      title: "Goku Vs. Jiren「AMV」- Get Me Out",
      name: "DragonBall Channel",
      cover: "https://i.ytimg.com/vi/OSyKhqDsW14/maxresdefault.jpg",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdXC2iQ5iJPCEhIHQKgY3_2VxHAMo8QGj5A&usqp=CAU",
      views: "121k ნახვა",
      categoryId: 2
    },
    {
      id: 8,
      title: "Naruto Saddest Soundtracks Mix",
      name: "Naruto Channel",
      cover: "https://i.ytimg.com/vi/YR7dyQa-8q0/maxresdefault.jpg",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rHlNqodMqoKoWRj4w8wrLLNIQjh6AuZb6w&usqp=CAU",
      views: "125k ნახვა",
      categoryId: 2
    },
    {
      id: 9,
      title: "Gazapizm - Kalbim Çukurda ft. Cem Adrian",
      name: "Cukur Channel",
      cover:
        "https://i.ytimg.com/vi/pug7nqLd8u4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBT6YTz7sC-TS6hXBE508jonaWeWA",
      photo:
        "https://w0.peakpx.com/wallpaper/73/1004/HD-wallpaper-yamackocovali-cukurs-vartolu-thumbnail.jpg",
      views: "122k ნახვა",
      categoryId: 3
    },
    {
      id: 10,
      title:
        "West Side 2Pac, Pop Smoke, Biggie, DMX, Eazy E, Ice Cube, Dr Dre, NWA, Nipsey, Snoop Dogg",
      name: "Hip=Hop Channel",
      cover: "https://i.ytimg.com/vi/Oi-C2npBCYI/maxresdefault.jpg",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCpKZ9lHFVn6fQMfSOHMzNNkZSns_9RfK-g&usqp=CAU",
      views: "100k ნახვა",
      categoryId: 8
    },
    {
      id: 11,
      title: "The Lord of the Rings: The Fellowship of the Ring FuLLMovie HD",
      name: "Movie Channel",
      cover:
        "https://uk.imageservice.sky.com/pcms/54a43326-d0cd-11ea-a8ec-0bf436b2a4fe/16_9",
      photo:
        "https://i.pinimg.com/550x/5a/70/9a/5a709ac3e31764381b40c74e2d6269d6.jpg",
      views: "121k ნახვა",
      categoryId: 5
    },
    {
      id: 12,
      title: "Naruto ( Kakashi Hatake)",
      name: "Naruto Channel",
      cover: "https://i.ytimg.com/vi/XAwU7x1w1Ts/maxresdefault.jpg",
      photo: "https://images5.alphacoders.com/975/975315.jpg",
      views: "122k ნახვა",
      categoryId: 2
    },
    {
      id: 13,
      title: "Jariko-U (Original Mix)",
      name: "Music Channel",
      cover:
        "https://i.ytimg.com/vi/qdNf0YXpyhY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLAO4mSD66-0uRkjxJLoJcua0fpZqQ",
      photo:
        "https://w0.peakpx.com/wallpaper/717/37/HD-wallpaper-moon-black-music-night.jpg",
      views: "123k ნახვა",
      categoryId: 3
    },
    {
      id: 14,
      title: "GTA სან ანდრეასი - განხილვა",
      name: "Gaming Channel",
      cover: "https://i.ytimg.com/vi/_rpCebBpjnY/maxresdefault.jpg",
      photo:
        "https://i.pinimg.com/originals/1d/4d/04/1d4d04335549fa2cff0e000932c9f17b.jpg",
      views: "125k ნახვა",
      categoryId: 7
    },
    {
      id: 15,
      title: "Gta Vice City - განხილვა",
      name: "Gta Channel",
      cover: "https://i.ytimg.com/vi/jXMnHGpo2wk/maxresdefault.jpg",
      photo: "https://wallpaperaccess.com/full/1269941.jpg",
      views: "130k ნახვა",
      categoryId: 7
    },
    {
      id: 16,
      title: "Miyagi- Kolibri",
      name: "Song Channel",
      cover: "https://i.ytimg.com/vi/pz2Ixqni3_k/maxresdefault.jpg",
      photo: "https://wallpaper.dog/large/20466209.jpg",
      views: "121k ნახვა",
      categoryId: 6
    },
  ],
  categoryId: 1,
  cart: [],
};
export default state;
