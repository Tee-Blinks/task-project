import React, {useState} from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import JSBI from "jsbi";
import Web3Modal from "web3modal"


//INTERNAL IMPORT UNISWAP
import {SwapRouter} from "@uniswap/universal-router-sdk";
import {
    TradeType,
     Ether,
      Token,
       CurrencyAmount,
        percent,
    } from "@uniswap/sdk-core";
    import {Trade as V2Trade} from "@uniswap/v2-sdk";
    import {
        pool,
         nearestUsableStick,
          TickMath,
           Tick_SPACING,
            FeeAmount,
             V3Trade,
              Route as V3Route
            } from "@uniswap/v3-sdk";


            import {MixRouterTrade, Trade as RouterTrade} from "@uniswap/router-sdk";
            import IuniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"




        //Internal import


        import {ERC20ABI, web3Provider, CONNECTING_CONTRACT } from "./constants"
        import {shortenAddress, parseErrorMsg} from "../utils/index"


        export const CONTEXT = React.createContext();

        export const PROVIDER = ({children})=>{
            const SWAP_SPHERE = "SWAP SPHERE";
            const [loader, setLoader] = useState(false);
            const [address, setAddress] = useState("");
            const [chainID, setChainID] = useState("");


            //NOTIFICATION
            const notifyError = (msg) => toast.error(msg, {duration: 4000});
            const notifySuccess = (msg) => toast.success(msg, {duration: 4000});


            //CONNECT WALLET FUNCTION
            const connect = async () => {
                try {
                    if(!window.ethereum) return notifyError("plz Install Metamask");

                    const account = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });


                    if(account.length){
                        setAddress(accounts[0])
                    }else{
                        notifyError("sorry, You have No Account")
                    }

                    const provider = await web3Provider();
                    const network = await provider.getNetwork();
                    setChainID
                } catch (error) {
                    const errMsg = parseErrorMsg(error);
                    notifyError(errMsg);
                    console.log(error);
                }
            };


            //LOAD TOKEN DATA
            const LOAD_TOKEN = async(token) => {
                try {
                    const tokenDetail = await CONNECTING_CONTRACT(token);
                    return tokenDetail
                } catch (error) {
                    const errMsg = parseErrorMsg(error);
                    notifyError(errMsg);
                    console.log(error);
                    
                }
            }


            //INTERNAL FUNCTION::
            // To be Continued by Boss Soliu
            //Time stap 35:39
            

        };