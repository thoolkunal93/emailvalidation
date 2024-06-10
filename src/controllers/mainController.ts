
import { Request, Response } from 'express';
import { validate } from '../modules/validate.js';

class Main {
	public static index(req: Request, res: Response) {
		
		return res.render('index.pug', {data: {}});	
		
	}

	public static postEmail(req: Request, res: Response) {
		validate(req.body.email)
		.then((data: any) => {
			return res.render('index.pug', {data});	
		})
	}
}

export default Main;