"use client"

import { useState } from "react";
import { paverOptions, borderOptions, sizeOptions } from "@/data/paverInfo.js";
import Step from "@/components/Step.jsx";

function PricingCalculator() {
  // const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);

  return (
    <>
      {/* <ProgressBar steps={5} /> */}

      <div id="steps-container" className="mt-5 flex flex-col gap-10">
        <Step
          stepNumber={1}
          description={"Paver Selection"}
          values={paverOptions.map(({ id, name, type, img, use, price }) => ({
            id,
            name,
            img,
            type,
            use,
            price,
          }))}
          fields={["id", "name", "img", "type", "use", "price"]}
        />{" "}
        {/* id, name, type, use, price */}
        <Step
          stepNumber={2}
          description={"Color Selection"}
          values={paverOptions.map(({ id, colorOptions }) => ({
            id,
            colorOptions,
          }))}
          fields={["id", "colorOptions"]}
        />
        <Step
          stepNumber={3}
          description={"Border Selection"}
          values={borderOptions.map(({ style, price }) => ({
            style,
            price,
          }))}
          fields={["style", "price"]}
        />
        <Step
          stepNumber={4}
          description={"Size Selection"}
          values={sizeOptions.map(({ size, price }) => ({
            size,
            price,
          }))}
          fields={["size", "price"]}
        />
        <Step
          stepNumber={5}
          description={"Add-Ons Selection (optional)"}
        
        />
      </div>
    </>
  );
}

export default PricingCalculator;
