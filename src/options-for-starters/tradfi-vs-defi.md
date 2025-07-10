# Options: Traditional Finance (TradFi) vs Decentralized Finance (DeFi)

Now options trading and options pricing can be offered permissionlessly on-chain access. The underwriting and dynamic pricing of DeFi options is done automatically by [OPX](/src/products/opx.md) using our [Options Pricing Model (OPM)](/src/option-standard-sdk/opm.md).

## Quantity

In TradFi, options are traded on centralized exchanges or OTC markets with clearing houses.
Each contract represents exactly **100x** shares of the underlying asset and cannot be adjusted.  

DeFi options revolutionizes this concept with the  utilization of smart contracts. *Fractionalization* :
- Removes the obligation to trade 100x of the underlying share per trade; 
> Lowering the financial barrier of entry for any given contract
- Maximizes capital efficiency 
> Allows traders to distribute their funds across multiple contracts instead of having to stick with one - thus increasing the odds in their favor
- Mitigates risk
> Users can create win-win scenarios by utilizing various spreads and methods to hedge against themselves
- Creates opportunity
> Traders can profit from price movements without actually owning the underlying asset

## Naked vs Covered
Other unique characteristics about Defi Options trading includes the fact that there are no limitless/infinite gain potentials like found with “naked options trading.” DeFi often restricts naked options (unhedged selling) to reduce systemic risk, as there’s no centralized entity to enforce margin requirements or bailouts. This means as a seller you can never lose more than the total amount you’ve used to enter the contract. Some sellers view this as an advantageous, and baked in, stop-loss.
In traditional finance, options trading can only have two participants Party A and Party B. One is a Call and the other a Put – the order of which is irrelevant. Afterall, how can there be a deal with any less than 2 people involved? Defi options trading disrupts this archaic principle. Now three members can participate in an options contract: Party A, Party B, and OMLP. Please see the OMLP paragraph below for further details.

## Risks

5.	Risks of Options Trading in Tradfi
Options are complex and carry risks including time decay, volatility misjudgment, and total loss of premium.
total loss of premium happens when the option expires worthless, and the buyer loses the full amount paid for the option. This typically occurs if the option is out-of-the-money (OTM) at expiration. The premium paid is a sunk cost, and there’s no recovery once the option expires.

Risks found in DeFi Options Trading
In DeFi, additional risks include smart contract vulnerabilities, protocol bugs, oracle failures, and liquidity issues. Traders should exercise due diligence and use audited platforms.
Smart contract vulnerabilities are flaws in the code of a smart contract that can be exploited by attackers. These vulnerabilities can lead to loss of funds, unintended behavior, or security breaches. Common risks include reentrancy attacks and improper input validation.
Protocol bugs are errors or flaws in the underlying code of a blockchain or decentralized protocol. These bugs can disrupt the intended operation of the system, potentially causing data corruption, loss of funds, or security risks. Bugs can affect consensus mechanisms, transaction validation, or smart contract execution.
Oracle failures occur when an external data source (oracle) providing information to a smart contract delivers inaccurate or delayed data. This can lead to incorrect execution of contracts, resulting in financial losses or invalid transactions. Reliable oracles are crucial for price feeds, event triggers, and other external data dependencies.
Liquidity issues arise when there is insufficient capital available to support trading or asset transactions in a market. In DeFi, this can cause slippage, large price discrepancies, and an inability to execute trades at desired prices. Low liquidity can make it difficult to enter or exit positions without significant impact on the market.

Advanced techniques and Positions of Options Trading
Spreads involve combining multiple options (buying and selling different strike prices or expirations) to manage cost, risk, or directional bias. Common strategies include bull spreads, bear spreads, and calendar spreads.

## Summary