import type { PropsWithChildren } from "react";
import stylesUrl from "./styles.css?url";

export function Document({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <html lang="en" className="scheme-light-dark [scrollbar-gutter:stable]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>RedwoodSDK Starter</title>
        <link rel="modulepreload" href="/src/client.tsx" />
        <link rel="stylesheet" href={stylesUrl} />
      </head>
      <body>
        <div id="root">{children}</div>
        <script>import("/src/client.tsx")</script>
      </body>
    </html>
  );
}
