/* global BigInt */
import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import Web3 from "web3";
import { connect } from "react-redux";
import {
  apiBodyMessages,
  validationsMessages,
  GAS_VALUE
} from "../../constants";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import toast from "react-hot-toast";


const DialogContainer = styled.div`
  width: 466px;
  height: 325px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const LoaderSection = styled.div`
  width: 466px;
  height: 325px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const ErrorPopup = styled.div`
  width: 466px;
  min-height: 100px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DeleteText = styled.span`
  margin: 12px 0 0 20px;
  width: 63px;
  height: 24px;
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  white-space: nowrap;
  opacity: 1;
`;
const CrossIcon = styled.img`
  margin: 12px 22.69px 0 0;
  width: 15px;
  height: 15px;
  background: 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
`;
const Line = styled.hr`
  margin: 11.19px 0 24.81px 0;
  width: 466px;
`;
const DialogText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CancelButton = styled.button`
  width: 121px;
  height: 44px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  outline: none;
  margin-right: 21.62px;
`;
const DeleteButton = styled.button`
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
`;
const DeleteButtonDisable = styled.div`
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.7;
  outline: none;
  border: none;
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 0 26px 0;
`;
const MidSection = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 0 31px 0;
`;
const InputContainer = styled.div`
  margin: 0 0 19px 0;
  height: 50px;
`;
const InputDiv = styled.input`
  width: 341px;
  height: 40px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  ::placeholder {
    padding: 0px 0px 0px 7px;
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    opacity: 1;
  }
  :focus {
    outline: 2px solid #8ca6f0;
  }
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;
const SecondHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 62px 0 53px 0;
`;
const ThirdHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 50px 0 46px 0;
`;
const TextDiv = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const PauseText = styled.span`
  font: normal normal normal 20px/24px Inter;
  letter-spacing: 0px;
  color: #101010;
  opacity: 1;
`;
const ConfirmDiv = styled.span`
  width: 374px;
  height: 17px;
`;
const ConfirmText = styled.span`
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;
const Img = styled.img`
  width: 78px;
  height: 78px;
`;
const ErrorContainer = styled.p`
  width: 341px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Error = styled.span`
  color: #ff0000;
  font: normal normal normal 15px/21px Inter;
  padding: 4px 0 0 2px;
  text-align: left;
`;

const ErrorPopupContainer = styled.div`
  width: 466px;
  height: 274px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;

const ErrorPopupText = styled.div`
  max-width: 352px;
  font-size: 16px;
  color: #4B4B4B;
  letter-spacing: 0px;
  font: normal normal normal 16px/20px Inter;
  text-align: center;
`;

const ErrorIconsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 24px;
`;

const ErrorPopupIcons = styled.img`
  width: 34px;
  height: 34px;
`;

const ErrorPopupIconText2 = styled.div`
  max-width: 122px;
  font-size: 16px;
  color: #4B4B4B;
  letter-spacing: 0px;
  font: normal normal normal 16px/20px Inter;
  text-align: center;
  padding-top: 6px;
`;

const ErrorPopupIconText = styled.div`
  max-width: 108px;
  font-size: 16px;
  color: #4B4B4B;
  letter-spacing: 0px;
  font: normal normal normal 16px/20px Inter;
  text-align: center;
  padding-top: 6px;
`;

const ErrorPopupMiddleIconContainer = styled.div`
  padding: 0 28px 0 29px;
