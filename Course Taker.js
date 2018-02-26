// just leave the value of the condition to blank (''), if there is no specify condition to set
const condition = {
  courseCode: 'GENS-417-01-A1',
  teacher: '楊碧川',
  period: '6~7',
};
const courseTaking = setInterval(() => courseTaker(), 500);
function courseTaker() {
  const frame = window.frames[1];
  // get all available courses
  const rows = frame.document.querySelectorAll('#BAT_DataGrid tr.ContectTd, #BAT_DataGrid tr.ContectTdx');
  if (rows.length) {
    // loop for all rows
    rows.forEach(courseRow => {
      // get custom condition
      const { courseCode, teacher, period } = condition;
      // check if the course code meet the requirement
      const getCourseCode = courseRow.cells[2].firstElementChild.textContent;
      const checkCourseCode = getCourseCode.includes(courseCode);
      // check if the teacher meet the requirement
      const getTeacher = courseRow.cells[8].firstElementChild.textContent;
      const checkTeacher = getTeacher.includes(teacher);
      // check if the period meet the requirement
      const getPeriod = courseRow.cells[9].firstElementChild.textContent;
      const checkPeriod = getPeriod.includes(period);
      // check if meet all the requirements
      if (checkCourseCode && checkTeacher && checkPeriod) {
        // disabled the interval to prevent the repetitive searching lead to the failure of taking course
        clearInterval(courseTaking);
        // set the course that is meeting the requirements checked
        courseRow.cells[0].firstElementChild.checked = true;
        // taking the course
        frame.document.querySelector('#BAT_Submit').click();
      }
    });
    // none course meets the requirements
    frame.document.querySelector('#SRH_search_button').click();
  } else {
    // none course available
    frame.document.querySelector('#SRH_search_button').click();
  }
}
