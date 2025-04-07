//this is a step in choosing one of the following selection items
import { titleize } from "../data/helpers";
  
function Step({ stepNumber, description, values, fields }) {
  return (
    <div id={`step-${stepNumber}`} className="text-start">
      <h2 className="mb-3">
        Step {stepNumber} of 5: {description}
      </h2>

      <ul className="flex gap-10">
        {values.map((item) => (
          <li key={item.id} className="list-none">
            {/* Image */}
            {item.img ? (
              <img src={item.img} className="w-100 h-60" />
            ) : (
              <img
                className="w-60"
                src="https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk="
              />
            )}

            {/* Field values */}
            <ul className="my-3">
              {fields.map((field) => {
                if (field === "img" || field === "id") return null;

                if (field === "colorOptions") {
                  return (
                    <li key={field}>
                      <h4 className="underline">Available Colors:</h4>
                      <ul>
                        {item.colorOptions.map((option, idx) => (
                          <li key={idx}>
                            {option.color} - ${option.price}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={field}>
                    {titleize(field)}: {item[field]}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Step;
