export const Header = () => {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();
  let newdate = day + "/" + month + "/" + year;

  return (
    <header>
      <aside>
        <span className="hour">{h + ":" + m}</span>
        <span className="day">{newdate}</span>
      </aside>
    </header>
  );
};
