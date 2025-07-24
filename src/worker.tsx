import { index, render } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";
import { Document } from "~/app/document";
import { setCommonHeaders } from "~/app/headers";
import { HomePage } from "~/app/pages/home";

export interface AppContext {}

const app = defineApp([
  setCommonHeaders(),
  render(Document, [index([HomePage])]),
]);

export default app;
