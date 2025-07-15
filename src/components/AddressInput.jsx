import PlacesAutocomplete from "react-places-autocomplete";
import { useDebounce } from "../hooks/useDebounce";

export default function AddressInput({ value, onChange }) {
  const isValidInput = value.trim().length >= 5;
  const debouncedValue = useDebounce(isValidInput ? value : "", 500);


  return (
    <PlacesAutocomplete
      value={debouncedValue}
      onChange={onChange}
      onSelect={onChange}>
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div className="relative w-full">
          <input
            {...getInputProps({
              placeholder: "Enter address",
              className:
                "w-full border border-black p-2 rounded-sm bg-stone-200 md:bg-white dark:bg-zinc-700",
            })}
          />
          <div className="absolute top-full left-0 w-full z-50 bg-white md:border border-gray-300 dark:bg-black dark:border-gray-900 dark:text-black rounded mt-1">
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
