document.addEventListener('DOMContentLoaded', function() {
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const addExpenseButton = document.getElementById('add-expense');
    const expensesList = document.getElementById('expenses');
    const totalExpensesSpan = document.getElementById('total-expenses');
  
    let totalExpenses = 0;

    expenseNameInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addExpense();
      }
    });
  
    expenseAmountInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addExpense();
      }
    });
    function addExpense() {
      const expenseName = expenseNameInput.value;
      const expenseAmount = parseFloat(expenseAmountInput.value);
  
      if (expenseName && !isNaN(expenseAmount)) {
        const li = document.createElement('li');
        li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(li);
  
        totalExpenses += expenseAmount;
        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
  
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
      }
    }
    
    addExpenseButton.addEventListener('click', addExpense);

    addExpenseButton.addEventListener('click', function() {
      const expenseName = expenseNameInput.value;
      const expenseAmount = parseFloat(expenseAmountInput.value);
  
      if (expenseName && !isNaN(expenseAmount)) {
        const li = document.createElement('li');
        li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(li);
  
        totalExpenses += expenseAmount;
        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
  
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
      }

  expenseNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addExpense();
    }
  });

  expenseAmountInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addExpense();
    }
  });

  // Function to add expense
  function addExpense() {
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && !isNaN(expenseAmount)) {
      const li = document.createElement('li');
      li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
      expensesList.appendChild(li);

      totalExpenses += expenseAmount;
      totalExpensesSpan.textContent = totalExpenses.toFixed(2);

      expenseNameInput.value = '';
      expenseAmountInput.value = '';
    }
  }

  // Add event listener to button
  addExpenseButton.addEventListener('click', addExpense);
    });
  });
