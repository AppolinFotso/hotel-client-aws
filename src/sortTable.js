function sortMe(num) {
  console.log(num);
  let table, rows, currentCell, cellBelow, exchangeRows, index;

  let countExchange = 0;
  let direction = "up";
  const allTables = document.querySelectorAll("table");
  //   console.log(allTables);
  for (let t = 0; t < allTables.length; t++) {
    let rowsHaveDifferentValue = true;
    while (rowsHaveDifferentValue) {
      //   table = document.querySelector("table");
      table = allTables[t];
      rows = table.rows;
      // console.log(rows[1].querySelectorAll("td"));
      // console.log(rows);
      exchangeRows = false;
      rowsHaveDifferentValue = false;
      index = 0;
      for (let i = 1; i < rows.length; i++) {
        if (rows[i + 1] === undefined) {
          break;
        }
        currentCell = rows[i].children[num].innerText;
        cellBelow = rows[i + 1].children[num].innerText;
        console.log(currentCell, cellBelow);
        if (direction === "up") {
          if (currentCell > cellBelow) {
            exchangeRows = true;
            index = i;

            break;
          }
        } else if (direction === "down") {
          if (currentCell < cellBelow) {
            exchangeRows = true;
            index = i;
            break;
          }
        }
      }

      if (exchangeRows) {
        rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);

        rowsHaveDifferentValue = true;
        countExchange++;
      }
      if (countExchange === 0 && direction === "up") {
        direction = "down";
        console.log(countExchange);
        rowsHaveDifferentValue = true;
      }
    }
  }
}

export default sortMe;