`;

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 50,
    left: 727,
    "@media screen and (min-width: 1024px) and (max-width: 1900px)": {
      top: 50,
      left: 'auto',
      right: 'auto',
    },
    "@media screen and (max-width: 768px)": {
      top: 47,
      left: 105,
    },
  },
});

function BurnContract(props) {
  const [steps, setSteps] = useState(1);
  const classes = useStyles();
  const [inputToken, setInputToken] = useState('')
  const [confirmBurn, setConfirmBurn] = useState(false)

  let contractAddress = props?.deployedContract?.smartContractAddress?.replace(
    /xdc/,
    "0x"
  )

  let networkVersion = props.userDetails?.accountDetails?.network || "";
  let userAddress = props.userDetails?.accountDetails?.address || "";

  const handleSteps = () => {
    if(Number(inputToken) > Number(props.deployedContract.tokenCurrentSupply) || inputToken < 1){
      return;
    } else{
      setSteps(2);
      sendTransaction();
    }
  };

  // function to open xdc pay extension:

  const sendTransaction = async () => {
    // window.web3 = new Web3(window.ethereum);
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);

    let newAbi = props?.deployedContract?.contractAbiString;
    let jsonAbi = JSON.parse(newAbi);

    let contractInstance = new window.web3.eth.Contract(jsonAbi, contractAddress);
    let finalToken = Number(inputToken) * Math.pow(10, props?.deployedContract?.tokenDecimals);

    const gasPrice = await window.web3.eth.getGasPrice();

    let transaction = {
      from: userAddress,
      to: contractAddress, //contractAddress of the concerned token (same in data below)
      gas: GAS_VALUE,
      gasPrice: gasPrice,
      data: contractInstance.methods.burn(BigInt(finalToken)).encodeABI()
      //value given by user should be multiplied by 1000
    };

    if (networkVersion === "XDC Mainnet") {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {

          setTimeout(async () => {
            // burnXRC20Token();
            // setSteps(3);
              let reqObj = {
                filter: "Transaction",
                data: hash,
              };

              const [err, res] = await Utils.parseResponse(
                  SaveDraftService.getTxnHashDetails(reqObj)
              );

              if(res?.transaction?.status === false){
                setSteps(4);
              }
          }, 20000);
        })
        .on("receipt", function (receipt) {
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          if(receipt && confirmationNumber === 1){
            burnXRC20Token();
            setSteps(3);
          }
        })
        .on("error", function (error) {
          if(error.message.includes("transaction receipt")){ //the transaction is successful
            burnXRC20Token();
            setSteps(3);
          }
          else{
            if(error.message.includes("User denied transaction signature")){
              setSteps(1);
            }
            else{
              setSteps(4);
            }
          }
        });
    } else {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {
        })
        .on("receipt", function (receipt) {
          //receive the contract address from this object
          if (receipt !== 0) {
            burnXRC20Token()
            setSteps(3);
          }
        })
        .on("confirmation", function (confirmationNumber, receipt) {
        })
        .on("error", function (error) {
          if (error) {
            if(error.message.includes("User denied transaction signature")){
              setSteps(1);
            }
            else{
              setSteps(4);
            }
          }
        });
    }
  };

  let burnTokens = Number(inputToken)

  const burnXRC20Token = async () => {
    let reqObj = {
      tokenOwner: props?.deployedContract?.tokenOwner,
      tokenId: props?.deployedContract?.id,
      operation: apiBodyMessages.STATUS_BURN,
      mintedTokens: 0,
      burntTokens: burnTokens,
      network: networkVersion,
      smartContractAddress: props?.deployedContract?.smartContractAddress,
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.mintBurnXRC20Token(reqObj)
    );
    if (res !== 0 && res !== undefined) {
      setConfirmBurn(true);
    }
  }

  return (
      <Dialog
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            props.handleClose();
          }
        }}
        aria-labelledby="simple-dialog-title"
        open={props.isOpen}
        classes={{
          paper: classes.dialog,
        }}
      >
        {(() => {
          switch (steps) {
            case 1:
              return (
                  <DialogContainer>
                    <DialogHeader>
                      <DeleteText>Burn Tokens</DeleteText>
                      <CrossIcon
                        onClick={() => props.handleClose(false)}
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <Header>
                      Enter the number of tokens you want to burn. <br />
                      This is an irreversible process.
                    </Header>
                    <MidSection>
                      <InputContainer>
                        <InputDiv type="number" onChange={(e) => setInputToken(e.target.value)}/>
                        {inputToken !== '' && (Number(inputToken) > Number(props.deployedContract.tokenCurrentSupply) || inputToken < 1) ? (
                          <ErrorContainer>
                            <Error>
                              {validationsMessages.INITIAL_SUPPLY_LIMIT_FOR_BURN_ERROR}
                            </Error>
                          </ErrorContainer>
                        ) : ""}
                      </InputContainer>
                    </MidSection>
                    <ButtonContainer>
                      <CancelButton onClick={() => props.handleClose(false)}>
                        Cancel
                      </CancelButton>
                      {inputToken !== '' ? (
                        <DeleteButton onClick={handleSteps}>Burn</DeleteButton>
                      ) : (
                        <DeleteButtonDisable>Burn</DeleteButtonDisable>
                      )}
                    </ButtonContainer>
                  </DialogContainer>
              );
            case 2:
              return (
                  <LoaderSection>
                    <DialogHeader>
                      <DeleteText>Burn Tokens</DeleteText>
                      <CrossIcon
                        onClick={() => props.handleClose(false)}
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <SecondHeader>
                      <CircularProgress />
                    </SecondHeader>
                    <TextDiv>
                      <PauseText>Burning {inputToken} Tokens</PauseText>
                      <ConfirmDiv>
                        <ConfirmText>
                          Confirm this transaction on XDCPay
                        </ConfirmText>
                      </ConfirmDiv>
                    </TextDiv>
                  </LoaderSection>
              );
            case 3:
              return (
                  <LoaderSection>
                    <DialogHeader>
                      <DeleteText>Burn Tokens</DeleteText>
                      <CrossIcon
                        onClick={() => props.handleClose(confirmBurn)}
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <ThirdHeader>
                      <Img src="/images/Selected-Circle.svg" />
                    </ThirdHeader>
                    <TextDiv>
                      <PauseText>Transaction Completed</PauseText>
                    </TextDiv>
                  </LoaderSection>
              );
            case 4:
              return (
                  <ErrorPopupContainer>
                    <DialogHeader>
                      <DeleteText>Transaction Failed</DeleteText>
                      <CrossIcon
                          onClick={() => props.handleClose(confirmBurn)}
                          src="/images/Cross.svg"
                          alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <TextDiv>
                      <ErrorPopupText>Your transaction has been failed please check the following possible cause:</ErrorPopupText>
                      <ErrorIconsContainer>
                        <div>
                          <ErrorPopupIcons src="/images/red_wallet.svg"></ErrorPopupIcons>
                          <ErrorPopupIconText>Insufficient wallet balance</ErrorPopupIconText>
                        </div>
                        <ErrorPopupMiddleIconContainer>
                          <ErrorPopupIcons src="/images/paused_contract.svg"></ErrorPopupIcons>
                          <ErrorPopupIconText>Paused Contract</ErrorPopupIconText>
                        </ErrorPopupMiddleIconContainer>
                        <div>
                          <ErrorPopupIcons src="/images/wrong_network_selected.svg"></ErrorPopupIcons>
                          <ErrorPopupIconText2>Wrong Network Selected</ErrorPopupIconText2>
                        </div>
                      </ErrorIconsContainer>
                    </TextDiv>
                  </ErrorPopupContainer>
              );
            default:
              return;
          }
        })()}
      </Dialog>
  );
}
const mapStateToProps = (state) => ({
  userDetails: state.user,
});

export default connect(mapStateToProps)(BurnContract);
