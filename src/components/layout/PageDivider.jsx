import PropTypes from "prop-types";
import Button from "./Button";

export default function PageDivider({
  imageUrl,
  title,
  description,
  href,
  CTA,
  customClass,
}) {
  return (
    <div
      className="relative w-full my-5 lg:my-15 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* overlay fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, black 0%, transparent 10%, transparent 30%, black 100%)",
        }}></div>

      {/* content layer */}
      <div className="w-full relative z-10 bg-black/75 flex flex-col items-center justify-center py-16 px-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {/* allow rich JSX for description */}
        <div className={customClass}>{description}</div>
        {CTA && <Button href={href} CTA={CTA} customClass="mt-3"/>}
      </div>
    </div>
  );
}

PageDivider.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  CTA: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};
