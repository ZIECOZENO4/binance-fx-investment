"use client";
import { useHistory } from "next/navigation";
import { CryptoState } from "../../CryptoContext";

function Header() {
 const { currency, setCurrency } = CryptoState();
 const history = useHistory();

 return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <h1
            onClick={() => history.push(`/`)}
            className="flex-1 text-gold-500 font-bold cursor-pointer"
          >
            Crypto Hunter
          </h1>
          {/* <Button color="inherit">Login</Button> */}
          <select
            className="outline-none bg-transparent border border-gray-500 rounded-md px-4 py-2 ml-15"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>
    </div>
 );
}

export default Header;