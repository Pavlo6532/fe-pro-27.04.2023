let yearOfBirth = prompt("У якому році ви народились?");
let city = prompt("У якому місті ви живете?");
let favoriteSport = prompt("Який ваш улюблений вид спорту?");

if (yearOfBirth && city && favoriteSport) {
  let age = new Date().getFullYear() - yearOfBirth;
  let message = `Ваш вік: ${age}\n`;

  if (city.toLowerCase() === "київ") {
    message += "Ти живеш у столиці України.";
  } else if (city.toLowerCase() === "лондон") {
    message += "Ти живеш у столиці Великої Британії.";
  } else if (city.toLowerCase() === "вашингтон") {
    message += "Ти живеш у столиці США.";
  } else {
    message += `Ти живеш у місті ${city}.`;
  }

  if (favoriteSport.toLowerCase() === "футбол") {
    message += "\nКруто! Хочеш стати Ліонелом Мессі?";
  } else if (favoriteSport.toLowerCase() === "теніс") {
    message += "\nКруто! Хочеш стати Рафаелем Надалем?";
  } else if (favoriteSport.toLowerCase() === "баскетбол") {
    message += "\nКруто! Хочеш стати Леброном Джеймсом?";
  }

  alert(message);
} else {
  let missingFields = [];
  if (!yearOfBirth) {
    missingFields.push("дату народження");
  }
  if (!city) {
    missingFields.push("місто");
  }
  if (!favoriteSport) {
    missingFields.push("вид спорту");
  }

  alert(`Шкода, що Ви не захотіли ввести свій(ю) ${missingFields.join(", ")}!`);
}
