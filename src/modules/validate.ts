import { isEmail} from '../validations/regex.js';
import { checkSMTP } from '../modules/smtp.js';
import { getBestMx } from '../modules/dns.js';

/**
 * async Validate Email
 * @param {string} email [description]
 */
export const validate = async (email: string) => {
	//Validate Email for regex
	const regexResponse = isEmail(email);
	
	//Sample Response Output
	const response = {
		status: false,
		error: '',
		message: ''
	}
	
	//If Regex Fail send error response
	if (regexResponse) {
		response.error = regexResponse;
		return response;
	}

	//Get MX record for the domain
	const res = await getBestMx(email.split('@')[1])
		.then(async (d: any) => 
			{
				if (d && d["exchange"]) {

					//Check from socket call send RTC for validating email
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