import tingle from "tingle.js";
import "../styles/reservations.css";

const modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
});

modal.setContent(`
<form>
<div class="form">
  <h1>Reservations</h1>
    <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name"/>
    <label for="date">Date:</label>
      <input type="date" id="date" name="date"/>
    <label for="appt">Time:</label>
      <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
    <label for="num">Number of Party:</label>
      <input type="number" id="num" placeholder="Party Size"/>
    <input class="submit" type="submit" value="Find a Table"/>
    </div>
</form>`);

const openElements = document.querySelectorAll(".reservation-modal-open");
for (const el of openElements) {
  el.addEventListener("click", (e) => {
    modal.open();
  });
}
