---
sidebar_position: 4
---

# Get Assets Listed

Get your dApp in front of millions.

[CK Wallet](https://wallet.ck.app/)

[Buy CK Token](https://ck.app/)

### Overview

The CK Wallet Token Repository is a comprehensive, up-to-date collection of information about several thousands of crypto tokens. CK Wallet uses token logos from this source, alongside a number of third-party projects.

The repository contains token info from several blockchains, info on dApps, staking validators, etc. For every token a logo and optional additional information is available (such data is not available on-chain).

Such a large collection can be maintained only through a community effort, so additions are welcome, primarily from token projects.

### Contribution Checklist

This guide is for adding a logo for the following CK Wallet supported blockchains:

* BNBChain BEP20 token
* Ethereum ERC20 token
* Tron TRC20 token

For adding an token:

* Ensure your asset meets our reqirements
* Visit the Assets web app (GitHub account required), and fill out the requested information
* Pay the processing fee
* Adding a DApp logo or other type of asset? Check the DApps section or contribution guidelines.

### Adding new Assets using Asset App

This is a quick walkthrough on how to add your token using our Asset Web App.

Every CK Wallet user can submit his token using our Web App. Before initiating a Pull Request or going further, please take a look at the requirements in our documentation: 
https://docs.ck.app/ck-wallet/requirements and make sure you follow the requirements!

The steps for adding a new token through Asset App.

* 1 Coming Soon..
* 2 Coming Soon..
* 3 Coming Soon..
* 4 Coming Soon..
* 5 Coming Soon..

### Fee

Due to an increasing number of pull request (and proportional checking & merging effort), a modest fee is required for processing a pull request, payable in cryptocurrency. Follow the instructions in the pull request for completing the fee payment.

A fee of 2500CK or 5BNB is required for each Pull Request, you will see the message from the merge-fee-bot with details about the payment. **Make sure to double-check the https://docs.ck.app/ck-wallet/requirements, to minimize the risk of your PR being rejected.

For more details about the payment fee for your assets, see https://docs.ck.app/ck-wallet/faq See also the fee FAQ.


### Disclaimer

CK Wallet team allows anyone to submit new assets to this repository. However, this does not mean that we are in direct partnership with all of the projects.

CK Wallet team will reject projects that are deemed as scam or fraudulent after careful review. CK Wallet team reserves the right to change the terms of asset submissions at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.

Additionally, spam-like behavior, including but not limited to mass distribution of tokens to random addresses will result in the asset being flagged as spam and possible removal from the repository.

## Requirements

Before submitting an asset to this repository, we recommend you have the following information handy:
* Asset details
* * Token Name
* * Symbol
* * Contract Address
* * Decimals
* BNB or CK to cover the non-refundable processing fee
* Logo
* * File Extension: png (Uppercase PNG is considered invalid)
* * File Name: logo.png
* * Size: 256px by 256px
* * Background: Preferably transparent
* Token information file
* * File Extension: json (Uppercase JSON is considered invalid)
* * File Name: info.json
* Required fields:
* * name: name of the token
* * type: such as ERC20, BEP20, TRC20, ...
* * symbol: the token symbol
* * decimals: number of decimal digits used in the amounts (e.g. 18 for ETH)
* * description: a few sentence summary of the token/project
* * website: project web site
* * explorer: URL of the token explorer page
* * id: the id/contract/address of the token, same as the subfolder name
* * links: array with name/url pairs, for social media links, documentation, etc.
* * tags: Assigning these tags to tokens helps place them on appropriate token menus and ensures your token is evaluated correctly in conditions.
* Checksum address (for ERC20 and BEP20 tokens)
* * Checksum addresses can be found on Etherscan or by using this tool

### Listing Acceptance Guidelines

The following criteria will be considered before an asset is accepted into the repository. Note that meeting all these criteria does not guarantee a submission will be accepted, the team reserves the right to reject projects deemed spammy, fraudulent, or otherwise low value.

* Project has a website and a detailed white paper. A clear roadmap, tokenomics and use case is a must.
* Has a social media presence and support team. No fake followers or bots.
* A full token audit is completed by reputable security audit groups. Partial audits are subject for review.
* No plagiarized content from other projects or companies. Copying names or logos are strictly prohibited.
* Token should be listed on price tracking sites like CoinmarketCap
* Detailed Token Information
* Minimum 10,000 token holders and 15,000 transactions (Airdrop tokens excluded). This requirement is subject for review based on the project.

## Pull Request Fee
CK Wallet supports an insane number of assets/tokens requests. We are committed to supporting the tokens used by our users, but supporting millions of assets comes at a high cost. In terms of running the infrastructure, ensuring continuous integrations, handling a massive number of requests to the assets info, etc., and also avoiding a lot of spam/scam coins. We have introduced this crypto contribution in order to filter requests, so we have more time to handle genuine ones.

A fee of 2500CK or 5BNB is required for each Pull Request, you will see the message from the merge-fee-bot with details about the payment. **Make sure to double-check the https://docs.ck.app/ck-wallet/requirements, to minimize the risk of your PR being rejected.

### Why the payment?
* Due to a high number of pull requests, this led to a high cost of running infrastructure. A modest fee is required for processing a pull request, which is payable in cryptocurrency.
* Cost is used to run the infrastructure that powers millions of Assets/tokens
* Reducing spam/scam coins/tokens request
* Ensuring smooth integration and handling of a massive number of assets request

### How does this Fee fit with Open Source?
We believe in the power of open-source sof"tw"are, and essential parts of CK Wallet are open-source to contribute to the community(Wallet-Core). But CK Wallet is a branded product, and running its backend infrastructure, support, marketing, etc. has costs (done by a non-volunteer-based team). The assets repository is open source. You are free to use it and free to create your version (fork it and change it). But if you want to get into our app, you have to accept our rules, and we've chosen to ask for a contribution to include/change the information in the CK Wallet product.

### What do I have to pay attention to?
* Double-check the contribution guidelines, to minimize the risk of your PR being rejected.
* Make sure to set the correct memo on your transfer.

## Repository Details

Coming Soon..

## Universal Asset ID

UAI unique identifier of the asset, it's blockchain agnostic and provides ability to easily distinguish asset across blockchains.

### Examples:
Coins
* Bitcoin: c0
* Ethereum: c60
* Binance Chain c714

Coming Soon..