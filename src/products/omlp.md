# Options Margin Lending Pool (OMLP)
---
### Traditional Options Markets Structures 101
Before diving into the OMLP (*pun intended*) we must first understand how options contracts are structured within the options market.

Like a product in any other market, options contracts can either be bought or sold.  Traders choose which options to buy or sell based on the various [factors](https://gist.github.com/CyberStaker/5d9c937c23a7d9297e572e4de0ca3ee5) that impacts its value.  Each option is designed with a belief that the underlying asset's price will either increase, or decrease, at an agreed upon date.

> If a trader engages an options contract as a **"call"**, then your belief/intent is that the price of the underlying stock will increase – aka being **""bullish""**. 

> If you engage an options contract as a **"put"**, then your belief/intent is that the price of the underlying stock will decrease – aka being **"bearish"**.

### Traditional Finance (TradFi) - "Calls" vs "Puts"

Traditionally, options contracts are structured by requiring two parties to trade.  One is positioned as the Call; the other is positioned as the Put.

> Trader A  vs Trader B 


### OMLP the TradFi options contract structure disruptor
OMLPs within OPX disrupts traditional markets by adding another *dimension* to the options contract structure - **single-party** options trading! 

Our OMLPs are single-asset pools (SAPs).  Market makers (short sellers) can now borrow from any of our various SAPs to cover their positions.  Thanks to OMLP, a second options contract structure was born.  Now either two can occur:

> Trader A vs Trader B
> Trader A vs SAP

This new dimension naturally maximizes traders' capital efficiency, but **who** would fund these pools?...

### Lending: SAP1 and SAP2

We designed a two-tiered SAP system that prioritizes liquidity from SAP1 first, and then SAP2.  

- SAP1: Liquidity is provided to the pool in OPX lenders direct deposit.  Lenders will earn a yield from the fees generated in the form of the pool's asset type.  Our primary goal in designing SAP1 was to create a way in which we can incorporate lenders into options contracts.  By receiving fees and dibs on their liquidity, SAP1 will naturally increase Total Value Locked ([TvL](https://www.google.com/search?q=what+does+total+value+locked+mean%3F&oq=what+does+total+value+locked+mean%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDINCAIQABiGAxiABBiKBTINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTIHCAUQABjvBTIHCAYQABjvBTIKCAcQABiiBBiJBdIBCDg4NTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)) and protocol growth.  

If all that potential is not enough, SAP1 is a unique form of providing liquidity.  The yield earned from SAP1 is completely resistant to [impermanent loss (IL)!](https://www.google.com/search?q=what+is+impermanent+loss%3F&sca_esv=d6b7cd5f9271c9c7&ei=2pRFaNucOPaDwbkP_cb1uAM&ved=0ahUKEwjb8eXU--GNAxX2QTABHX1jHTcQ4dUDCBA&uact=5&oq=what+is+impermanent+loss%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXdoYXQgaXMgaW1wZXJtYW5lbnQgbG9zcz8yBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiiR1DnC1jhQ3AEeAGQAQCYAXCgAZsSqgEEMjUuM7gBA8gBAPgBAZgCIKACkRSoAgrCAgoQABiwAxjWBBhHwgILEAAYgAQYkQIYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIOEC4YgAQYsQMY0QMYxwHCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGLEDGIMBwgIKEC4YgAQYQxiKBcICCxAuGIAEGMcBGK8BwgIIEC4YgAQYsQPCAg4QLhiABBjHARiOBRivAcICBRAuGIAEwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQHCAhAQABgDGLQCGOoCGI8B2AEBwgIKEAAYgAQYQxiKBcICEBAuGIAEGNEDGEMYxwEYigXCAg4QABiABBixAxiDARiKBcICDhAuGIAEGLEDGIMBGIoFwgIHEAAYgAQYCsICChAAGIAEGEYY-QHCAiQQABiABBhGGPkBGJcFGIwFGN0EGEYY-QEY9AMY9QMY9gPYAQLCAggQABiABBiiBMICCxAAGIAEGIYDGIoFmAMM8QU-OcVzw-q9HIgGAZAGCLoGBAgBGAe6BgYIAhABGBOSBwQyNi42oAfQ9gGyBwQyMi42uAfzE8IHCDItMjQuNy4xyAfdAQ&sclient=gws-wiz-serp).   

Once 100% utilization is reached from SAP1 (aka all funds are being borrowed), liquidity is then sourced from SAP2.

- SAP2: Integrated pools from proven Solana liquidity powerhouses like [Kamino](https://app.kamino.finance/liquidity?filter=all&sort=tvl) and [Orca](https://www.orca.so/).  SAP2 will ensure there is always funding with OPX, making it a 24/7 options market!

This means OPX offers a *tertiary* dimension to the options contract structure:

> Trader A vs Trader B
> Trader A vs SAP1
> Trader A vs SAP2

Prior to OMLP, **lenders** were never able participate in options contracts, only trader's could participate.  For the first time, multiple users can participate within an options contract - this is completely innovative and unheard of!