import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./reserve.module.css"; // Import your CSS module

import "react-datepicker/dist/react-datepicker.css";
import ReservationPHeader from "./reservationPHeader/ReservationPHeader";
import ReservationFHeader from "./reservationFHeader/ReservationFHeader";

type Props = {
  isFor: string;
};
const ReservationForm = (props: Props) => {
  const { isFor } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [guests, setGuests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name,
      phone,
      date: date ? date.toDateString() : "",
      guests,
    };

    try {
      await emailjs.send(
        "service_9mku6ro",
        "template_5fely3g",
        templateParams,
        "lTzlwWWUa0erxJSnA"
      );
      alert("Reservation request sent successfully!");
      setName("");
      setPhone("");
      setDate(new Date());
      setGuests("");
    } catch (error) {
      alert("Failed to send reservation request. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.reservationForm}>
      {isFor === "page" ? <ReservationPHeader /> : <ReservationFHeader />}
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Select Date
          <input
            type="date"
            value={date ? date.toISOString().slice(0, 10) : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
            min={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>

        <label>
          Guests
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Reserve now"}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
