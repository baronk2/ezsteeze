export function AppointmentSchedule(props) {
  return (
    <div className="footer-padding">
      <MonthHeader />
      <WeekdaySelection />
      <CalenderDays />
      <AvailableTimes />
    </div>
  );
}
function MonthHeader() {
  return (
    <div className="month">
      <ul>
        <li>May</li>
        <li>2023</li>
      </ul>
    </div>
  )
}
function WeekdaySelection() {
  return (
    <ul className="weekdays">
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
  </ul>
  )
}
function CalenderDays() {
  return (
    <ul className="days">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li><span className="active">26</span></li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul>
  )
}

function AvailableTimes() {
  return (
    <div className="available-times">
    <h2>Available Times</h2>
    <ul>
      <li>10:00 AM</li>
      <li>11:00 AM</li>
      <li>1:00 PM</li>
      <li>2:00 PM</li>
      <li>3:00 PM</li>
      <li>4:00 PM</li>
    </ul>
</div>
  )
}


