# Tridion Sites - Copyleaks Extension(Plagiarism Checker)

This Copyleaks Extension helps to check Plagiarism of the original content within the Tridion Platform using Copyleaks APIs

## Prerequisites

1) Node Js Latest

2) Tridion Sites 10.1
	https://www.rws.com/
	
3) Webhooks server

4) Copyleaks Credentials
	https://copyleaks.com/
	

## Configure


1) Navigate to root directory of the Extension

2) Update the following json in copyleaks-addon.config.json file

	EMAIL:Copyleaks email Id
	API_KEY : API Key for copyleaks scan
	PROXY_SERVER_BASE_URL : proxy server url
	WEB_HOOKS_URL : webhooks url from proxy server
	WEB_HOOKS_NEWRESULT : webhooks url from proxy server

```json
	
	{
		"configuration": {
			"copyleaks-extension": {            
				"EMAIL":"",
				"API_KEY":"",
				"PROXY_SERVER_BASE_URL":"http://localhost:5000",
				"WEB_HOOKS_URL":"https://domain.com/webhooks",
				"WEB_HOOKS_NEWRESULT":"https://domain.com/newResult"
			}
		}
	}

```
3) Navigate to Access Management Application tab and click on Tridion Sites Experience space and enter Allowed redirect URLS as below
	
	https://localhost:3000/ui/signin-oidc
	
4) Update the target(Tridion Sites CM) URL in package.json file as below
	
```json
	"dev": "webpack serve --config ./webpack.dev.config.js --progress --env target=https://domain.com manifest=../manifest.json config=../copyleaks-addon.config.json"
```
	
	where 
		target = https://domain.com (tridion sites cm url)
		

## Installation


1) Navigate to copyleaks-extension folder and run the below command to install node module dependecies 
	
	npm install
	
	
	
## Usage

 
To run the application locally:


1) Navigate to copyleaks-extension folder and run the command 
	
		npm run dev
		
2) Browse the url https://localhost:3010/ui

3) Open the publication and navigate to components

4) Select the component 

5) After selecting the component the copyleaks scan properties icon will appear on the right side panel 

6) Click on the icon

7) This checks the component content copyleaks details if the component is already scanned for copyleaks plagiarism-checker

8) If not scanned already click on the scan component button 

9) After clicking on the scan component it will take some time get the results using the webhooks 

10) Once the results are available from the webhooks you can check the copyleaked content details



## Deploy


Deploy the extension to Tridion Sites addon manager


1) Navigate to copyleaks-extension folder and run the following command to build and pack the extension

	npm run build
	
	npm run pack
	
	
2) Navigate to addons manager using the url

	e.g: https://addons.domain:83/addon/ui
	
3) click on Upload Add-on Package

4) Select the zip created in above step 1 and click open

5) Click on the uploaded zip file which navigates to extension details screen

6) Click on Upload button to upload the Json file(copyleaks-addon.config.json) available in the copyleaks-addon folder 

7) This should enable the uploaded addon file(copyleaks extension) and can be checked by navigating to Tridion Sites CM components.


# Webhooks Server


## Setup

1) Navigate to copyleaks-webhooks-server and run the command npm install to install node dependecy modules

2) Run the command node app.js to start the webhooks proxy server
	
	

 	
	
