"use client";

import Step from "@/components/Step.jsx";
import { borderOptions, paverOptions, sizeOptions } from "@/data/paverInfo.js";
import { useState } from "react";

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
          values={borderOptions.map(({ id, style, price }) => ({
            id,
            style,
            price,
          }))}
          fields={["id", "style", "price"]}
        />
        <Step
          stepNumber={4}
          description={"Size Selection"}
          values={sizeOptions.map(({ id, size, price }) => ({
            id,
            size,
            price,
          }))}
          fields={["id", "size", "price"]}
        />
        <Step stepNumber={5} description={"Add-Ons Selection (optional)"} />
      </div>
    </>
  );
}

export default PricingCalculator;
