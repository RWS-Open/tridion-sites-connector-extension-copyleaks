import { useState, useEffect } from "react";
import axios from "axios"
import * as COPYLEAKS_DATA from "../data/Copyleaks";
export interface TokenProps {
    access_token: string;
    ".issued": string;
    ".expires": string
}

const useAccessToken = () => {
    const [auth_token, setAuth_Token] = useState<TokenProps | null>(null);

    useEffect(() => {
        getAccessToken()
    }, [])

    const getAccessToken = async() =>{
        const auth_token = JSON.parse(localStorage.getItem("auth_token") as string)
        if (auth_token !== null) {
            const issuedDate = new Date(auth_token[".issued"]);
            const expiresIn = new Date(auth_token[".expires"]);
            const currentDate = new Date()
            if (currentDate >= expiresIn) {
                await generateAccessToken()
            } else {
                setAuth_Token(auth_token)
            }
        } else {
           await generateAccessToken()
        }
    }
    const generateAccessToken = async () => {
        try {
            const response = await axios.post(`${COPYLEAKS_DATA.default.PROXY_SERVER_BASE_URL}/token`, {
                body: {
                    "email": COPYLEAKS_DATA.default.PROXY_SERVER_BASE_URL,
                    "key": COPYLEAKS_DATA.default.API_KEY
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.data;
            if (response.status === 200) {
                localStorage.setItem("auth_token", JSON.stringify(data))
                setAuth_Token(data)
            } else {
                console.log(`Error generating accesstoken:${response.statusText}`)
            }
        } catch (error) {
            console.log("Failed to generate accesstoken")
        }
    }
    return {
        auth_token
    }
}
