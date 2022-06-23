import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname,'../public')));

server.use('/', mainRoutes);

//Recurso página não encontrada
server.use((_req: Request, _res: Response) =>{
  _res.status(404).send('Página não encontrada!');
});



server.listen(80);