import Image from "next/image";
import { css } from "../../styled-system/css";

const card = css({
  padding: "1rem 1.2rem",
  borderRadius: "xl",
  transition: "background 200ms, border 200ms",
  borderWidth: "thin",
  borderColor: "transparent",
  display: "block",

  sm: {
    padding: "1rem 2.5rem",

    "& h2": {
      fontSize: "2xl",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
  },

  "& span": {
    display: "inline-block",
    transition: "transform 200ms",
  },

  "& h2": {
    fontWeight: 600,
    marginBottom: "0.7rem",
  },

  "& p": {
    margin: 0,
    opacity: 0.5,
    fontSize: "sm",
    lineHeight: 1.5,
    maxW: "30ch",
  },

  _hover: {
    background: "gray.100",
    borderColor: "gray.300",
    borderStyle: "solid",

    _osDark: {
      borderColor: "neutral.700",
      background: "neutral.950",
    },
  },
  "&:hover span": {
    transform: "translateX(4px)",
  },

  _motionReduce: {
    "&:hover span": {
      transform: "none",
    },
  },
});

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: "24",
        minH: "screen",
      })}
    >
      <div
        className={css({
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "sm",
          maxWidth: "6xl",
          width: "full",
          zIndex: 10,
          fontFamily: "mono",

          lg: {
            display: "flex",
          },
        })}
      >
        <p
          className={css({
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            w: "full",
            justifyContent: "center",
            borderBottomWidth: "thin",
            borderColor: "gray.300",
            bgGradient: "to-b",
            gradientFrom: "zinc.200",
            pb: "6",
            pt: "8",
            backdropBlur: "2xl",
            background: "rgba(var(--callout-rgb), 0.5)",

            _osDark: {
              borderColor: "neutral.800",
            },

            lg: {
              position: "relative",
              w: "auto",
              rounded: "xl",
              borderWidth: "thin",
              bg: "gray.200",
              p: "4",

              _osDark: {
                bg: "rgba(var(--callout-rgb), 0.5)",
              },
            },
          })}
        >
          Get started by editing&nbsp;
          <code className={css({ fontWeight: 700, fontFamily: "mono" })}>
            src/app/page.tsx
          </code>
        </p>
        <div
          className={css({
            position: "fixed",
            bottom: "0",
            left: "0",
            display: "flex",
            h: "48",
            w: "full",
            alignItems: "end",
            justifyContent: "center",
            bgGradient: "to-t",
            gradientFrom: "white",
            gradientVia: "white",
            _osDark: {
              gradientFrom: "black",
              gradientVia: "black",
            },

            lg: {
              position: "static",
              h: "auto",
              w: "auto",
              bg: "none",
            },
          })}
        >
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              pointerEvents: "none",
              display: "flex",
              placeItems: "center",
              gap: "2",
              p: "8",
              lg: {
                pointerEvents: "auto",
                p: "0",
              },
            })}
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={css({
                _osDark: {
                  filter: "invert(1)",
                },
              })}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          position: "relative",
          padding: "4rem 0",

          _before: {
            borderRadius: "50%",
            width: "480px",
            height: "300px",
            translateX: "-1/2",
            zIndex: -1,
            bgGradient: "gradient-radial",
            gradientFrom: "white",
            gradientTo: "transparent",
            lg: {
              h: "360px",
            },
            _osDark: {
              opacity: "10",
              bgGradient: "to-br",
              gradientFrom: "transparent",
              gradientTo: "blue.700",
            },
          },

          _after: {
            width: "240px",
            height: "180px",
            zIndex: -20,
            translateX: "1/3",
            bgGradient: "gradient-conic",
            gradientFrom: "sky.200",
            gradientVia: "blue.200",
            _osDark: {
              opacity: "40",
              gradientFrom: "sky.900",
              gradientVia: "blue.700",
            },
          },

          "&::before, &::after": {
            bottom: "-50%",
            content: "''",
            left: "50%",
            position: "absolute",
            filter: "blur(45px)",
            transform: "translateZ(0)",
          },
        })}
      >
        <Image
          className={css({
            _osDark: {
              filter: "invert(1) drop-shadow(0 0 0.3rem #ffffff70)",
            },
            position: "relative",
          })}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div
        className={css({
          display: "grid",
          marginBottom: "32",
          textAlign: "center",

          lg: {
            gridTemplateColumns: "repeat(4, minmax(25%, auto))",
            textAlign: "left",
            mb: "0",
          },
        })}
      >
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
