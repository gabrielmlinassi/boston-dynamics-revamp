import NextLink from "next/link";

const Logo = () => {
  return (
    <div className="font-NewYork text-3xl font-semibold">
      <NextLink href="/">
        <a>
          <span className="text-blue-400">Boston</span>
          <span className="text-black-400">Hypnosis</span>
        </a>
      </NextLink>
    </div>
  );
};

export default Logo;
