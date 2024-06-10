
import { Request, Response } from 'express';
import { validate } from '../modules/validate.js';

class Main {

	/**
	 * index For Get
	 * 
	 * @param {Request}  req Request Object
	 * @param {Response} res Response Object
	 */
	public static index(req: Request, res: Response) {
		return res.render('index.pug', {data: {}});	
	}


	/**
	 * postEmail For Post Method
	 * 
	 * @param {Request}  req Request Object
	 * @param {Response} res Response Object
	 */
	public static postEmail(req: Request, res: Response) {
		//Validate Email
		validate(req.body.email)
		.then((data: any) => {
			return res.render('index.pug', {data});	
		})
	}
}

export default Main;