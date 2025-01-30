import { useElements } from "./hooks/useElements.js";
let isAuth = false;
let accuntAmount = 0;
const calc = (value, isInput) => isInput ? (accuntAmount += value) : accuntAmount < value ? "Za mało środków !": (accuntAmount -= value);

const result = ({mess, res}) => {
  useElements("h1").innerText = mess;
  alert(res);
};

useElements("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const clickedBtn = e.submitter;
  const money = e.target["money"].valueAsNumber;
  if (isAuth) {  
    clickedBtn.id == "btn_input" ? result({ mess: `Saldo: ${calc(money, 1)} zł`, res: "Udało się" }) : (() => {
          const isNum = typeof calc(money) !== "number" ? "0" : accuntAmount;
          result({mess: `Saldo ${isNum == "0" ? accuntAmount : isNum} zł`, res: `${isNum == "0" ? "Za mało środków" : "UDAŁO SIĘ !"}`,});
        })();
  } else alert("Brak autoryzacji");
});

useElements("#btn_auth").addEventListener("click", () => prompt("Podaj pin: ") == "1338" ? (isAuth = true) : alert("Nie prawidłowy pin"));
