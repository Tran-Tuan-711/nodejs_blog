
class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    showDetail(req, res){
        res.send('News Detail');
    }
}

export default new NewsController();