module.exports = {

 assets : {
	"app-css": {
		"dev":[
			"/public/assets/w/styles/layout.css",
			"/public/assets/w/styles/pagestyles.css",
			"/public/assets/w/styles/materialform.css",
			"/public/assets/w/styles/dataview-table.css",
			"/public/assets/w/styles/dataview-panels.css",
			"/public/assets/w/styles/userpicker.css",
			"/public/assets/g/css/sidebar.css"
		],
		"prod":[
			"/public/assets/w/styles/layout.min.css",
			"/public/assets/w/styles/pagestyles.min.css",
			"/public/assets/w/styles/materialform.min.css",
			"/public/assets/w/styles/dataview-table.min.css",
			"/public/assets/w/styles/dataview-panels.min.css",
			"/public/assets/w/styles/userpicker.min.css",
			"/public/assets/g/css/sidebar.css"
		]
	},

	"utils":{
		"dev":[
			"/public/assets/g/js/utils.js"
		],
		"prod":[
			"/public/assets/g/js/utils.js"
		]
	},

	"index":{
		"dev":[
			"/public/assets/w/styles/index.css"
		],
		"prod":[
			"/public/assets/w/styles/index.css"
		]
	},

	"admin":{
		"dev":[
			"/public/mods/admin/users/usersModule.js",
			"/public/mods/admin/users/usersControllerMain.js",
			"/public/mods/admin/users/usersRouter.js"
		],
		"prod":[
			"/public/mods/admin/users/usersModule.js",
			"/public/mods/admin/users/usersControllerMain.js",
			"/public/mods/admin/users/usersRouter.js"
		]
	},

	"directives":{
		"dev":[
			"/public/mods/directives/userprofile/script.js",
			"/public/mods/directives/userdisplay/script.js",
			"/public/mods/directives/user/script.js",
			"/public/mods/directives/datepickerDirective.js"
		],
		"prod":[
			"/public/mods/directives/userprofile/script.js",
			"/public/mods/directives/userdisplay/script.js",
			"/public/mods/directives/user/script.js",
			"/public/mods/directives/datepickerDirective.js"
		]
	},

	"customize":{
		"dev":[
			"/public/mods/keynotes/keynotesModule.js",
			"/public/mods/keynotes/keynotesControllerMain.js",
			"/public/mods/keynotes/keynotesRouter.js",

			"/public/mods/facts/factsModule.js",
			"/public/mods/facts/factsControllerMain.js",
			"/public/mods/facts/factsRouter.js",

			"/public/mods/feedback/feedbackModule.js",
			"/public/mods/feedback/feedbackControllerMain.js",
			"/public/mods/feedback/feedbackRouter.js"
		],
		"prod":[
			"/public/mods/keynotes/keynotesModule.js",
			"/public/mods/keynotes/keynotesControllerMain.js",
			"/public/mods/keynotes/keynotesRouter.js"
		]
	},

	"clients":{
		"dev":[
			"/public/mods/clients/clientsModule.js",
			"/public/mods/clients/clientsControllerMain.js",
			"/public/mods/clients/clientsRouter.js"
		],
		"prod":[
		]
	},

	"visits":{
		"dev":[
			"/public/mods/visits/visitsModule.js",
			"/public/mods/visits/visitsControllerMain.js",
			"/public/mods/visits/visitsRouter.js"
		],
		"prod":[
		]
	},

	"m-common":{
		"dev":[
			"/public/assets/m/css/font.css",
			"/public/assets/m/css/style.css",
			"/public/d/geoLocation/scr.js",
			"/public/d/geoLocation/locator.js",
			"/public/d/geoLocation/locator-tpl.js"
		],
		"prod":[

		]
	},

	"m-main":{
		"dev":[
			"/public/m/home/home.js",
			"/public/m/home/homeCtrl.js"
		]
	},

	"m-facts":{
		"dev":[
			"/public/assets/m/css/fact.css",
			"/public/assets/m/css/lctnGalry.css",

			"/public/m/facts/facts.js",
			"/public/m/facts/factsCtrl.js",
			"/public/m/facts/lctnGalry/lctnGalryCtrl.js"
		],
		"prod":[

		]
	},

	"m-visits":{
		"dev":[
			"/public/m/visits/visits.js",
			"/public/m/visits/visitsCtrl.js"
		]
	},

	"m-sessions":{
		"dev":[
			"/public/m/sessions/sessions.js",
			"/public/m/sessions/sessionsCtrl.js",
			"/public/assets/m/css/sessions.css"
		]
	}

}

};
