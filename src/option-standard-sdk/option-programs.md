# Option Programs

As mentioned, the **Solana Option Standard (SOS)** is an open source software/program development kit (SDK). Inside of the SDK, there are a few things that will be built and optimized over a course of time. More detailed documentation of the list below will be provided in the near future in the [**Integrating SOS**](/getting-started/setup) section.

Starting at the heart of the SDK are the **Option Programs**. These [Solana Programs](https://solana.com/docs/core/programs) are the key on-chain programs that verify option contract data for when/how an option is created, executed, assigned, exercised, etc. on-chain. It is important to note that **Option Programs are PDAs**.

>Option Programs consists of [Program Derived Addresses (PDAs)](https://solana.com/docs/core/pda) in order to safely and effectively execute option-related transactions and instructions on Solana. 

## `option_create`

>The `option_create` is the most important program in the Solana Option Standard SDK. This program specifically deals in creating compressed token accounts and applying the approrpiate option metadata for easier on-chain identification.

## `option_exercise`

>Whenever a option holder decides to exercise their option at or before the `expiration_datetime`, the `option_exercise` verifies and executes the instruction.

## `option_assign`

>If an option seller/writer get's assigned, the `option_assign` ensures the appropriate instructions are executed by the user at the time of assignment. This program works in part with the `option_execise` and the specified `expiration_datetime` for an option contract that was created. 

>>Assigning has to do with borrowing and lending pools which can get complex depending on how you decide to go about it. More on this later.

## `option_execute`

>The `option_execute` is primarily utilized in-part with frontend user interfaces. This program is the most extensive since it handles user-input instructions relating to executing option trades through an exchange or other web application.

>>In order for this to work effectively, it is recommended to utilize the `option_execute` on limit orders only.

>>>*If wanting to initialize market orders, then treat as the next best limit order price for execution when sending instructions through frontend UI.*
