import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./reserve.module.css"; // Import your CSS module

import "react-datepicker/dist/react-datepicker.css";
import ReservationPHeader from "./reservationPHeader/ReservationPHeader";
import ReservationFHeader from "./reservationFHeader/ReservationFHeader";
import { useTranslation } from "react-i18next";

type Props = {
  isFor: string;
};
const ReservationForm = (props: Props) => {
  const { isFor } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name,
      phone,
      date: date ? date.toDateString() : "",
      time,
      guests,
    };
    try {
      await emailjs.send(
        "service_t9atz5r",
        "template_1v31nnf",
        templateParams,
        "lTzlwWWUa0erxJSnA"
      );
      alert("Reservation request sent successfully!");
      setName("");
      setPhone("");
      setDate(new Date());
      setGuests("");
      setTime("");
    } catch (error) {
      alert("Failed to send reservation request. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { t } = useTranslation();

  return (
    <div className={styles.reservationForm}>
      {isFor === "page" ? <ReservationPHeader /> : <ReservationFHeader />}
      <form onSubmit={handleSubmit}>
        <label>
          {t("reservation.name")}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          {t("reservation.phone")}
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          {t("reservation.date")}
          <input
            type="date"
            value={date ? date.toISOString().slice(0, 10) : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
            min={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>
        <label>
          {t("reservation.time")}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <label>
          {t("reservation.guest")}
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
