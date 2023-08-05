import Typewriter from "typewriter-effect";

export default function TypewriterText({ text }) {
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
      }}
    />
  );
}
