import Count from "@/common/count";

const counter_data = [
  { end: 50, suffix: "K+", label: "Applications Processed" },
  { end: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { end: 15, suffix: "+", label: "Years of Trusted Service" },
  { end: 80, suffix: "+", label: "Dedicated Team Members" },
];


export default function AboutCounter() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="azzle-counter-column">
            {counter_data.map((item, i) => (
              <div key={i} className="azzle-counter-item azzle-counter-item2">
                <h2 className="azzle-counter-data azzle-counter-data2" aria-label="2K+">
                  <Count number={item.end} text={item.suffix} />
                </h2>
                <p>{item.label}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}
