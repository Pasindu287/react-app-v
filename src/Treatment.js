import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './Treatments.css';

function Treatment() {
  const navigate = useNavigate();
  const { level } = useParams();

  console.log("Received level:", level);


  const getTreatmentOptions = (level) => {
    switch (level) {
      case 'spider veins':
        return (
          <div>
            <p>Managing spider veins at home primarily involves lifestyle changes and home remedies that may help alleviate symptoms and prevent new spider veins from forming. While these methods may not eliminate existing spider veins completely, they can help reduce their appearance and improve overall vein health. Here's a treatment plan focusing on home-based interventions:</p>
            
            <ul>
              <li><strong>Regular Exercise:</strong> Improve circulation in your legs and strengthen the muscles that help your veins pump blood. Activities like walking, cycling, swimming, and leg exercises can be particularly beneficial.</li>
              <li><strong>Weight Management:</strong> Reduce pressure on your veins, which can exacerbate spider veins. Maintain a healthy weight through a balanced diet and regular exercise.</li>
              <li><strong>Leg Elevation:</strong> Encourage blood flow back towards your heart, reducing pressure in your leg veins. Elevate your legs above the level of your heart for 15-20 minutes, several times a day.</li>
              <li><strong>Compression Stockings:</strong> Support healthy blood flow in your legs. Wear properly fitted compression stockings during the day to help veins move blood more efficiently.</li>
              <li><strong>Avoid Prolonged Sitting or Standing:</strong> Prevent blood from pooling in your leg veins. Take short walking breaks every 30 minutes if you have to sit or stand for long periods.</li>
              <li><strong>Dietary Changes:</strong> Strengthen blood vessels and reduce inflammation. Include high-fiber foods, foods rich in potassium, and flavonoid-rich foods in your diet. Stay hydrated by drinking plenty of water throughout the day.</li>
              <li><strong>Herbal Supplements:</strong> Some herbal supplements are believed to strengthen veins and reduce inflammation. Options include horse chestnut, grape seed extract, and butcher's broom. Consult with a healthcare provider before starting any supplements.</li>
              <li><strong>Skin Care:</strong> Protect your skin, as healthier skin can make spider veins less noticeable. Use sunscreen on your legs when exposed to the sun, keep your skin moisturized, and avoid harsh treatments on areas with spider veins.</li>
              <li><strong>Mindful Clothing Choices:</strong> Avoid restricting blood flow in your legs. Choose loose-fitting clothes and flatter shoes that help tone your calf muscles more effectively.</li>
            </ul>
            
            <p>When you want to get medical treatments:</p>
            
            <ul>
              <li><strong>Sclerotherapy:</strong> This is a common treatment for spider veins where a solution is injected into the veins, causing them to collapse and fade. Multiple treatments may be necessary for optimal results.</li>
              <li><strong>Laser Therapy:</strong> A non-invasive treatment that uses a laser to send bursts of light into the vein, making the vein slowly fade and disappear. It's less effective on very tiny veins.</li>
            </ul>
          </div>
        );
      case 'varicose veins':
        return (
          <div>
          <p>Managing varicose veins at home involves lifestyle changes and home remedies that may help alleviate symptoms and prevent varicose veins from forming, with a focus on alleviating symptoms, improving blood flow, and preventing the condition from worsening. Here’s a tailored plan for varicose veins:</p>
          
          <ul>
            <li><strong>Exercise Regularly:</strong> Boost circulation in your legs, helping the veins move blood back to the heart. Low-impact exercises like walking, cycling, and swimming are particularly beneficial.</li>
            <li><strong>Maintain a Healthy Weight:</strong> Reduce excess pressure on your veins. Adopt a balanced diet and regular exercise regimen to manage your weight effectively.</li>
            <li><strong>Elevate Your Legs:</strong> Facilitate blood flow back toward your heart, relieving pressure on the leg veins. Elevate your legs above heart level for 15-20 minutes, 3-4 times daily.</li>
            <li><strong>Wear Compression Stockings:</strong> Provide support to your veins, helping them move blood more efficiently. Use graduated compression stockings during the day; consult a healthcare professional for the correct type and fit.</li>
            <li><strong>Avoid Prolonged Sitting or Standing:</strong> Prevent blood from pooling in your leg veins. Change positions frequently and take short walking breaks every 30 minutes.</li>
            <li><strong>Opt for a High-Fiber, Low-Salt Diet:</strong> Prevent constipation and reduce swelling in your veins. Include whole grains, vegetables, fruits, and legumes for fiber; limit salty and processed foods to reduce water retention.</li>
            <li><strong>Stay Hydrated:</strong> Improve circulation and vein health. Drink plenty of water throughout the day to maintain good hydration.</li>
            <li><strong>Choose Comfortable Clothing and Footwear:</strong> Avoid constricting blood flow and support muscle pump efficiency. Wear loose-fitting clothes and low-heeled shoes to facilitate calf muscle movement, which aids blood flow.</li>
            <li><strong>Avoid Overheating:</strong> Heat can exacerbate varicose vein symptoms by causing veins to dilate. Prefer cool baths or showers and avoid prolonged exposure to high temperatures when possible.</li>
            <li><strong>Herbal Remedies:</strong> Some herbs are thought to strengthen veins and reduce inflammation. Options include horse chestnut, witch hazel, and grape seed extract. Always consult with a healthcare provider before starting any herbal supplements to ensure they’re appropriate for you.</li>
          </ul>
          
          <p>When you want to get medical treatments:</p>
          
          <ul>
            <li><strong>Lifestyle Adjustments:</strong> Similar to spider veins, lifestyle changes can also benefit those with varicose veins. Elevating the legs, exercising, and wearing compression stockings can help.</li>
            <li><strong>Sclerotherapy:</strong> For varicose veins, a foam version of the sclerosing agent is often used, which can treat larger veins than the liquid form used for spider veins.</li>
            <li><strong>Endovenous Laser Treatment (EVLT):</strong> This involves using a laser fiber inserted into the vein, which emits energy to heat and close the affected vein.</li>
            <li><strong>Radiofrequency Ablation (RFA):</strong> Similar to EVLT, but uses radiofrequency energy to heat and close the veins.</li>
          </ul>
        </div>
        );
      case 'normal legs':
        return <p>No need for any treatment; your legs are not affected by any level of varicose veins.</p>;
      default:
        return <p>Unknown classification level.</p>;
    }
  };
  
  return (
    <div className="Treatments">
      <header className="Treatments-header">
      <h2>Treatment Recommendations</h2>
      <p>This page contains information about treatments for { level }.</p>
      <div className="result">
      <p>{getTreatmentOptions(level)}</p>
      </div>
      <button onClick={() => navigate("/")} className="backButton">Back to Home Page</button>
      </header>
    </div>
  );
}

export default Treatment;
