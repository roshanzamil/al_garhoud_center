
"use client";
import React, { useState, useEffect } from "react";

interface ServiceStep {
  id: string;
  label: string;
  inside: number;
  outside: number;
  checked: boolean;
  group?: string;
}

const initialSteps: ServiceStep[] = [
  { id: "offer_letter", label: "Offer Letter, Work Permit, Contract", inside: 279.00, outside: 279.00, checked: true },
  { id: "insurance", label: "Insurance (+40 AED)", inside: 189.00, outside: 189.00, checked: true },
  { id: "labor_1", label: "Labor Payment - Category 1", inside: 355.00, outside: 355.00, checked: false, group: "labor" },
  { id: "labor_2", label: "Labor Payment - Category 2", inside: 1285.00, outside: 1285.00, checked: true, group: "labor" },
  { id: "labor_3", label: "Labor Payment - Category 3", inside: 3550.77, outside: 3550.77, checked: false, group: "labor" },
  { id: "entry_permit", label: "Entry Permit", inside: 1125.65, outside: 475.65, checked: true },
  { id: "change_status", label: "Change Status", inside: 675.65, outside: 0.00, checked: true },
  { id: "emirates_id", label: "Emirates ID Typing", inside: 386.00, outside: 386.00, checked: true },
  { id: "medical_test", label: "Medical Test - DHA", inside: 322.50, outside: 322.50, checked: true },
  { id: "visa_stamping", label: "Visa Stamping", inside: 547.00, outside: 547.00, checked: true },
  { id: "contract_submission", label: "Contract Submission", inside: 83.00, outside: 83.00, checked: true },
];

export default function AmerArea() {
  const [steps, setSteps] = useState<ServiceStep[]>(initialSteps);
  const [totalInside, setTotalInside] = useState(0);
  const [totalOutside, setTotalOutside] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    let insideSum = 0;
    let outsideSum = 0;
    steps.forEach((step) => {
      if (step.checked) {
        insideSum += step.inside;
        outsideSum += step.outside;
      }
    });
    setTotalInside(insideSum);
    setTotalOutside(outsideSum);
  }, [steps]);

  const handleCheckboxChange = (id: string) => {
    setSteps((prevSteps) => {
      const clickedStep = prevSteps.find((step) => step.id === id);
      if (!clickedStep) return prevSteps;

      // Handle radio-button-like behavior for grouped items
      if (clickedStep.group) {
        // If the clicked item is already checked, do nothing (or allow unchecking if desired)
        if (clickedStep.checked) {
             return prevSteps.map((step) =>
                step.id === id ? { ...step, checked: false } : step
             );
        }
        const newSteps = prevSteps.map((step) => {
          if (step.group === clickedStep.group) {
            return { ...step, checked: step.id === id };
          }
          return step;
        });
        return newSteps;
      } else {
        // Handle normal checkbox toggle
        return prevSteps.map((step) =>
          step.id === id ? { ...step, checked: !step.checked } : step
        );
      }
    });
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-850" data-aos="fade-up">
            <h2>Amer Services Cost Calculator</h2>
        </div>
        <div className="cost-calculator-container" data-aos="fade-up" data-aos-delay="200">
          <div className="cost-calculator-main">
            <table className="cost-calculator-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Inside (AED)</th>
                  <th>Outside (AED)</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step) => (
                  <tr key={step.id}>
                    <td>
                      <label className="cost-calculator-checkbox">
                        <input
                          type="checkbox"
                          checked={step.checked}
                          onChange={() => handleCheckboxChange(step.id)}
                        />
                        <span className="checkmark"></span>
                        {step.label}
                      </label>
                    </td>
                    <td>{step.inside.toFixed(2)}</td>
                    <td>{step.outside.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cost-calculator-sidebar">
            <div className="cost-totals">
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== 'inside' ? 'dimmed' : ''}`}>
                <span className="cost-total-amount">{totalInside.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className="cost-total-label">Total - Inside (AED)</span>
              </div>
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== 'outside' ? 'dimmed' : ''}`}>
                <span className="cost-total-amount">{totalOutside.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className="cost-total-label">Total - Outside (AED)</span>
              </div>
            </div>
            <div className="trial-booking-form" style={{border: 'none', padding: '0'}}>
              <form>
                <div className="trial-form-field">
                  <input type="text" placeholder="Full Name *" required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" placeholder="Phone Number *" required/>
                </div>
                <div className="trial-form-field">
                  <input type="email" placeholder="Email Address *" required />
                </div>
                <div className="trial-form-field">
                  <select required value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">--Please Choose An Option--</option>
                    <option value="inside">Inside Country</option>
                    <option value="outside">Outside Country</option>
                  </select>
                </div>
                <button type="submit" className="trial-submit-btn">Submit</button>
              </form>
              <p className="cost-calculator-note">
                Note: In the event that the labor payment is selected under Category 2, but the actual classification corresponds to Category 1 or Category 3, the applicable charges may be subject to adjustment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
