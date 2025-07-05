# Options: Basics - Option Greeks

**"Greeks"** are the important parameters that help calculate the price of an Option contract. As you can see below, it can appear overwhelming when it comes to determining which greek is more important, and how to use them. In this **Options: Basics** guide, we will only cover definitions and showcase some examples.

---

![OptionGreeks](/OptionGreeks.png)

## <span style="color: #64acff">Composition of an Option</span>

>An Option's Price does not only change based on how traders interact with it, but also market conditions. The composition or structure of an Option relies heavily on greeks:

## <span style="color: #64acff">Δ - Delta</span>

>Measures how much the option's price changes with a $1 change in the underlying token's price. A high delta indicates the option's price closely follows the token's price movements.

## <span style="color: #64acff">Γ - Gamma</span>

>Tracks how much delta changes when the underlying token's price changes by $1, reflecting the sensitivity of delta. Higher gamma means delta will adjust quickly with token price movements.

## <span style="color: #64acff">Θ - Theta</span>

>Represents the option's time decay, showing how much value the option loses each day as expiration approaches. A high theta means the option's value decreases faster with time.

## <span style="color: #64acff">ν - Vega</span>

>Measures the sensitivity of the option's price to changes in the underlying token's volatility. Higher vega means the option's price is more affected by volatility shifts.

## <span style="color: #64acff">ρ - Rho</span>

>Indicates how much the option's price changes in response to a 1% change in interest rates. Higher rho suggests that the option's value is more sensitive to interest rate changes.