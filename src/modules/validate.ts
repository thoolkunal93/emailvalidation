import { isEmail} from '../validations/regex.js';
import { checkSMTP } from '../modules/smtp.js';
import { getBestMx } from '../modules/dns.js';

export const validate = async (email: string) => {

	const regexResponse = isEmail(email);
	const response = {
		status: false,
		error: '',
		message: ''
	}
	
	if (regexResponse) {
		response.error = regexResponse;
		return response;
	}

	const res = await getBestMx(email.split('@')[1])
		.then(async (d: any) => 
			{
				if (d && d["exchange"]) {
					const smtpRes = await checkSMTP('name@example.org', email, d["exchange"]).then((data: any) => {
						response.status =  data == 'Success' ? true : false,
						response.error =  data == 'Success' ? '' : data,
						response.message =  data

						return response;
					});

					return smtpRes;
				} else {
					
					response.status =  false;
					response.error =  'No  Mx Records Found';

					return response;
				}
				
			}
		);

		return res;
}