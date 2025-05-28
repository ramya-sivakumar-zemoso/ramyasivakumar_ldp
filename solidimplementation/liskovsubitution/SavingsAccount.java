package com.solidimplementation.liskovsubitution;

public class SavingsAccount extends Account implements Withdrawable {
    @Override
    public void withdraw() {
        System.out.println("Can Withdraw money.");
    }

    public static void main(String[] args){
        getBalance();
        SavingsAccount savingsAccount = new SavingsAccount();
        savingsAccount.withdraw();

    }
}

