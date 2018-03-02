// just leave the value of the condition to blank (''), if there is no specify condition to set
const condition = [
  {
    courseCode: 'GENS-417-01-A1',
    courseName: '台灣史',
    teacher: '楊碧川',
    period: '一-6~7',
  },
  {
    courseCode: 'INF-204-01-A1',
    courseName: '網頁程式設計',
    teacher: '',
    period: '',
  },
];
const duration = 200;

function courseTaker() {
  const frame = window.frames[1];
  // get all available courses
  const rows = frame.document.querySelectorAll('#BAT_DataGrid tr.ContectTd, #BAT_DataGrid tr.ContectTdx');
  const rowsLength = rows.length;
  if (rowsLength) {
    let hasCourseChecked = false;
    // loop for all rows
    rows.forEach((courseRow, index) => {
      // fetch needed fields
      const fields = {
        courseCode: courseRow.cells[2].firstElementChild.textContent,
        courseName: courseRow.cells[3].firstElementChild.textContent,
        teacher: courseRow.cells[8].firstElementChild.textContent,
        period: courseRow.cells[9].firstElementChild.textContent,
      };
      const checkResult = checkRequirement(fields);
      // check if all fields meet the requirements
      if (checkResult) {
        const takeCourseBtn = courseRow.cells[0].firstElementChild;
        takeCourseBtn.checked = true;
        hasCourseChecked = true;
      }
      if (hasCourseChecked && index === rowsLength - 1) {
        // taking the course
        frame.document.querySelector('#BAT_Submit').click();
      }
    });
    // none course meets the requirements
    if (!hasCourseChecked) keepSearching();
  } else {
    // none course available
    keepSearching();
  }
}

function checkRequirement(fields) {
  const checkResult = condition.some(eachCondition => {
    // if one of the condition is correct, then return
    return Object.entries(eachCondition).every(([conditionName, conditionValue]) => {
      // if the first matching is incorrect, then continue
      return fields[conditionName].includes(conditionValue);
    });
  });
  return checkResult;
}

function keepSearching() {
  try {
    window.frames[1].document.querySelector('#SRH_search_button').click();
    setTimeout(courseTaker, duration);
  }
  catch (error) {
    setTimeout(courseTaker, duration);
  }
}

courseTaker();