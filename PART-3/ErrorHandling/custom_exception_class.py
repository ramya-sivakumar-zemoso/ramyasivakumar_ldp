class InsufficientFundsError(Exception):
    def __init__(self, required_amount, available_amount, message="Insufficient funds"):
        self.required_amount = required_amount
        self.available_amount = available_amount
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return (f"{self.message}: You need ${self.required_amount}, "
                f"but only have ${self.available_amount}.")