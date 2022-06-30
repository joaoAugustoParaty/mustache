import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (_req: Request, _res: Response)=>{
    let age: number = 10; 
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }
       
    

    _res.render('pages/home', {
        name: 'Joao',
        lastName: 'Austo',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20},

        ],
        frasesDoDia: [
          
        ]

    });

});

router.get('/contato', (_req: Request, _res: Response)=>{
    _res.render('pages/contato');

});

router.get('/sobre', (_req: Request, _res: Response)=>{
    _res.render('pages/sobre');

});

router.get('/nome', (_req: Request, _res: Response) => {
    
    let nome: string = _req.query.nome as string;
 _res.render('pages/nome',{
    nome
 });
});

export default router;