import React, { useState, useEffect } from 'react';

const SmartSavings = () => {
  const [savingsGoal, setSavingsGoal] = useState('');
  const [linkedBankAccount, setLinkedBankAccount] = useState(false);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [badgesEarned, setBadgesEarned] = useState([]);

  const milestones = [
    { amount: 500, badge: 'Bronze Saver' },
    { amount: 1000, badge: 'Silver Saver' },
    { amount: 2000, badge: 'Gold Saver' }
  ];

  const handleSetSavingsGoal = (event) => {
    setSavingsGoal(event.target.value);
  };

  const handleLinkBankAccount = () => {
    setLinkedBankAccount(true);
    setSavingsAmount(1000); 
  };

  useEffect(() => {
    const newBadges = milestones.filter((milestone) => savingsAmount >= milestone.amount && !badgesEarned.includes(milestone.badge));
    if (newBadges.length > 0) {
      setBadgesEarned([...badgesEarned, ...newBadges.map((badge) => badge.badge)]);
    }
  }, [savingsAmount, badgesEarned]);

  return (
    <div>
      <h2>Smart Savings</h2>
      <div>
        <label htmlFor="savingsGoal">Set Your Savings Goal:</label>
        <input
          type="text"
          id="savingsGoal"
          value={savingsGoal}
          onChange={handleSetSavingsGoal}
        />
        <button onClick={handleLinkBankAccount}>
          Link Bank Account
        </button>
      </div>
      {linkedBankAccount && (
        <div>
          <p>Recommended Savings Amount: ${savingsAmount}</p>
          <p>Start saving towards: {savingsGoal}</p>
          <h3>Badges Earned:</h3>
          <ul>
            {badgesEarned.map((badge, index) => (
              <li key={index}>{badge}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SmartSavings;
