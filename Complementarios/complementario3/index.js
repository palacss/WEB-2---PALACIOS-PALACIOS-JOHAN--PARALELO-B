const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;

const { MONGO_URI } = require("./config");
const { Noticias } = require("./models");


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


cron.schedule("* * * *", 


async () => {

    const html = await axios.get("https://www.expreso.ec/");



    const $ = cheerio.load(html.data);

    const titulos = $(".headline");

    let arregloNoticias=[];

    titulos.each((index, element) => {

        const Noticia = {
            titulo: $(element).text().toString(),
            enlace: $(element).children().attr("href")
        }
        
        arregloNoticias=[...arregloNoticias, Noticia]
    })
    Noticias.create(arregloNoticias);
});