// components/AddressInput.jsx
import PlacesAutocomplete from "react-places-autocomplete";

export default function AddressInput({ value, onChange }) {
  return (
    <PlacesAutocomplete value={value} onChange={onChange} onSelect={onChange}>
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div className="relative w-full">
          <input
            {...getInputProps({
              placeholder: "Enter address",
              className:
                "w-full border border-black p-2 rounded-sm bg-stone-200 md:bg-white",
            })}
          />
          <div className="absolute top-full left-0 w-full z-50 bg-white md:border border-gray-300 rounded mt-1">
            {suggestions.map((suggestion) => {
              const { key, ...rest } = getSuggestionItemProps(suggestion, {
                className: `px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  suggestion.active ? "bg-blue-100" : "bg-white"
                }`,
              });

              return (
                <div key={suggestion.placeId} {...rest}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
