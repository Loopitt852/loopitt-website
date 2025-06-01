import { db } from "./firebase-config.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  try {
    await push(ref(db, "contactMessages"), {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    status.textContent = "Message sent successfully!";
    form.reset();
  } catch (error) {
    status.textContent = "Error sending message.";
    console.error(error);
  }
});
