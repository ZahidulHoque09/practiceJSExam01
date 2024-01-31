let namta = 5;
for (let i = 1; i <= 20; i++) {
  console.log(namta + "X" + i + "=" + namta * i);

  let age = i * 5;
  if (age >= 0 && age <= 19) {
    console.log("You are under aged and not ready for marriage:");
  } else if (age >= 20 && age <= 34) {
    console.log("You are adult and you can marry if you want:");
  } else if (age >= 35 && age <= 45) {
    console.log("You have to marry as early as possible:");
  } else if (age >= 46 && age <= 100) {
    console.log("You are over aged and no need to marry:");
  } else age <= 0 && age >= 101;
  console.log("Invalid input:");
}

/* let namta = 5;
for (let i = 1; i <= 20; i++) {
  document.write(`${namta} x ${i} = ${namta * i}`);

  let age = i * 5;
  if (age >= 0 && age <= 19) {
    document.write("    You are under aged and not ready for marriage: <br/>");
  } else if (age >= 20 && age <= 34) {
    document.write("    You are adult and you can marry if you want: <br/>");
  } else if (age >= 35 && age <= 45) {
    document.write("    You have to marry as early as possible <br/>:");
  } else if (age >= 46 && age <= 100) {
    document.write("    You are over aged and no need to marry: <br/>");
  }
}
 */
