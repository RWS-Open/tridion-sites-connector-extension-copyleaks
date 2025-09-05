# Tridion Sites - Copyleaks Extension(Plagiarism Checker)

## Overview

This extension integrates the Copyleaks Plagiarism Detection API with Tridion Sites, enabling users to scan and verify the originality of component content directly within the Tridion platform.

## 🛠️ Prerequisites

Before you begin, ensure the following are available:

1. Node.js (Latest version)
   
	[Download Node.js](https://nodejs.org)

2. **[Tridion Sites 10.1](https://www.rws.com)**
	
3. **[Copyleaks Account and API Credentials](https://copyleaks.com)**

4. Webhooks Server (Required to receive scan results)
	

## ⚙️ Configuration

1. Download the extension(copyleaks-extension-1.0.0.zip) from [releases](https://github.com/RWS-Open/tridion-sites-connector-extension-copyleaks/releases)

2. UnZip the package 

3) **Edit** copyleaks-addon.config.json and provide the following values:

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

## 🚀 Deployment

To deploy the extension on Tridion Sites: 

**Upload to Add-on Manager:**

1. Navigate to addons:

		https://addons.yourdomain:83/addon/ui
	
2. Click **Upload Add-on Package.**

3. Select the ZIP package from the copyleaks-extension folder.

4. After upload:
  
5. Click on the uploaded extension to open details.
		
6. Click **Upload** again and provide the copyleaks-addon.config.json.
   

## 🌐 Webhooks Server

Used to receive Copyleaks scan results.


### Setup Instructions

1. Navigate to the webhooks server directory:
   
   cd copyleaks-webhooks-server

2. Install dependencies: 

	npm install

3. Start the webhook server:

	node app.js


## ▶️ Usage (Local Development)

1. Open a **publication**, then navigate to **Components.**

2. Select a component.

3. The **Copyleaks Scan** icon will appear in the right-side panel. 

4. Click the icon to view scan status:

    - If the component was already scanned, results will be shown.

    - If not, click Scan Component to initiate a scan.

5. Wait for scan completion (results received via webhooks).

6. Once ready, review the plagiarism report.
  

 	
	
