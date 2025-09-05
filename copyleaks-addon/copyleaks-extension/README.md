# Tridion Sites - Copyleaks Extension(Plagiarism Checker)

## Overview

This extension integrates the Copyleaks Plagiarism Detection API with Tridion Sites, enabling users to scan and verify the originality of component content directly within the Tridion platform.

## 🛠️ Prerequisites

Before you begin, ensure the following are available:

1. Node.js (Latest version)
   
	[Download Node.js](https://nodejs.org)

2. Tridion Sites 10.1
   
	[Visit Tridion(RWS)](https://www.rws.com)
	
3. Webhooks Server (Required to receive scan results)

4. **[Copyleaks Account and API Credentials](https://copyleaks.com)**
	

## ⚙️ Configuration


1. Navigate to the extension root directory.

2) **Edit** copyleaks-addon.config.json and provide the following values:

	```json		
	{
		"configuration": {
			"copyleaks-extension": {            
				"EMAIL":"",
				"API_KEY":"",
				"PROXY_SERVER_BASE_URL":"http://localhost:5000",
				"WEB_HOOKS_URL":"https://yourdomain.com/webhooks",
				"WEB_HOOKS_NEWRESULT":"https://yourdomain.com/newResult"
			}
		}
	}
	```

3. **Set up redirect URLs in Tridion**
	
	- Navigate to **Access Management Application.**
	
	- Go to **Tridion Sites Experience Space.**

	- Add the following to **Allowed Redirect URLs:**
  
		https://localhost:3000/ui/signin-oidc

4) **Update Tridion Sites CM target URL** in package.json:
	
	
	```json
		"dev": "webpack serve --config ./webpack.dev.config.js --progress --env target=https://your-tridion-domain manifest=../manifest.json config=../copyleaks-addon.config.json"

	```
	
	- Replace https://your-tridion-domain with the Tridion Sites CM URL.
		

## Installation


1) Install dependencies:
	
	cd copyleaks-extension
	
	npm install
	
	
## ▶️ Usage (Local Development)

1. Start the development server:
	
	npm run dev
		
2) Open your browser and navigate to:

	https://localhost:3010/ui

3) Use the extension:
	
	- Open a **publication**, then navigate to **Components.**

	- Select a component.

	- The **Copyleaks Scan** icon will appear in the right-side panel. 

	- Click the icon to view scan status:
  
       - If the component was already scanned, results will be shown.
	
	   - If not, click Scan Component to initiate a scan.
	
	- Wait for scan completion (results received via webhooks).

	- Once ready, review the plagiarism report.
  



## 🚀 Deployment

To deploy the extension on Tridion Sites:

1. **Build and package the extension:**

	npm run build
	
	npm run pack

2. **Upload to Add-on Manager:**

    - Navigate to addons:

		https://addons.yourdomain:83/addon/ui
	
	- Click **Upload Add-on Package.**

	- Select the ZIP package from the copyleaks-extension folder.

	- After upload:
  
		- Click on the uploaded file to open details.
		
		- Click Upload again and provide the copyleaks-addon.config.json.

## 🌐 Webhooks Server

Used to receive Copyleaks scan results.


### Setup Instructions

1. Navigate to the webhooks server directory:
   
   cd copyleaks-webhooks-server


2. Install dependencies: 

	npm install

3. Start the webhook server:

	node app.js

## ✅ Summary	
	
| Task          | Command / URL                                          |
| ------------- | ------------------------------------------------------ |
| Install       | `npm install`                                          |
| Run Dev       | `npm run dev`                                          |
| Build         | `npm run build`                                        |
| Pack          | `npm run pack`                                         |
| Web UI        | [https://localhost:3010/ui](https://localhost:3010/ui) |
| Addon Manager | `https://addons.yourdomain:83/addon/ui`                |

 	
	
