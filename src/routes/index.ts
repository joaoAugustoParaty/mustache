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
    let idade: string = _req.query.idade as string;
 _res.render('pages/nome',{
    nome,
    idade
 });
});

router.get('/idade', (_req: Request, _res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(_req.query.ano){
    let anoNascimento: number = parseInt(_req.query.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
    }
_res.render('pages/idade', {
    idade,
    mostrarIdade
})
});
export default router;