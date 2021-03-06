var nodemailer        = require('nodemailer');
var path              = require('path')

var constants         = require('../scripts/constants');
var config            = require(path.join(constants.paths.config, '/config'));
var groupService      = require(constants.paths.services +  '/groups')

var smptOptions       = config.get("email.smtp-options");
var transporter       = nodemailer.createTransport(smptOptions);
var emailTemplate     = require('email-templates').EmailTemplate;

var email = {}

email.sendMailOnRegistration = sendMailOnRegistration;
email.sendMailOnNewVisit = sendMailOnNewVisit;

module.exports = email;

  // send user registration notification
function  sendMailOnRegistration(user) {
  if(config.get('email.send-mails')!="true") return;

  var templateDir = path.join(constants.paths.templates, 'email', 'register');
  var registerMail = new emailTemplate(templateDir);

  registerMail.render(user, function (err, results) {

    if(err){
      return console.log(err);
    }

    var emailId = user.email;

    var mailOptions = {
        from: config.get('email.from'),
        to: emailId, // list of receivers
        subject: 'User registration activation', // Subject line
        text: results.text, // plaintext body
        html: results.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);

    });
  }); // end of register mail render
} // end of sendMailOnRegistration

function sendMailOnNewVisit(visit) {
	console.log("sendMailOnNewVisit")
	console.log("send mail? " + config.get('email.send-mails'));
	if(config.get('email.send-mails')!="true") return;

	var templateDir = path.join(constants.paths.templates, 'email', 'newVisit');
	var mailTemplate = new emailTemplate(templateDir);

console.log(visit);
	mailTemplate.render(visit, function (err, results) {

		if(err){
			return console.log(err);
		}

		var emailIds = [];
		groupService.getUsersByGroup("vManager")
			.then(function(users){
				// console.log("retrieved users");
				// console.log(users);
				users.forEach(function(user){
					emailIds.push(user.email);
				});
				// console.log('emails found')
				console.log(emailIds);
emailIds = "svema@csc.com";
				var mailOptions = {
						from: config.get('email.from'),
						to: emailIds, // list of receivers
						subject: 'New Visit Agenda Submitted', // Subject line
						text: results.text, // plaintext body
						html: results.html // html body
				};

				console.log(mailOptions);

				// send mail with defined transport object
				transporter.sendMail(mailOptions, function(error, info){
					if(error){
							return console.log(error);
					}
					console.log('Message sent: ' + info.response);
				}); // end of transporter.sendMail

			}); // end of getUsersByGroup service call
	}); // end of register mail render
} // end of sendMailOnRegistration

function sendMailOnOwnerChange(visit) {
	console.log("sendMailOnNewVisit")
	console.log("send mail? " + config.get('email.send-mails'));
	if(config.get('email.send-mails')!="true") return;

	var templateDir = path.join(constants.paths.templates, 'email', 'newVisit');
	var mailTemplate = new emailTemplate(templateDir);

	mailTemplate.render(visit, function (err, results) {

		if(err){
			return console.log(err);
		}

		var emailIds = [];
		groupService.getUsersByGroup("vManager")
			.then(function(users){
				console.log("retrieved users");
				console.log(users);
				users.forEach(function(user){
					emailIds.push(user.email);
				});
				console.log('emails found')
				console.log(emailIds);
emailIds = "svema@csc.com";
				var mailOptions = {
						from: config.get('email.from'),
						to: emailIds, // list of receivers
						subject: 'New Visit Agenda Submitted', // Subject line
						text: results.text, // plaintext body
						html: results.html // html body
				};

				console.log(mailOptions);

				// send mail with defined transport object
				transporter.sendMail(mailOptions, function(error, info){
					if(error){
							return console.log(error);
					}
					console.log('Message sent: ' + info.response);
				}); // end of transporter.sendMail

			}); // end of getUsersByGroup service call
	}); // end of register mail render
} // end of sendMailOnRegistration
