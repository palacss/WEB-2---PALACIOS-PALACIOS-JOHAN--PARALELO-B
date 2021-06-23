const mongoose= require("mongoose")
const axios  = require("axios").default;
//cheerio es jQuery en el servidor
const cheerio = require("cheerio");
const cron = require("node-cron");

const {MONGO_URI} = require('./config');
const { Noticia } = require("./models");

mongoose.connect( MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true } );

cron.schedule("* * * * *", 
async () => {
    
    // 1. conectarnos a la pAgina web de CNN en espanol
    const html = await  axios.get("https://cnnespanol.cnn.com/")  ;
    //2. cargar el html de la pAgina para poder trabajar con el
    const $ =  cheerio.load(html.data);
    const titulos =   $(".news__title");
    let arregloNoticias= []
    //3. filtrar del HTML solo las noticias
    titulos.each((index, element)=>{
        //4. guardar las noticias en la base de datos
        const ObjetoNoticia=
        {
            titulo:  $(element).text() ,
            enlace:  $(element).children().attr("href") 
        }
        arregloNoticias = [ ...arregloNoticias, ObjetoNoticia ];

        
    })
    Noticia.create(arregloNoticias);
    //5. que esta informaciOn se guarde cada cierto tiempo definido por nosotros.
}
)
