# Calculation Modules

To calculate the price of an option contract, certain parameters need to be created to ease development. The following are utilizable modules that are imported to construct American & European Style Options -- not limited to Custom/Exotic Options and Currency Structures. 

>These modules are used across the entirety of the **SOS SDK**, including the [Option Programs](/introduction/the-option-standard/#option-programs).

| **Category** | Component |
|----------|-----------|
| **Option Greeks >** | [`calc_delta`](/option-standard-sdk/calculation-modules.html#calc-delta) |
|      -              | [`calc_gamma`](/option-standard-sdk/calculation-modules.html#calc-gamma) |
|      -              | [`calc_theta`](/option-standard-sdk/calculation-modules.html#calc-theta) |
|      -              | [`calc_vega`](/option-standard-sdk/calculation-modules.html#calc-vega) |
|      -              | [`calc_rho`](/option-standard-sdk/calculation-modules.html#calc-rho) |
| **Volatility >**         | [`calc_volatility`](/option-standard-sdk/calculation-modules.html#volatility) |
| **Implied Volatility >** | [`calc_impl_vol`](/option-standard-sdk/calculation-modules.html#impl_vol) |



## Option Greeks

Greeks are the important parameters that help calculate the price of an Option contract. If you are unfamiliar with the greeks, check out [Options: Basics - Greeks](/options-basics/the-greeks).

#### `calc_delta`

>Calculates the change in value of an option on a $1 move in the underlying token/asset. 

#### `calc_gamma`

>Calculates the rate of change in the `calc_delta` of an option.

#### `calc_theta`

>Calculates the decay of an options value over a period of time until the `expiration_datetime`.

#### `calc_vega`

>Calculates the change in value of an option on a 1% move in `calc_impl_vol`.

#### `calc_rho`

>Calculates the change in value of an option based on changes in `risk_free_rate`.

## Volatility

Volatility is a statisitcal measure of the dispersion of returns for a given token, asset, or security over a certain period of time. There are a few different ways of looking at volatility: 

::: details **Actual Current Volatility** 
Measured over a shorted time period (30 to 90 days) with the last observation including the most recent price.
:::

::: details **Actual Historical Volatility:**
Measured of a longer period of time (90+ days) with the last observation only including up to "yesterdays" price. 
:::

#### `calc_volatility`

>For **SOS**, it is recommended to utilize the **Actual Current Volatility** for Solana since the data for an underlying token/asset is more readily available. Current price values are more obtainable since the underlying price data relies on price Oracles.

## Implied Volatility (IV)

#### `calc_impl_vol`

>Implied volatility measures the expectation of price fluctuations in the future for a particular token or asset. The **Option Standard SDK** uses the [Black-Scholes Model](https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model) to calculate **IV**. 
