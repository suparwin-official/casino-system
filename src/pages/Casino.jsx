import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Casino() {
  const { user, setUser } = useAuth();
  const [bet, setBet] = useState(100);
  const [result, setResult] = useState("");

  const play = () => {
    if (bet > user.balance) {
      setResult("❌ Not enough balance");
      return;
    }

    const win = Math.random() > 0.5;
    const newBalance = win
      ? user.balance + bet
      : user.balance - bet;

    const updatedUser = { ...user, balance: newBalance };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setResult(win ? "🎉 YOU WIN!" : "😢 YOU LOSE");
  };

  return (
    <div className="casino">
      <h1>Casino Lobby</h1>
      <h2>Balance: ৳{user.balance}</h2>

      <input
        type="number"
        value={bet}
        onChange={e => setBet(+e.target.value)}
      />

      <button onClick={play}>Place Bet</button>

      <h3>{result}</h3>
    </div>
  );
}
